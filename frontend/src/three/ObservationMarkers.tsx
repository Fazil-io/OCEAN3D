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
  // Domain boundaries: Lon [80°E, 94°E], Lat [6°N, 21°N], Depth [0m, 1500m]
  // Constrain coordinates safely within the 3D bounding box (box spans: X: [-13, 13], Y: [-8, 8], Z: [-13, 13])
  const safeLat = Math.max(6.2, Math.min(20.8, lat));
  const safeLon = Math.max(80.2, Math.min(93.8, lon));
  const safeDepth = Math.max(0.0, Math.min(1450.0, depth));

  const z = 12.5 - ((safeLat - 6.0) / 15.0) * 25.0;
  const x = -12.5 + ((safeLon - 80.0) / 14.0) * 25.0;
  // y ranges from +7.6 (surface) down to -7.2 (near bottom seabed), NEVER below the -8.0 floor
  const y = 7.6 - (safeDepth / 1500.0) * 14.8;
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
      {/* 1. Argo Floats Buoys & Vertical In-Situ Profiles */}
      {observations.map((obs) => {
        const [x, y, z] = latLonDepthTo3D(obs.latitude, obs.longitude, obs.current_depth);
        const isSelected = selectedItem?.id === obs.id;
        // Profile depth down to seabed within the box (seabed at y = -7.4)
        const profileDepthY = -(y + 7.4);

        return (
          <group
            key={obs.id}
            position={[x, y, z]}
            onClick={(e) => {
              e.stopPropagation();
              onSelectItem(isSelected ? null : obs);
            }}
          >
            {/* Argo Float Surface Buoy Sphere */}
            <mesh>
              <sphereGeometry args={[isSelected ? 0.65 : 0.42, 16, 16]} />
              <meshStandardMaterial
                color={isSelected ? '#00f0ff' : '#f59e0b'}
                emissive={isSelected ? '#00f0ff' : '#d97706'}
                emissiveIntensity={isSelected ? 0.8 : 0.35}
                roughness={0.2}
              />
            </mesh>

            {/* Satellite Uplink Antenna Mast */}
            <mesh position={[0, 0.42, 0]}>
              <cylinderGeometry args={[0.03, 0.03, 0.45, 6]} />
              <meshStandardMaterial color={isSelected ? '#00f0ff' : '#94a3b8'} />
            </mesh>
            <mesh position={[0, 0.68, 0]}>
              <sphereGeometry args={[0.07, 8, 8]} />
              <meshStandardMaterial
                color={isSelected ? '#00f0ff' : '#ef4444'}
                emissive={isSelected ? '#00f0ff' : '#ef4444'}
                emissiveIntensity={0.9}
              />
            </mesh>

            {/* Vertical CTD Profile Cast Line - strictly inside the 3D model box */}
            <line>
              <bufferGeometry
                attach="geometry"
                {...new THREE.BufferGeometry().setFromPoints([
                  new THREE.Vector3(0, 0, 0),
                  new THREE.Vector3(0, profileDepthY, 0)
                ])}
              />
              <lineBasicMaterial
                color={isSelected ? '#00f0ff' : '#f59e0b'}
                transparent
                opacity={isSelected ? 0.85 : 0.45}
              />
            </line>

            {/* Subsurface CTD Sensor Package at base of cast */}
            <mesh position={[0, profileDepthY, 0]}>
              <cylinderGeometry args={[0.16, 0.16, 0.38, 8]} />
              <meshStandardMaterial
                color={isSelected ? '#00f0ff' : '#d97706'}
                roughness={0.3}
              />
            </mesh>

            {/* Floating Platform Identifier */}
            <Text
              position={[0, 0.95, 0]}
              fontSize={0.42}
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
