from fastapi import APIRouter, HTTPException, Query, Body
from typing import List, Optional, Dict, Any

from app.processing.ocean_engine import ocean_engine
from app.services.data_loader import data_loader
from app.models.schemas import (
    DatasetMetadata,
    OceanSlice,
    OceanVolume,
    CurrentVectorField,
    Observation,
    GliderMission,
    ModelComparison,
    DataSourceItem
)

router = APIRouter(prefix="/api", tags=["ocean"])

@router.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "SIH26067 3D Ocean Visualizer API",
        "team": "CodeHydra",
        "is_demo": data_loader.is_demo_data,
        "dataset": "INCOIS Bay of Bengal OGCM",
        "gliders_loaded": len(data_loader.glider_data)
    }

@router.get("/ocean/metadata", response_model=DatasetMetadata)
def get_ocean_metadata():
    return ocean_engine.get_metadata()

@router.get("/ocean/slice", response_model=OceanSlice)
def get_ocean_slice(
    variable: str = Query("temperature", description="Variable: temperature, salinity, chlorophyll, or current"),
    depth: float = Query(0.0, description="Target depth in meters"),
    time_idx: int = Query(0, description="Time index (0-4)")
):
    return ocean_engine.get_slice(variable=variable, depth=depth, time_idx=time_idx)

@router.get("/ocean/volume", response_model=OceanVolume)
def get_ocean_volume(
    variable: str = Query("temperature", description="Variable: temperature, salinity, chlorophyll"),
    time_idx: int = Query(0, description="Time index"),
    low_bandwidth: bool = Query(False, description="Whether to downsample grid for low bandwidth")
):
    return ocean_engine.get_volume(variable=variable, time_idx=time_idx, low_bandwidth=low_bandwidth)

@router.get("/ocean/currents", response_model=CurrentVectorField)
def get_current_vectors(
    depth: float = Query(0.0, description="Target depth in meters"),
    time_idx: int = Query(0, description="Time index"),
    low_bandwidth: bool = Query(False, description="Reduce particle count for low bandwidth")
):
    return ocean_engine.get_current_field(depth=depth, time_idx=time_idx, low_bandwidth=low_bandwidth)

@router.get("/observations", response_model=List[Observation])
def get_observations(obs_type: Optional[str] = Query(None, description="Filter by type: Argo or Glider")):
    data = data_loader.argo_data
    if obs_type:
        data = [x for x in data if x["type"].lower() == obs_type.lower()]
    return data

@router.get("/observations/{id}", response_model=Observation)
def get_observation_by_id(id: str):
    for obs in data_loader.argo_data:
        if obs["id"].lower() == id.lower() or obs["platform_code"].lower() == id.lower():
            return obs
    raise HTTPException(status_code=404, detail=f"Observation {id} not found")

@router.get("/gliders", response_model=List[GliderMission])
def get_gliders():
    return data_loader.glider_data

@router.get("/gliders/{id}", response_model=GliderMission)
def get_glider_by_id(id: str):
    for g in data_loader.glider_data:
        if g["id"].lower() == id.lower() or g["callsign"].lower() == id.lower() or g["platform_code"].lower() == id.lower():
            return g
    raise HTTPException(status_code=404, detail=f"Glider mission {id} not found")

@router.post("/gliders/ingest")
def ingest_glider_dataset(manifest: Dict[str, Any] = Body(...)):
    """Ingests raw OceanGliders / EGO deployment JSON dynamically."""
    res = data_loader.ingest_custom_json(manifest)
    if not res:
        raise HTTPException(status_code=400, detail="Invalid EGO format. Expected EGODeployment or global_attributes.")
    return {
        "status": "success",
        "message": f"Successfully ingested glider mission {res['id']}",
        "glider": res
    }

@router.get("/compare", response_model=ModelComparison)
def compare_model_vs_observation(
    obs_id: str = Query(..., description="Argo float or Glider ID"),
    variable: str = Query("temperature", description="Comparison variable")
):
    comp = ocean_engine.compare_model_vs_obs(obs_id=obs_id, variable=variable)
    if not comp:
        raise HTTPException(status_code=404, detail=f"Comparison failed for observation {obs_id}")
    return comp

@router.get("/datasources", response_model=List[DataSourceItem])
def get_datasources():
    return [
        DataSourceItem(
            id="INCOIS_BOB_MODEL",
            name="INCOIS Bay of Bengal High-Res OGCM",
            provider="Indian National Centre for Ocean Information Services (INCOIS), MoES",
            data_type="Numerical Ocean Circulation Model (ROMS/HYCOM)",
            format="NetCDF-4 / CF-1.8 Compliant",
            status="CONNECTED",
            update_frequency="Daily Synoptic / Forecast Cycle",
            coverage="Northern Indian Ocean (5°N - 22°N, 78°E - 94°E)",
            endpoint_or_path="backend/app/data/ocean_model.nc",
            description="High-resolution ocean hydrodynamic model delivering 3D potential temperature, practical salinity, zonal/meridional currents, and biogeochemical chlorophyll-a fields."
        ),
        DataSourceItem(
            id="INCOIS_ARGO_GDAC",
            name="Argo Floats Regional DAC (India GDAC)",
            provider="INCOIS Ocean Observation Systems / Argo GDAC",
            data_type="In-situ Profiling Floats CTD Observations",
            format="NetCDF / ASCII Profile Data",
            status="CONNECTED",
            update_frequency="Real-time (Every 10-day cycle)",
            coverage="Indian Ocean Basin (Active WMO Flotilla)",
            endpoint_or_path="backend/app/data/argo_profiles/",
            description="Autonomous profiling floats measuring temperature and salinity from 2000m depth to sea surface, providing essential in-situ ground-truth observations."
        ),
        DataSourceItem(
            id="OCEANGLIDERS_EGO_REGISTRY",
            name="OceanGliders / EGO In-Situ Deployment Registry",
            provider="OceanGliders / EGO / UEA / BAS / HZG",
            data_type="Autonomous Glider Missions, Sensor Suites & Sawtooth Dives",
            format="EGO JSON Manifests / NetCDF Trajectories",
            status="CONNECTED",
            update_frequency="Dynamic Ingestion / Post-Dive Satellite Uplink",
            coverage="Global & Regional Indian Ocean Transects",
            endpoint_or_path="backend/app/data/ego_deployments/",
            description="Parsed missions: Agathe (WMO 6801558), amadeus (WMO 6801591), Amazon (WMO 6800980) with full sensor calibration suites (CTD, Optode, PAR, Fluorometer)."
        ),
        DataSourceItem(
            id="COPERNICUS_GLOBAL_REANALYSIS",
            name="Copernicus Marine Service (CMEMS Global)",
            provider="European Union Copernicus Marine Service",
            data_type="Global Ocean Physics Analysis and Forecast",
            format="OPeNDAP / NetCDF / Zarr",
            status="INTEGRATION READY",
            update_frequency="Daily Multi-Year Reanalysis",
            coverage="Global Ocean Grid (1/12° resolution)",
            endpoint_or_path="https://marine.copernicus.eu/services/opendap",
            description="Ready for live federated streaming via OPeNDAP or Copernicus Python API credentials without modifying the 3D explorer frontend."
        )
    ]
