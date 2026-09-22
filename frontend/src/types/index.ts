export interface CoordinateBounds {
  lat_min: number;
  lat_max: number;
  lon_min: number;
  lon_max: number;
  depth_min: number;
  depth_max: number;
}

export interface VariableMeta {
  name: string;
  units: string;
  min: number;
  max: number;
  colormap: string;
  description: string;
}

export interface DatasetMetadata {
  title: string;
  institution: string;
  source_type: string;
  is_demo: boolean;
  time_steps: string[];
  depth_levels: number[];
  latitudes: number[];
  longitudes: number[];
  variables: Record<string, VariableMeta>;
  bounds: CoordinateBounds;
}

export interface OceanSlice {
  variable: string;
  units: string;
  depth: number;
  timestamp: string;
  lats: number[];
  lons: number[];
  values: (number | null)[][];
  min_val: number;
  max_val: number;
  is_demo: boolean;
}

export interface VoxelPoint {
  lat: number;
  lon: number;
  depth: number;
  val: number;
}

export interface OceanVolume {
  variable: string;
  units: string;
  timestamp: string;
  lats: number[];
  lons: number[];
  depths: number[];
  grid_shape: number[];
  voxels: VoxelPoint[];
  min_val: number;
  max_val: number;
  downsampled?: boolean;
  is_demo: boolean;
}

export interface ParticleSeed {
  lat: number;
  lon: number;
  u: number;
  v: number;
  speed: number;
}

export interface CurrentVectorField {
  timestamp: string;
  depth: number;
  lats: number[];
  lons: number[];
  u: number[][];
  v: number[][];
  speed: number[][];
  particles: ParticleSeed[];
  max_speed: number;
}

export interface ProfileMeasurement {
  depth: number;
  temperature?: number;
  salinity?: number;
  oxygen?: number;
  chlorophyll?: number;
}

export interface Observation {
  id: string;
  type: string;
  platform_code: string;
  wmo_id?: string;
  latitude: number;
  longitude: number;
  timestamp: string;
  current_depth: number;
  variables: {
    temperature?: number;
    salinity?: number;
    oxygen?: number;
    chlorophyll?: number;
  };
  profiles: ProfileMeasurement[];
  status: string;
  is_demo: boolean;
}

export interface GliderTrajectoryPoint {
  latitude: number;
  longitude: number;
  depth: number;
  timestamp: string;
  temperature?: number;
  salinity?: number;
}

export interface ProfileStation {
  station_id: string;
  index: number;
  lat: number;
  lon: number;
  depth_max: number;
  time: string;
}

export interface GliderMission {
  id: string;
  type: string;
  platform_code: string;
  name: string;
  callsign: string;
  project?: string;
  institution?: string;
  sensors?: string[];
  status: string;
  total_dives: number;
  start_time: string;
  last_ping: string;
  timestamp: string;
  latitude: number;
  longitude: number;
  current_depth: number;
  trajectory: GliderTrajectoryPoint[];
  profile_stations: ProfileStation[];
  variables: {
    temperature?: number;
    salinity?: number;
    oxygen?: number;
    chlorophyll?: number;
  };
  profiles: ProfileMeasurement[];
  is_demo: boolean;
}

export interface ComparisonProfilePoint {
  depth: number;
  model_val?: number;
  obs_val?: number;
  diff?: number;
}

export interface ModelComparison {
  observation_id: string;
  observation_type: string;
  variable: string;
  units: string;
  latitude: number;
  longitude: number;
  depth: number;
  timestamp: string;
  model_value: number;
  observation_value: number;
  difference: number;
  percent_difference: number;
  rmse: number;
  mean_bias: number;
  profile_comparison: ComparisonProfilePoint[];
  is_demo: boolean;
}

export interface DataSourceItem {
  id: string;
  name: string;
  provider: string;
  data_type: string;
  format: string;
  status: 'CONNECTED' | 'INTEGRATION READY' | string;
  update_frequency: string;
  coverage: string;
  endpoint_or_path: string;
  description: string;
}

export type ColormapName = 'turbo' | 'haline' | 'viridis' | 'plasma' | 'coolwarm' | 'spectral';
export type VisualizationMode = 'slice' | 'volume' | 'currents' | 'insitu' | 'profile';
export type CameraPreset = 'iso' | 'top' | 'side' | 'reset';
