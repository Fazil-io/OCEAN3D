import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

interface SeawaterLayerProps {
  lowBandwidth?: boolean;
}

export const SeawaterLayer: React.FC<SeawaterLayerProps> = ({ lowBandwidth = false }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const waterMaterialRef = useRef<THREE.ShaderMaterial | null>(null);

  // Model bounding dimensions: width 26 (x: -13 to +13), height 16 (y: -8 to +8), depth 26 (z: -13 to +13)
  const innerR = 13.0;
  const outerR = 58.0;
  const surfaceY = 8.0;
  const seabedY = -8.0;

  // Custom GLSL Shader for realistic animated ocean waves surrounding the model
  const shaderData = useMemo(() => {
    const uniforms = {
      uTime: { value: 0 },
      uColorSurface: { value: new THREE.Color(isDark ? '#0284c7' : '#0ea5e9') },
      uColorDeep: { value: new THREE.Color(isDark ? '#02182b' : '#0369a1') },
      uColorFoam: { value: new THREE.Color(isDark ? '#38bdf8' : '#e0f2fe') },
      uSunDirection: { value: new THREE.Vector3(20, 40, 20).normalize() },
      uIsDark: { value: isDark ? 1.0 : 0.0 }
    };

    const vertexShader = `
      uniform float uTime;
      varying vec3 vWorldPosition;
      varying vec2 vUv;
      varying float vElevation;

      void main() {
        vUv = uv;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);

        // Distance from the model boundary (x = +-13, z = +-13)
        float distToInner = max(abs(worldPos.x) - 13.0, abs(worldPos.z) - 13.0);
        
        // Exact 0 displacement at the seam (distToInner = 0) so it connects 100% flush with the model
        float edgeBlend = clamp(distToInner / 3.5, 0.0, 1.0);

        // Natural oceanic multi-harmonic wave displacement
        float wave = sin(worldPos.x * 0.22 + uTime * 1.3) * 0.14
                   + cos(worldPos.z * 0.22 + uTime * 1.1) * 0.14
                   + sin((worldPos.x + worldPos.z) * 0.35 + uTime * 1.8) * 0.07;

        worldPos.y += wave * edgeBlend;
        vElevation = wave * edgeBlend;
        vWorldPosition = worldPos.xyz;

        gl_Position = projectionMatrix * viewMatrix * worldPos;
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
      varying vec2 vUv;
      varying float vElevation;

      void main() {
        // Approximate wave normal from derivatives
        vec3 dX = dFdx(vWorldPosition);
        vec3 dY = dFdy(vWorldPosition);
        vec3 normal = normalize(cross(dX, dY));

        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);

        // Sunlight reflection
        vec3 lightDir = normalize(uSunDirection);
        vec3 halfVector = normalize(lightDir + viewDir);
        float specular = pow(max(dot(normal, halfVector), 0.0), 28.0);

        // Contact seam foam right along the connection edge to the model
        float distToInner = max(abs(vWorldPosition.x) - 13.0, abs(vWorldPosition.z) - 13.0);
        float seamFoam = smoothstep(0.9, 0.0, distToInner);

        // Water color blending with wave elevation and depth
        vec3 waterColor = mix(uColorDeep, uColorSurface, vElevation * 2.0 + 0.55);
        waterColor = mix(waterColor, uColorFoam, seamFoam * 0.35 + specular * 0.65 + fresnel * 0.3);

        // Soft outer horizon fade
        float distFromCenter = length(vWorldPosition.xz);
        float horizonFade = smoothstep(58.0, 42.0, distFromCenter);
        float baseAlpha = uIsDark > 0.5 ? 0.68 : 0.62;
        float alpha = clamp(horizonFade * baseAlpha + seamFoam * 0.25, 0.2, 0.85);

        gl_FragColor = vec4(waterColor, alpha);
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

  waterMaterialRef.current = shaderData.material;

  // Animate wave motion continuously via useFrame
  useFrame((state) => {
    if (shaderData.uniforms) {
      shaderData.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  // Calculate the 4 planar strips around the central [26 x 26] model box
  // North: x in [-outerR, outerR], z in [-outerR, -innerR]
  // South: x in [-outerR, outerR], z in [innerR, outerR]
  // East:  x in [innerR, outerR],  z in [-innerR, innerR]
  // West:  x in [-outerR, -innerR], z in [-innerR, innerR]
  const stripDepth = outerR - innerR; // 45.0
  const fullWidth = outerR * 2;       // 116.0
  const centerOffset = innerR + stripDepth / 2; // 35.5

  const segX = lowBandwidth ? 20 : 36;
  const segZ = lowBandwidth ? 12 : 20;

  // Seamless connection rim border line along the perimeter of the model (at y = 8.0)
  const seamPoints = useMemo(() => {
    return [
      new THREE.Vector3(-innerR, surfaceY + 0.02, -innerR),
      new THREE.Vector3(innerR, surfaceY + 0.02, -innerR),
      new THREE.Vector3(innerR, surfaceY + 0.02, innerR),
      new THREE.Vector3(-innerR, surfaceY + 0.02, innerR),
      new THREE.Vector3(-innerR, surfaceY + 0.02, -innerR)
    ];
  }, [innerR, surfaceY]);

  const seamGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry().setFromPoints(seamPoints);
    return geom;
  }, [seamPoints]);

  return (
    <group name="seawater-layer">
      {/* ── 1. North Seawater Surface Strip ────────────────── */}
      <mesh
        position={[0, surfaceY, -centerOffset]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={shaderData.material}
      >
        <planeGeometry args={[fullWidth, stripDepth, segX, segZ]} />
      </mesh>

      {/* ── 2. South Seawater Surface Strip ────────────────── */}
      <mesh
        position={[0, surfaceY, centerOffset]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={shaderData.material}
      >
        <planeGeometry args={[fullWidth, stripDepth, segX, segZ]} />
      </mesh>

      {/* ── 3. East Seawater Surface Strip ─────────────────── */}
      <mesh
        position={[centerOffset, surfaceY, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={shaderData.material}
      >
        <planeGeometry args={[stripDepth, innerR * 2, segZ, segZ]} />
      </mesh>

      {/* ── 4. West Seawater Surface Strip ─────────────────── */}
      <mesh
        position={[-centerOffset, surfaceY, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={shaderData.material}
      >
        <planeGeometry args={[stripDepth, innerR * 2, segZ, segZ]} />
      </mesh>

      {/* ── 5. Connection Rim Line (Highlighting Model-to-Ocean interface) ── */}
      <lineLoop geometry={seamGeometry}>
        <lineBasicMaterial
          color={isDark ? '#00f0ff' : '#0284c7'}
          linewidth={2}
          transparent
          opacity={isDark ? 0.85 : 0.75}
        />
      </lineLoop>

      {/* ── 6. Surrounding Ocean Floor / Seabed Extension (at y = -8.0) ── */}
      {/* North Bed */}
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

      {/* South Bed */}
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

      {/* East Bed */}
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

      {/* West Bed */}
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

      {/* ── 7. Surrounding Deep Water Column / Skirt Walls ── */}
      {/* Outer North Curtain */}
      <mesh position={[0, 0, -outerR]}>
        <planeGeometry args={[fullWidth, 16]} />
        <meshBasicMaterial
          color={isDark ? '#02182b' : '#0369a1'}
          transparent
          opacity={isDark ? 0.35 : 0.25}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Outer South Curtain */}
      <mesh position={[0, 0, outerR]}>
        <planeGeometry args={[fullWidth, 16]} />
        <meshBasicMaterial
          color={isDark ? '#02182b' : '#0369a1'}
          transparent
          opacity={isDark ? 0.35 : 0.25}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Outer East Curtain */}
      <mesh position={[outerR, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[fullWidth, 16]} />
        <meshBasicMaterial
          color={isDark ? '#02182b' : '#0369a1'}
          transparent
          opacity={isDark ? 0.35 : 0.25}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Outer West Curtain */}
      <mesh position={[-outerR, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[fullWidth, 16]} />
        <meshBasicMaterial
          color={isDark ? '#02182b' : '#0369a1'}
          transparent
          opacity={isDark ? 0.35 : 0.25}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};
