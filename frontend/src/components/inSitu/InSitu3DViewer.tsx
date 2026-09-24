import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Grid, Text, Float } from "@react-three/drei";
import * as THREE from "three";
import {
  RotateCcw,
  Eye,
  Layers,
  Sparkles,
  Zap,
  Radio,
  Sliders,
  Maximize2,
  Info,
  CheckCircle2,
  Cpu,
  Compass,
  Waves
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/* ═══════════════════════════════════════════════════════════════════
   1. REALISTIC ARGO PROFILING FLOAT 3D MODEL
   (Cylindrical Aluminum Pressure Hull, SBE41CP CTD Head, Whip Antenna,
    External Rubber Bladder & Bottom Bumper Cage)
═══════════════════════════════════════════════════════════════════ */
interface ModelProps {
  wireframe: boolean;
  highlightedSensor: string | null;
}

export const ArgoFloat3D: React.FC<ModelProps> = ({ wireframe, highlightedSensor }) => {
  const floatRef = useRef<THREE.Group>(null);
  const beaconRef = useRef<THREE.Mesh>(null);
  const bladderRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (floatRef.current) {
      // Gentle realistic ocean buoyancy heave and tilt
      floatRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.08;
      floatRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.03;
    }
    if (beaconRef.current) {
      // Flashing telemetry LED beacon
      const intensity = 0.5 + 0.5 * Math.sin(state.clock.getElapsedTime() * 5.0);
      (beaconRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
    }
    if (bladderRef.current) {
      // Periodic oil bladder expansion/contraction simulation
      const bScale = 1.0 + 0.15 * Math.sin(state.clock.getElapsedTime() * 0.9);
      bladderRef.current.scale.set(bScale, 1.0, bScale);
    }
  });

  const isCTD = highlightedSensor === "ctd";
  const isAntenna = highlightedSensor === "antenna";
  const isBladder = highlightedSensor === "bladder";
  const isHull = highlightedSensor === "hull";

  return (
    <group ref={floatRef} position={[0, 0, 0]}>
      {/* ── Main Aluminum Pressure Hull (Cylinder) ──────────── */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 2.6, 32]} />
        <meshStandardMaterial
          color={isHull ? "#38bdf8" : "#f59e0b"}
          metalness={0.7}
          roughness={0.3}
          wireframe={wireframe}
        />
      </mesh>

      {/* Decorative Black Scientific Section Rings */}
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.43, 0.43, 0.08, 32]} />
        <meshStandardMaterial color="#111827" metalness={0.8} roughness={0.2} wireframe={wireframe} />
      </mesh>
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.43, 0.43, 0.08, 32]} />
        <meshStandardMaterial color="#111827" metalness={0.8} roughness={0.2} wireframe={wireframe} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.425, 0.425, 0.04, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.4} wireframe={wireframe} />
      </mesh>

      {/* ── Top Sensor Endcap (Titanium) ────────────────────── */}
      <mesh position={[0, 1.35, 0]}>
        <cylinderGeometry args={[0.4, 0.42, 0.15, 32]} />
        <meshStandardMaterial color={isCTD ? "#00f0ff" : "#475569"} metalness={0.85} roughness={0.25} wireframe={wireframe} />
      </mesh>

      {/* ── CTD Sensor Suite: Sea-Bird SBE41CP Conductivity Cell */}
      <group position={[0, 1.5, 0]}>
        {/* Central Sensor Stem */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.12, 0.15, 0.3, 16]} />
          <meshStandardMaterial color={isCTD ? "#00f0ff" : "#94a3b8"} metalness={0.9} roughness={0.15} wireframe={wireframe} />
        </mesh>
        {/* Red Guard Ring around glass conductivity duct */}
        <mesh position={[0.14, 0.38, 0]}>
          <torusGeometry args={[0.1, 0.025, 16, 24]} />
          <meshStandardMaterial color="#ef4444" roughness={0.4} wireframe={wireframe} />
        </mesh>
        {/* Temperature & Pressure Probe Needle */}
        <mesh position={[-0.14, 0.36, 0]}>
          <cylinderGeometry args={[0.025, 0.03, 0.35, 16]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.1} wireframe={wireframe} />
        </mesh>
        {/* Dissolved Oxygen Optode Sensor Module */}
        <mesh position={[0, 0.38, 0.14]}>
          <cylinderGeometry args={[0.06, 0.06, 0.22, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.3} wireframe={wireframe} />
        </mesh>
      </group>

      {/* ── Satellite Communications Whip Antenna ───────────── */}
      <group position={[0, 1.45, -0.15]}>
        {/* Antenna Base Spring & Collar */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.18, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.3} wireframe={wireframe} />
        </mesh>
        {/* Long Whip Mast */}
        <mesh position={[0, 1.1, 0]}>
          <cylinderGeometry args={[0.015, 0.025, 1.8, 16]} />
          <meshStandardMaterial color={isAntenna ? "#00f0ff" : "#e2e8f0"} metalness={0.8} roughness={0.2} wireframe={wireframe} />
        </mesh>
        {/* Top Iridium / Argos Antenna Loading Coil / Beacon */}
        <mesh ref={beaconRef} position={[0, 2.05, 0]}>
          <sphereGeometry args={[0.065, 16, 16]} />
          <meshStandardMaterial
            color="#22c55e"
            emissive="#22c55e"
            emissiveIntensity={1.0}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* ── Lower Section & Hydraulic Buoyancy Bladder ────────── */}
      <mesh position={[0, -1.35, 0]}>
        <cylinderGeometry args={[0.42, 0.35, 0.15, 32]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.3} wireframe={wireframe} />
      </mesh>

      {/* Rubber Buoyancy Engine External Bladder */}
      <mesh ref={bladderRef} position={[0, -1.6, 0]}>
        <sphereGeometry args={[0.3, 24, 24]} />
        <meshStandardMaterial
          color={isBladder ? "#00f0ff" : "#1e293b"}
          roughness={0.7}
          metalness={0.2}
          wireframe={wireframe}
        />
      </mesh>

      {/* Bottom Bumper Protective Cage / Ring & Zinc Anode */}
      <mesh position={[0, -1.8, 0]}>
        <torusGeometry args={[0.38, 0.035, 16, 32]} />
        <meshStandardMaterial color="#64748b" metalness={0.9} roughness={0.2} wireframe={wireframe} />
      </mesh>
      {/* 4 Vertical Cage Standoff Struts */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, idx) => (
        <mesh
          key={idx}
          position={[Math.cos(angle) * 0.36, -1.6, Math.sin(angle) * 0.36]}
          rotation={[0, 0, 0]}
        >
          <cylinderGeometry args={[0.02, 0.02, 0.45, 8]} />
          <meshStandardMaterial color="#64748b" metalness={0.9} roughness={0.2} wireframe={wireframe} />
        </mesh>
      ))}
    </group>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   2. REALISTIC MOORED MET-OCEAN BUOY 3D MODEL
   (INCOIS OMNI / RAMA Surface Moored Buoy: Toroidal Polyethylene Float,
    Welded Aluminum Tower, Photovoltaic Solar Panels, Anemometer,
    Radar Reflector & Inductive CTD Bridle)
═══════════════════════════════════════════════════════════════════ */
export const OceanBuoy3D: React.FC<ModelProps> = ({ wireframe, highlightedSensor }) => {
  const buoyRef = useRef<THREE.Group>(null);
  const anemometerRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (buoyRef.current) {
      // Gentle surface wave pitch & roll motion
      buoyRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.06;
      buoyRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 1.1) * 0.04;
      buoyRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.9) * 0.03;
    }
    if (anemometerRef.current) {
      // Spinning ultrasonic wind speed cups
      anemometerRef.current.rotation.y += 0.08;
    }
    if (lightRef.current) {
      // Amber navigation flash beacon rhythm
      const pulse = Math.floor((state.clock.getElapsedTime() * 2) % 2) === 0 ? 1.5 : 0.2;
      (lightRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
    }
  });

  const isTower = highlightedSensor === "tower";
  const isSolar = highlightedSensor === "solar";
  const isMeteo = highlightedSensor === "meteo";

  return (
    <group ref={buoyRef} position={[0, -0.65, 0]}>
      {/* ── Main Toroidal Ocean Flotation Body (High-Vis Yellow) */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[1.25, 0.45, 24, 48]} />
        <meshStandardMaterial
          color="#facc15"
          metalness={0.2}
          roughness={0.4}
          wireframe={wireframe}
        />
      </mesh>

      {/* Internal Central Deck Plate & Waterline Counterweight */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.35, 32]} />
        <meshStandardMaterial color="#eab308" metalness={0.4} roughness={0.3} wireframe={wireframe} />
      </mesh>

      {/* Marine Waterline Blue Band */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[1.26, 1.26, 0.1, 32]} />
        <meshStandardMaterial color="#0284c7" metalness={0.3} roughness={0.5} wireframe={wireframe} />
      </mesh>

      {/* Central Watertight Instrument & Battery Well Canister */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 0.8, 24]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.3} wireframe={wireframe} />
      </mesh>

      {/* ── Welded Aluminum Lattice Mast Tower ────────────────── */}
      <group position={[0, 0.9, 0]}>
        {/* 4 Corner Structural Legs */}
        {[Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4].map((ang, idx) => (
          <mesh
            key={idx}
            position={[Math.cos(ang) * 0.55, 0.8, Math.sin(ang) * 0.55]}
            rotation={[Math.sin(ang) * 0.12, 0, -Math.cos(ang) * 0.12]}
          >
            <cylinderGeometry args={[0.035, 0.045, 1.7, 8]} />
            <meshStandardMaterial
              color={isTower ? "#00f0ff" : "#e2e8f0"}
              metalness={0.9}
              roughness={0.2}
              wireframe={wireframe}
            />
          </mesh>
        ))}

        {/* Tower Intermediate Ring Platforms */}
        <mesh position={[0, 0.7, 0]}>
          <torusGeometry args={[0.5, 0.025, 12, 24]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.25} wireframe={wireframe} />
        </mesh>
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry args={[0.45, 0.45, 0.05, 24]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.25} wireframe={wireframe} />
        </mesh>
      </group>

      {/* ── Angled Photovoltaic Solar Panels (4x Array) ────────── */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((ang, idx) => (
        <mesh
          key={idx}
          position={[Math.cos(ang) * 0.62, 1.6, Math.sin(ang) * 0.62]}
          rotation={[Math.sin(ang) * 0.45, ang, Math.cos(ang) * 0.45]}
        >
          <boxGeometry args={[0.42, 0.55, 0.04]} />
          <meshStandardMaterial
            color={isSolar ? "#00f0ff" : "#1e1b4b"}
            metalness={0.9}
            roughness={0.1}
            wireframe={wireframe}
          />
        </mesh>
      ))}

      {/* ── Top Meteorological Instrument Crossarm & Sensors ──── */}
      <group position={[0, 2.7, 0]}>
        {/* Horizontal Sensor Crossarm */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.03, 0.03, 1.1, 16]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} wireframe={wireframe} />
        </mesh>

        {/* Ultrasonic / Cup Anemometer (Left Arm) */}
        <group ref={anemometerRef} position={[-0.5, 0.15, 0]}>
          <mesh position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
            <meshStandardMaterial color="#0f172a" metalness={0.8} />
          </mesh>
          {[0, (2 * Math.PI) / 3, (4 * Math.PI) / 3].map((a, i) => (
            <mesh key={i} position={[Math.cos(a) * 0.08, 0.05, Math.sin(a) * 0.08]}>
              <sphereGeometry args={[0.035, 8, 8]} />
              <meshStandardMaterial color={isMeteo ? "#00f0ff" : "#ef4444"} roughness={0.3} />
            </mesh>
          ))}
        </group>

        {/* Air Temperature & Humidity Radiation Shield (Right Arm) */}
        <group position={[0.5, 0.1, 0]}>
          {[0, 0.05, 0.1, 0.15].map((y, i) => (
            <mesh key={i} position={[0, y, 0]}>
              <cylinderGeometry args={[0.07, 0.08, 0.02, 16]} />
              <meshStandardMaterial color="#ffffff" roughness={0.3} wireframe={wireframe} />
            </mesh>
          ))}
        </group>

        {/* Central Marine Radar Reflector & Mast Pole */}
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.5, 12]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.45, 0]}>
          <octahedronGeometry args={[0.15]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.1} wireframe={wireframe} />
        </mesh>

        {/* Marine Navigation Flashing Beacon Light */}
        <mesh ref={lightRef} position={[0, 0.65, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.12, 16]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={1.0}
            roughness={0.2}
          />
        </mesh>

        {/* Satellite Telemetry Dome Antenna (Inmarsat / INSAT) */}
        <mesh position={[0, 0.15, 0.3]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} wireframe={wireframe} />
        </mesh>
      </group>

      {/* ── Subsurface Mooring Bridle & Underwater CTD Cage ───── */}
      <group position={[0, -0.6, 0]}>
        {/* Triangular Galvanized Bridle Legs */}
        {[0, (2 * Math.PI) / 3, (4 * Math.PI) / 3].map((ang, i) => (
          <mesh
            key={i}
            position={[Math.cos(ang) * 0.4, -0.3, Math.sin(ang) * 0.4]}
            rotation={[Math.sin(ang) * 0.35, 0, -Math.cos(ang) * 0.35]}
          >
            <cylinderGeometry args={[0.03, 0.03, 0.7, 8]} />
            <meshStandardMaterial color="#475569" metalness={0.8} />
          </mesh>
        ))}

        {/* Lower Keel Mooring Ring */}
        <mesh position={[0, -0.75, 0]}>
          <torusGeometry args={[0.25, 0.04, 12, 24]} />
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} wireframe={wireframe} />
        </mesh>

        {/* Inductive CTD Subsurface Sensor Pod */}
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.45, 16]} />
          <meshStandardMaterial color="#0284c7" metalness={0.7} roughness={0.3} wireframe={wireframe} />
        </mesh>
      </group>
    </group>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   3. REALISTIC AUTONOMOUS OCEAN GLIDER 3D MODEL
   (Seaglider / Slocum G3: Torpedo Hydrodynamic Hull, Swept Delta Wings,
    Vertical Stabilizer Fin, Tail Antenna Mast & Optical Science Bay)
═══════════════════════════════════════════════════════════════════ */
export const OceanGlider3D: React.FC<ModelProps> = ({ wireframe, highlightedSensor }) => {
  const gliderRef = useRef<THREE.Group>(null);
  const optodeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (gliderRef.current) {
      // Dynamic sawtooth glider dive navigation (gentle pitch, yaw & roll)
      gliderRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.9) * 0.12;
      gliderRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.9) * 0.12;
      gliderRef.current.rotation.z = Math.cos(state.clock.getElapsedTime() * 0.7) * 0.06;
    }
    if (optodeRef.current) {
      // Pulsing optical fluorometer sampling sensor
      const pulse = 0.4 + 0.6 * Math.sin(state.clock.getElapsedTime() * 4.0);
      (optodeRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
    }
  });

  const isWings = highlightedSensor === "wings";
  const isSensors = highlightedSensor === "sensors";
  const isTail = highlightedSensor === "tail";

  return (
    <group ref={gliderRef} position={[0, 0, 0]} rotation={[0, -Math.PI / 4, 0]}>
      {/* ── Hydrodynamic Torpedo Fuselage (Center Body) ───────── */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.32, 0.32, 2.2, 32]} />
        <meshStandardMaterial
          color="#10b981"
          metalness={0.65}
          roughness={0.3}
          wireframe={wireframe}
        />
      </mesh>

      {/* Aerodynamic Forward Nose Cone (Altimeter / Transducer) */}
      <mesh position={[0, 0, 1.45]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.32, 0.7, 32]} />
        <meshStandardMaterial
          color="#064e3b"
          metalness={0.7}
          roughness={0.25}
          wireframe={wireframe}
        />
      </mesh>
      {/* Translucent Nose Tip */}
      <mesh position={[0, 0, 1.82]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#00f0ff" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Rear Tapering Tail Cone */}
      <mesh position={[0, 0, -1.45]} rotation={[-Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.32, 0.7, 32]} />
        <meshStandardMaterial color="#064e3b" metalness={0.7} roughness={0.25} wireframe={wireframe} />
      </mesh>

      {/* Black Carbon Fiber Joint Collars */}
      <mesh position={[0, 0, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.325, 0.325, 0.06, 32]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} wireframe={wireframe} />
      </mesh>
      <mesh position={[0, 0, -0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.325, 0.325, 0.06, 32]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} wireframe={wireframe} />
      </mesh>

      {/* ── Swept Carbon Fiber Delta Wings (Left & Right) ─────── */}
      {/* Right Wing */}
      <mesh
        position={[1.1, 0, 0.05]}
        rotation={[0, 0.32, 0.06]}
      >
        <boxGeometry args={[1.5, 0.03, 0.36]} />
        <meshStandardMaterial
          color={isWings ? "#00f0ff" : "#0f172a"}
          metalness={0.8}
          roughness={0.2}
          wireframe={wireframe}
        />
      </mesh>
      {/* Left Wing */}
      <mesh
        position={[-1.1, 0, 0.05]}
        rotation={[0, -0.32, -0.06]}
      >
        <boxGeometry args={[1.5, 0.03, 0.36]} />
        <meshStandardMaterial
          color={isWings ? "#00f0ff" : "#0f172a"}
          metalness={0.8}
          roughness={0.2}
          wireframe={wireframe}
        />
      </mesh>

      {/* ── Vertical Tail Fin (Rudder / Stabilizer) ──────────── */}
      <mesh position={[0, 0.42, -1.35]} rotation={[0.22, 0, 0]}>
        <boxGeometry args={[0.035, 0.65, 0.48]} />
        <meshStandardMaterial
          color={isTail ? "#00f0ff" : "#0284c7"}
          metalness={0.7}
          roughness={0.2}
          wireframe={wireframe}
        />
      </mesh>

      {/* Trailing Tail Antenna Mast (7° Rake) */}
      <mesh position={[0, 0.35, -1.82]} rotation={[0.38, 0, 0]}>
        <cylinderGeometry args={[0.012, 0.018, 0.95, 16]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.85} roughness={0.2} wireframe={wireframe} />
      </mesh>
      {/* Iridium Antenna Tip Node */}
      <mesh position={[0, 0.72, -2.2]}>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.9} />
      </mesh>

      {/* ── Science Bay Optical Sensor Puck (WET Labs ECO Puck) ─ */}
      <group position={[0, -0.31, 0.45]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.11, 0.11, 0.06, 16]} />
          <meshStandardMaterial color="#0284c7" metalness={0.8} roughness={0.2} wireframe={wireframe} />
        </mesh>
        {/* Optical Sensor Sampling Aperture */}
        <mesh ref={optodeRef} position={[0, -0.035, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.02, 16]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.7}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Sea-Bird Glider CTD Flow Duct */}
      <mesh position={[0.22, 0.18, 0.6]} rotation={[0, 0, -Math.PI / 6]}>
        <cylinderGeometry args={[0.035, 0.035, 0.28, 12]} />
        <meshStandardMaterial color={isSensors ? "#00f0ff" : "#ef4444"} metalness={0.5} roughness={0.3} wireframe={wireframe} />
      </mesh>
    </group>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   MAIN IN-SITU 3D DIGITAL TWIN VIEWER COMPONENT
═══════════════════════════════════════════════════════════════════ */
export type InSituModelType = "argo" | "buoy" | "glider";

interface InSitu3DViewerProps {
  initialModel?: InSituModelType;
  onClose?: () => void;
}

export const InSitu3DViewer: React.FC<InSitu3DViewerProps> = ({
  initialModel = "argo",
  onClose
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeModel, setActiveModel] = useState<InSituModelType>(initialModel);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [highlightedSensor, setHighlightedSensor] = useState<string | null>(null);

  // Technical specifications for each asset
  const specs = {
    argo: {
      title: "Argo Autonomous CTD Profiling Float",
      subTitle: "WMO Global In-Situ Array (Apex / Provor Float Architecture)",
      depthRating: "2,000 meters (200 bar hydrostatic pressure)",
      hullSpec: "6061-T6 High-Strength Marine Aluminum Cylinder (1.3m length)",
      payload: "Sea-Bird SBE41CP Conductivity-Temperature-Depth + Aanderaa Optode 4330 O2",
      endurance: "4 to 5 years (approx. 180-220 vertical profiling cycles)",
      buoyancyEngine: "Hydraulic motor pump & external elastomeric displacement bladder",
      telemetry: "Iridium Short Burst Data (SBD) / Argos-4 Satellite Uplink",
      samplingFreq: "Every 10-day cycle (0–2000m sawtooth ascent sampling)",
      sensorHotspots: [
        { id: "ctd", label: "SBE41CP CTD Head" },
        { id: "antenna", label: "Iridium Whip Antenna" },
        { id: "hull", label: "Pressure Hull (2000m)" },
        { id: "bladder", label: "Hydraulic Bladder" }
      ]
    },
    buoy: {
      title: "Met-Ocean Moored Surface Buoy",
      subTitle: "INCOIS OMNI (Ocean Mining & Network Infrastructure) / RAMA Array",
      depthRating: "Surface Moored (up to 4,500m ocean depth anchoring)",
      hullSpec: "3.0m Diameter Toroidal Polyethylene Float Hull with polyurethane foam core",
      payload: "Ultrasonic Wind Anemometer, Barometer, Air Temp/RH, Pyranometer & Inductive CTD Chain",
      endurance: "Autonomous continuous solar operation (4x 85W PV Panels + 12V AGM Bank)",
      buoyancyEngine: "Toroidal float buoyancy reserve with galvanized triangular keel bridle",
      telemetry: "INSAT / Inmarsat-C satellite real-time telemetry (hourly synoptic feeds)",
      samplingFreq: "Continuous 10-minute meteorological sampling & depth CTD string",
      sensorHotspots: [
        { id: "meteo", label: "Anemometer & Sensors" },
        { id: "solar", label: "Photovoltaic Solar Panels" },
        { id: "tower", label: "Lattice Mast Tower" }
      ]
    },
    glider: {
      title: "Autonomous OceanGlider (Underwater Glider)",
      subTitle: "EGO GDAC Archive Platform (Teledyne Slocum G3 / Seaglider Architecture)",
      depthRating: "1,000 meters (Sawtooth underwater gliding profile)",
      hullSpec: "Carbon-Fiber Composite & Syntactic Foam Torpedo Fuselage (1.8m length)",
      payload: "Sea-Bird Glider CTD + WET Labs ECO Puck Optical Fluorometer (Chl-a, CDOM, Turbidity)",
      endurance: "90 to 180 days (3,000 km ocean transect range)",
      buoyancyEngine: "Variable buoyancy hydraulic displacement engine with internal pitch battery slider",
      telemetry: "Bidirectional Iridium SBD satellite link upon surface surfacing",
      samplingFreq: "Continuous sawtooth ascent/descent profiling across ocean fronts",
      sensorHotspots: [
        { id: "wings", label: "Swept Delta Wings" },
        { id: "sensors", label: "ECO Puck Optical Sensor" },
        { id: "tail", label: "Vertical Fin & Antenna" }
      ]
    }
  };

  const currentSpec = specs[activeModel];

  return (
    <div className={`w-full h-full flex flex-col lg:flex-row overflow-hidden rounded-xl border transition-colors ${
      isDark ? "bg-[#020713] border-cyan-500/30 text-white" : "bg-white border-slate-300 text-slate-900"
    }`}>
      {/* ── LEFT: 3D VIEWPORT CANVAS ───────────────────────── */}
      <div className="flex-1 h-[45vh] sm:h-[52vh] lg:h-full relative overflow-hidden">
        {/* Model Selector Tabs (Responsive on Mobile/Tablet) */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 flex items-center gap-1 p-1 rounded-xl border backdrop-blur-md bg-slate-950/85 border-cyan-500/30 shadow-lg max-w-[calc(100vw-120px)] sm:max-w-none overflow-x-auto no-scrollbar">
          <button
            onClick={() => {
              setActiveModel("argo");
              setHighlightedSensor(null);
            }}
            className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeModel === "argo"
                ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
                : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="hidden sm:inline">Argo Profiling Float</span>
            <span className="sm:hidden">Argo Float</span>
          </button>

          <button
            onClick={() => {
              setActiveModel("buoy");
              setHighlightedSensor(null);
            }}
            className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeModel === "buoy"
                ? "bg-cyan-500 text-slate-950 shadow-md font-extrabold"
                : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="hidden sm:inline">Met-Ocean Moored Buoy</span>
            <span className="sm:hidden">Ocean Buoy</span>
          </button>

          <button
            onClick={() => {
              setActiveModel("glider");
              setHighlightedSensor(null);
            }}
            className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeModel === "glider"
                ? "bg-emerald-500 text-slate-950 shadow-md font-extrabold"
                : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="hidden sm:inline">OceanGlider (AUV)</span>
            <span className="sm:hidden">Glider</span>
          </button>
        </div>

        {/* Top-Right Quick Toggles (Mobile Responsive) */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setWireframe(!wireframe)}
            title="Toggle X-Ray / Technical Wireframe Mode"
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg border text-[11px] sm:text-xs font-mono font-semibold backdrop-blur-md transition-all cursor-pointer ${
              wireframe
                ? "bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md shadow-cyan-500/20"
                : "bg-slate-950/80 border-slate-700 text-slate-300 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{wireframe ? "Solid Mesh" : "X-Ray Wireframe"}</span>
            <span className="sm:hidden">{wireframe ? "Solid" : "X-Ray"}</span>
          </button>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            title="Toggle 360° Auto Rotation"
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg border text-[11px] sm:text-xs font-mono font-semibold backdrop-blur-md transition-all cursor-pointer ${
              autoRotate
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                : "bg-slate-950/80 border-slate-700 text-slate-400 hover:text-white"
            }`}
          >
            <RotateCcw className={`w-3.5 h-3.5 ${autoRotate ? "animate-spin-slow" : ""}`} />
            <span className="hidden sm:inline">{autoRotate ? "Orbiting" : "Static"}</span>
            <span className="sm:hidden">{autoRotate ? "Orbit" : "Static"}</span>
          </button>
        </div>

        {/* ── 3D THREE.JS CANVAS ────────────────────────────── */}
        <Canvas
          camera={{ position: [3.6, 2.0, 4.5], fov: 45 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Lighting */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[10, 15, 10]} intensity={2.0} color="#ffffff" />
          <directionalLight position={[-10, 5, -10]} intensity={1.0} color="#38bdf8" />
          <pointLight position={[0, -3, 0]} intensity={1.2} color="#00f0ff" />

          {/* Render Active 3D Model */}
          {activeModel === "argo" && (
            <ArgoFloat3D wireframe={wireframe} highlightedSensor={highlightedSensor} />
          )}
          {activeModel === "buoy" && (
            <OceanBuoy3D wireframe={wireframe} highlightedSensor={highlightedSensor} />
          )}
          {activeModel === "glider" && (
            <OceanGlider3D wireframe={wireframe} highlightedSensor={highlightedSensor} />
          )}

          {/* Ocean Bed Reflection Grid */}
          <Grid
            position={[0, -2.4, 0]}
            args={[12, 12]}
            cellSize={0.5}
            cellThickness={1.0}
            cellColor="#0284c7"
            sectionSize={2.0}
            sectionThickness={1.5}
            sectionColor="#00f0ff"
            fadeDistance={10}
            fadeStrength={1.5}
          />

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={autoRotate}
            autoRotateSpeed={1.5}
            maxDistance={9}
            minDistance={1.5}
          />
        </Canvas>

        {/* Bottom Floating Control Hint (Responsive) */}
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 z-10 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono text-slate-400 bg-slate-950/80 px-2.5 sm:px-3 py-1 rounded-lg border border-white/10 backdrop-blur-md max-w-[92vw] truncate">
          <Compass className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 animate-spin-slow" />
          <span className="truncate">Drag to Rotate • Pinch/Scroll to Zoom</span>
        </div>
      </div>

      {/* ── RIGHT: TECHNICAL SPECIFICATIONS & SENSOR HOTSPOTS ─ */}
      <div className={`w-full lg:w-[420px] p-3 sm:p-5 border-t lg:border-t-0 lg:border-l overflow-y-auto space-y-3 sm:space-y-4 font-mono transition-colors ${
        isDark ? "bg-[#040c1d] border-cyan-500/25" : "bg-slate-50 border-slate-200"
      }`}>
        {/* Title Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase border ${
              activeModel === "argo"
                ? "bg-amber-950/60 text-amber-400 border-amber-800/60"
                : activeModel === "buoy"
                ? "bg-cyan-950/60 text-cyan-400 border-cyan-800/60"
                : "bg-emerald-950/60 text-emerald-400 border-emerald-800/60"
            }`}>
              Scientific Digital Twin
            </span>
            <span className="text-[10px] text-slate-400">INCOIS Observational Suite</span>
          </div>
          <h2 className={`text-lg font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            {currentSpec.title}
          </h2>
          <p className={`text-xs ${isDark ? "text-cyan-400/90" : "text-sky-700 font-medium"}`}>
            {currentSpec.subTitle}
          </p>
        </div>

        {/* Interactive Sensor Component Highlighters */}
        <div className={`p-3 rounded-xl border ${
          isDark ? "bg-[#06142e] border-cyan-500/25" : "bg-white border-slate-200 shadow-xs"
        }`}>
          <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Component Highlighters</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {currentSpec.sensorHotspots.map((h) => {
              const isSelected = highlightedSensor === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => setHighlightedSensor(isSelected ? null : h.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-cyan-400 text-slate-950 border-cyan-300 font-bold shadow-md shadow-cyan-400/25"
                      : isDark
                      ? "bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                      : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {h.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Technical Data Specification Grid */}
        <div className="space-y-2 text-xs">
          <div className={`p-2.5 rounded-lg border ${isDark ? "bg-[#030914] border-slate-800" : "bg-white border-slate-200"}`}>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Max Operating Depth</span>
            <span className="font-bold text-cyan-400 text-sm">{currentSpec.depthRating}</span>
          </div>

          <div className={`p-2.5 rounded-lg border ${isDark ? "bg-[#030914] border-slate-800" : "bg-white border-slate-200"}`}>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Pressure Hull & Material</span>
            <span className={`font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>{currentSpec.hullSpec}</span>
          </div>

          <div className={`p-2.5 rounded-lg border ${isDark ? "bg-[#030914] border-slate-800" : "bg-white border-slate-200"}`}>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Sensor Payload Suite</span>
            <span className="text-emerald-400 font-medium">{currentSpec.payload}</span>
          </div>

          <div className={`p-2.5 rounded-lg border ${isDark ? "bg-[#030914] border-slate-800" : "bg-white border-slate-200"}`}>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Power & Mission Endurance</span>
            <span className="text-amber-400 font-medium">{currentSpec.endurance}</span>
          </div>

          <div className={`p-2.5 rounded-lg border ${isDark ? "bg-[#030914] border-slate-800" : "bg-white border-slate-200"}`}>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Buoyancy / Propulsion Mechanism</span>
            <span className={`font-medium ${isDark ? "text-slate-300" : "text-slate-800"}`}>{currentSpec.buoyancyEngine}</span>
          </div>

          <div className={`p-2.5 rounded-lg border ${isDark ? "bg-[#030914] border-slate-800" : "bg-white border-slate-200"}`}>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Satellite Telemetry Uplink</span>
            <span className="text-purple-400 font-medium">{currentSpec.telemetry}</span>
          </div>
        </div>

        {/* Status Callout Badge */}
        <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2.5 text-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-emerald-300 text-[11px]">
            Model calibrated with GDAC NetCDF data specs & INCOIS MoES operational fleet standards.
          </span>
        </div>
      </div>
    </div>
  );
};
