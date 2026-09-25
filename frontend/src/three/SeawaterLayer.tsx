import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

interface SeawaterLayerProps {
  lowBandwidth?: boolean;
  showSurrounding?: boolean;
}

export const SeawaterLayer: React.FC<SeawaterLayerProps> = ({
  lowBandwidth = false,
  showSurrounding = true
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const shaderMaterialRef = useRef<THREE.ShaderMaterial | null>(null);

  // Model bounding dimensions: width 26 (x: -13 to +13), height 16 (y: -8 to +8), depth 26 (z: -13 to +13)
  const innerR = 13.0;
  const outerR = 58.0;
  const surfaceY = 8.0;
  const seabedY = -8.0;

  // Custom Gerstner Physical Ocean Wave Shader
  const shaderData = useMemo(() => {
    const uniforms = {
      uTime: { value: 0 },
      uColorSurface: { value: new THREE.Color(isDark ? '#0284c7' : '#0ea5e9') },
      uColorDeep: { value: new THREE.Color(isDark ? '#02182b' : '#035388') },
      uColorFoam: { value: new THREE.Color(isDark ? '#38bdf8' : '#ffffff') },
      uSunDirection: { value: new THREE.Vector3(25, 45, 20).normalize() },
      uIsDark: { value: isDark ? 1.0 : 0.0 }
    };

    const vertexShader = `
      uniform float uTime;
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying float vElevation;
      varying float vFoamFactor;

      // Real Physical Gerstner Trochoidal Wave Function
      // Returns horizontal (x, z) pinch and vertical (y) displacement
      vec3 gerstnerWave(
        vec2 dir,
        float amp,
        float len,
        float spd,
        float steep,
        vec2 pos,
        float time,
        inout vec3 tangent,
        inout vec3 binormal
      ) {
        float k = 6.2831853 / len;
        float c = sqrt(9.8 / k) * spd;
        vec2 d = normalize(dir);
        float f = k * (dot(d, pos) - c * time);
        float q = steep / (k * amp * 4.0);

        float cosF = cos(f);
        float sinF = sin(f);

        // Accumulate tangent and binormal derivatives for accurate analytical normals
        tangent += vec3(
          -d.x * d.x * (steep * sinF),
          d.x * (k * amp * cosF),
          -d.x * d.y * (steep * sinF)
        );

        binormal += vec3(
          -d.x * d.y * (steep * sinF),
          d.y * (k * amp * cosF),
          -d.y * d.y * (steep * sinF)
        );

        return vec3(
          q * amp * d.x * cosF,
          amp * sinF,
          q * amp * d.y * cosF
        );
      }

      void main() {
        vUv = uv;
        vec4 initialWorldPos = modelMatrix * vec4(position, 1.0);
        vec2 pos = initialWorldPos.xz;

        vec3 tangent = vec3(1.0, 0.0, 0.0);
        vec3 binormal = vec3(0.0, 0.0, 1.0);
        vec3 displacement = vec3(0.0);

        // 4 Harmonic Gerstner Wave Octaves (Dominant Indian Ocean monsoon swell + cross seas + wind ripples)
        // 1. Primary long swell
        displacement += gerstnerWave(vec2(0.707, 0.707), 0.22, 18.0, 1.15, 0.38, pos, uTime, tangent, binormal);
        // 2. Secondary transverse swell
        displacement += gerstnerWave(vec2(-0.55, 0.83), 0.12, 11.5, 1.35, 0.32, pos, uTime, tangent, binormal);
        // 3. Directional wind chop
        displacement += gerstnerWave(vec2(0.88, -0.45), 0.065, 6.2, 1.65, 0.28, pos, uTime, tangent, binormal);
        // 4. Fine capillary ripples
        displacement += gerstnerWave(vec2(-0.35, -0.93), 0.025, 3.4, 2.20, 0.22, pos, uTime, tangent, binormal);

        vec4 displacedWorldPos = initialWorldPos;
        displacedWorldPos.x += displacement.x;
        displacedWorldPos.y += displacement.y;
        displacedWorldPos.z += displacement.z;

        vWorldPosition = displacedWorldPos.xyz;
        vElevation = displacement.y;

        // Analytical wave normal
        vNormal = normalize(cross(binormal, tangent));

        // Crest compression foam factor (steep peaking crests generate white froth)
        vFoamFactor = smoothstep(0.18, 0.36, displacement.y);

        gl_Position = projectionMatrix * viewMatrix * displacedWorldPos;
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec3 uColorSurface;
      uniform vec3 uColorDeep;
      uniform vec3 uColorFoam;
      uniform vec3 uSunDirection;
      uniform float uIsDark;

      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying float vElevation;
      varying float vFoamFactor;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);

        // Fresnel term: grazing views reflect sky, top-down views allow peering into data
        float cosTheta = max(dot(viewDir, normal), 0.0);
        float fresnel = pow(1.0 - cosTheta, 3.5);

        // Sun specular glint
        vec3 lightDir = normalize(uSunDirection);
        vec3 halfVector = normalize(lightDir + viewDir);
        float specIntensity = pow(max(dot(normal, halfVector), 0.0), 36.0);

        // Diffuse wrap lighting
        float diffuse = max(dot(normal, lightDir) * 0.5 + 0.5, 0.0);

        // Color interpolation based on wave elevation (troughs deep, peaks vibrant)
        float waveMix = smoothstep(-0.25, 0.32, vElevation);
        vec3 baseWaterColor = mix(uColorDeep, uColorSurface, waveMix);
        baseWaterColor *= (0.75 + 0.25 * diffuse);

        // Determine if fragment is inside model domain [-13, 13] or surrounding ocean
        float distToInner = max(abs(vWorldPosition.x) - 13.0, abs(vWorldPosition.z) - 13.0);
        bool isInsideModel = distToInner <= 0.0;

        // Foam blending on wave peaks + perimeter contact boundary
        float perimeterSeam = smoothstep(0.5, 0.0, abs(distToInner));
        float totalFoam = clamp(vFoamFactor + perimeterSeam * 0.45, 0.0, 1.0);

        vec3 finalColor = mix(baseWaterColor, uColorFoam, totalFoam * 0.65);
        // Add sparkling sun glint
        finalColor += uColorFoam * specIntensity * 0.85;
        // Add fresnel sky shine
        finalColor += (uIsDark > 0.5 ? vec3(0.0, 0.4, 0.8) : vec3(0.4, 0.7, 1.0)) * fresnel * 0.4;

        float distFromCenter = length(vWorldPosition.xz);
        float horizonFade = smoothstep(58.0, 42.0, distFromCenter);
        float alpha = clamp(horizonFade * (uIsDark > 0.5 ? 0.75 : 0.68) + totalFoam * 0.25, 0.2, 0.88);

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    return { material: mat, uniforms };
  }, [isDark]);

  shaderMaterialRef.current = shaderData.material;

  // Real-time animation clock update
  useFrame((state) => {
    if (shaderData.uniforms) {
      shaderData.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  // Calculate coordinates for the 4 surrounding strips
  const stripDepth = outerR - innerR; // 45.0
  const fullWidth = outerR * 2;       // 116.0
  const centerOffset = innerR + stripDepth / 2; // 35.5

  const stripSegX = lowBandwidth ? 24 : 44;
  const stripSegZ = lowBandwidth ? 14 : 24;

  // Boundary perimeter seam at y = 8.0 connecting the model domain to the open sea
  const seamPoints = useMemo(() => {
    return [
      new THREE.Vector3(-innerR, surfaceY + 0.03, -innerR),
      new THREE.Vector3(innerR, surfaceY + 0.03, -innerR),
      new THREE.Vector3(innerR, surfaceY + 0.03, innerR),
      new THREE.Vector3(-innerR, surfaceY + 0.03, innerR),
      new THREE.Vector3(-innerR, surfaceY + 0.03, -innerR)
    ];
  }, [innerR, surfaceY]);

  const seamGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(seamPoints);
  }, [seamPoints]);

  return (
    <group name="real-waves-ocean-system">
      {/* ═══════════════════════════════════════════════════════════════════
          SURROUNDING REAL GERSTNER OCEAN WAVES
          Connected directly to the 4 borders of the model (no water upon model)
         ═══════════════════════════════════════════════════════════════════ */}
      {showSurrounding && (
        <>
          {/* North Seawater Strip */}
          <mesh
            position={[0, surfaceY, -centerOffset]}
            rotation={[-Math.PI / 2, 0, 0]}
            material={shaderData.material}
          >
            <planeGeometry args={[fullWidth, stripDepth, stripSegX, stripSegZ]} />
          </mesh>

          {/* South Seawater Strip */}
          <mesh
            position={[0, surfaceY, centerOffset]}
            rotation={[-Math.PI / 2, 0, 0]}
            material={shaderData.material}
          >
            <planeGeometry args={[fullWidth, stripDepth, stripSegX, stripSegZ]} />
          </mesh>

          {/* East Seawater Strip */}
          <mesh
            position={[centerOffset, surfaceY, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            material={shaderData.material}
          >
            <planeGeometry args={[stripDepth, innerR * 2, stripSegZ, stripSegZ]} />
          </mesh>

          {/* West Seawater Strip */}
          <mesh
            position={[-centerOffset, surfaceY, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            material={shaderData.material}
          >
            <planeGeometry args={[stripDepth, innerR * 2, stripSegZ, stripSegZ]} />
          </mesh>

          {/* 3. Luminous Model Perimeter Interface Trim */}
          <lineLoop geometry={seamGeometry}>
            <lineBasicMaterial
              color={isDark ? '#00f0ff' : '#0284c7'}
              linewidth={2}
              transparent
              opacity={isDark ? 0.85 : 0.75}
            />
          </lineLoop>

          {/* 4. Surrounding Bathymetric Deep Seabed Floor (at y = -8.0) */}
          <mesh position={[0, seabedY, -centerOffset]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[fullWidth, stripDepth, 16, 8]} />
            <meshStandardMaterial
              color={isDark ? '#050f1e' : '#94a3b8'}
              roughness={0.95}
              metalness={0.1}
              opacity={0.8}
              transparent
            />
          </mesh>

          <mesh position={[0, seabedY, centerOffset]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[fullWidth, stripDepth, 16, 8]} />
            <meshStandardMaterial
              color={isDark ? '#050f1e' : '#94a3b8'}
              roughness={0.95}
              metalness={0.1}
              opacity={0.8}
              transparent
            />
          </mesh>

          <mesh position={[centerOffset, seabedY, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[stripDepth, innerR * 2, 8, 8]} />
            <meshStandardMaterial
              color={isDark ? '#050f1e' : '#94a3b8'}
              roughness={0.95}
              metalness={0.1}
              opacity={0.8}
              transparent
            />
          </mesh>

          <mesh position={[-centerOffset, seabedY, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[stripDepth, innerR * 2, 8, 8]} />
            <meshStandardMaterial
              color={isDark ? '#050f1e' : '#94a3b8'}
              roughness={0.95}
              metalness={0.1}
              opacity={0.8}
              transparent
            />
          </mesh>

          {/* 5. Deep Ocean Water Outer Curtains */}
          <mesh position={[0, 0, -outerR]}>
            <planeGeometry args={[fullWidth, 16]} />
            <meshBasicMaterial
              color={isDark ? '#02182b' : '#035388'}
              transparent
              opacity={isDark ? 0.35 : 0.25}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>

          <mesh position={[0, 0, outerR]}>
            <planeGeometry args={[fullWidth, 16]} />
            <meshBasicMaterial
              color={isDark ? '#02182b' : '#035388'}
              transparent
              opacity={isDark ? 0.35 : 0.25}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>

          <mesh position={[outerR, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[fullWidth, 16]} />
            <meshBasicMaterial
              color={isDark ? '#02182b' : '#035388'}
              transparent
              opacity={isDark ? 0.35 : 0.25}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>

          <mesh position={[-outerR, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[fullWidth, 16]} />
            <meshBasicMaterial
              color={isDark ? '#02182b' : '#035388'}
              transparent
              opacity={isDark ? 0.35 : 0.25}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>
        </>
      )}
    </group>
  );
};
