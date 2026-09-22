import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { CurrentVectorField } from '../types';

interface CurrentsLayerProps {
  currents: CurrentVectorField;
  boxSize: { width: number; height: number; depth: number };
  verticalExag: number;
  bounds: { lat_min: number; lat_max: number; lon_min: number; lon_max: number };
  lowBandwidth: boolean;
}

export const CurrentsLayer: React.FC<CurrentsLayerProps> = ({
  currents,
  boxSize,
  verticalExag,
  bounds,
  lowBandwidth
}) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Generate composite Arrow Geometry (shaft cylinder + cone head)
  // Made larger and sharper for high-visibility ocean flow visualization
  const arrowGeometry = useMemo(() => {
    const cone = new THREE.ConeGeometry(0.28, 0.65, 8);
    cone.rotateX(Math.PI / 2);
    cone.translate(0, 0, 0.48);

    const cylinder = new THREE.CylinderGeometry(0.09, 0.09, 0.70, 8);
    cylinder.rotateX(Math.PI / 2);
    cylinder.translate(0, 0, 0);

    const merged = new THREE.BufferGeometry();
    const conePos = cone.attributes.position.array;
    const cylPos = cylinder.attributes.position.array;
    const combinedPos = new Float32Array(conePos.length + cylPos.length);
    combinedPos.set(conePos, 0);
    combinedPos.set(cylPos, conePos.length);

    merged.setAttribute('position', new THREE.BufferAttribute(combinedPos, 3));
    merged.computeVertexNormals();
    return merged;
  }, []);

  const { count, maxSpeed, basePositions, rotations, speeds } = useMemo(() => {
    const rawSeeds = currents.particles || [];
    const step = lowBandwidth ? 2 : 1;
    const filtered = rawSeeds.filter((_, idx) => idx % step === 0);
    const n = filtered.length;

    const baseP = new Float32Array(n * 3);
    const rots = new Float32Array(n);
    const spds = new Float32Array(n);

    const maxSpd = currents.max_speed || 1.2;
    // Elevate slightly (+0.3) so arrows float clearly above the slice layer texture
    const yPos = 8.0 - (currents.depth / 1500.0) * 16.0 + 0.3;

    filtered.forEach((s, i) => {
      const normX = (s.lon - bounds.lon_min) / (bounds.lon_max - bounds.lon_min) - 0.5;
      const normZ = (s.lat - bounds.lat_min) / (bounds.lat_max - bounds.lat_min) - 0.5;

      const x = normX * boxSize.width;
      const y = yPos;
      const z = -normZ * boxSize.depth;

      baseP[i * 3] = x;
      baseP[i * 3 + 1] = y;
      baseP[i * 3 + 2] = z;

      spds[i] = s.speed;
      rots[i] = Math.atan2(s.u, -s.v);
    });

    return {
      count: n,
      maxSpeed: maxSpd,
      basePositions: baseP,
      rotations: rots,
      speeds: spds
    };
  }, [currents, boxSize, bounds, lowBandwidth]);

  // Setup initial instance matrices & pure white colors
  useMemo(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color(1.0, 1.0, 1.0); // Pure bright white

    for (let i = 0; i < count; i++) {
      dummy.position.set(basePositions[i * 3], basePositions[i * 3 + 1], basePositions[i * 3 + 2]);
      dummy.rotation.set(0, rotations[i], 0);

      const spdNorm = Math.min(1.0, speeds[i] / (maxSpeed || 1.0));
      const arrowScale = 0.8 + spdNorm * 0.9;
      dummy.scale.set(arrowScale, arrowScale, arrowScale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, color);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [count, basePositions, rotations, speeds, maxSpeed]);

  // Animate arrows streaming along their directional vectors
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    const t = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const spd = speeds[i];
      const cycleOffset = ((t * 0.8 * (spd + 0.3) + i * 0.17) % 1.0);
      const streamDist = (cycleOffset - 0.5) * 1.8;

      const angle = rotations[i];
      const x = basePositions[i * 3] + Math.sin(angle) * streamDist;
      const y = basePositions[i * 3 + 1];
      const z = basePositions[i * 3 + 2] + Math.cos(angle) * streamDist;

      dummy.position.set(x, y, z);
      dummy.rotation.set(0, angle, 0);

      const spdNorm = Math.min(1.0, spd / (maxSpeed || 1.0));
      const arrowScale = (0.8 + spdNorm * 0.8) * (0.85 + 0.15 * Math.sin(t * 3.0 + i));
      dummy.scale.set(arrowScale, arrowScale, arrowScale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[arrowGeometry, undefined as any, count]}
      frustumCulled={false}
    >
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={0.85}
        roughness={0.1}
        metalness={0.1}
      />
    </instancedMesh>
  );
};
