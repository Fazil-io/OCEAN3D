from pydantic import BaseModel, Field
from typing import List, Dict, Optional, Any, Union

class CoordinateBounds(BaseModel):
    lat_min: float
    lat_max: float
    lon_min: float
    lon_max: float
    depth_min: float
    depth_max: float

class DatasetMetadata(BaseModel):
    title: str
    institution: str
    source_type: str
    is_demo: bool = True
    time_steps: List[str]
    depth_levels: List[float]
    latitudes: List[float]
    longitudes: List[float]
    variables: Dict[str, Dict[str, Any]]
    bounds: CoordinateBounds

class OceanSlice(BaseModel):
    variable: str
    units: str
    depth: float
    timestamp: str
    lats: List[float]
    lons: List[float]
    values: List[List[Optional[float]]]
    min_val: float
    max_val: float
    is_demo: bool = True

class OceanVolume(BaseModel):
    variable: str
    units: str
    timestamp: str
    lats: List[float]
    lons: List[float]
    depths: List[float]
    grid_shape: List[int]
    voxels: List[Dict[str, Any]] # sample points with {x, y, z, val}
    min_val: float
    max_val: float
    downsampled: bool = False
    is_demo: bool = True

class CurrentVectorField(BaseModel):
    timestamp: str
    depth: float
    lats: List[float]
    lons: List[float]
    u: List[List[float]]
    v: List[List[float]]
    speed: List[List[float]]
    particles: List[Dict[str, float]] # seed particles with {lat, lon, u, v, speed}
    max_speed: float

class ProfileMeasurement(BaseModel):
    depth: float
    temperature: Optional[float] = None
    salinity: Optional[float] = None
    oxygen: Optional[float] = None
    chlorophyll: Optional[float] = None

class Observation(BaseModel):
    id: str
    type: str # "Argo" or "Glider"
    platform_code: str
    wmo_id: Optional[str] = None
    latitude: float
    longitude: float
    timestamp: str
    current_depth: float
    variables: Dict[str, Optional[float]]
    profiles: List[ProfileMeasurement]
    status: str = "Active"
    is_demo: bool = True

class GliderTrajectoryPoint(BaseModel):
    latitude: float
    longitude: float
    depth: float
    timestamp: str
    temperature: Optional[float] = None
    salinity: Optional[float] = None

class GliderMission(BaseModel):
    id: str
    name: str
    callsign: str
    status: str
    total_dives: int
    start_time: str
    last_ping: str
    trajectory: List[GliderTrajectoryPoint]
    profile_stations: List[Dict[str, Any]]
    latest_position: Dict[str, float]
    variables: Dict[str, Any]
    is_demo: bool = True

class ComparisonProfilePoint(BaseModel):
    depth: float
    model_val: Optional[float]
    obs_val: Optional[float]
    diff: Optional[float]

class ModelComparison(BaseModel):
    observation_id: str
    observation_type: str
    variable: str
    units: str
    latitude: float
    longitude: float
    depth: float
    timestamp: str
    model_value: float
    observation_value: float
    difference: float
    percent_difference: float
    rmse: float
    mean_bias: float
    profile_comparison: List[ComparisonProfilePoint]
    is_demo: bool = True

class DataSourceItem(BaseModel):
    id: str
    name: str
    provider: str
    data_type: str
    format: str
    status: str # "CONNECTED" or "INTEGRATION READY"
    update_frequency: str
    coverage: str
    endpoint_or_path: str
    description: str
