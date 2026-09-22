import React, { useMemo } from 'react';
import * as THREE from 'three';
import { OceanSlice, ColormapName } from '../types';
import { getColorFromColormap } from '../utils/colormaps';

interface SliceLayerProps {
  sliceData: OceanSlice;
  colormap: ColormapName;
  customMin?: number;
  customMax?: number;
  autoContrast?: boolean;
}

export const SliceLayer: React.FC<SliceLayerProps> = ({
  sliceData,
  colormap,
  customMin,
  customMax,
  autoContrast = true
}) => {
  const { values, min_val, max_val, depth } = sliceData;

  // Compute actual data range with percentile clipping for better contrast
  const { localMin, localMax } = useMemo(() => {
    const flat: number[] = [];
    values.forEach((row) => {
      row.forEach((val) => {
        if (val !== null && !isNaN(val)) flat.push(val);
      });
    });
    if (flat.length === 0) return { localMin: min_val, localMax: max_val };

    flat.sort((a, b) => a - b);
    // Clip 2nd–98th percentile for better contrast
    const p2 = flat[Math.floor(flat.length * 0.02)];
    const p98 = flat[Math.floor(flat.length * 0.98)];
    return { localMin: p2, localMax: p98 };
  }, [values, min_val, max_val]);

  const effectiveMin = customMin !== undefined ? customMin : (autoContrast ? localMin : min_val);
  const effectiveMax = customMax !== undefined ? customMax : (autoContrast ? localMax : max_val);

  // Map depth to vertical position (0m = top = 8.0, 1500m = bottom = -8.0)
  const yPos = 8.0 - (depth / 1500.0) * 16.0;

  const texture = useMemo(() => {
    const srcRows = values.length;
    if (srcRows === 0) return null;
    const srcCols = values[0].length;

    // Higher resolution texture for sharper gradient display
    const outSize = 256;
    const data = new Uint8Array(outSize * outSize * 4);

    for (let outR = 0; outR < outSize; outR++) {
      const srcY = (outR / (outSize - 1)) * (srcRows - 1);
      const r0 = Math.floor(srcY);
      const r1 = Math.min(srcRows - 1, r0 + 1);
      const ty = srcY - r0;

      for (let outC = 0; outC < outSize; outC++) {
        const srcX = (outC / (outSize - 1)) * (srcCols - 1);
        const c0 = Math.floor(srcX);
        const c1 = Math.min(srcCols - 1, c0 + 1);
        const tx = srcX - c0;

        const v00 = values[r0]?.[c0] ?? effectiveMin;
        const v01 = values[r0]?.[c1] ?? effectiveMin;
        const v10 = values[r1]?.[c0] ?? effectiveMin;
        const v11 = values[r1]?.[c1] ?? effectiveMin;

        // Bilinear interpolation
        const vTop = v00 * (1 - tx) + v01 * tx;
        const vBot = v10 * (1 - tx) + v11 * tx;
        const val = vTop * (1 - ty) + vBot * ty;

        const [r, g, b] = getColorFromColormap(val, effectiveMin, effectiveMax, colormap);

        const pixelIdx = (outR * outSize + outC) * 4;
        data[pixelIdx]     = Math.round(Math.min(255, r * 255));
        data[pixelIdx + 1] = Math.round(Math.min(255, g * 255));
        data[pixelIdx + 2] = Math.round(Math.min(255, b * 255));
        data[pixelIdx + 3] = 242; // Near-opaque for rich color rendering
      }
    }

    const tex = new THREE.DataTexture(data, outSize, outSize, THREE.RGBAFormat);
    tex.needsUpdate = true;
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.generateMipmaps = true;
    tex.anisotropy = 4;
    return tex;
  }, [values, effectiveMin, effectiveMax, colormap]);

  if (!texture) return null;

  return (
    <group position={[0, yPos, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[26, 26]} />
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={0.97}
          side={THREE.DoubleSide}
          roughness={0.05}
          metalness={0.0}
          emissive={new THREE.Color(0.04, 0.04, 0.04)}
        />
      </mesh>

      {/* Glowing edge outline */}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(26, 26)]} />
        <lineBasicMaterial color="#00f0ff" transparent opacity={0.6} />
      </lineSegments>
    </group>
  );
};
