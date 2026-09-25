import React, { useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Grid, Text } from '@react-three/drei';
import * as THREE from 'three';
import { SliceLayer } from './SliceLayer';
import { VolumeLayer } from './VolumeLayer';
import { CurrentsLayer } from './CurrentsLayer';
import { ObservationMarkers } from './ObservationMarkers';
import { SeawaterLayer } from './SeawaterLayer';
import {
  OceanSlice,
  OceanVolume,
  CurrentVectorField,
  Observation,
  GliderMission,
  ColormapName,
  VisualizationMode,
  CameraPreset
} from '../types';
import { useTheme } from '../context/ThemeContext';

interface OceanSceneProps {
  sliceData: OceanSlice | null;
  volumeData: OceanVolume | null;
  currentsData: CurrentVectorField | null;
  observations: Observation[];
  gliders: GliderMission[];
  selectedItem: Observation | GliderMission | null;
  onSelectItem: (item: Observation | GliderMission | null) => void;
  visMode: VisualizationMode;
  colormap: ColormapName;
  customMin?: number;
  customMax?: number;
  showArgo: boolean;
  showGliders: boolean;
  showTrajectories: boolean;
  showBathymetry: boolean;
  showGrid: boolean;
  showSeawater?: boolean;
  cameraPreset?: CameraPreset;
  canvasRef?: React.MutableRefObject<HTMLCanvasElement | null>;
  lowBandwidth?: boolean;
}

const SceneController: React.FC<{
  cameraPreset?: CameraPreset;
  theme: 'dark' | 'light';
  showGrid: boolean;
  showBathymetry: boolean;
}> = ({ cameraPreset, theme, showGrid, showBathymetry }) => {
  const { camera, scene } = useThree();
  const controlsRef = useRef<any>(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    scene.background = new THREE.Color(isDark ? '#030711' : '#e2e8f0');
    scene.fog = new THREE.FogExp2(isDark ? '#030711' : '#cbd5e1', 0.012);
  }, [theme, scene, isDark]);

  useEffect(() => {
    if (!cameraPreset) return;
    if (cameraPreset === 'iso') {
      camera.position.set(28, 22, 28);
      camera.lookAt(0, 0, 0);
    } else if (cameraPreset === 'top') {
      camera.position.set(0, 42, 0.001);
      camera.lookAt(0, 0, 0);
    } else if (cameraPreset === 'side') {
      camera.position.set(0, 2, 42);
      camera.lookAt(0, -2, 0);
    } else if (cameraPreset === 'reset') {
      camera.position.set(24, 18, 24);
      camera.lookAt(0, 0, 0);
    }
  }, [cameraPreset, camera]);

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        makeDefault
        minDistance={5}
        maxDistance={120}
        maxPolarAngle={Math.PI / 2 + 0.15}
        dampingFactor={0.08}
        enableDamping
      />

      <ambientLight intensity={isDark ? 0.75 : 1.1} />
      <directionalLight position={[20, 40, 20]} intensity={isDark ? 1.2 : 1.4} castShadow />
      <directionalLight position={[-20, 20, -20]} intensity={isDark ? 0.5 : 0.7} />
      <pointLight position={[0, -10, 0]} intensity={0.4} color="#00f0ff" />

      {/* Grid Floor */}
      {showGrid && (
        <Grid
          position={[0, -8.0, 0]}
          args={[40, 40]}
          cellSize={2}
          cellThickness={1}
          cellColor={isDark ? '#0284c7' : '#94a3b8'}
          sectionSize={8}
          sectionThickness={1.5}
          sectionColor={isDark ? '#38bdf8' : '#64748b'}
          fadeDistance={65}
          fadeStrength={1.5}
        />
      )}

      {/* Bounding Box Wireframe */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[26, 16, 26]} />
        <meshBasicMaterial
          color={isDark ? '#0284c7' : '#0369a1'}
          wireframe
          transparent
          opacity={isDark ? 0.25 : 0.35}
        />
      </mesh>

      {/* Domain Direction Labels */}
      <Text position={[0, 8.5, 13.5]} fontSize={0.7} color={isDark ? '#38bdf8' : '#0369a1'}>
        South (6°N)
      </Text>
      <Text position={[0, 8.5, -13.5]} fontSize={0.7} color={isDark ? '#38bdf8' : '#0369a1'}>
        North (21°N)
      </Text>
      <Text position={[-13.5, 8.5, 0]} fontSize={0.7} color={isDark ? '#38bdf8' : '#0369a1'}>
        West (80°E)
      </Text>
      <Text position={[13.5, 8.5, 0]} fontSize={0.7} color={isDark ? '#38bdf8' : '#0369a1'}>
        East (94°E)
      </Text>

      {/* Depth Water Surface */}
      <mesh position={[0, 8.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[26, 26]} />
        <meshStandardMaterial
          color={isDark ? '#003366' : '#0284c7'}
          transparent
          opacity={isDark ? 0.2 : 0.15}
          roughness={0.1}
          metalness={0.4}
        />
      </mesh>

      {/* Bathymetry Seabed */}
      {showBathymetry && (
        <mesh position={[0, -8.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[26, 26, 24, 24]} />
          <meshStandardMaterial
            color={isDark ? '#071626' : '#94a3b8'}
            wireframe={false}
            roughness={0.9}
          />
        </mesh>
      )}
    </>
  );
};

export const OceanScene: React.FC<OceanSceneProps> = ({
  sliceData,
  volumeData,
  currentsData,
  observations,
  gliders,
  selectedItem,
  onSelectItem,
  visMode,
  colormap,
  customMin,
  customMax,
  showArgo,
  showGliders,
  showTrajectories,
  showBathymetry,
  showGrid,
  showSeawater = true,
  cameraPreset,
  canvasRef,
  lowBandwidth = false
}) => {
  const { theme } = useTheme();

  const domainBounds = {
    lat_min: 6.0,
    lat_max: 21.0,
    lon_min: 80.0,
    lon_max: 94.0
  };

  return (
    <div className="w-full h-full relative" style={{ minHeight: 0 }}>
      <Canvas
        style={{ width: '100%', height: '100%', display: 'block' }}
        camera={{ position: [24, 18, 24], fov: 45 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        onCreated={({ gl }) => {
          if (canvasRef) {
            canvasRef.current = gl.domElement;
          }
        }}
      >
        <SceneController
          cameraPreset={cameraPreset}
          theme={theme}
          showGrid={showGrid}
          showBathymetry={showBathymetry}
        />

        {/* Surrounding Seawater Layer connected to main model perimeter */}
        {showSeawater && (
          <SeawaterLayer lowBandwidth={lowBandwidth} />
        )}

        {/* 1. Depth Slice Plane */}
        {visMode === 'slice' && sliceData && (
          <SliceLayer
            sliceData={sliceData}
            colormap={colormap}
            customMin={customMin}
            customMax={customMax}
          />
        )}

        {/* 2. 3D Volume Voxels */}
        {visMode === 'volume' && volumeData && (
          <VolumeLayer
            volumeData={volumeData}
            colormap={colormap}
            customMin={customMin}
            customMax={customMax}
          />
        )}

        {/* 3. Ocean Currents Flow Vectors */}
        {(visMode === 'currents' || visMode === 'slice') && currentsData && (
          <CurrentsLayer
            currents={currentsData}
            boxSize={{ width: 26, height: 16, depth: 26 }}
            verticalExag={1}
            bounds={domainBounds}
            lowBandwidth={lowBandwidth}
          />
        )}

        {/* 4. In-Situ Argo Floats & OceanGliders */}
        <ObservationMarkers
          observations={showArgo ? observations : []}
          gliders={showGliders ? gliders : []}
          selectedItem={selectedItem}
          onSelectItem={onSelectItem}
          showTrajectories={showTrajectories}
        />
      </Canvas>
    </div>
  );
};
