import React, { useMemo } from 'react';
import * as THREE from 'three';
import { OceanVolume, ColormapName } from '../types';
import { getColorFromColormap } from '../utils/colormaps';

interface VolumeLayerProps {
  volumeData: OceanVolume;
  colormap: ColormapName;
  customMin?: number;
  customMax?: number;
}

export const VolumeLayer: React.FC<VolumeLayerProps> = ({
  volumeData,
  colormap,
  customMin,
  customMax
}) => {
  const { voxels, min_val, max_val } = volumeData;

  // Apply percentile clipping for better contrast (2nd–98th percentile)
  const { effectiveMin, effectiveMax } = useMemo(() => {
    if (customMin !== undefined && customMax !== undefined) {
      return { effectiveMin: customMin, effectiveMax: customMax };
    }
    const vals = voxels.map((v) => v.val).sort((a, b) => a - b);
    if (vals.length === 0) return { effectiveMin: min_val, effectiveMax: max_val };
    const lo = vals[Math.floor(vals.length * 0.02)];
    const hi = vals[Math.floor(vals.length * 0.98)];
    return {
      effectiveMin: customMin !== undefined ? customMin : lo,
      effectiveMax: customMax !== undefined ? customMax : hi
    };
  }, [voxels, min_val, max_val, customMin, customMax]);

  const { positions, colors, sizes } = useMemo(() => {
    const posArr: number[] = [];
    const colArr: number[] = [];
    const sizeArr: number[] = [];

    voxels.forEach((vox) => {
      // Scale lat (6–21) → Z (+13 to –13)
      const z = 13.0 - ((vox.lat - 6.0) / 15.0) * 26.0;
      // Scale lon (80–94) → X (–13 to +13)
      const x = -13.0 + ((vox.lon - 80.0) / 14.0) * 26.0;
      // Scale depth (0–1500) → Y (+8 to –8)
      const y = 8.0 - (vox.depth / 1500.0) * 16.0;

      posArr.push(x, y, z);

      const [r, g, b] = getColorFromColormap(vox.val, effectiveMin, effectiveMax, colormap);
      colArr.push(r, g, b);

      // Larger points near surface, smaller deeper
      const depthFraction = vox.depth / 1500.0;
      sizeArr.push(1.2 - depthFraction * 0.5);
    });

    return {
      positions: new Float32Array(posArr),
      colors: new Float32Array(colArr),
      sizes: new Float32Array(sizeArr)
    };
  }, [voxels, effectiveMin, effectiveMax, colormap]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.75}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
};
