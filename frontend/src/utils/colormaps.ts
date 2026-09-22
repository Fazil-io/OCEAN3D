import { ColormapName } from '../types';

export const COLORMAPS: Record<ColormapName, { name: string; stops: [number, string][] }> = {
  // Google's Turbo — highest dynamic range, vivid red-orange-yellow-green-cyan-blue-purple
  turbo: {
    name: 'Turbo (Vivid Scientific Thermal)',
    stops: [
      [0.000, '#1f0044'],
      [0.040, '#30123b'],
      [0.080, '#3d1691'],
      [0.120, '#4145ab'],
      [0.160, '#3c6fcd'],
      [0.200, '#2f96ea'],
      [0.250, '#18bbf0'],
      [0.300, '#12d4e0'],
      [0.360, '#1de6c4'],
      [0.420, '#27f29a'],
      [0.480, '#49f872'],
      [0.540, '#76fc4a'],
      [0.600, '#a8f826'],
      [0.650, '#c8f227'],
      [0.700, '#e7e21a'],
      [0.750, '#fcc31a'],
      [0.800, '#fba200'],
      [0.850, '#f47c11'],
      [0.900, '#e35114'],
      [0.940, '#cc2b0c'],
      [0.970, '#ab1208'],
      [1.000, '#7a0403']
    ]
  },
  // Haline — oceanographic salinity standard: deep navy -> teal -> lime cream
  haline: {
    name: 'Haline (Ocean Salinity Standard)',
    stops: [
      [0.00, '#2b0048'],
      [0.08, '#1a084c'],
      [0.16, '#0d1c78'],
      [0.24, '#0a3e99'],
      [0.32, '#0d62a8'],
      [0.40, '#0f8ab0'],
      [0.48, '#16b0af'],
      [0.56, '#2dcca0'],
      [0.64, '#50e48b'],
      [0.72, '#7ff56c'],
      [0.80, '#b0fc56'],
      [0.88, '#d8fb9a'],
      [0.94, '#f0fdcc'],
      [1.00, '#fdfde8']
    ]
  },
  // Viridis — perceptually uniform, colorblind-safe, scientific standard
  viridis: {
    name: 'Viridis (Perceptually Uniform)',
    stops: [
      [0.00, '#440154'],
      [0.08, '#471063'],
      [0.16, '#482475'],
      [0.24, '#453882'],
      [0.32, '#3d4d8a'],
      [0.40, '#355f8d'],
      [0.48, '#2d708e'],
      [0.56, '#25818e'],
      [0.64, '#1f9a8a'],
      [0.72, '#27c080'],
      [0.80, '#52c569'],
      [0.88, '#8bd646'],
      [0.94, '#b5de2b'],
      [1.00, '#fde725']
    ]
  },
  // Plasma — very vivid purple-magenta-orange-yellow
  plasma: {
    name: 'Plasma (Vivid High-Energy)',
    stops: [
      [0.00, '#0c0887'],
      [0.08, '#2c0594'],
      [0.16, '#46039f'],
      [0.24, '#5d01a6'],
      [0.32, '#7201a8'],
      [0.40, '#8702a5'],
      [0.48, '#9c179e'],
      [0.56, '#b12a90'],
      [0.64, '#c43c75'],
      [0.72, '#d8576b'],
      [0.80, '#e97158'],
      [0.88, '#f48849'],
      [0.94, '#fba337'],
      [1.00, '#f0f921']
    ]
  },
  // Coolwarm — diverging blue-white-red for anomalies (SST anomaly, thermocline)
  coolwarm: {
    name: 'Coolwarm (Thermal Anomaly Diverging)',
    stops: [
      [0.00, '#053061'],
      [0.08, '#08439c'],
      [0.16, '#2166ac'],
      [0.26, '#4393c3'],
      [0.36, '#74b9d8'],
      [0.44, '#abdcf0'],
      [0.50, '#f7f7f7'],
      [0.56, '#fddbc7'],
      [0.64, '#f4a582'],
      [0.74, '#d6604d'],
      [0.84, '#b2182b'],
      [0.92, '#8c0723'],
      [1.00, '#67001f']
    ]
  },
  // Spectral — wide multi-hue for chlorophyll/biogeochemistry
  spectral: {
    name: 'Spectral (Multi-Band Oceanography)',
    stops: [
      [0.00, '#2d0059'],
      [0.08, '#5e4fa2'],
      [0.16, '#3567b5'],
      [0.26, '#3288bd'],
      [0.36, '#66c2a5'],
      [0.44, '#abdda4'],
      [0.50, '#e6f598'],
      [0.58, '#ffffbf'],
      [0.66, '#fee08b'],
      [0.74, '#fdae61'],
      [0.82, '#f46d43'],
      [0.90, '#d53e4f'],
      [0.96, '#9e0142'],
      [1.00, '#67001f']
    ]
  }
};

export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;
  return [r, g, b];
}

export function getColorFromColormap(
  val: number,
  min: number,
  max: number,
  cmapName: ColormapName = 'turbo'
): [number, number, number] {
  const span = max - min;
  const norm = Math.max(0, Math.min(1, span <= 1e-6 ? 0.5 : (val - min) / span));
  const stops = COLORMAPS[cmapName]?.stops ?? COLORMAPS.turbo.stops;

  // Binary search for efficiency with many stops
  let lo = 0, hi = stops.length - 2;
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2);
    if (stops[mid][0] <= norm) lo = mid;
    else hi = mid - 1;
  }

  const [p0, c0] = stops[lo];
  const [p1, c1] = stops[lo + 1] ?? stops[lo];
  const denom = p1 - p0;
  const t = denom > 1e-9 ? Math.max(0, Math.min(1, (norm - p0) / denom)) : 0;

  const [r0, g0, b0] = hexToRgb(c0);
  const [r1, g1, b1] = hexToRgb(c1);

  // Apply gamma correction for perceptually better gradients
  const gamma = 2.2;
  const toLinear = (c: number) => Math.pow(c, gamma);
  const toGamma = (c: number) => Math.pow(Math.max(0, c), 1 / gamma);

  return [
    toGamma(toLinear(r0) + t * (toLinear(r1) - toLinear(r0))),
    toGamma(toLinear(g0) + t * (toLinear(g1) - toLinear(g0))),
    toGamma(toLinear(b0) + t * (toLinear(b1) - toLinear(b0)))
  ];
}

export function generateGradientCss(cmapName: ColormapName = 'turbo'): string {
  const stops = COLORMAPS[cmapName]?.stops ?? COLORMAPS.turbo.stops;
  const gradStops = stops.map(([p, c]) => `${c} ${(p * 100).toFixed(1)}%`).join(', ');
  return `linear-gradient(to right, ${gradStops})`;
}
