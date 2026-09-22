import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { Observation, GliderMission } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ObservationMarkersProps {
  observations: Observation[];
  gliders: GliderMission[];
  selectedItem: Observation | GliderMission | null;
  onSelectItem: (item: Observation | GliderMission | null) => void;
  showTrajectories: boolean;
}

function latLonDepthTo3D(lat: number, lon: number, depth: number): [number, number, number] {
  const z = 13.0 - ((lat - 6.0) / 15.0) * 26.0;
  const x = -13.0 + ((lon - 80.0) / 14.0) * 26.0;
  const y = 8.0 - (depth / 1500.0) * 16.0;
  return [x, y, z];
}

export const ObservationMarkers: React.FC<ObservationMarkersProps> = ({
  observations,
  gliders,
  selectedItem,
  onSelectItem,
  showTrajectories
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const pingRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (pingRef.current) {
      const s = 1.0 + 0.3 * Math.sin(state.clock.getElapsedTime() * 3.5);
      pingRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group>
      {/* 1. Argo Floats Buoys */}
      {observations.map((obs) => {
        const [x, y, z] = latLonDepthTo3D(obs.latitude, obs.longitude, obs.current_depth);
        const isSelected = selectedItem?.id === obs.id;

        return (
          <group
            key={obs.id}
            position={[x, y, z]}
            onClick={(e) => {
              e.stopPropagation();
              onSelectItem(isSelected ? null : obs);
            }}
          >
            {/* Argo Float Top Buoy Sphere */}
            <mesh>
              <sphereGeometry args={[isSelected ? 0.7 : 0.45, 16, 16]} />
              <meshStandardMaterial
                color={isSelected ? '#00f0ff' : '#f59e0b'}
                emissive={isSelected ? '#00f0ff' : '#d97706'}
                emissiveIntensity={isSelected ? 0.8 : 0.3}
                roughness={0.2}
              />
            </mesh>

            {/* Depth Tether Cable Down into Abyss */}
            <line>
              <bufferGeometry
                attach="geometry"
                {...new THREE.BufferGeometry().setFromPoints([
                  new THREE.Vector3(0, 0, 0),
                  new THREE.Vector3(0, -10, 0)
                ])}
              />
              <lineBasicMaterial color={isSelected ? '#00f0ff' : '#f59e0b'} transparent opacity={0.5} />
            </line>

            {/* Floating Label */}
            <Text
              position={[0, 0.9, 0]}
              fontSize={0.45}
              color={isSelected ? '#00f0ff' : isDark ? '#ffffff' : '#0f172a'}
              anchorX="center"
              anchorY="bottom"
            >
              {obs.platform_code || obs.id}
            </Text>
          </group>
        );
      })}

      {/* 2. Gliders & 3D Sawtooth Trajectories */}
      {gliders.map((glider) => {
        const isSelected = selectedItem?.id === glider.id;
        const trajPoints = glider.trajectory || [];

        const points3D = trajPoints.map((pt) =>
          new THREE.Vector3(...latLonDepthTo3D(pt.latitude, pt.longitude, pt.depth))
        );

        const latestPos = points3D.length > 0
          ? points3D[points3D.length - 1]
          : new THREE.Vector3(...latLonDepthTo3D(glider.latitude, glider.longitude, glider.current_depth));

        const curve = points3D.length > 1 ? new THREE.CatmullRomCurve3(points3D) : null;
        const tubeGeom = curve ? new THREE.TubeGeometry(curve, 48, isSelected ? 0.18 : 0.08, 8, false) : null;

        return (
          <group key={glider.id}>
            {/* 3D Trajectory Ribbon */}
            {showTrajectories && tubeGeom && (
              <mesh
                geometry={tubeGeom}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectItem(isSelected ? null : glider);
                }}
              >
                <meshStandardMaterial
                  color={isSelected ? '#00f0ff' : '#10b981'}
                  emissive={isSelected ? '#00f0ff' : '#059669'}
                  emissiveIntensity={isSelected ? 0.8 : 0.3}
                  roughness={0.3}
                />
              </mesh>
            )}

            {/* Glider Vehicle Model at Latest Position */}
            <group
              position={[latestPos.x, latestPos.y, latestPos.z]}
              onClick={(e) => {
                e.stopPropagation();
                onSelectItem(isSelected ? null : glider);
              }}
            >
              {/* Torpedo Glider Body */}
              <mesh rotation={[0, 0, Math.PI / 4]}>
                <coneGeometry args={[0.35, 0.9, 12]} />
                <meshStandardMaterial
                  color={isSelected ? '#00f0ff' : '#34d399'}
                  emissive={isSelected ? '#00f0ff' : '#10b981'}
                  emissiveIntensity={0.5}
                />
              </mesh>

              {/* Ping Ring */}
              {isSelected && (
                <group ref={pingRef}>
                  <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[0.8, 1.0, 24]} />
                    <meshBasicMaterial color="#00f0ff" side={THREE.DoubleSide} transparent opacity={0.6} />
                  </mesh>
                </group>
              )}

              {/* Glider Callsign */}
              <Text
                position={[0, 0.8, 0]}
                fontSize={0.42}
                color={isSelected ? '#00f0ff' : isDark ? '#a7f3d0' : '#065f46'}
                anchorX="center"
                anchorY="bottom"
              >
                {glider.callsign || glider.name}
              </Text>
            </group>
          </group>
        );
      })}
    </group>
  );
};
