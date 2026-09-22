from typing import List, Dict, Any, Optional
import numpy as np
import xarray as xr
from app.services.data_loader import data_loader
from app.models.schemas import (
    DatasetMetadata,
    OceanSlice,
    OceanVolume,
    CurrentVectorField,
    ModelComparison,
    ComparisonProfilePoint,
    CoordinateBounds
)

class OceanEngine:
    def __init__(self):
        self.loader = data_loader

    @property
    def ds(self) -> xr.Dataset:
        return self.loader.ds

    def get_metadata(self) -> DatasetMetadata:
        ds = self.ds
        lats = [round(float(x), 4) for x in ds.lat.values]
        lons = [round(float(x), 4) for x in ds.lon.values]
        depths = [round(float(x), 2) for x in ds.depth.values]
        
        times = []
        if "time" in ds:
            times = [f"2026-09-{12+i:02d}T00:00:00Z" for i in range(len(ds.time))]

        variables_meta = {
            "temperature": {
                "name": "Temperature",
                "units": "°C",
                "min": float(np.nanmin(ds.temperature.values)),
                "max": float(np.nanmax(ds.temperature.values)),
                "colormap": "turbo",
                "description": "Potential Sea Water Temperature (°C)"
            },
            "salinity": {
                "name": "Salinity",
                "units": "PSU",
                "min": float(np.nanmin(ds.salinity.values)),
                "max": float(np.nanmax(ds.salinity.values)),
                "colormap": "haline",
                "description": "Practical Salinity Units (PSU)"
            },
            "chlorophyll": {
                "name": "Chlorophyll-a",
                "units": "mg/m³",
                "min": float(np.nanmin(ds.chlorophyll.values)),
                "max": float(np.nanmax(ds.chlorophyll.values)),
                "colormap": "viridis",
                "description": "Mass Concentration of Chlorophyll-a (mg/m³)"
            },
            "current": {
                "name": "Ocean Current Velocity",
                "units": "m/s",
                "min": 0.0,
                "max": float(np.nanmax(np.sqrt(ds.u.values**2 + ds.v.values**2))),
                "colormap": "plasma",
                "description": "Horizontal Current Speed (m/s) with U/V Vector Directions"
            }
        }

        bounds = CoordinateBounds(
            lat_min=min(lats),
            lat_max=max(lats),
            lon_min=min(lons),
            lon_max=max(lons),
            depth_min=min(depths),
            depth_max=max(depths)
        )

        return DatasetMetadata(
            title=getattr(ds, "title", "INCOIS Numerical Ocean Circulation Model"),
            institution=getattr(ds, "institution", "Indian National Centre for Ocean Information Services (INCOIS)"),
            source_type="3D High-Resolution Ocean General Circulation Model (OGCM)",
            is_demo=self.loader.is_demo_data,
            time_steps=times,
            depth_levels=depths,
            latitudes=lats,
            longitudes=lons,
            variables=variables_meta,
            bounds=bounds
        )

    def get_slice(self, variable: str, depth: float = 0.0, time_idx: int = 0) -> OceanSlice:
        ds = self.ds
        time_idx = max(0, min(time_idx, len(ds.time) - 1))
        
        nearest_depth_idx = int(np.abs(ds.depth.values - depth).argmin())
        actual_depth = float(ds.depth.values[nearest_depth_idx])

        if variable == "current":
            u_slice = ds.u.isel(time=time_idx, depth=nearest_depth_idx).values
            v_slice = ds.v.isel(time=time_idx, depth=nearest_depth_idx).values
            val_matrix = np.sqrt(u_slice**2 + v_slice**2)
            units = "m/s"
        else:
            var_name = variable if variable in ds else "temperature"
            val_matrix = ds[var_name].isel(time=time_idx, depth=nearest_depth_idx).values
            units = "°C" if var_name == "temperature" else ("PSU" if var_name == "salinity" else "mg/m³")

        val_clean = np.where(np.isnan(val_matrix), None, np.round(val_matrix, 3)).tolist()
        min_v = float(np.nanmin(val_matrix))
        max_v = float(np.nanmax(val_matrix))

        time_str = f"2026-09-{12+time_idx:02d}T00:00:00Z"

        return OceanSlice(
            variable=variable,
            units=units,
            depth=actual_depth,
            timestamp=time_str,
            lats=[round(float(y), 4) for y in ds.lat.values],
            lons=[round(float(x), 4) for x in ds.lon.values],
            values=val_clean,
            min_val=min_v,
            max_val=max_v,
            is_demo=self.loader.is_demo_data
        )

    def get_volume(self, variable: str, time_idx: int = 0, low_bandwidth: bool = False) -> OceanVolume:
        ds = self.ds
        time_idx = max(0, min(time_idx, len(ds.time) - 1))
        var_name = variable if variable in ds else "temperature"

        stride = 3 if low_bandwidth else 1
        depth_subsample = [0, 2, 4, 6, 8, 10, 12] if low_bandwidth else list(range(len(ds.depth)))

        sub_depths = ds.depth.values[depth_subsample]
        sub_lats = ds.lat.values[::stride]
        sub_lons = ds.lon.values[::stride]

        vol_data = ds[var_name].isel(time=time_idx, depth=depth_subsample).values[:, ::stride, ::stride]
        min_val = float(np.nanmin(vol_data))
        max_val = float(np.nanmax(vol_data))

        voxels = []
        for d_idx, z in enumerate(sub_depths):
            for y_idx, lat in enumerate(sub_lats):
                for x_idx, lon in enumerate(sub_lons):
                    v = float(vol_data[d_idx, y_idx, x_idx])
                    if not np.isnan(v):
                        voxels.append({
                            "lat": round(float(lat), 3),
                            "lon": round(float(lon), 3),
                            "depth": round(float(z), 1),
                            "val": round(v, 2)
                        })

        units = "°C" if var_name == "temperature" else ("PSU" if var_name == "salinity" else "mg/m³")
        time_str = f"2026-09-{12+time_idx:02d}T00:00:00Z"

        return OceanVolume(
            variable=var_name,
            units=units,
            timestamp=time_str,
            lats=[round(float(x), 3) for x in sub_lats],
            lons=[round(float(x), 3) for x in sub_lons],
            depths=[round(float(x), 1) for x in sub_depths],
            grid_shape=[len(sub_depths), len(sub_lats), len(sub_lons)],
            voxels=voxels,
            min_val=min_val,
            max_val=max_val,
            downsampled=low_bandwidth,
            is_demo=self.loader.is_demo_data
        )

    def get_current_field(self, depth: float = 0.0, time_idx: int = 0, low_bandwidth: bool = False) -> CurrentVectorField:
        ds = self.ds
        time_idx = max(0, min(time_idx, len(ds.time) - 1))
        d_idx = int(np.abs(ds.depth.values - depth).argmin())
        actual_depth = float(ds.depth.values[d_idx])

        stride = 2 if low_bandwidth else 1
        sub_lats = ds.lat.values[::stride]
        sub_lons = ds.lon.values[::stride]

        u_mat = ds.u.isel(time=time_idx, depth=d_idx).values[::stride, ::stride]
        v_mat = ds.v.isel(time=time_idx, depth=d_idx).values[::stride, ::stride]
        speed_mat = np.sqrt(u_mat**2 + v_mat**2)

        particles = []
        num_seeds = 120 if low_bandwidth else 300
        y_indices = np.random.choice(len(sub_lats), num_seeds)
        x_indices = np.random.choice(len(sub_lons), num_seeds)

        for yi, xi in zip(y_indices, x_indices):
            u_val = float(u_mat[yi, xi])
            v_val = float(v_mat[yi, xi])
            sp = float(speed_mat[yi, xi])
            particles.append({
                "lat": round(float(sub_lats[yi]), 4),
                "lon": round(float(sub_lons[xi]), 4),
                "u": round(u_val, 3),
                "v": round(v_val, 3),
                "speed": round(sp, 3)
            })

        time_str = f"2026-09-{12+time_idx:02d}T00:00:00Z"

        return CurrentVectorField(
            timestamp=time_str,
            depth=actual_depth,
            lats=[round(float(x), 4) for x in sub_lats],
            lons=[round(float(x), 4) for x in sub_lons],
            u=[[round(float(x), 3) for x in row] for row in u_mat],
            v=[[round(float(x), 3) for x in row] for row in v_mat],
            speed=[[round(float(x), 3) for x in row] for row in speed_mat],
            particles=particles,
            max_speed=round(float(np.nanmax(speed_mat)), 3)
        )

    def compare_model_vs_obs(self, obs_id: str, variable: str = "temperature") -> Optional[ModelComparison]:
        obs = None
        for item in self.loader.argo_data:
            if item["id"] == obs_id or item["platform_code"] == obs_id:
                obs = item
                break
        if not obs:
            for item in self.loader.glider_data:
                if item["id"] == obs_id or item["callsign"] == obs_id:
                    obs = item
                    break

        if not obs:
            obs = self.loader.argo_data[0]

        lat = obs["latitude"]
        lon = obs["longitude"]
        current_depth = obs["current_depth"]
        ds = self.ds

        nearest_lat_idx = int(np.abs(ds.lat.values - lat).argmin())
        nearest_lon_idx = int(np.abs(ds.lon.values - lon).argmin())

        var_name = variable if variable in ds else "temperature"
        units = "°C" if var_name == "temperature" else "PSU"

        model_depths = ds.depth.values
        model_profile_vals = ds[var_name].isel(time=-1, lat=nearest_lat_idx, lon=nearest_lon_idx).values

        comparison_points: List[ComparisonProfilePoint] = []
        diffs = []

        obs_profiles = obs.get("profiles", [])
        for p in obs_profiles:
            z = p["depth"]
            obs_val = p.get(var_name)
            if obs_val is None:
                continue

            mod_val = float(np.interp(z, model_depths, model_profile_vals))
            d = round(obs_val - mod_val, 2)
            diffs.append(d)

            comparison_points.append(ComparisonProfilePoint(
                depth=z,
                model_val=round(mod_val, 2),
                obs_val=round(obs_val, 2),
                diff=d
            ))

        curr_mod_val = float(np.interp(current_depth, model_depths, model_profile_vals))
        curr_obs_val = obs.get("variables", {}).get(var_name, comparison_points[0].obs_val if comparison_points else 28.0)
        curr_diff = round(curr_obs_val - curr_mod_val, 2)
        pct_diff = round((abs(curr_diff) / (abs(curr_mod_val) + 1e-5)) * 100.0, 2)

        rmse = round(float(np.sqrt(np.mean(np.array(diffs)**2))), 3) if diffs else 0.0
        mean_bias = round(float(np.mean(diffs)), 3) if diffs else 0.0

        return ModelComparison(
            observation_id=obs["id"],
            observation_type=obs["type"],
            variable=var_name,
            units=units,
            latitude=lat,
            longitude=lon,
            depth=current_depth,
            timestamp=obs["timestamp"],
            model_value=round(curr_mod_val, 2),
            observation_value=round(curr_obs_val, 2),
            difference=curr_diff,
            percent_difference=pct_diff,
            rmse=rmse,
            mean_bias=mean_bias,
            profile_comparison=comparison_points,
            is_demo=self.loader.is_demo_data
        )

ocean_engine = OceanEngine()
