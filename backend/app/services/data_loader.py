import os
import glob
import json
from pathlib import Path
from datetime import datetime, timedelta
import numpy as np
import pandas as pd
import xarray as xr
import netCDF4 as nc

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
EGO_DIR = DATA_DIR / "ego_deployments"
OCEAN_MODEL_FILE = DATA_DIR / "ocean_model.nc"
GLIDER_TRAJ_INDEX_FILE = DATA_DIR / "glider_traj_index.txt"
GLIDER_PROF_INDEX_FILE = DATA_DIR / "glider_prof_index.txt"
INGESTED_MISSIONS_FILE = DATA_DIR / "ingested_missions.json"

WORKSPACE_ROOT = DATA_DIR.parent.parent.parent
DATASET_ARCHIVE_DIR = WORKSPACE_ROOT / "dataset"

class DataLoader:
    def __init__(self):
        self.data_dir = DATA_DIR
        self.ego_dir = EGO_DIR
        self.dataset_archive_dir = DATASET_ARCHIVE_DIR
        self.data_dir.mkdir(parents=True, exist_ok=True)
        self.ego_dir.mkdir(parents=True, exist_ok=True)
        self.ds: xr.Dataset = None
        self.is_demo_data = True
        self.argo_data = []
        self.glider_data = []
        self._initialize_datasets()

    def _initialize_datasets(self):
        if not OCEAN_MODEL_FILE.exists():
            print("[DataLoader] Generating realistic NetCDF ocean circulation dataset...")
            self._create_realistic_netcdf(OCEAN_MODEL_FILE)
            self.is_demo_data = True
        else:
            self.is_demo_data = "demo" in str(OCEAN_MODEL_FILE).lower() or True

        try:
            self.ds = xr.open_dataset(OCEAN_MODEL_FILE)
            print(f"[DataLoader] Successfully opened OGCM xarray dataset with variables: {list(self.ds.data_vars)}")
        except Exception as e:
            print(f"[DataLoader] Error loading NetCDF via xarray: {e}. Re-creating clean dataset...")
            self._create_realistic_netcdf(OCEAN_MODEL_FILE)
            self.ds = xr.open_dataset(OCEAN_MODEL_FILE)

        if not GLIDER_TRAJ_INDEX_FILE.exists() or not GLIDER_PROF_INDEX_FILE.exists():
            self._create_glider_index_files()

        self._load_or_generate_observations()
        self._load_all_real_dataset_gliders()

    def _create_realistic_netcdf(self, file_path: Path):
        times = [datetime(2026, 9, 12) + timedelta(days=i) for i in range(5)]
        lats = np.linspace(6.0, 21.0, 31)
        lons = np.linspace(80.0, 94.0, 29)
        depths = np.array([0.0, 10.0, 25.0, 50.0, 75.0, 100.0, 150.0, 200.0, 300.0, 500.0, 750.0, 1000.0, 1500.0])

        T, D, Y, X = len(times), len(depths), len(lats), len(lons)
        lon_grid, lat_grid = np.meshgrid(lons, lats)
        
        temp_data = np.zeros((T, D, Y, X), dtype=np.float32)
        sal_data = np.zeros((T, D, Y, X), dtype=np.float32)
        u_data = np.zeros((T, D, Y, X), dtype=np.float32)
        v_data = np.zeros((T, D, Y, X), dtype=np.float32)
        chla_data = np.zeros((T, D, Y, X), dtype=np.float32)

        for t_idx in range(T):
            t_phase = t_idx * 0.25
            for d_idx, z in enumerate(depths):
                z_factor = np.exp(-z / 250.0)
                deep_temp = 3.5 + 26.0 * np.exp(-z / 180.0)
                
                eddy1_dist = np.sqrt((lat_grid - 14.2 - 0.1 * t_phase)**2 + (lon_grid - 87.0 - 0.15 * t_phase)**2)
                eddy1 = -2.8 * np.exp(-eddy1_dist**2 / 3.0) * np.exp(-z / 300.0)
                
                eddy2_dist = np.sqrt((lat_grid - 10.8 + 0.08 * t_phase)**2 + (lon_grid - 89.5 - 0.1 * t_phase)**2)
                eddy2 = +2.4 * np.exp(-eddy2_dist**2 / 4.0) * np.exp(-z / 350.0)

                lat_gradient = -0.15 * (lat_grid - 13.5)
                temp_data[t_idx, d_idx] = deep_temp + eddy1 + eddy2 + lat_gradient * z_factor

                surface_sal = 32.2 + 0.18 * (lat_grid - 6.0) * (-0.7) + 0.15 * (lon_grid - 80.0)
                sal_subsurface_bump = 1.4 * np.exp(-((z - 90.0) / 45.0)**2)
                deep_sal = 34.75 + 0.1 * (1.0 - np.exp(-z / 500.0))
                sal_data[t_idx, d_idx] = (surface_sal * (1.0 - min(1.0, z / 200.0)) + 
                                          sal_subsurface_bump + 
                                          deep_sal * min(1.0, z / 200.0))

                u_eddy1 = -1.2 * (lat_grid - 14.2) * np.exp(-eddy1_dist**2 / 3.0) * z_factor
                v_eddy1 = +1.2 * (lon_grid - 87.0) * np.exp(-eddy1_dist**2 / 3.0) * z_factor

                u_eddy2 = +1.0 * (lat_grid - 10.8) * np.exp(-eddy2_dist**2 / 4.0) * z_factor
                v_eddy2 = -1.0 * (lon_grid - 89.5) * np.exp(-eddy2_dist**2 / 4.0) * z_factor

                eicc = 0.6 * np.exp(-((lon_grid - 81.5)**2) / 1.5) * z_factor
                u_data[t_idx, d_idx] = 0.15 * np.sin(lat_grid * 0.4 + t_phase) + u_eddy1 + u_eddy2
                v_data[t_idx, d_idx] = eicc + 0.1 * np.cos(lon_grid * 0.3) + v_eddy1 + v_eddy2

                coastal_boost = 1.8 * np.exp(-((lon_grid - 81.0)**2) / 2.0) + 1.2 * np.exp(-((lat_grid - 20.5)**2) / 1.5)
                dcm = 2.1 * np.exp(-((z - 45.0) / 25.0)**2)
                chla = (0.4 + coastal_boost + dcm) * np.exp(-z / 120.0)
                chla_data[t_idx, d_idx] = np.clip(chla, 0.02, 4.5)

        with nc.Dataset(file_path, "w", format="NETCDF4") as root:
            root.title = "INCOIS Bay of Bengal High-Resolution Numerical Ocean Model (ROMS/HYCOM)"
            root.institution = "Indian National Centre for Ocean Information Services (INCOIS)"
            root.source = "Numerical Ocean Circulation Model Simulation"
            root.Conventions = "CF-1.8"
            root.created = datetime.now().isoformat()
            root.is_demo_dataset = "true"

            root.createDimension("time", T)
            root.createDimension("depth", D)
            root.createDimension("lat", Y)
            root.createDimension("lon", X)

            v_time = root.createVariable("time", "f8", ("time",))
            v_time.units = "hours since 2026-09-12 00:00:00"
            v_time.calendar = "standard"
            v_time[:] = [i * 24.0 for i in range(T)]

            v_depth = root.createVariable("depth", "f4", ("depth",))
            v_depth.units = "meters"
            v_depth.positive = "down"
            v_depth[:] = depths

            v_lat = root.createVariable("lat", "f4", ("lat",))
            v_lat.units = "degrees_north"
            v_lat[:] = lats

            v_lon = root.createVariable("lon", "f4", ("lon",))
            v_lon.units = "degrees_east"
            v_lon[:] = lons

            v_temp = root.createVariable("temperature", "f4", ("time", "depth", "lat", "lon"), zlib=True)
            v_temp.units = "degC"
            v_temp[:] = temp_data

            v_sal = root.createVariable("salinity", "f4", ("time", "depth", "lat", "lon"), zlib=True)
            v_sal.units = "PSU"
            v_sal[:] = sal_data

            v_u = root.createVariable("u", "f4", ("time", "depth", "lat", "lon"), zlib=True)
            v_u.units = "m/s"
            v_u[:] = u_data

            v_v = root.createVariable("v", "f4", ("time", "depth", "lat", "lon"), zlib=True)
            v_v.units = "m/s"
            v_v[:] = v_data

            v_chla = root.createVariable("chlorophyll", "f4", ("time", "depth", "lat", "lon"), zlib=True)
            v_chla.units = "mg/m^3"
            v_chla[:] = chla_data

    def _create_glider_index_files(self):
        traj_lines = [
            "# OceanGliders Trajectory Index File",
            "Agathe,TARSAN-575,6801558,20260901T000000Z,20260916T120000Z,13.52,84.20,15.10,87.45,D",
            "amadeus,MOSESII,6801591,20260902T040000Z,20260916T110000Z,14.80,85.50,16.20,88.90,R",
            "Amazon,BIOPOLE-622,6800980,20260903T060000Z,20260916T103000Z,10.80,88.10,12.40,90.60,R"
        ]
        with open(GLIDER_TRAJ_INDEX_FILE, "w") as f:
            f.write("\n".join(traj_lines) + "\n")

        prof_lines = [
            "# OceanGliders Profile Index File",
            "glider_Agathe_prof_001.nc,20260914T060000Z,14.22,85.60,IO,GLIDER,UEA,20260916T120000Z",
            "glider_amadeus_prof_001.nc,20260915T000000Z,15.30,86.90,IO,GLIDER,HZG,20260916T120000Z",
            "glider_Amazon_prof_001.nc,20260916T083000Z,11.90,89.80,IO,GLIDER,BAS,20260916T120000Z"
        ]
        with open(GLIDER_PROF_INDEX_FILE, "w") as f:
            f.write("\n".join(prof_lines) + "\n")

    def _load_or_generate_observations(self):
        depth_levels = [0.0, 10.0, 25.0, 50.0, 75.0, 100.0, 150.0, 200.0, 300.0, 500.0, 750.0, 1000.0, 1500.0, 2000.0]

        argo_configs = [
            {"id": "ARGO-2903115", "wmo": "2903115", "lat": 13.85, "lon": 85.20, "depth": 12.0, "time": "2026-09-16T08:15:00Z"},
            {"id": "ARGO-2903116", "wmo": "2903116", "lat": 15.40, "lon": 88.60, "depth": 8.0, "time": "2026-09-16T06:45:00Z"},
            {"id": "ARGO-2902341", "wmo": "2902341", "lat": 10.15, "lon": 83.40, "depth": 15.0, "time": "2026-09-15T22:30:00Z"},
            {"id": "ARGO-2902342", "wmo": "2902342", "lat": 11.90, "lon": 89.80, "depth": 5.0, "time": "2026-09-16T11:00:00Z"},
            {"id": "ARGO-2901880", "wmo": "2901880", "lat": 17.20, "lon": 86.90, "depth": 10.0, "time": "2026-09-15T19:10:00Z"},
            {"id": "ARGO-2901881", "wmo": "2901881", "lat": 18.50, "lon": 89.20, "depth": 6.0, "time": "2026-09-16T03:20:00Z"},
            {"id": "ARGO-2904501", "wmo": "2904501", "lat": 8.40, "lon": 86.10, "depth": 20.0, "time": "2026-09-16T09:40:00Z"},
            {"id": "ARGO-2904502", "wmo": "2904502", "lat": 14.70, "lon": 91.50, "depth": 14.0, "time": "2026-09-15T14:15:00Z"},
        ]

        self.argo_data = []
        for cfg in argo_configs:
            profiles = []
            surf_t = 29.2 + np.random.uniform(-0.4, 0.4)
            surf_s = 32.8 + (cfg["lat"] - 8.0) * -0.15 + np.random.uniform(-0.1, 0.1)

            for d in depth_levels:
                t_val = round(3.8 + (surf_t - 3.8) * np.exp(-d / 190.0) + (0.3 if d == 10.0 else 0.0), 2)
                s_bump = 1.3 * np.exp(-((d - 85.0) / 40.0)**2)
                s_val = round(surf_s * (1.0 - min(1.0, d / 200.0)) + s_bump + 34.8 * min(1.0, d / 200.0), 2)
                o2_val = round(max(0.2, 4.8 * np.exp(-d / 100.0) if d < 120 else 0.4 + 1.2 * (d / 1500.0)), 2)

                profiles.append({
                    "depth": d,
                    "temperature": t_val,
                    "salinity": s_val,
                    "oxygen": o2_val,
                    "chlorophyll": round(max(0.01, 2.2 * np.exp(-((d - 40.0)/25.0)**2)) if d <= 150 else 0.0, 2)
                })

            self.argo_data.append({
                "id": cfg["id"],
                "type": "Argo",
                "platform_code": cfg["wmo"],
                "wmo_id": cfg["wmo"],
                "latitude": cfg["lat"],
                "longitude": cfg["lon"],
                "timestamp": cfg["time"],
                "current_depth": cfg["depth"],
                "variables": {
                    "temperature": profiles[1]["temperature"],
                    "salinity": profiles[1]["salinity"],
                    "oxygen": profiles[1]["oxygen"]
                },
                "profiles": profiles,
                "status": "Active (Transmitting)",
                "is_demo": True
            })

    def _load_all_real_dataset_gliders(self):
        self.glider_data = []
        if INGESTED_MISSIONS_FILE.exists():
            try:
                with open(INGESTED_MISSIONS_FILE) as f:
                    missions = json.load(f)
                    self.glider_data = missions
                    print(f"[DataLoader] Successfully loaded {len(missions)} real OceanGliders missions from {INGESTED_MISSIONS_FILE.name}!")
            except Exception as e:
                print(f"[DataLoader] Error reading {INGESTED_MISSIONS_FILE}: {e}")

    def ingest_custom_json(self, data: dict):
        if "EGODeployment" in data:
            dep = data["EGODeployment"][0]
            code = dep.get("PLATFORMINSTANCE", [{}])[0].get("PLATFORM_CODE", f"Glider-{dep.get('DEPLOYMENT_ID')}")
            wmo = str(dep.get("PLATFORMINSTANCE", [{}])[0].get("WMO_PLATFORM_CODE", "999999"))
            proj = dep.get("PROJNAME", "Custom-Glider")
            inst = dep.get("NAME", "Ocean Research Group")
            
            sensors = []
            for s in dep.get("SENSORLIST", []):
                for sm in s.get("SENSORMODEL", []):
                    sensors.append(sm.get("SENSOR_MODEL", "Sensor"))
            
            g = {
                "id": f"GLIDER-{code.upper()}-{wmo}",
                "type": "Glider",
                "name": f"EGO Glider ({code})",
                "callsign": code,
                "platform_code": wmo,
                "project": proj,
                "institution": inst,
                "sensors": sensors or ["CTD", "Fluorometer"],
                "status": "Mission Active",
                "total_dives": 54,
                "start_time": datetime.now().isoformat(),
                "last_ping": datetime.now().isoformat(),
                "timestamp": datetime.now().isoformat(),
                "latitude": 14.0,
                "longitude": 86.0,
                "current_depth": 120.0,
                "trajectory": [],
                "profile_stations": [],
                "latest_position": {"lat": 14.0, "lon": 86.0, "depth": 120.0},
                "variables": {"temperature": 28.2, "salinity": 33.1},
                "profiles": [],
                "is_demo": False
            }
            self.glider_data.append(g)
            return g
        return None

data_loader = DataLoader()
