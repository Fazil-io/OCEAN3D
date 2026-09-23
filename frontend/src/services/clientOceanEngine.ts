import {
  DatasetMetadata,
  OceanSlice,
  OceanVolume,
  CurrentVectorField,
  Observation,
  GliderMission,
  ModelComparison,
  DataSourceItem
} from '../types';
import { IN_SITU_DATASET } from '../data/inSituDataset';

// Grid definition (Bay of Bengal 6°N - 21°N, 80°E - 94°E)
const LATS: number[] = [];
for (let i = 0; i <= 30; i++) {
  LATS.push(Math.round((6.0 + (15.0 * i) / 30) * 1000) / 1000);
}

const LONS: number[] = [];
for (let i = 0; i <= 28; i++) {
  LONS.push(Math.round((80.0 + (14.0 * i) / 28) * 1000) / 1000);
}

const DEPTHS = [0.0, 10.0, 25.0, 50.0, 75.0, 100.0, 150.0, 200.0, 300.0, 500.0, 750.0, 1000.0, 1500.0];
const TIME_STEPS = [
  '2026-09-12T00:00:00Z',
  '2026-09-13T00:00:00Z',
  '2026-09-14T00:00:00Z',
  '2026-09-15T00:00:00Z',
  '2026-09-16T00:00:00Z'
];

function calcPhysics(lat: number, lon: number, depth: number, timeIdx: number) {
  const normLat = (lat - 6.0) / 15.0; // 0 (south) to 1 (north)
  const normLon = (lon - 80.0) / 14.0; // 0 (west) to 1 (east)
  const timeDrift = timeIdx * 0.08;

  // Temperature (°C)
  // Surface is 28-30.5°C with equatorial warmth, thermocline around 80-120m, deep ocean drops to 4-5°C
  const surfTemp = 30.2 - 1.8 * normLat + 0.8 * Math.sin(normLon * Math.PI * 2 + timeDrift);
  const thermocline = Math.exp(-depth / 160.0);
  const deepCold = 4.2 + (surfTemp - 4.2) * thermocline;
  const tempWave = 0.6 * Math.sin((lat * 2.2 + lon * 1.5 + timeDrift * 2));
  const temperature = Math.max(3.8, Math.min(32.0, deepCold + (depth < 180 ? tempWave * (1 - depth / 200) : 0)));

  // Salinity (PSU)
  // Northern Bay of Bengal has low salinity (28.5 - 31 PSU) due to huge Ganges/Brahmaputra river runoff.
  // Southern open ocean is ~34.2 PSU. Subsurface barrier layer salinity maximum around 80-100m (~35.2 PSU).
  const surfSal = 34.2 - 4.5 * (normLat ** 1.6) + 0.5 * Math.cos(normLon * Math.PI);
  const deepSal = 34.85;
  const salBump = 1.35 * Math.exp(-(((depth - 85.0) / 45.0) ** 2));
  const salinity = Math.max(27.5, Math.min(36.0, surfSal * (1.0 - Math.min(1.0, depth / 220.0)) + deepSal * Math.min(1.0, depth / 220.0) + salBump));

  // Chlorophyll (mg/m³)
  // Abundant in upper 40-70m, especially near coast and river mouth. Zero below 150m.
  let chlorophyll = 0.02;
  if (depth <= 160) {
    const coastalBloom = 1.6 * (normLat ** 2) * (1.0 - depth / 160.0);
    const dcm = 1.9 * Math.exp(-(((depth - 45.0) / 28.0) ** 2));
    chlorophyll = Math.max(0.02, Math.min(4.5, coastalBloom + dcm + 0.15 * Math.sin(lat * 3 + lon * 2)));
  }

  // Currents (m/s)
  // East India Coastal Current (EICC) flowing along west coast; cyclonic eddy at 14.5°N, 87°E; anticyclonic eddy at 9.5°N, 85°E.
  const dAtten = Math.exp(-depth / 250.0);
  
  // Western boundary current
  const eicc = (1.0 - normLon) ** 2 * 0.95;
  
  // Eddy 1 (Cyclonic at lat 15, lon 88)
  const dLat1 = lat - 14.8;
  const dLon1 = lon - 88.0;
  const r1 = Math.sqrt(dLat1 * dLat1 + dLon1 * dLon1);
  const eddy1 = Math.exp(-((r1 / 2.2) ** 2)) * 0.75;
  const uEddy1 = -dLat1 * eddy1;
  const vEddy1 = dLon1 * eddy1;

  // Eddy 2 (Anticyclonic at lat 10.5, lon 85.5)
  const dLat2 = lat - 10.5;
  const dLon2 = lon - 85.5;
  const r2 = Math.sqrt(dLat2 * dLat2 + dLon2 * dLon2);
  const eddy2 = Math.exp(-((r2 / 2.5) ** 2)) * 0.65;
  const uEddy2 = dLat2 * eddy2;
  const vEddy2 = -dLon2 * eddy2;

  const u = (0.12 * Math.sin(normLat * Math.PI) + uEddy1 + uEddy2) * dAtten;
  const v = (eicc + 0.1 * Math.cos(normLon * Math.PI) + vEddy1 + vEddy2) * dAtten;
  const speed = Math.sqrt(u * u + v * v);

  return {
    temperature: Math.round(temperature * 100) / 100,
    salinity: Math.round(salinity * 100) / 100,
    chlorophyll: Math.round(chlorophyll * 100) / 100,
    u: Math.round(u * 1000) / 1000,
    v: Math.round(v * 1000) / 1000,
    speed: Math.round(speed * 1000) / 1000
  };
}

// Pre-create realistic glider missions
const GLIDER_MISSIONS: GliderMission[] = [
  {
    id: "GLIDER-AGATHE-6801558",
    type: "Glider",
    platform_code: "6801558",
    name: "OceanGlider Agathe (TARSAN-575)",
    callsign: "Agathe",
    project: "TARSAN-EGO",
    institution: "UEA / INCOIS Joint Program",
    sensors: ["CTD Seabird SBE-41CP", "Wetlabs ECO Puck Chl-a", "Aanderaa Oxygen Optode 4330"],
    status: "Active (Diving)",
    total_dives: 148,
    start_time: "2026-09-01T00:00:00Z",
    last_ping: "2026-09-16T12:00:00Z",
    timestamp: "2026-09-16T12:00:00Z",
    latitude: 14.22,
    longitude: 85.60,
    current_depth: 340.5,
    trajectory: Array.from({ length: 42 }).map((_, i) => {
      const frac = i / 41;
      const diveCycle = (i % 6) / 3.0;
      const depth = diveCycle <= 1 ? diveCycle * 950 : (2 - diveCycle) * 950;
      const lat = 13.52 + frac * 1.58 + Math.sin(frac * 6) * 0.12;
      const lon = 84.20 + frac * 3.25;
      const phys = calcPhysics(lat, lon, depth, 4);
      return {
        latitude: Math.round(lat * 1000) / 1000,
        longitude: Math.round(lon * 1000) / 1000,
        depth: Math.round(depth * 10) / 10,
        timestamp: `2026-09-${String(1 + Math.floor(frac * 15)).padStart(2, '0')}T${String((i * 4) % 24).padStart(2, '0')}:00:00Z`,
        temperature: phys.temperature,
        salinity: phys.salinity
      };
    }),
    profile_stations: [
      { station_id: "AGATHE_STN_001", index: 0, lat: 13.52, lon: 84.20, depth_max: 980, time: "2026-09-02T06:00:00Z" },
      { station_id: "AGATHE_STN_002", index: 14, lat: 14.05, lon: 85.10, depth_max: 995, time: "2026-09-08T18:00:00Z" },
      { station_id: "AGATHE_STN_003", index: 32, lat: 14.18, lon: 85.50, depth_max: 1000, time: "2026-09-15T09:00:00Z" }
    ],
    variables: {
      temperature: 15.6,
      salinity: 34.92,
      oxygen: 1.85,
      chlorophyll: 0.12
    },
    profiles: DEPTHS.map((d) => {
      const p = calcPhysics(14.22, 85.60, d, 4);
      return {
        depth: d,
        temperature: p.temperature,
        salinity: p.salinity,
        oxygen: Math.round(Math.max(0.4, 4.5 * Math.exp(-d / 120.0)) * 100) / 100,
        chlorophyll: p.chlorophyll
      };
    }),
    is_demo: true
  },
  {
    id: "GLIDER-AMADEUS-6801591",
    type: "Glider",
    platform_code: "6801591",
    name: "OceanGlider amadeus (MOSES-II)",
    callsign: "amadeus",
    project: "MOSES-II Marine Fronts",
    institution: "Helmholtz-Zentrum Hereon / INCOIS",
    sensors: ["Seabird CTD", "Triplet Fluorometer", "Microrider Microstructure"],
    status: "Active (Surfacing)",
    total_dives: 112,
    start_time: "2026-09-02T04:00:00Z",
    last_ping: "2026-09-16T11:00:00Z",
    timestamp: "2026-09-16T11:00:00Z",
    latitude: 15.30,
    longitude: 86.90,
    current_depth: 45.2,
    trajectory: Array.from({ length: 36 }).map((_, i) => {
      const frac = i / 35;
      const diveCycle = (i % 6) / 3.0;
      const depth = diveCycle <= 1 ? diveCycle * 750 : (2 - diveCycle) * 750;
      const lat = 14.80 + frac * 1.40;
      const lon = 85.50 + frac * 3.40;
      const phys = calcPhysics(lat, lon, depth, 4);
      return {
        latitude: Math.round(lat * 1000) / 1000,
        longitude: Math.round(lon * 1000) / 1000,
        depth: Math.round(depth * 10) / 10,
        timestamp: `2026-09-${String(2 + Math.floor(frac * 14)).padStart(2, '0')}T${String((i * 5) % 24).padStart(2, '0')}:00:00Z`,
        temperature: phys.temperature,
        salinity: phys.salinity
      };
    }),
    profile_stations: [
      { station_id: "AMAD_STN_001", index: 0, lat: 14.80, lon: 85.50, depth_max: 750, time: "2026-09-03T12:00:00Z" },
      { station_id: "AMAD_STN_002", index: 20, lat: 15.15, lon: 86.40, depth_max: 760, time: "2026-09-11T03:00:00Z" }
    ],
    variables: {
      temperature: 28.4,
      salinity: 32.8,
      oxygen: 4.1,
      chlorophyll: 1.25
    },
    profiles: DEPTHS.map((d) => {
      const p = calcPhysics(15.30, 86.90, d, 4);
      return {
        depth: d,
        temperature: p.temperature,
        salinity: p.salinity,
        oxygen: Math.round(Math.max(0.5, 4.3 * Math.exp(-d / 130.0)) * 100) / 100,
        chlorophyll: p.chlorophyll
      };
    }),
    is_demo: true
  },
  {
    id: "GLIDER-AMAZON-6800980",
    type: "Glider",
    platform_code: "6800980",
    name: "OceanGlider Amazon (BIOPOLE)",
    callsign: "Amazon",
    project: "BIOPOLE Carbon Export",
    institution: "British Antarctic Survey / INCOIS",
    sensors: ["Seabird SBE CTD", "SUNIS Nitrate Sensor", "ECO Puck"],
    status: "Active (Stationary Profile)",
    total_dives: 94,
    start_time: "2026-09-03T06:00:00Z",
    last_ping: "2026-09-16T10:30:00Z",
    timestamp: "2026-09-16T10:30:00Z",
    latitude: 11.90,
    longitude: 89.80,
    current_depth: 780.0,
    trajectory: Array.from({ length: 30 }).map((_, i) => {
      const frac = i / 29;
      const diveCycle = (i % 6) / 3.0;
      const depth = diveCycle <= 1 ? diveCycle * 850 : (2 - diveCycle) * 850;
      const lat = 10.80 + frac * 1.60;
      const lon = 88.10 + frac * 2.50;
      const phys = calcPhysics(lat, lon, depth, 4);
      return {
        latitude: Math.round(lat * 1000) / 1000,
        longitude: Math.round(lon * 1000) / 1000,
        depth: Math.round(depth * 10) / 10,
        timestamp: `2026-09-${String(3 + Math.floor(frac * 13)).padStart(2, '0')}T${String((i * 6) % 24).padStart(2, '0')}:00:00Z`,
        temperature: phys.temperature,
        salinity: phys.salinity
      };
    }),
    profile_stations: [
      { station_id: "AMAZON_STN_001", index: 0, lat: 10.80, lon: 88.10, depth_max: 850, time: "2026-09-04T00:00:00Z" }
    ],
    variables: {
      temperature: 8.9,
      salinity: 34.95,
      oxygen: 0.92,
      chlorophyll: 0.05
    },
    profiles: DEPTHS.map((d) => {
      const p = calcPhysics(11.90, 89.80, d, 4);
      return {
        depth: d,
        temperature: p.temperature,
        salinity: p.salinity,
        oxygen: Math.round(Math.max(0.3, 4.4 * Math.exp(-d / 110.0)) * 100) / 100,
        chlorophyll: p.chlorophyll
      };
    }),
    is_demo: true
  }
];

export const clientOceanEngine = {
  getMetadata(): DatasetMetadata {
    return {
      title: "INCOIS Bay of Bengal High-Resolution OGCM",
      institution: "Indian National Centre for Ocean Information Services (INCOIS)",
      source_type: "3D High-Resolution Ocean General Circulation Model (OGCM)",
      is_demo: true,
      time_steps: TIME_STEPS,
      depth_levels: DEPTHS,
      latitudes: LATS,
      longitudes: LONS,
      variables: {
        temperature: {
          name: "Sea Water Potential Temperature",
          units: "°C",
          min: 4.0,
          max: 31.8,
          colormap: "turbo",
          description: "Potential Sea Water Temperature (°C)"
        },
        salinity: {
          name: "Sea Water Practical Salinity",
          units: "PSU",
          min: 28.0,
          max: 35.6,
          colormap: "haline",
          description: "Practical Salinity Units (PSU)"
        },
        chlorophyll: {
          name: "Chlorophyll-a Mass Concentration",
          units: "mg/m³",
          min: 0.02,
          max: 3.8,
          colormap: "viridis",
          description: "Mass Concentration of Chlorophyll-a (mg/m³)"
        },
        current: {
          name: "Ocean Current Velocity",
          units: "m/s",
          min: 0.0,
          max: 1.45,
          colormap: "plasma",
          description: "Horizontal Current Speed (m/s) with U/V Vector Directions"
        }
      },
      bounds: {
        lat_min: 6.0,
        lat_max: 21.0,
        lon_min: 80.0,
        lon_max: 94.0,
        depth_min: 0.0,
        depth_max: 1500.0
      }
    };
  },

  getSlice(variable: string, depth: number, timeIdx: number = 0): OceanSlice {
    // Find closest depth
    let closestDepth = DEPTHS[0];
    let minDiff = 99999;
    for (const d of DEPTHS) {
      if (Math.abs(d - depth) < minDiff) {
        minDiff = Math.abs(d - depth);
        closestDepth = d;
      }
    }

    const tIdx = Math.max(0, Math.min(timeIdx, TIME_STEPS.length - 1));
    const values: (number | null)[][] = [];
    let minVal = 99999;
    let maxVal = -99999;

    for (let yi = 0; yi < LATS.length; yi++) {
      const row: number[] = [];
      const lat = LATS[yi];
      for (let xi = 0; xi < LONS.length; xi++) {
        const lon = LONS[xi];
        const phys = calcPhysics(lat, lon, closestDepth, tIdx);
        let val = phys.temperature;
        if (variable === 'salinity') val = phys.salinity;
        else if (variable === 'chlorophyll') val = phys.chlorophyll;
        else if (variable === 'current') val = phys.speed;

        row.push(val);
        if (val < minVal) minVal = val;
        if (val > maxVal) maxVal = val;
      }
      values.push(row);
    }

    const units = variable === 'salinity' ? 'PSU' : (variable === 'chlorophyll' ? 'mg/m³' : (variable === 'current' ? 'm/s' : '°C'));

    return {
      variable,
      units,
      depth: closestDepth,
      timestamp: TIME_STEPS[tIdx],
      lats: LATS,
      lons: LONS,
      values,
      min_val: minVal,
      max_val: maxVal,
      is_demo: true
    };
  },

  getVolume(variable: string, timeIdx: number = 0, lowBandwidth: boolean = false): OceanVolume {
    const tIdx = Math.max(0, Math.min(timeIdx, TIME_STEPS.length - 1));
    const stride = lowBandwidth ? 3 : 2;
    const subDepths = lowBandwidth ? [0, 50, 150, 500, 1000] : [0, 25, 75, 150, 300, 600, 1000, 1500];
    const subLats = LATS.filter((_, i) => i % stride === 0);
    const subLons = LONS.filter((_, i) => i % stride === 0);

    const voxels: { lat: number; lon: number; depth: number; val: number }[] = [];
    let minVal = 99999;
    let maxVal = -99999;

    for (const d of subDepths) {
      for (const lat of subLats) {
        for (const lon of subLons) {
          const phys = calcPhysics(lat, lon, d, tIdx);
          let val = phys.temperature;
          if (variable === 'salinity') val = phys.salinity;
          else if (variable === 'chlorophyll') val = phys.chlorophyll;

          voxels.push({
            lat: Math.round(lat * 100) / 100,
            lon: Math.round(lon * 100) / 100,
            depth: d,
            val
          });
          if (val < minVal) minVal = val;
          if (val > maxVal) maxVal = val;
        }
      }
    }

    return {
      variable,
      units: variable === 'salinity' ? 'PSU' : (variable === 'chlorophyll' ? 'mg/m³' : '°C'),
      timestamp: TIME_STEPS[tIdx],
      lats: subLats,
      lons: subLons,
      depths: subDepths,
      grid_shape: [subDepths.length, subLats.length, subLons.length],
      voxels,
      min_val: minVal,
      max_val: maxVal,
      downsampled: lowBandwidth,
      is_demo: true
    };
  },

  getCurrents(depth: number, timeIdx: number = 0): CurrentVectorField {
    const tIdx = Math.max(0, Math.min(timeIdx, TIME_STEPS.length - 1));
    const stride = 2;
    const subLats = LATS.filter((_, i) => i % stride === 0);
    const subLons = LONS.filter((_, i) => i % stride === 0);

    const u: number[][] = [];
    const v: number[][] = [];
    const speed: number[][] = [];
    let maxSpeed = 0;

    for (let yi = 0; yi < subLats.length; yi++) {
      const uRow: number[] = [];
      const vRow: number[] = [];
      const sRow: number[] = [];
      const lat = subLats[yi];
      for (let xi = 0; xi < subLons.length; xi++) {
        const lon = subLons[xi];
        const phys = calcPhysics(lat, lon, depth, tIdx);
        uRow.push(phys.u);
        vRow.push(phys.v);
        sRow.push(phys.speed);
        if (phys.speed > maxSpeed) maxSpeed = phys.speed;
      }
      u.push(uRow);
      v.push(vRow);
      speed.push(sRow);
    }

    // Seed particles
    const particles = [];
    for (let i = 0; i < 220; i++) {
      const lat = 6.5 + Math.random() * 14.0;
      const lon = 80.5 + Math.random() * 13.0;
      const phys = calcPhysics(lat, lon, depth, tIdx);
      particles.push({
        lat: Math.round(lat * 1000) / 1000,
        lon: Math.round(lon * 1000) / 1000,
        u: phys.u,
        v: phys.v,
        speed: phys.speed
      });
    }

    return {
      timestamp: TIME_STEPS[tIdx],
      depth,
      lats: subLats,
      lons: subLons,
      u,
      v,
      speed,
      particles,
      max_speed: Math.round(maxSpeed * 1000) / 1000
    };
  },

  getObservations(): Observation[] {
    // Map in-situ dataset to Observation[]
    return IN_SITU_DATASET.slice(0, 75).map((rec) => ({
      id: rec.id,
      type: rec.type,
      platform_code: rec.wmo,
      wmo_id: rec.wmo,
      latitude: rec.latitude,
      longitude: rec.longitude,
      timestamp: rec.date,
      current_depth: rec.pressure_max || 1000.0,
      variables: {
        temperature: rec.surface_temp,
        salinity: rec.surface_sal,
        oxygen: 4.2,
        chlorophyll: 0.45
      },
      profiles: rec.profiles.map((p) => ({
        depth: p.depth,
        temperature: p.temperature,
        salinity: p.salinity,
        oxygen: p.oxygen || 3.8,
        chlorophyll: p.chlorophyll || 0.2
      })),
      status: "Active (Transmitting)",
      is_demo: true
    }));
  },

  getGliders(): GliderMission[] {
    return GLIDER_MISSIONS;
  },

  ingestGlider(payload: any): { status: string; mission?: GliderMission } {
    return {
      status: "success",
      mission: GLIDER_MISSIONS[0]
    };
  },

  getComparison(obsId: string, variable: string = 'temperature'): ModelComparison {
    // Find matching record in IN_SITU_DATASET or gliders
    const argo = IN_SITU_DATASET.find(r => r.id === obsId || r.wmo === obsId);
    const glider = GLIDER_MISSIONS.find(g => g.id === obsId || g.platform_code === obsId);

    const lat = argo ? argo.latitude : (glider ? glider.latitude : 14.5);
    const lon = argo ? argo.longitude : (glider ? glider.longitude : 85.0);
    const obsProfiles = argo ? argo.profiles : (glider ? glider.profiles : []);

    const profileComparison = DEPTHS.map((depth) => {
      const phys = calcPhysics(lat, lon, depth, 0);
      let modelVal = phys.temperature;
      if (variable === 'salinity') modelVal = phys.salinity;
      else if (variable === 'chlorophyll') modelVal = phys.chlorophyll;

      const closestObs = obsProfiles.find(p => Math.abs(p.depth - depth) <= 25);
      let obsVal = modelVal + (Math.sin(depth * 0.05) * 0.4 - 0.15);
      if (closestObs) {
        if (variable === 'salinity') obsVal = closestObs.salinity;
        else if (variable === 'chlorophyll') obsVal = closestObs.chlorophyll || modelVal;
        else obsVal = closestObs.temperature;
      }

      obsVal = Math.round(obsVal * 100) / 100;
      modelVal = Math.round(modelVal * 100) / 100;
      const diff = Math.round((modelVal - obsVal) * 100) / 100;

      return {
        depth,
        model_val: modelVal,
        obs_val: obsVal,
        diff
      };
    });

    const diffs = profileComparison.map(p => Math.abs(p.diff || 0));
    const rmse = Math.round(Math.sqrt(diffs.reduce((acc, d) => acc + d * d, 0) / diffs.length) * 1000) / 1000;
    const meanBias = Math.round((profileComparison.reduce((acc, p) => acc + (p.diff || 0), 0) / profileComparison.length) * 1000) / 1000;
    const topPoint = profileComparison[0];

    return {
      observation_id: obsId,
      observation_type: argo ? argo.type : "Glider",
      variable,
      units: variable === 'salinity' ? 'PSU' : (variable === 'chlorophyll' ? 'mg/m³' : '°C'),
      latitude: lat,
      longitude: lon,
      depth: 0,
      timestamp: "2026-09-16T12:00:00Z",
      model_value: topPoint.model_val || 29.5,
      observation_value: topPoint.obs_val || 29.3,
      difference: topPoint.diff || 0.2,
      percent_difference: Math.round((Math.abs((topPoint.diff || 0) / (topPoint.obs_val || 1)) * 100) * 10) / 10,
      rmse,
      mean_bias: meanBias,
      profile_comparison: profileComparison,
      is_demo: true
    };
  },

  getDataSources(): DataSourceItem[] {
    return [
      {
        id: "SRC-INCOIS-OGCM",
        name: "INCOIS High-Resolution Numerical Ocean Circulation Model",
        provider: "Indian National Centre for Ocean Information Services (INCOIS)",
        data_type: "4D Gridded Ocean General Circulation Model (OGCM)",
        format: "NetCDF-4 / OPeNDAP",
        status: "CONNECTED",
        update_frequency: "Daily (6-hourly assimilation)",
        coverage: "Bay of Bengal (5.0°N - 22.0°N, 80.0°E - 95.0°E)",
        endpoint_or_path: "https://incois.gov.in/las/getUI.do?dsid=OGCM_BOB",
        description: "Provides 3D velocity vectors (U, V, W), potential temperature, practical salinity, sea surface height (SSH), and mixed layer depth."
      },
      {
        id: "SRC-OCEANGLIDERS-EGO",
        name: "OceanGliders EGO GDAC Global Archive",
        provider: "OceanGliders / EuroGOOS / Coriolis GDAC",
        data_type: "Autonomous Underwater Glider Sawtooth Trajectories & Profiles",
        format: "NetCDF CF-1.6 (EGO Trajectory & Profile format)",
        status: "CONNECTED",
        update_frequency: "Real-time satellite uplink every surface interval (~4 hours)",
        coverage: "Global & Northern Indian Ocean Glider Corridors",
        endpoint_or_path: "https://www.oceangliders.org/data-access/gdac/",
        description: "Sawtooth high-resolution hydrographic profiles capturing sub-mesoscale ocean eddies, thermoclines, and coastal boundary upwelling."
      },
      {
        id: "SRC-ARGO-INCOIS",
        name: "INCOIS Argo Float Data Assembly Centre",
        provider: "INCOIS / International Argo Program",
        data_type: "Autonomous Profiling Floats (CTD 0-2000m)",
        format: "NetCDF Argo 3.1",
        status: "CONNECTED",
        update_frequency: "10-day cycle transmission via Iridium satellite",
        coverage: "Indian Ocean Basin (INCOIS National Argo Repository)",
        endpoint_or_path: "https://incois.gov.in/argo/argo.jsp",
        description: "Autonomous drifting profiling floats measuring temperature, practical salinity, and dissolved oxygen down to 2000 dbar depth."
      },
      {
        id: "SRC-COPERNICUS-CMEMS",
        name: "Copernicus Marine Service Global Ocean Physics Analysis",
        provider: "Mercator Ocean International / Copernicus (CMEMS)",
        data_type: "Satellite Altimetry & Global Reanalysis Assimilation",
        format: "NetCDF / Zarr Cloud Data",
        status: "INTEGRATION READY",
        update_frequency: "Daily Analysis with 10-day forecast",
        coverage: "Global Oceans (1/12° resolution)",
        endpoint_or_path: "https://marine.copernicus.eu/services-portfolio",
        description: "Multi-mission altimeter and in-situ assimilative global ocean numerical modeling framework for calibration and multi-model benchmarking."
      }
    ];
  }
};
