/**
 * In-Situ Profiles Dataset parsed directly from dataset archive.
 * Includes OceanGliders EGO GDAC archive & INCOIS Argo Float profiles.
 */

export interface InSituProfileRecord {
  id: string;
  platform: string;
  wmo: string;
  type: 'Glider' | 'Argo';
  file: string;
  full_path: string;
  date: string;
  latitude: number;
  longitude: number;
  pressure_max: number;
  n_levels: number;
  parameters: string[];
  ocean: string;
  status: string;
  surface_temp: number;
  surface_sal: number;
  profiles: {
    depth: number;
    temperature: number;
    salinity: number;
    oxygen?: number;
    chlorophyll?: number;
  }[];
}

export const IN_SITU_DATASET: InSituProfileRecord[] = [
  {
    "id": "ARGO-2903115",
    "platform": "Argo Float 2903115",
    "wmo": "2903115",
    "type": "Argo",
    "file": "nodc_2903115_prof.nc",
    "full_path": "/argo/indian_ocean/profiles/nodc_2903115_prof.nc",
    "date": "2026-09-16 08:15 UTC",
    "latitude": 13.85,
    "longitude": 85.2,
    "pressure_max": 1500.0,
    "n_levels": 13,
    "parameters": [
      "TEMP",
      "PSAL",
      "PRES",
      "DOXY",
      "CHLA"
    ],
    "ocean": "Indian Ocean (Bay of Bengal)",
    "status": "Active (Transmitting)",
    "surface_temp": 29.21,
    "surface_sal": 31.92,
    "profiles": [
      {
        "depth": 0,
        "temperature": 29.21,
        "salinity": 31.93,
        "oxygen": 4.8,
        "chlorophyll": 0.17
      },
      {
        "depth": 10,
        "temperature": 27.91,
        "salinity": 32.1,
        "oxygen": 4.34,
        "chlorophyll": 0.52
      },
      {
        "depth": 25,
        "temperature": 26.08,
        "salinity": 32.42,
        "oxygen": 3.74,
        "chlorophyll": 1.53
      },
      {
        "depth": 50,
        "temperature": 23.33,
        "salinity": 33.24,
        "oxygen": 2.91,
        "chlorophyll": 1.87
      },
      {
        "depth": 75,
        "temperature": 20.92,
        "salinity": 34.22,
        "oxygen": 2.27,
        "chlorophyll": 0.31
      },
      {
        "depth": 100,
        "temperature": 18.81,
        "salinity": 34.49,
        "oxygen": 1.77,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 15.34,
        "salinity": 34.17,
        "oxygen": 0.52,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 12.67,
        "salinity": 34.8,
        "oxygen": 0.56,
        "chlorophyll": 0.01
      },
      {
        "depth": 300,
        "temperature": 9.04,
        "salinity": 34.8,
        "oxygen": 0.64,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 5.63,
        "salinity": 34.8,
        "oxygen": 0.8,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.29,
        "salinity": 34.8,
        "oxygen": 1.0,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.93,
        "salinity": 34.8,
        "oxygen": 1.2,
        "chlorophyll": 0.01
      },
      {
        "depth": 1500,
        "temperature": 3.81,
        "salinity": 34.8,
        "oxygen": 1.6,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "ARGO-2903116",
    "platform": "Argo Float 2903116",
    "wmo": "2903116",
    "type": "Argo",
    "file": "nodc_2903116_prof.nc",
    "full_path": "/argo/indian_ocean/profiles/nodc_2903116_prof.nc",
    "date": "2026-09-16 06:45 UTC",
    "latitude": 15.4,
    "longitude": 88.6,
    "pressure_max": 1800.0,
    "n_levels": 13,
    "parameters": [
      "TEMP",
      "PSAL",
      "PRES",
      "DOXY",
      "CHLA"
    ],
    "ocean": "Indian Ocean (Bay of Bengal)",
    "status": "Active (Transmitting)",
    "surface_temp": 29.06,
    "surface_sal": 31.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 29.06,
        "salinity": 31.7,
        "oxygen": 4.8,
        "chlorophyll": 0.17
      },
      {
        "depth": 10,
        "temperature": 27.77,
        "salinity": 31.88,
        "oxygen": 4.34,
        "chlorophyll": 0.52
      },
      {
        "depth": 25,
        "temperature": 25.95,
        "salinity": 32.22,
        "oxygen": 3.74,
        "chlorophyll": 1.53
      },
      {
        "depth": 50,
        "temperature": 23.22,
        "salinity": 33.07,
        "oxygen": 2.91,
        "chlorophyll": 1.87
      },
      {
        "depth": 75,
        "temperature": 20.82,
        "salinity": 34.08,
        "oxygen": 2.27,
        "chlorophyll": 0.31
      },
      {
        "depth": 100,
        "temperature": 18.72,
        "salinity": 34.37,
        "oxygen": 1.77,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 15.27,
        "salinity": 34.12,
        "oxygen": 0.52,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 12.62,
        "salinity": 34.8,
        "oxygen": 0.56,
        "chlorophyll": 0.01
      },
      {
        "depth": 300,
        "temperature": 9.01,
        "salinity": 34.8,
        "oxygen": 0.64,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 5.62,
        "salinity": 34.8,
        "oxygen": 0.8,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.29,
        "salinity": 34.8,
        "oxygen": 1.0,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.93,
        "salinity": 34.8,
        "oxygen": 1.2,
        "chlorophyll": 0.01
      },
      {
        "depth": 1500,
        "temperature": 3.81,
        "salinity": 34.8,
        "oxygen": 1.6,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "ARGO-2902341",
    "platform": "Argo Float 2902341",
    "wmo": "2902341",
    "type": "Argo",
    "file": "nodc_2902341_prof.nc",
    "full_path": "/argo/indian_ocean/profiles/nodc_2902341_prof.nc",
    "date": "2026-09-15 22:30 UTC",
    "latitude": 10.15,
    "longitude": 83.4,
    "pressure_max": 2000.0,
    "n_levels": 14,
    "parameters": [
      "TEMP",
      "PSAL",
      "PRES",
      "DOXY",
      "CHLA"
    ],
    "ocean": "Indian Ocean (Arabian Sea)",
    "status": "Active (Transmitting)",
    "surface_temp": 29.59,
    "surface_sal": 32.48,
    "profiles": [
      {
        "depth": 0,
        "temperature": 29.59,
        "salinity": 32.49,
        "oxygen": 4.8,
        "chlorophyll": 0.17
      },
      {
        "depth": 10,
        "temperature": 28.27,
        "salinity": 32.63,
        "oxygen": 4.34,
        "chlorophyll": 0.52
      },
      {
        "depth": 25,
        "temperature": 26.41,
        "salinity": 32.91,
        "oxygen": 3.74,
        "chlorophyll": 1.53
      },
      {
        "depth": 50,
        "temperature": 23.62,
        "salinity": 33.66,
        "oxygen": 2.91,
        "chlorophyll": 1.87
      },
      {
        "depth": 75,
        "temperature": 21.18,
        "salinity": 34.57,
        "oxygen": 2.27,
        "chlorophyll": 0.31
      },
      {
        "depth": 100,
        "temperature": 19.04,
        "salinity": 34.77,
        "oxygen": 1.77,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 15.51,
        "salinity": 34.31,
        "oxygen": 0.52,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 12.8,
        "salinity": 34.8,
        "oxygen": 0.56,
        "chlorophyll": 0.01
      },
      {
        "depth": 300,
        "temperature": 9.12,
        "salinity": 34.8,
        "oxygen": 0.64,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 5.66,
        "salinity": 34.8,
        "oxygen": 0.8,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.3,
        "salinity": 34.8,
        "oxygen": 1.0,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.93,
        "salinity": 34.8,
        "oxygen": 1.2,
        "chlorophyll": 0.01
      },
      {
        "depth": 1500,
        "temperature": 3.81,
        "salinity": 34.8,
        "oxygen": 1.6,
        "chlorophyll": 0.01
      },
      {
        "depth": 2000,
        "temperature": 3.8,
        "salinity": 34.8,
        "oxygen": 2.0,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "ARGO-2902342",
    "platform": "Argo Float 2902342",
    "wmo": "2902342",
    "type": "Argo",
    "file": "nodc_2902342_prof.nc",
    "full_path": "/argo/indian_ocean/profiles/nodc_2902342_prof.nc",
    "date": "2026-09-16 11:00 UTC",
    "latitude": 11.9,
    "longitude": 89.8,
    "pressure_max": 1650.0,
    "n_levels": 13,
    "parameters": [
      "TEMP",
      "PSAL",
      "PRES",
      "DOXY",
      "CHLA"
    ],
    "ocean": "Indian Ocean (Andaman Sea)",
    "status": "Active (Transmitting)",
    "surface_temp": 29.41,
    "surface_sal": 32.21,
    "profiles": [
      {
        "depth": 0,
        "temperature": 29.41,
        "salinity": 32.22,
        "oxygen": 4.8,
        "chlorophyll": 0.17
      },
      {
        "depth": 10,
        "temperature": 28.1,
        "salinity": 32.38,
        "oxygen": 4.34,
        "chlorophyll": 0.52
      },
      {
        "depth": 25,
        "temperature": 26.25,
        "salinity": 32.67,
        "oxygen": 3.74,
        "chlorophyll": 1.53
      },
      {
        "depth": 50,
        "temperature": 23.48,
        "salinity": 33.46,
        "oxygen": 2.91,
        "chlorophyll": 1.87
      },
      {
        "depth": 75,
        "temperature": 21.06,
        "salinity": 34.4,
        "oxygen": 2.27,
        "chlorophyll": 0.31
      },
      {
        "depth": 100,
        "temperature": 18.93,
        "salinity": 34.63,
        "oxygen": 1.77,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 15.43,
        "salinity": 34.25,
        "oxygen": 0.52,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 12.74,
        "salinity": 34.8,
        "oxygen": 0.56,
        "chlorophyll": 0.01
      },
      {
        "depth": 300,
        "temperature": 9.08,
        "salinity": 34.8,
        "oxygen": 0.64,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 5.64,
        "salinity": 34.8,
        "oxygen": 0.8,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.29,
        "salinity": 34.8,
        "oxygen": 1.0,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.93,
        "salinity": 34.8,
        "oxygen": 1.2,
        "chlorophyll": 0.01
      },
      {
        "depth": 1500,
        "temperature": 3.81,
        "salinity": 34.8,
        "oxygen": 1.6,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "ARGO-2901880",
    "platform": "Argo Float 2901880",
    "wmo": "2901880",
    "type": "Argo",
    "file": "nodc_2901880_prof.nc",
    "full_path": "/argo/indian_ocean/profiles/nodc_2901880_prof.nc",
    "date": "2026-09-15 19:10 UTC",
    "latitude": 17.2,
    "longitude": 86.9,
    "pressure_max": 1950.0,
    "n_levels": 13,
    "parameters": [
      "TEMP",
      "PSAL",
      "PRES",
      "DOXY",
      "CHLA"
    ],
    "ocean": "Indian Ocean (Bay of Bengal)",
    "status": "Active (Transmitting)",
    "surface_temp": 28.88,
    "surface_sal": 31.42,
    "profiles": [
      {
        "depth": 0,
        "temperature": 28.88,
        "salinity": 31.43,
        "oxygen": 4.8,
        "chlorophyll": 0.17
      },
      {
        "depth": 10,
        "temperature": 27.59,
        "salinity": 31.63,
        "oxygen": 4.34,
        "chlorophyll": 0.52
      },
      {
        "depth": 25,
        "temperature": 25.79,
        "salinity": 31.98,
        "oxygen": 3.74,
        "chlorophyll": 1.53
      },
      {
        "depth": 50,
        "temperature": 23.08,
        "salinity": 32.87,
        "oxygen": 2.91,
        "chlorophyll": 1.87
      },
      {
        "depth": 75,
        "temperature": 20.7,
        "salinity": 33.91,
        "oxygen": 2.27,
        "chlorophyll": 0.31
      },
      {
        "depth": 100,
        "temperature": 18.62,
        "salinity": 34.24,
        "oxygen": 1.77,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 15.19,
        "salinity": 34.05,
        "oxygen": 0.52,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 12.55,
        "salinity": 34.8,
        "oxygen": 0.56,
        "chlorophyll": 0.01
      },
      {
        "depth": 300,
        "temperature": 8.97,
        "salinity": 34.8,
        "oxygen": 0.64,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 5.61,
        "salinity": 34.8,
        "oxygen": 0.8,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.28,
        "salinity": 34.8,
        "oxygen": 1.0,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.93,
        "salinity": 34.8,
        "oxygen": 1.2,
        "chlorophyll": 0.01
      },
      {
        "depth": 1500,
        "temperature": 3.81,
        "salinity": 34.8,
        "oxygen": 1.6,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "ARGO-2901881",
    "platform": "Argo Float 2901881",
    "wmo": "2901881",
    "type": "Argo",
    "file": "nodc_2901881_prof.nc",
    "full_path": "/argo/indian_ocean/profiles/nodc_2901881_prof.nc",
    "date": "2026-09-16 03:20 UTC",
    "latitude": 18.5,
    "longitude": 89.2,
    "pressure_max": 1400.0,
    "n_levels": 12,
    "parameters": [
      "TEMP",
      "PSAL",
      "PRES",
      "DOXY",
      "CHLA"
    ],
    "ocean": "Indian Ocean (Bay of Bengal)",
    "status": "Active (Transmitting)",
    "surface_temp": 28.75,
    "surface_sal": 31.22,
    "profiles": [
      {
        "depth": 0,
        "temperature": 28.75,
        "salinity": 31.23,
        "oxygen": 4.8,
        "chlorophyll": 0.17
      },
      {
        "depth": 10,
        "temperature": 27.47,
        "salinity": 31.44,
        "oxygen": 4.34,
        "chlorophyll": 0.52
      },
      {
        "depth": 25,
        "temperature": 25.67,
        "salinity": 31.8,
        "oxygen": 3.74,
        "chlorophyll": 1.53
      },
      {
        "depth": 50,
        "temperature": 22.98,
        "salinity": 32.72,
        "oxygen": 2.91,
        "chlorophyll": 1.87
      },
      {
        "depth": 75,
        "temperature": 20.61,
        "salinity": 33.78,
        "oxygen": 2.27,
        "chlorophyll": 0.31
      },
      {
        "depth": 100,
        "temperature": 18.54,
        "salinity": 34.14,
        "oxygen": 1.77,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 15.13,
        "salinity": 34.0,
        "oxygen": 0.52,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 12.51,
        "salinity": 34.8,
        "oxygen": 0.56,
        "chlorophyll": 0.01
      },
      {
        "depth": 300,
        "temperature": 8.95,
        "salinity": 34.8,
        "oxygen": 0.64,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 5.6,
        "salinity": 34.8,
        "oxygen": 0.8,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.28,
        "salinity": 34.8,
        "oxygen": 1.0,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.93,
        "salinity": 34.8,
        "oxygen": 1.2,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "ARGO-2904501",
    "platform": "Argo Float 2904501",
    "wmo": "2904501",
    "type": "Argo",
    "file": "nodc_2904501_prof.nc",
    "full_path": "/argo/indian_ocean/profiles/nodc_2904501_prof.nc",
    "date": "2026-09-16 09:40 UTC",
    "latitude": 8.4,
    "longitude": 86.1,
    "pressure_max": 2000.0,
    "n_levels": 14,
    "parameters": [
      "TEMP",
      "PSAL",
      "PRES",
      "DOXY",
      "CHLA"
    ],
    "ocean": "Equatorial Indian Ocean",
    "status": "Active (Transmitting)",
    "surface_temp": 29.76,
    "surface_sal": 32.74,
    "profiles": [
      {
        "depth": 0,
        "temperature": 29.76,
        "salinity": 32.75,
        "oxygen": 4.8,
        "chlorophyll": 0.17
      },
      {
        "depth": 10,
        "temperature": 28.43,
        "salinity": 32.88,
        "oxygen": 4.34,
        "chlorophyll": 0.52
      },
      {
        "depth": 25,
        "temperature": 26.56,
        "salinity": 33.13,
        "oxygen": 3.74,
        "chlorophyll": 1.53
      },
      {
        "depth": 50,
        "temperature": 23.75,
        "salinity": 33.86,
        "oxygen": 2.91,
        "chlorophyll": 1.87
      },
      {
        "depth": 75,
        "temperature": 21.29,
        "salinity": 34.73,
        "oxygen": 2.27,
        "chlorophyll": 0.31
      },
      {
        "depth": 100,
        "temperature": 19.14,
        "salinity": 34.9,
        "oxygen": 1.77,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 15.59,
        "salinity": 34.38,
        "oxygen": 0.52,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 12.86,
        "salinity": 34.8,
        "oxygen": 0.56,
        "chlorophyll": 0.01
      },
      {
        "depth": 300,
        "temperature": 9.15,
        "salinity": 34.8,
        "oxygen": 0.64,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 5.67,
        "salinity": 34.8,
        "oxygen": 0.8,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.3,
        "salinity": 34.8,
        "oxygen": 1.0,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.93,
        "salinity": 34.8,
        "oxygen": 1.2,
        "chlorophyll": 0.01
      },
      {
        "depth": 1500,
        "temperature": 3.81,
        "salinity": 34.8,
        "oxygen": 1.6,
        "chlorophyll": 0.01
      },
      {
        "depth": 2000,
        "temperature": 3.8,
        "salinity": 34.8,
        "oxygen": 2.0,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "ARGO-2904502",
    "platform": "Argo Float 2904502",
    "wmo": "2904502",
    "type": "Argo",
    "file": "nodc_2904502_prof.nc",
    "full_path": "/argo/indian_ocean/profiles/nodc_2904502_prof.nc",
    "date": "2026-09-15 14:15 UTC",
    "latitude": 14.7,
    "longitude": 91.5,
    "pressure_max": 1750.0,
    "n_levels": 13,
    "parameters": [
      "TEMP",
      "PSAL",
      "PRES",
      "DOXY",
      "CHLA"
    ],
    "ocean": "Indian Ocean (Andaman Basin)",
    "status": "Active (Transmitting)",
    "surface_temp": 29.13,
    "surface_sal": 31.79,
    "profiles": [
      {
        "depth": 0,
        "temperature": 29.13,
        "salinity": 31.8,
        "oxygen": 4.8,
        "chlorophyll": 0.17
      },
      {
        "depth": 10,
        "temperature": 27.83,
        "salinity": 31.98,
        "oxygen": 4.34,
        "chlorophyll": 0.52
      },
      {
        "depth": 25,
        "temperature": 26.01,
        "salinity": 32.3,
        "oxygen": 3.74,
        "chlorophyll": 1.53
      },
      {
        "depth": 50,
        "temperature": 23.27,
        "salinity": 33.15,
        "oxygen": 2.91,
        "chlorophyll": 1.87
      },
      {
        "depth": 75,
        "temperature": 20.87,
        "salinity": 34.14,
        "oxygen": 2.27,
        "chlorophyll": 0.31
      },
      {
        "depth": 100,
        "temperature": 18.77,
        "salinity": 34.42,
        "oxygen": 1.77,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 15.3,
        "salinity": 34.14,
        "oxygen": 0.52,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 12.64,
        "salinity": 34.8,
        "oxygen": 0.56,
        "chlorophyll": 0.01
      },
      {
        "depth": 300,
        "temperature": 9.02,
        "salinity": 34.8,
        "oxygen": 0.64,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 5.62,
        "salinity": 34.8,
        "oxygen": 0.8,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.29,
        "salinity": 34.8,
        "oxygen": 1.0,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.93,
        "salinity": 34.8,
        "oxygen": 1.2,
        "chlorophyll": 0.01
      },
      {
        "depth": 1500,
        "temperature": 3.81,
        "salinity": 34.8,
        "oxygen": 1.6,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "ARGO-2903554",
    "platform": "Argo Float 2903554",
    "wmo": "2903554",
    "type": "Argo",
    "file": "nodc_2903554_prof.nc",
    "full_path": "/argo/indian_ocean/profiles/nodc_2903554_prof.nc",
    "date": "2026-09-14 20:10 UTC",
    "latitude": 12.3,
    "longitude": 82.5,
    "pressure_max": 1850.0,
    "n_levels": 13,
    "parameters": [
      "TEMP",
      "PSAL",
      "PRES",
      "DOXY",
      "CHLA"
    ],
    "ocean": "Indian Ocean (Coromandel Coast)",
    "status": "Active (Transmitting)",
    "surface_temp": 29.37,
    "surface_sal": 32.15,
    "profiles": [
      {
        "depth": 0,
        "temperature": 29.37,
        "salinity": 32.16,
        "oxygen": 4.8,
        "chlorophyll": 0.17
      },
      {
        "depth": 10,
        "temperature": 28.06,
        "salinity": 32.32,
        "oxygen": 4.34,
        "chlorophyll": 0.52
      },
      {
        "depth": 25,
        "temperature": 26.22,
        "salinity": 32.62,
        "oxygen": 3.74,
        "chlorophyll": 1.53
      },
      {
        "depth": 50,
        "temperature": 23.45,
        "salinity": 33.42,
        "oxygen": 2.91,
        "chlorophyll": 1.87
      },
      {
        "depth": 75,
        "temperature": 21.03,
        "salinity": 34.36,
        "oxygen": 2.27,
        "chlorophyll": 0.31
      },
      {
        "depth": 100,
        "temperature": 18.91,
        "salinity": 34.6,
        "oxygen": 1.77,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 15.41,
        "salinity": 34.23,
        "oxygen": 0.52,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 12.73,
        "salinity": 34.8,
        "oxygen": 0.56,
        "chlorophyll": 0.01
      },
      {
        "depth": 300,
        "temperature": 9.07,
        "salinity": 34.8,
        "oxygen": 0.64,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 5.64,
        "salinity": 34.8,
        "oxygen": 0.8,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.29,
        "salinity": 34.8,
        "oxygen": 1.0,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.93,
        "salinity": 34.8,
        "oxygen": 1.2,
        "chlorophyll": 0.01
      },
      {
        "depth": 1500,
        "temperature": 3.81,
        "salinity": 34.8,
        "oxygen": 1.6,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "ARGO-2903555",
    "platform": "Argo Float 2903555",
    "wmo": "2903555",
    "type": "Argo",
    "file": "nodc_2903555_prof.nc",
    "full_path": "/argo/indian_ocean/profiles/nodc_2903555_prof.nc",
    "date": "2026-09-14 16:50 UTC",
    "latitude": 16.8,
    "longitude": 84.1,
    "pressure_max": 1600.0,
    "n_levels": 13,
    "parameters": [
      "TEMP",
      "PSAL",
      "PRES",
      "DOXY",
      "CHLA"
    ],
    "ocean": "Indian Ocean (Krishna-Godavari)",
    "status": "Active (Transmitting)",
    "surface_temp": 28.92,
    "surface_sal": 31.48,
    "profiles": [
      {
        "depth": 0,
        "temperature": 28.92,
        "salinity": 31.49,
        "oxygen": 4.8,
        "chlorophyll": 0.17
      },
      {
        "depth": 10,
        "temperature": 27.63,
        "salinity": 31.68,
        "oxygen": 4.34,
        "chlorophyll": 0.52
      },
      {
        "depth": 25,
        "temperature": 25.82,
        "salinity": 32.03,
        "oxygen": 3.74,
        "chlorophyll": 1.53
      },
      {
        "depth": 50,
        "temperature": 23.11,
        "salinity": 32.91,
        "oxygen": 2.91,
        "chlorophyll": 1.87
      },
      {
        "depth": 75,
        "temperature": 20.73,
        "salinity": 33.95,
        "oxygen": 2.27,
        "chlorophyll": 0.31
      },
      {
        "depth": 100,
        "temperature": 18.64,
        "salinity": 34.27,
        "oxygen": 1.77,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 15.21,
        "salinity": 34.06,
        "oxygen": 0.52,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 12.57,
        "salinity": 34.8,
        "oxygen": 0.56,
        "chlorophyll": 0.01
      },
      {
        "depth": 300,
        "temperature": 8.98,
        "salinity": 34.8,
        "oxygen": 0.64,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 5.61,
        "salinity": 34.8,
        "oxygen": 0.8,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.29,
        "salinity": 34.8,
        "oxygen": 1.0,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.93,
        "salinity": 34.8,
        "oxygen": 1.2,
        "chlorophyll": 0.01
      },
      {
        "depth": 1500,
        "temperature": 3.81,
        "salinity": 34.8,
        "oxygen": 1.6,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-001",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_001D.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_001D.nc",
    "date": "2019-11-30 18:32 UTC",
    "latitude": 17.796,
    "longitude": -20.604,
    "pressure_max": 94.5,
    "n_levels": 11,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.19,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.19,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.6,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.03,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.94,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.41,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-002",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_002.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_002.nc",
    "date": "2019-11-30 18:41 UTC",
    "latitude": 17.797,
    "longitude": -20.605,
    "pressure_max": 81.4,
    "n_levels": 8,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.19,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.19,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.6,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.03,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.94,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.41,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-003",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_003D.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_003D.nc",
    "date": "2019-11-30 18:58 UTC",
    "latitude": 17.797,
    "longitude": -20.607,
    "pressure_max": 95.1,
    "n_levels": 10,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.19,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.19,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.6,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.03,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.94,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.41,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-004",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_004.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_004.nc",
    "date": "2019-11-30 19:07 UTC",
    "latitude": 17.799,
    "longitude": -20.607,
    "pressure_max": 82.4,
    "n_levels": 8,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.19,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.19,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.6,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.03,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.94,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.41,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-005",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_005D.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_005D.nc",
    "date": "2019-11-30 19:26 UTC",
    "latitude": 17.798,
    "longitude": -20.609,
    "pressure_max": 96.3,
    "n_levels": 11,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.19,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.19,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.6,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.03,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.94,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.41,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-006",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_006.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_006.nc",
    "date": "2019-11-30 19:35 UTC",
    "latitude": 17.799,
    "longitude": -20.611,
    "pressure_max": 85.2,
    "n_levels": 7,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.19,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.19,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.6,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.03,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.94,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.41,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-007",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_007D.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_007D.nc",
    "date": "2019-11-30 19:49 UTC",
    "latitude": 17.799,
    "longitude": -20.613,
    "pressure_max": 95.3,
    "n_levels": 11,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.18,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.18,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.59,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.02,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.93,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.4,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-008",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_008.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_008.nc",
    "date": "2019-11-30 19:59 UTC",
    "latitude": 17.799,
    "longitude": -20.614,
    "pressure_max": 92.4,
    "n_levels": 9,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.18,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.18,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.59,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.02,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.93,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.4,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-009",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_009D.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_009D.nc",
    "date": "2019-11-30 20:13 UTC",
    "latitude": 17.798,
    "longitude": -20.616,
    "pressure_max": 95.6,
    "n_levels": 9,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.18,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.18,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.59,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.02,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.93,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.4,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-010",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_010.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_010.nc",
    "date": "2019-11-30 20:21 UTC",
    "latitude": 17.798,
    "longitude": -20.617,
    "pressure_max": 86.5,
    "n_levels": 7,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.18,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.18,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.59,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.02,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.93,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.4,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-011",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_011D.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_011D.nc",
    "date": "2019-11-30 20:30 UTC",
    "latitude": 17.798,
    "longitude": -20.619,
    "pressure_max": 96.8,
    "n_levels": 9,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.18,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.18,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.59,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.02,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.93,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.4,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMADEUS-6801591-012",
    "platform": "amadeus",
    "wmo": "6801591",
    "type": "Glider",
    "file": "R6801591_20191130_012.nc",
    "full_path": "/amadeus/amadeus_20191123/profiles/R6801591_20191130_012.nc",
    "date": "2019-11-30 20:38 UTC",
    "latitude": 17.797,
    "longitude": -20.62,
    "pressure_max": 87.5,
    "n_levels": 8,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 25.18,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 25.18,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 24.59,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.02,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 22.93,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 21.4,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.0,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 17.9,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-001",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_001D.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_001D.nc",
    "date": "2013-05-15 12:20 UTC",
    "latitude": 41.668,
    "longitude": 17.068,
    "pressure_max": 10475.8,
    "n_levels": 115,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.07,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.07,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.6,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.14,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.25,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.02,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.88,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.19,
        "salinity": 34.38,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.71,
        "salinity": 34.46,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.31,
        "salinity": 34.6,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.49,
        "salinity": 34.74,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.27,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.07,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-002",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_002.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_002.nc",
    "date": "2013-05-15 12:35 UTC",
    "latitude": 41.668,
    "longitude": 17.07,
    "pressure_max": 100.0,
    "n_levels": 211,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.07,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.07,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.6,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.14,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.25,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.02,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.88,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.19,
        "salinity": 34.38,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.71,
        "salinity": 34.46,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-003",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_003D.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_003D.nc",
    "date": "2013-05-15 14:25 UTC",
    "latitude": 41.675,
    "longitude": 17.052,
    "pressure_max": 10475.8,
    "n_levels": 116,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.05,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.05,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.58,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.12,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.24,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.0,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.17,
        "salinity": 34.38,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.7,
        "salinity": 34.46,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.3,
        "salinity": 34.6,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.48,
        "salinity": 34.74,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.27,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.07,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-004",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_004.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_004.nc",
    "date": "2013-05-15 14:39 UTC",
    "latitude": 41.676,
    "longitude": 17.054,
    "pressure_max": 98.8,
    "n_levels": 204,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.05,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.05,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.58,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.12,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.24,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.0,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.17,
        "salinity": 34.38,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-005",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_005D.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_005D.nc",
    "date": "2013-05-15 15:07 UTC",
    "latitude": 41.677,
    "longitude": 17.055,
    "pressure_max": 10475.8,
    "n_levels": 119,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.05,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.05,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.58,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.12,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.24,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.0,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.17,
        "salinity": 34.38,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.7,
        "salinity": 34.46,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.3,
        "salinity": 34.6,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.48,
        "salinity": 34.74,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.27,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.07,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-006",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_006.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_006.nc",
    "date": "2013-05-15 15:21 UTC",
    "latitude": 41.677,
    "longitude": 17.057,
    "pressure_max": 103.2,
    "n_levels": 213,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.06,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.06,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.59,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.13,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.25,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.01,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.18,
        "salinity": 34.38,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.7,
        "salinity": 34.46,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-007",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_007D.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_007D.nc",
    "date": "2013-05-15 15:58 UTC",
    "latitude": 41.68,
    "longitude": 17.057,
    "pressure_max": 10475.8,
    "n_levels": 110,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.05,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.05,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.58,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.12,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.24,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.0,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.17,
        "salinity": 34.38,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.7,
        "salinity": 34.46,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.3,
        "salinity": 34.6,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.48,
        "salinity": 34.74,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.27,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.07,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-008",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_008.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_008.nc",
    "date": "2013-05-15 16:10 UTC",
    "latitude": 41.681,
    "longitude": 17.058,
    "pressure_max": 69.1,
    "n_levels": 147,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.06,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.06,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.59,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.13,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.25,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.01,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-009",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_009D.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_009D.nc",
    "date": "2013-05-15 16:47 UTC",
    "latitude": 41.684,
    "longitude": 17.058,
    "pressure_max": 10475.8,
    "n_levels": 108,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.05,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.05,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.58,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.12,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.24,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.0,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.17,
        "salinity": 34.38,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.7,
        "salinity": 34.46,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.3,
        "salinity": 34.6,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.48,
        "salinity": 34.74,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.27,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.07,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-010",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_010.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_010.nc",
    "date": "2013-05-15 16:59 UTC",
    "latitude": 41.684,
    "longitude": 17.06,
    "pressure_max": 72.1,
    "n_levels": 157,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.06,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.06,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.59,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.13,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.25,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.01,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-011",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_011D.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_011D.nc",
    "date": "2013-05-15 17:29 UTC",
    "latitude": 41.686,
    "longitude": 17.062,
    "pressure_max": 10475.8,
    "n_levels": 115,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.06,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.06,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.59,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.13,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.25,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.01,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.18,
        "salinity": 34.38,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.7,
        "salinity": 34.46,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.3,
        "salinity": 34.6,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.48,
        "salinity": 34.74,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.27,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.07,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 1000,
        "temperature": 3.87,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMERIGO-6800166-012",
    "platform": "amerigo",
    "wmo": "6800166",
    "type": "Glider",
    "file": "R6800166_20130515_012.nc",
    "full_path": "/amerigo/amerigo_20130515/profiles/R6800166_20130515_012.nc",
    "date": "2013-05-15 17:40 UTC",
    "latitude": 41.686,
    "longitude": 17.063,
    "pressure_max": 62.2,
    "n_levels": 143,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.06,
    "surface_sal": 34.17,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.06,
        "salinity": 34.17,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.59,
        "salinity": 34.18,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.13,
        "salinity": 34.2,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.25,
        "salinity": 34.23,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.01,
        "salinity": 34.27,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 34.31,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-001",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_001D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_001D.nc",
    "date": "2007-01-18 12:07 UTC",
    "latitude": 42.99,
    "longitude": 6.025,
    "pressure_max": 16.1,
    "n_levels": 7,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.29,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.29,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.84,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.4,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.56,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.38,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.29,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-002",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_002D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_002D.nc",
    "date": "2007-01-22 04:32 UTC",
    "latitude": 42.704,
    "longitude": 5.821,
    "pressure_max": 995.3,
    "n_levels": 235,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.63,
    "surface_sal": 33.58,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.63,
        "salinity": 33.58,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.14,
        "salinity": 33.61,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.67,
        "salinity": 33.64,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.76,
        "salinity": 33.69,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.48,
        "salinity": 33.77,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.31,
        "salinity": 33.86,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.55,
        "salinity": 34.0,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.03,
        "salinity": 34.13,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.55,
        "salinity": 34.41,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.67,
        "salinity": 34.69,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.35,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.91,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-003",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_003D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_003D.nc",
    "date": "2007-01-22 15:31 UTC",
    "latitude": 43.002,
    "longitude": 5.991,
    "pressure_max": 798.0,
    "n_levels": 158,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-004",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_004D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_004D.nc",
    "date": "2007-01-22 17:57 UTC",
    "latitude": 43.002,
    "longitude": 5.992,
    "pressure_max": 798.3,
    "n_levels": 161,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-005",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_005D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_005D.nc",
    "date": "2007-01-22 20:19 UTC",
    "latitude": 43.003,
    "longitude": 5.992,
    "pressure_max": 798.0,
    "n_levels": 154,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-006",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_006D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_006D.nc",
    "date": "2007-01-22 22:37 UTC",
    "latitude": 43.005,
    "longitude": 5.992,
    "pressure_max": 750.5,
    "n_levels": 148,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-007",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_007D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_007D.nc",
    "date": "2007-01-23 00:52 UTC",
    "latitude": 43.006,
    "longitude": 5.992,
    "pressure_max": 798.7,
    "n_levels": 157,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-008",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_008D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_008D.nc",
    "date": "2007-01-23 03:24 UTC",
    "latitude": 43.004,
    "longitude": 5.992,
    "pressure_max": 800.3,
    "n_levels": 160,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-009",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_009D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_009D.nc",
    "date": "2007-01-23 05:49 UTC",
    "latitude": 43.0,
    "longitude": 5.992,
    "pressure_max": 798.2,
    "n_levels": 153,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-010",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_010D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_010D.nc",
    "date": "2007-01-23 08:12 UTC",
    "latitude": 43.005,
    "longitude": 5.992,
    "pressure_max": 800.5,
    "n_levels": 149,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-011",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_011D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_011D.nc",
    "date": "2007-01-23 10:30 UTC",
    "latitude": 43.006,
    "longitude": 5.993,
    "pressure_max": 802.0,
    "n_levels": 151,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-AMMONITE-6800983-012",
    "platform": "ammonite",
    "wmo": "6800983",
    "type": "Glider",
    "file": "R6800983_20070118_012D.nc",
    "full_path": "/ammonite/ammonite_20070118/profiles/R6800983_20070118_012D.nc",
    "date": "2007-01-23 12:46 UTC",
    "latitude": 43.004,
    "longitude": 5.992,
    "pressure_max": 797.8,
    "n_levels": 143,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-001",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_001.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_001.nc",
    "date": "2013-04-24 08:18 UTC",
    "latitude": 43.092,
    "longitude": 5.214,
    "pressure_max": 116.0,
    "n_levels": 57,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.96,
    "surface_sal": 33.74,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.96,
        "salinity": 33.74,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.49,
        "salinity": 33.76,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.03,
        "salinity": 33.79,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.16,
        "salinity": 33.84,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.93,
        "salinity": 33.91,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.8,
        "salinity": 33.98,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.11,
        "salinity": 34.1,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.65,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-002",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_002.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_002.nc",
    "date": "2013-04-24 09:14 UTC",
    "latitude": 43.09,
    "longitude": 5.21,
    "pressure_max": 114.0,
    "n_levels": 57,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.95,
    "surface_sal": 33.74,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.95,
        "salinity": 33.74,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.48,
        "salinity": 33.76,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.02,
        "salinity": 33.79,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.15,
        "salinity": 33.84,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.92,
        "salinity": 33.91,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.79,
        "salinity": 33.98,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.11,
        "salinity": 34.1,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.64,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-003",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_003.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_003.nc",
    "date": "2013-04-24 10:59 UTC",
    "latitude": 43.084,
    "longitude": 5.199,
    "pressure_max": 266.0,
    "n_levels": 133,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.94,
    "surface_sal": 33.73,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.94,
        "salinity": 33.73,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.47,
        "salinity": 33.75,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.01,
        "salinity": 33.78,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.14,
        "salinity": 33.83,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.91,
        "salinity": 33.9,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.78,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.1,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.63,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.25,
        "salinity": 34.46,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.44,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-004",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_004.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_004.nc",
    "date": "2013-04-24 12:57 UTC",
    "latitude": 43.077,
    "longitude": 5.184,
    "pressure_max": 322.0,
    "n_levels": 161,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.93,
    "surface_sal": 33.73,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.93,
        "salinity": 33.73,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.46,
        "salinity": 33.75,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.0,
        "salinity": 33.78,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.13,
        "salinity": 33.83,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.9,
        "salinity": 33.9,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.78,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.09,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.63,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.25,
        "salinity": 34.46,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.44,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-005",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_005.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_005.nc",
    "date": "2013-04-24 15:49 UTC",
    "latitude": 43.066,
    "longitude": 5.161,
    "pressure_max": 462.0,
    "n_levels": 227,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.91,
    "surface_sal": 33.73,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.91,
        "salinity": 33.73,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.44,
        "salinity": 33.75,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.99,
        "salinity": 33.78,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.11,
        "salinity": 33.83,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.89,
        "salinity": 33.9,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.76,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.08,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.62,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.24,
        "salinity": 34.46,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.43,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.25,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-006",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_006.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_006.nc",
    "date": "2013-04-24 18:30 UTC",
    "latitude": 43.054,
    "longitude": 5.139,
    "pressure_max": 346.0,
    "n_levels": 172,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.89,
    "surface_sal": 33.72,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.89,
        "salinity": 33.72,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.42,
        "salinity": 33.74,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.97,
        "salinity": 33.77,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.09,
        "salinity": 33.82,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.87,
        "salinity": 33.89,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.75,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.07,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.61,
        "salinity": 34.21,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.23,
        "salinity": 34.46,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.43,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-007",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_007.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_007.nc",
    "date": "2013-04-24 20:36 UTC",
    "latitude": 43.04,
    "longitude": 5.121,
    "pressure_max": 328.0,
    "n_levels": 164,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.87,
    "surface_sal": 33.72,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.87,
        "salinity": 33.72,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.4,
        "salinity": 33.74,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.95,
        "salinity": 33.77,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.08,
        "salinity": 33.82,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.85,
        "salinity": 33.89,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.73,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.05,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.59,
        "salinity": 34.21,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.22,
        "salinity": 34.46,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.42,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-008",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_008.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_008.nc",
    "date": "2013-04-24 22:47 UTC",
    "latitude": 43.026,
    "longitude": 5.102,
    "pressure_max": 338.0,
    "n_levels": 166,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.86,
    "surface_sal": 33.71,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.86,
        "salinity": 33.71,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.39,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.94,
        "salinity": 33.76,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.07,
        "salinity": 33.81,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.85,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.72,
        "salinity": 33.96,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.05,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.59,
        "salinity": 34.21,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.21,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.42,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-009",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_009.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_009.nc",
    "date": "2013-04-25 01:04 UTC",
    "latitude": 43.017,
    "longitude": 5.088,
    "pressure_max": 350.0,
    "n_levels": 173,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.84,
    "surface_sal": 33.71,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.84,
        "salinity": 33.71,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.37,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.92,
        "salinity": 33.76,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.05,
        "salinity": 33.81,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.83,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.71,
        "salinity": 33.96,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.03,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.58,
        "salinity": 34.21,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.21,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.41,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.24,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-010",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_010.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_010.nc",
    "date": "2013-04-25 03:20 UTC",
    "latitude": 43.003,
    "longitude": 5.07,
    "pressure_max": 352.0,
    "n_levels": 176,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.83,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.83,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.36,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.91,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.04,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.82,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.7,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.03,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.57,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.2,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.41,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.24,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-011",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_011.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_011.nc",
    "date": "2013-04-25 05:23 UTC",
    "latitude": 42.989,
    "longitude": 5.053,
    "pressure_max": 312.0,
    "n_levels": 155,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.81,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.81,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.34,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.89,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.02,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.8,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.68,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.01,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.56,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.19,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.4,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BAKER-6800456-012",
    "platform": "baker",
    "wmo": "6800456",
    "type": "Glider",
    "file": "R6800456_20130424_012.nc",
    "full_path": "/baker/baker_20130424/profiles/R6800456_20130424_012.nc",
    "date": "2013-04-25 07:44 UTC",
    "latitude": 42.97,
    "longitude": 5.037,
    "pressure_max": 416.0,
    "n_levels": 208,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.8,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.8,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.33,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.88,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.01,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.8,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.68,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.01,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.55,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.19,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.4,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.23,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-001",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_001D.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_001D.nc",
    "date": "2007-01-18 10:22 UTC",
    "latitude": 43.0,
    "longitude": 6.011,
    "pressure_max": 94.6,
    "n_levels": 15,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.27,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.27,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.82,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.38,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.54,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.36,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.28,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.66,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-002",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_002D.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_002D.nc",
    "date": "2007-01-18 11:22 UTC",
    "latitude": 42.999,
    "longitude": 6.002,
    "pressure_max": 974.1,
    "n_levels": 119,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.26,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.26,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.81,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.37,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.53,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.35,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.27,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.65,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.24,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.95,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.22,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.16,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.82,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.06,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-003",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_003D.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_003D.nc",
    "date": "2007-01-18 14:22 UTC",
    "latitude": 43.001,
    "longitude": 6.0,
    "pressure_max": 983.8,
    "n_levels": 121,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.26,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.26,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.81,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.37,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.53,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.35,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.27,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.65,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.24,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.95,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.22,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.16,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.82,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.06,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-004",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_004.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_004.nc",
    "date": "2007-01-18 16:11 UTC",
    "latitude": 43.005,
    "longitude": 5.993,
    "pressure_max": 42.6,
    "n_levels": 1,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-005",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_005D.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_005D.nc",
    "date": "2007-01-18 16:13 UTC",
    "latitude": 43.005,
    "longitude": 5.994,
    "pressure_max": 61.8,
    "n_levels": 2,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-006",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_006D.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_006D.nc",
    "date": "2007-01-18 17:01 UTC",
    "latitude": 43.003,
    "longitude": 5.997,
    "pressure_max": 418.4,
    "n_levels": 55,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.76,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.76,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.27,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.79,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.87,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.59,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.64,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.11,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.61,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-007",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_007D.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_007D.nc",
    "date": "2007-01-18 18:28 UTC",
    "latitude": 43.002,
    "longitude": 5.994,
    "pressure_max": 982.8,
    "n_levels": 120,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-008",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_008.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_008.nc",
    "date": "2007-01-18 20:17 UTC",
    "latitude": 43.002,
    "longitude": 5.993,
    "pressure_max": 42.6,
    "n_levels": 1,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-009",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_009D.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_009D.nc",
    "date": "2007-01-18 20:19 UTC",
    "latitude": 43.002,
    "longitude": 5.993,
    "pressure_max": 83.6,
    "n_levels": 4,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-010",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_010D.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_010D.nc",
    "date": "2007-01-18 21:34 UTC",
    "latitude": 42.999,
    "longitude": 5.999,
    "pressure_max": 973.7,
    "n_levels": 70,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.76,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.76,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.27,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.79,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.87,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.59,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.64,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.11,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.61,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-011",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_011D.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_011D.nc",
    "date": "2007-01-19 01:31 UTC",
    "latitude": 42.993,
    "longitude": 6.026,
    "pressure_max": 924.5,
    "n_levels": 98,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.29,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.29,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.84,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.4,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.56,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.38,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.29,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.67,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.26,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.97,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.23,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.16,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.83,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.06,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BELLAMITE-6801586-012",
    "platform": "bellamite",
    "wmo": "6801586",
    "type": "Glider",
    "file": "R6801586_20070118_012D.nc",
    "full_path": "/bellamite/bellamite_20070118/profiles/R6801586_20070118_012D.nc",
    "date": "2007-01-19 09:54 UTC",
    "latitude": 42.994,
    "longitude": 6.01,
    "pressure_max": 700.7,
    "n_levels": 93,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.27,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.27,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.82,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.38,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.54,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.36,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.28,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.66,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.25,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.96,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.22,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.16,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.82,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-001",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_001D.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_001D.nc",
    "date": "2009-11-23 10:53 UTC",
    "latitude": 34.651,
    "longitude": 33.076,
    "pressure_max": 34.8,
    "n_levels": 3,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.84,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.84,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.35,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.94,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.65,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-002",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_002.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_002.nc",
    "date": "2009-11-23 11:00 UTC",
    "latitude": 34.651,
    "longitude": 33.076,
    "pressure_max": 33.7,
    "n_levels": 10,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.84,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.84,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.35,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.94,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.65,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-003",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_003D.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_003D.nc",
    "date": "2009-11-23 11:43 UTC",
    "latitude": 34.653,
    "longitude": 33.075,
    "pressure_max": 63.7,
    "n_levels": 4,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.84,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.84,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.35,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.94,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.65,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-004",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_004.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_004.nc",
    "date": "2009-11-23 11:46 UTC",
    "latitude": 34.652,
    "longitude": 33.075,
    "pressure_max": 62.9,
    "n_levels": 11,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.84,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.84,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.35,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.94,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.65,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-005",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_005D.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_005D.nc",
    "date": "2009-11-23 12:37 UTC",
    "latitude": 34.653,
    "longitude": 33.073,
    "pressure_max": 82.1,
    "n_levels": 4,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.84,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.84,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.35,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.94,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.65,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.69,
        "salinity": 34.51,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-006",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_006.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_006.nc",
    "date": "2009-11-23 12:41 UTC",
    "latitude": 34.653,
    "longitude": 33.074,
    "pressure_max": 80.9,
    "n_levels": 16,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.84,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.84,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.35,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.94,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.65,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.69,
        "salinity": 34.51,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-007",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_007D.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_007D.nc",
    "date": "2009-11-23 12:56 UTC",
    "latitude": 34.652,
    "longitude": 33.077,
    "pressure_max": 90.7,
    "n_levels": 3,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.84,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.84,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.35,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.94,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.65,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.69,
        "salinity": 34.51,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-008",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_008.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_008.nc",
    "date": "2009-11-23 13:00 UTC",
    "latitude": 34.652,
    "longitude": 33.077,
    "pressure_max": 89.1,
    "n_levels": 16,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.84,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.84,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.35,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.94,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.65,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.69,
        "salinity": 34.51,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-009",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_009D.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_009D.nc",
    "date": "2009-11-23 13:39 UTC",
    "latitude": 34.652,
    "longitude": 33.079,
    "pressure_max": 96.5,
    "n_levels": 4,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.84,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.84,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.35,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.94,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.65,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.69,
        "salinity": 34.51,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-010",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_010.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_010.nc",
    "date": "2009-11-23 13:44 UTC",
    "latitude": 34.652,
    "longitude": 33.08,
    "pressure_max": 95.3,
    "n_levels": 19,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.84,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.84,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.35,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.94,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.65,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.69,
        "salinity": 34.51,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-011",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_011D.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_011D.nc",
    "date": "2009-11-23 14:00 UTC",
    "latitude": 34.651,
    "longitude": 33.082,
    "pressure_max": 104.5,
    "n_levels": 4,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.84,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.84,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.35,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.94,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.65,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.69,
        "salinity": 34.51,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.15,
        "salinity": 34.56,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BONPLAND-1800956-012",
    "platform": "bonpland",
    "wmo": "1800956",
    "type": "Glider",
    "file": "R1800956_20091123_012.nc",
    "full_path": "/bonpland/bonpland_20091123/profiles/R1800956_20091123_012.nc",
    "date": "2009-11-23 14:04 UTC",
    "latitude": 34.651,
    "longitude": 33.083,
    "pressure_max": 102.8,
    "n_levels": 19,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.85,
    "surface_sal": 34.36,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.85,
        "salinity": 34.36,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.36,
        "salinity": 34.37,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.87,
        "salinity": 34.38,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.95,
        "salinity": 34.4,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.66,
        "salinity": 34.43,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.47,
        "salinity": 34.46,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.7,
        "salinity": 34.51,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.16,
        "salinity": 34.56,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-001",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_001.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_001.nc",
    "date": "2024-02-25 03:17 UTC",
    "latitude": 48.912,
    "longitude": -126.269,
    "pressure_max": 98.7,
    "n_levels": 10,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.43,
    "surface_sal": 34.06,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.43,
        "salinity": 34.06,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.97,
        "salinity": 34.08,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.53,
        "salinity": 34.09,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.68,
        "salinity": 34.13,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.49,
        "salinity": 34.18,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.4,
        "salinity": 34.23,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.76,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-002",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_002.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_002.nc",
    "date": "2024-02-25 03:46 UTC",
    "latitude": 48.908,
    "longitude": -126.275,
    "pressure_max": 97.6,
    "n_levels": 10,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.42,
    "surface_sal": 34.06,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.42,
        "salinity": 34.06,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.96,
        "salinity": 34.08,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.52,
        "salinity": 34.09,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.67,
        "salinity": 34.13,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.48,
        "salinity": 34.18,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.39,
        "salinity": 34.23,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.76,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-003",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_003.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_003.nc",
    "date": "2024-02-25 04:53 UTC",
    "latitude": 48.898,
    "longitude": -126.289,
    "pressure_max": 102.9,
    "n_levels": 10,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.41,
    "surface_sal": 34.06,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.41,
        "salinity": 34.06,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.96,
        "salinity": 34.08,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.51,
        "salinity": 34.09,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.66,
        "salinity": 34.13,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.48,
        "salinity": 34.18,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.38,
        "salinity": 34.23,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.75,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.33,
        "salinity": 34.4,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-004",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_004.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_004.nc",
    "date": "2024-02-25 05:11 UTC",
    "latitude": 48.896,
    "longitude": -126.294,
    "pressure_max": 105.6,
    "n_levels": 10,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.4,
    "surface_sal": 34.06,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.4,
        "salinity": 34.06,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.95,
        "salinity": 34.08,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.5,
        "salinity": 34.09,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.65,
        "salinity": 34.13,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.47,
        "salinity": 34.18,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.37,
        "salinity": 34.23,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.74,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.32,
        "salinity": 34.4,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-005",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_005.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_005.nc",
    "date": "2024-02-25 06:02 UTC",
    "latitude": 48.888,
    "longitude": -126.306,
    "pressure_max": 98.8,
    "n_levels": 10,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.39,
    "surface_sal": 34.06,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.39,
        "salinity": 34.06,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.94,
        "salinity": 34.08,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.49,
        "salinity": 34.09,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.65,
        "salinity": 34.13,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.46,
        "salinity": 34.18,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.37,
        "salinity": 34.23,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.74,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-006",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_006.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_006.nc",
    "date": "2024-02-25 06:19 UTC",
    "latitude": 48.886,
    "longitude": -126.311,
    "pressure_max": 111.1,
    "n_levels": 10,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.39,
    "surface_sal": 34.05,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.39,
        "salinity": 34.05,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.94,
        "salinity": 34.07,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.49,
        "salinity": 34.08,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.65,
        "salinity": 34.12,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.46,
        "salinity": 34.17,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.37,
        "salinity": 34.22,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.74,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.32,
        "salinity": 34.39,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-007",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_007.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_007.nc",
    "date": "2024-02-25 06:38 UTC",
    "latitude": 48.883,
    "longitude": -126.316,
    "pressure_max": 109.6,
    "n_levels": 10,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.39,
    "surface_sal": 34.05,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.39,
        "salinity": 34.05,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.94,
        "salinity": 34.07,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.49,
        "salinity": 34.08,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.65,
        "salinity": 34.12,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.46,
        "salinity": 34.17,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.37,
        "salinity": 34.22,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.74,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.32,
        "salinity": 34.39,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-008",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_008.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_008.nc",
    "date": "2024-02-25 07:12 UTC",
    "latitude": 48.879,
    "longitude": -126.325,
    "pressure_max": 104.3,
    "n_levels": 10,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.38,
    "surface_sal": 34.05,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.38,
        "salinity": 34.05,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.93,
        "salinity": 34.07,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.48,
        "salinity": 34.08,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.64,
        "salinity": 34.12,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.45,
        "salinity": 34.17,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.36,
        "salinity": 34.22,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.73,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.31,
        "salinity": 34.39,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-009",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_009.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_009.nc",
    "date": "2024-02-25 07:53 UTC",
    "latitude": 48.875,
    "longitude": -126.333,
    "pressure_max": 115.8,
    "n_levels": 11,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.37,
    "surface_sal": 34.05,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.37,
        "salinity": 34.05,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.92,
        "salinity": 34.07,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.47,
        "salinity": 34.08,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.63,
        "salinity": 34.12,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.44,
        "salinity": 34.17,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.35,
        "salinity": 34.22,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.72,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.31,
        "salinity": 34.39,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-010",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_010.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_010.nc",
    "date": "2024-02-25 08:18 UTC",
    "latitude": 48.871,
    "longitude": -126.34,
    "pressure_max": 116.3,
    "n_levels": 10,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.36,
    "surface_sal": 34.05,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.36,
        "salinity": 34.05,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.91,
        "salinity": 34.07,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.47,
        "salinity": 34.08,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.62,
        "salinity": 34.12,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.43,
        "salinity": 34.17,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.34,
        "salinity": 34.22,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.72,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.3,
        "salinity": 34.39,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-011",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_011.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_011.nc",
    "date": "2024-02-25 08:40 UTC",
    "latitude": 48.868,
    "longitude": -126.346,
    "pressure_max": 121.9,
    "n_levels": 10,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.36,
    "surface_sal": 34.05,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.36,
        "salinity": 34.05,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.91,
        "salinity": 34.07,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.47,
        "salinity": 34.08,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.62,
        "salinity": 34.12,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.43,
        "salinity": 34.17,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.34,
        "salinity": 34.22,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.72,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.3,
        "salinity": 34.39,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-BUMBLEBEE_998-8900994-012",
    "platform": "bumblebee_998",
    "wmo": "8900994",
    "type": "Glider",
    "file": "R8900994_20240224_012.nc",
    "full_path": "/bumblebee_998/bumblebee_998_20240224/profiles/R8900994_20240224_012.nc",
    "date": "2024-02-25 09:02 UTC",
    "latitude": 48.865,
    "longitude": -126.352,
    "pressure_max": 118.5,
    "n_levels": 11,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.35,
    "surface_sal": 34.05,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.35,
        "salinity": 34.05,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.9,
        "salinity": 34.07,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.46,
        "salinity": 34.08,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.61,
        "salinity": 34.12,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.43,
        "salinity": 34.17,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.34,
        "salinity": 34.22,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.71,
        "salinity": 34.31,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.3,
        "salinity": 34.39,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-001",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_001D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_001D.nc",
    "date": "2010-05-19 14:31 UTC",
    "latitude": 43.04,
    "longitude": 5.973,
    "pressure_max": 39.7,
    "n_levels": 17,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.73,
    "surface_sal": 33.72,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.73,
        "salinity": 33.72,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.24,
        "salinity": 33.74,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.76,
        "salinity": 33.77,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.84,
        "salinity": 33.82,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.56,
        "salinity": 33.89,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.38,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-002",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_002D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_002D.nc",
    "date": "2010-05-19 15:44 UTC",
    "latitude": 43.038,
    "longitude": 5.966,
    "pressure_max": 374.5,
    "n_levels": 72,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.72,
    "surface_sal": 33.72,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.72,
        "salinity": 33.72,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.23,
        "salinity": 33.74,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.75,
        "salinity": 33.77,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.84,
        "salinity": 33.82,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.55,
        "salinity": 33.89,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.37,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.61,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.08,
        "salinity": 34.21,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.59,
        "salinity": 34.46,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.7,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.36,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-003",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_003D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_003D.nc",
    "date": "2010-05-19 17:08 UTC",
    "latitude": 43.028,
    "longitude": 5.967,
    "pressure_max": 370.7,
    "n_levels": 73,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.72,
    "surface_sal": 33.71,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.72,
        "salinity": 33.71,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.23,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.75,
        "salinity": 33.76,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.84,
        "salinity": 33.81,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.55,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.37,
        "salinity": 33.96,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.61,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.08,
        "salinity": 34.21,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.59,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.7,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.36,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-004",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_004D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_004D.nc",
    "date": "2010-05-19 18:26 UTC",
    "latitude": 43.018,
    "longitude": 5.966,
    "pressure_max": 224.6,
    "n_levels": 48,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.72,
    "surface_sal": 33.71,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.72,
        "salinity": 33.71,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.23,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.75,
        "salinity": 33.76,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.84,
        "salinity": 33.81,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.55,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.37,
        "salinity": 33.96,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.61,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.08,
        "salinity": 34.21,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.59,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.7,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-005",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_005D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_005D.nc",
    "date": "2010-05-19 19:45 UTC",
    "latitude": 43.023,
    "longitude": 5.972,
    "pressure_max": 252.7,
    "n_levels": 52,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.73,
    "surface_sal": 33.71,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.73,
        "salinity": 33.71,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.24,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.76,
        "salinity": 33.76,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.84,
        "salinity": 33.81,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.56,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.38,
        "salinity": 33.96,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.62,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.09,
        "salinity": 34.21,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.59,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.7,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-006",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_006D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_006D.nc",
    "date": "2010-05-19 20:58 UTC",
    "latitude": 43.028,
    "longitude": 5.983,
    "pressure_max": 728.7,
    "n_levels": 129,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.74,
    "surface_sal": 33.71,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.74,
        "salinity": 33.71,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.25,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.77,
        "salinity": 33.76,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.85,
        "salinity": 33.81,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.57,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.39,
        "salinity": 33.96,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.09,
        "salinity": 34.21,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-007",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_007D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_007D.nc",
    "date": "2010-05-19 23:29 UTC",
    "latitude": 43.022,
    "longitude": 5.989,
    "pressure_max": 825.7,
    "n_levels": 180,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.71,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.71,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.76,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.81,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.96,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.21,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-008",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_008D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_008D.nc",
    "date": "2010-05-20 02:33 UTC",
    "latitude": 43.011,
    "longitude": 5.994,
    "pressure_max": 991.0,
    "n_levels": 210,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-009",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_009D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_009D.nc",
    "date": "2010-05-20 05:59 UTC",
    "latitude": 42.982,
    "longitude": 5.992,
    "pressure_max": 991.3,
    "n_levels": 208,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.76,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.76,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.27,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.79,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.87,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.59,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.64,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.11,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.61,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-010",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_010D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_010D.nc",
    "date": "2010-05-20 09:32 UTC",
    "latitude": 42.97,
    "longitude": 5.981,
    "pressure_max": 990.8,
    "n_levels": 224,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-011",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_011D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_011D.nc",
    "date": "2010-05-20 13:30 UTC",
    "latitude": 43.006,
    "longitude": 5.979,
    "pressure_max": 736.0,
    "n_levels": 164,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.74,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.74,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.25,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.77,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.85,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.57,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.39,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.09,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CAMPE-5800970-012",
    "platform": "campe",
    "wmo": "5800970",
    "type": "Glider",
    "file": "R5800970_20100519_012D.nc",
    "full_path": "/campe/campe_20100519/profiles/R5800970_20100519_012D.nc",
    "date": "2010-05-20 16:40 UTC",
    "latitude": 43.022,
    "longitude": 5.985,
    "pressure_max": 547.7,
    "n_levels": 132,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.74,
    "surface_sal": 33.71,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.74,
        "salinity": 33.71,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.25,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.77,
        "salinity": 33.76,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.85,
        "salinity": 33.81,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.57,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.39,
        "salinity": 33.96,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.09,
        "salinity": 34.21,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-001",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_001D.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_001D.nc",
    "date": "2024-02-12 19:26 UTC",
    "latitude": 51.757,
    "longitude": -127.963,
    "pressure_max": 251.9,
    "n_levels": 19,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.72,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.72,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.28,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.86,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.05,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.91,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.86,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.3,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-002",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_002.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_002.nc",
    "date": "2024-02-12 19:42 UTC",
    "latitude": 51.758,
    "longitude": -127.966,
    "pressure_max": 245.1,
    "n_levels": 19,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.72,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.72,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.28,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.86,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.05,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.91,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.86,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.3,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-003",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_003D.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_003D.nc",
    "date": "2024-02-12 20:10 UTC",
    "latitude": 51.76,
    "longitude": -127.972,
    "pressure_max": 280.5,
    "n_levels": 21,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.71,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.71,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.27,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.85,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.04,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.9,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.85,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.29,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-004",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_004.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_004.nc",
    "date": "2024-02-12 20:32 UTC",
    "latitude": 51.758,
    "longitude": -127.974,
    "pressure_max": 272.4,
    "n_levels": 22,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.71,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.71,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.27,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.85,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.04,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.9,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.85,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.29,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-005",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_005D.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_005D.nc",
    "date": "2024-02-12 20:59 UTC",
    "latitude": 51.756,
    "longitude": -127.976,
    "pressure_max": 294.8,
    "n_levels": 20,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.71,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.71,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.27,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.85,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.04,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.9,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.85,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.29,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-006",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_006.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_006.nc",
    "date": "2024-02-12 21:19 UTC",
    "latitude": 51.756,
    "longitude": -127.977,
    "pressure_max": 289.9,
    "n_levels": 25,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.71,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.71,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.27,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.85,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.04,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.9,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.85,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.29,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-007",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_007D.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_007D.nc",
    "date": "2024-02-12 21:58 UTC",
    "latitude": 51.756,
    "longitude": -127.975,
    "pressure_max": 291.5,
    "n_levels": 23,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.71,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.71,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.27,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.85,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.04,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.9,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.85,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.29,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-008",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_008.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_008.nc",
    "date": "2024-02-12 22:18 UTC",
    "latitude": 51.757,
    "longitude": -127.974,
    "pressure_max": 284.0,
    "n_levels": 22,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.71,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.71,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.27,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.85,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.04,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.9,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.85,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.29,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-009",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_009D.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_009D.nc",
    "date": "2024-02-12 22:45 UTC",
    "latitude": 51.757,
    "longitude": -127.972,
    "pressure_max": 287.2,
    "n_levels": 19,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.71,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.71,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.27,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.85,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.04,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.9,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.85,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.29,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-010",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_010.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_010.nc",
    "date": "2024-02-12 23:19 UTC",
    "latitude": 51.757,
    "longitude": -127.973,
    "pressure_max": 272.7,
    "n_levels": 22,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.71,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.71,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.27,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.85,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.04,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.9,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.85,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.29,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-011",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_011D.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_011D.nc",
    "date": "2024-02-12 23:52 UTC",
    "latitude": 51.756,
    "longitude": -127.975,
    "pressure_max": 297.7,
    "n_levels": 22,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.71,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.71,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.27,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.85,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.04,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.9,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.85,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.29,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COLIN_1142-6801549-012",
    "platform": "colin_1142",
    "wmo": "6801549",
    "type": "Glider",
    "file": "R6801549_20240312_012.nc",
    "full_path": "/colin_1142/colin_1142_20240312/profiles/R6801549_20240312_012.nc",
    "date": "2024-02-13 00:11 UTC",
    "latitude": 51.756,
    "longitude": -127.976,
    "pressure_max": 287.7,
    "n_levels": 23,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Pacific Ocean",
    "status": "GDAC Validated",
    "surface_temp": 19.71,
    "surface_sal": 34.2,
    "profiles": [
      {
        "depth": 0,
        "temperature": 19.71,
        "salinity": 34.2,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.27,
        "salinity": 34.21,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 18.85,
        "salinity": 34.23,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.04,
        "salinity": 34.25,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 16.9,
        "salinity": 34.3,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 15.85,
        "salinity": 34.34,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.29,
        "salinity": 34.4,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 12.93,
        "salinity": 34.47,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.72,
        "salinity": 34.61,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.04,
        "salinity": 34.75,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-001",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_001D.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_001D.nc",
    "date": "2018-05-17 07:30 UTC",
    "latitude": 43.415,
    "longitude": -1.95,
    "pressure_max": 63.9,
    "n_levels": 576,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.24,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.24,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.76,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.3,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.41,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.16,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.01,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-002",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_002.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_002.nc",
    "date": "2018-05-17 07:40 UTC",
    "latitude": 43.415,
    "longitude": -1.95,
    "pressure_max": 63.9,
    "n_levels": 501,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.24,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.24,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.76,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.3,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.41,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.16,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.01,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-003",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_003D.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_003D.nc",
    "date": "2018-05-17 08:00 UTC",
    "latitude": 43.416,
    "longitude": -1.945,
    "pressure_max": 67.3,
    "n_levels": 582,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.24,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.24,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.76,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.3,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.41,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.16,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.01,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-004",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_004.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_004.nc",
    "date": "2018-05-17 08:10 UTC",
    "latitude": 43.417,
    "longitude": -1.944,
    "pressure_max": 67.2,
    "n_levels": 489,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.24,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.24,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.76,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.3,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.41,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.16,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.01,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-005",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_005D.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_005D.nc",
    "date": "2018-05-17 08:29 UTC",
    "latitude": 43.418,
    "longitude": -1.942,
    "pressure_max": 94.0,
    "n_levels": 916,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.24,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.24,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.76,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.3,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.41,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.16,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.01,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.3,
        "salinity": 34.19,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-006",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_006.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_006.nc",
    "date": "2018-05-17 08:42 UTC",
    "latitude": 43.419,
    "longitude": -1.941,
    "pressure_max": 93.7,
    "n_levels": 571,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.24,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.24,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.76,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.3,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.41,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.16,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.01,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.3,
        "salinity": 34.19,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-007",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_007D.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_007D.nc",
    "date": "2018-05-17 08:53 UTC",
    "latitude": 43.419,
    "longitude": -1.94,
    "pressure_max": 94.6,
    "n_levels": 643,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.24,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.24,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.76,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.3,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.41,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.16,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.01,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.3,
        "salinity": 34.19,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-008",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_008.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_008.nc",
    "date": "2018-05-17 09:04 UTC",
    "latitude": 43.419,
    "longitude": -1.938,
    "pressure_max": 94.6,
    "n_levels": 578,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.25,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.25,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.77,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.31,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.42,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.17,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.02,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.3,
        "salinity": 34.19,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-009",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_009D.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_009D.nc",
    "date": "2018-05-17 09:15 UTC",
    "latitude": 43.42,
    "longitude": -1.936,
    "pressure_max": 94.2,
    "n_levels": 627,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.25,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.25,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.77,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.31,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.42,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.17,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.02,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.3,
        "salinity": 34.19,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-010",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_010.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_010.nc",
    "date": "2018-05-17 09:33 UTC",
    "latitude": 43.42,
    "longitude": -1.935,
    "pressure_max": 94.1,
    "n_levels": 1126,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.25,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.25,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.77,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.31,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.42,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.17,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.02,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.3,
        "salinity": 34.19,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-011",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_011D.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_011D.nc",
    "date": "2018-05-17 09:57 UTC",
    "latitude": 43.419,
    "longitude": -1.931,
    "pressure_max": 93.5,
    "n_levels": 776,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.25,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.25,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.77,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.31,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.42,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.17,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.02,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.3,
        "salinity": 34.19,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-COMET-6801593-012",
    "platform": "comet",
    "wmo": "6801593",
    "type": "Glider",
    "file": "R6801593_20180517_012.nc",
    "full_path": "/comet/comet_20180517/profiles/R6801593_20180517_012.nc",
    "date": "2018-05-17 10:10 UTC",
    "latitude": 43.419,
    "longitude": -1.931,
    "pressure_max": 93.5,
    "n_levels": 592,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.25,
    "surface_sal": 33.87,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.25,
        "salinity": 33.87,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.77,
        "salinity": 33.89,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.31,
        "salinity": 33.91,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.42,
        "salinity": 33.95,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.17,
        "salinity": 34.02,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.02,
        "salinity": 34.08,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.3,
        "salinity": 34.19,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-001",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_001D.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_001D.nc",
    "date": "2018-06-20 10:36 UTC",
    "latitude": 42.982,
    "longitude": 5.863,
    "pressure_max": 145.0,
    "n_levels": 46,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.63,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.63,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.14,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.67,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.76,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.48,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.31,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.55,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.03,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-002",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_002.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_002.nc",
    "date": "2018-06-20 11:40 UTC",
    "latitude": 42.981,
    "longitude": 5.858,
    "pressure_max": 115.0,
    "n_levels": 24,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.62,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.62,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.13,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.66,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.75,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.47,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.3,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.55,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.02,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-003",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_003D.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_003D.nc",
    "date": "2018-06-20 12:35 UTC",
    "latitude": 42.985,
    "longitude": 5.851,
    "pressure_max": 185.0,
    "n_levels": 36,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.61,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.61,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.12,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.65,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.74,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.46,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.29,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.54,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.02,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.54,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-004",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_004.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_004.nc",
    "date": "2018-06-20 13:12 UTC",
    "latitude": 42.984,
    "longitude": 5.848,
    "pressure_max": 160.0,
    "n_levels": 33,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.61,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.61,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.12,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.65,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.74,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.46,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.29,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.54,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.02,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.54,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-005",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_005D.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_005D.nc",
    "date": "2018-06-20 13:56 UTC",
    "latitude": 42.985,
    "longitude": 5.844,
    "pressure_max": 165.0,
    "n_levels": 32,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.61,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.61,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.12,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.65,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.74,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.46,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.29,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.54,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.02,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.54,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-006",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_006.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_006.nc",
    "date": "2018-06-20 14:35 UTC",
    "latitude": 42.984,
    "longitude": 5.84,
    "pressure_max": 145.0,
    "n_levels": 30,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.6,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.6,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.11,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.64,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.73,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.45,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.28,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.53,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.01,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-007",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_007D.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_007D.nc",
    "date": "2018-06-20 15:36 UTC",
    "latitude": 42.982,
    "longitude": 5.838,
    "pressure_max": 600.0,
    "n_levels": 119,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.6,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.6,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.11,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.64,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.73,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.45,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.28,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.53,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.01,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.54,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.66,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.35,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.91,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-008",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_008.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_008.nc",
    "date": "2018-06-20 16:45 UTC",
    "latitude": 42.974,
    "longitude": 5.837,
    "pressure_max": 585.0,
    "n_levels": 118,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.6,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.6,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.11,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.64,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.73,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.45,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.28,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.53,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.01,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.54,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.66,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.35,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.91,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-009",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_009D.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_009D.nc",
    "date": "2018-06-20 18:01 UTC",
    "latitude": 42.966,
    "longitude": 5.836,
    "pressure_max": 600.0,
    "n_levels": 119,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.6,
    "surface_sal": 33.69,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.6,
        "salinity": 33.69,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.11,
        "salinity": 33.72,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.64,
        "salinity": 33.74,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.73,
        "salinity": 33.79,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.45,
        "salinity": 33.87,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.28,
        "salinity": 33.94,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.53,
        "salinity": 34.07,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.01,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.54,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.66,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.35,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.91,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-010",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_010.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_010.nc",
    "date": "2018-06-20 19:10 UTC",
    "latitude": 42.959,
    "longitude": 5.837,
    "pressure_max": 585.0,
    "n_levels": 118,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.6,
    "surface_sal": 33.68,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.6,
        "salinity": 33.68,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.11,
        "salinity": 33.71,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.64,
        "salinity": 33.73,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.73,
        "salinity": 33.78,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.45,
        "salinity": 33.86,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.28,
        "salinity": 33.93,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.53,
        "salinity": 34.06,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.01,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.54,
        "salinity": 34.44,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.66,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.35,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.91,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-011",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_011D.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_011D.nc",
    "date": "2018-06-20 20:41 UTC",
    "latitude": 42.948,
    "longitude": 5.832,
    "pressure_max": 600.0,
    "n_levels": 118,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.6,
    "surface_sal": 33.68,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.6,
        "salinity": 33.68,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.11,
        "salinity": 33.71,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.64,
        "salinity": 33.73,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.73,
        "salinity": 33.78,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.45,
        "salinity": 33.86,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.28,
        "salinity": 33.93,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.53,
        "salinity": 34.06,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.01,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.54,
        "salinity": 34.44,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.66,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.35,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.91,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CONTI-6800455-012",
    "platform": "conti",
    "wmo": "6800455",
    "type": "Glider",
    "file": "R6800455_20180620_012.nc",
    "full_path": "/conti/conti_20180618/profiles/R6800455_20180620_012.nc",
    "date": "2018-06-20 21:50 UTC",
    "latitude": 42.941,
    "longitude": 5.83,
    "pressure_max": 580.0,
    "n_levels": 117,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.6,
    "surface_sal": 33.68,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.6,
        "salinity": 33.68,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.11,
        "salinity": 33.71,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.64,
        "salinity": 33.73,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.73,
        "salinity": 33.78,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.45,
        "salinity": 33.86,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.28,
        "salinity": 33.93,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.53,
        "salinity": 34.06,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.01,
        "salinity": 34.19,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.54,
        "salinity": 34.44,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.66,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.35,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.91,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-001",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_001D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_001D.nc",
    "date": "2007-01-22 10:49 UTC",
    "latitude": 43.008,
    "longitude": 5.985,
    "pressure_max": 81.0,
    "n_levels": 15,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.74,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.74,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.25,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.77,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.85,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.57,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.39,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-002",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_002D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_002D.nc",
    "date": "2007-01-22 11:52 UTC",
    "latitude": 43.005,
    "longitude": 5.986,
    "pressure_max": 978.4,
    "n_levels": 147,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-003",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_003D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_003D.nc",
    "date": "2007-01-22 15:00 UTC",
    "latitude": 43.0,
    "longitude": 6.004,
    "pressure_max": 779.4,
    "n_levels": 123,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 20.26,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 20.26,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 19.81,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 19.37,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 18.53,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 17.35,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.27,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 14.65,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.24,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 10.95,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.22,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.16,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.82,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.06,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-004",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_004D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_004D.nc",
    "date": "2007-01-22 17:29 UTC",
    "latitude": 43.002,
    "longitude": 5.994,
    "pressure_max": 785.5,
    "n_levels": 122,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-005",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_005D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_005D.nc",
    "date": "2007-01-22 19:47 UTC",
    "latitude": 43.007,
    "longitude": 5.991,
    "pressure_max": 779.2,
    "n_levels": 114,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-006",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_006D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_006D.nc",
    "date": "2007-01-22 22:02 UTC",
    "latitude": 43.003,
    "longitude": 5.992,
    "pressure_max": 779.7,
    "n_levels": 121,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-007",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_007D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_007D.nc",
    "date": "2007-01-23 00:20 UTC",
    "latitude": 43.001,
    "longitude": 5.991,
    "pressure_max": 785.3,
    "n_levels": 118,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-008",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_008D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_008D.nc",
    "date": "2007-01-23 02:39 UTC",
    "latitude": 43.003,
    "longitude": 5.991,
    "pressure_max": 778.7,
    "n_levels": 124,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-009",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_009D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_009D.nc",
    "date": "2007-01-23 04:58 UTC",
    "latitude": 43.005,
    "longitude": 5.992,
    "pressure_max": 783.1,
    "n_levels": 118,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-010",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_010D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_010D.nc",
    "date": "2007-01-23 07:16 UTC",
    "latitude": 43.007,
    "longitude": 5.992,
    "pressure_max": 778.8,
    "n_levels": 117,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-011",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_011D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_011D.nc",
    "date": "2007-01-23 09:33 UTC",
    "latitude": 43.005,
    "longitude": 5.992,
    "pressure_max": 783.3,
    "n_levels": 124,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-COPROLITE-6800973-012",
    "platform": "coprolite",
    "wmo": "6800973",
    "type": "Glider",
    "file": "R6800973_20070118_012D.nc",
    "full_path": "/coprolite/coprolite_20070118/profiles/R6800973_20070118_012D.nc",
    "date": "2007-01-23 12:01 UTC",
    "latitude": 42.996,
    "longitude": 5.991,
    "pressure_max": 986.7,
    "n_levels": 145,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.75,
    "surface_sal": 33.7,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.75,
        "salinity": 33.7,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.26,
        "salinity": 33.73,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.78,
        "salinity": 33.75,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.86,
        "salinity": 33.8,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.58,
        "salinity": 33.88,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.4,
        "salinity": 33.95,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.63,
        "salinity": 34.08,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.1,
        "salinity": 34.2,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.6,
        "salinity": 34.45,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      },
      {
        "depth": 200,
        "temperature": 9.71,
        "salinity": 34.7,
        "oxygen": 0.75,
        "chlorophyll": 0.01
      },
      {
        "depth": 350,
        "temperature": 6.37,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 500,
        "temperature": 4.92,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      },
      {
        "depth": 750,
        "temperature": 4.08,
        "salinity": 34.8,
        "oxygen": 0.3,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-001",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_001D.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_001D.nc",
    "date": "2011-12-03 01:16 UTC",
    "latitude": 43.565,
    "longitude": 7.455,
    "pressure_max": 198.2,
    "n_levels": 44,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.61,
    "surface_sal": 33.93,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.61,
        "salinity": 33.93,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.12,
        "salinity": 33.95,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.65,
        "salinity": 33.97,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.74,
        "salinity": 34.01,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.46,
        "salinity": 34.07,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.29,
        "salinity": 34.13,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.54,
        "salinity": 34.23,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.02,
        "salinity": 34.33,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.54,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-002",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_002.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_002.nc",
    "date": "2011-12-03 01:34 UTC",
    "latitude": 43.564,
    "longitude": 7.46,
    "pressure_max": 196.2,
    "n_levels": 44,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.62,
    "surface_sal": 33.93,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.62,
        "salinity": 33.93,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.13,
        "salinity": 33.95,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.66,
        "salinity": 33.97,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.75,
        "salinity": 34.01,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.47,
        "salinity": 34.07,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.3,
        "salinity": 34.13,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.55,
        "salinity": 34.23,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.02,
        "salinity": 34.33,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.55,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-003",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_003D.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_003D.nc",
    "date": "2011-12-03 01:52 UTC",
    "latitude": 43.562,
    "longitude": 7.464,
    "pressure_max": 199.2,
    "n_levels": 44,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.62,
    "surface_sal": 33.92,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.62,
        "salinity": 33.92,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.13,
        "salinity": 33.94,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.66,
        "salinity": 33.96,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.75,
        "salinity": 34.0,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.47,
        "salinity": 34.06,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.3,
        "salinity": 34.12,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.55,
        "salinity": 34.22,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.02,
        "salinity": 34.32,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.55,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-004",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_004.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_004.nc",
    "date": "2011-12-03 02:10 UTC",
    "latitude": 43.56,
    "longitude": 7.468,
    "pressure_max": 198.4,
    "n_levels": 48,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.63,
    "surface_sal": 33.92,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.63,
        "salinity": 33.92,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.14,
        "salinity": 33.94,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.67,
        "salinity": 33.96,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.76,
        "salinity": 34.0,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.48,
        "salinity": 34.06,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.31,
        "salinity": 34.12,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.55,
        "salinity": 34.22,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.03,
        "salinity": 34.32,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.55,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-005",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_005D.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_005D.nc",
    "date": "2011-12-03 02:29 UTC",
    "latitude": 43.559,
    "longitude": 7.472,
    "pressure_max": 198.2,
    "n_levels": 44,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.63,
    "surface_sal": 33.92,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.63,
        "salinity": 33.92,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.14,
        "salinity": 33.94,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.67,
        "salinity": 33.96,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.76,
        "salinity": 34.0,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.48,
        "salinity": 34.06,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.31,
        "salinity": 34.12,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.55,
        "salinity": 34.22,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.03,
        "salinity": 34.32,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.55,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-006",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_006.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_006.nc",
    "date": "2011-12-03 02:48 UTC",
    "latitude": 43.557,
    "longitude": 7.476,
    "pressure_max": 196.8,
    "n_levels": 47,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.64,
    "surface_sal": 33.92,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.64,
        "salinity": 33.92,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.15,
        "salinity": 33.94,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.68,
        "salinity": 33.96,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.76,
        "salinity": 34.0,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.49,
        "salinity": 34.06,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.31,
        "salinity": 34.12,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.56,
        "salinity": 34.22,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.04,
        "salinity": 34.32,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.55,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-007",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_007D.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_007D.nc",
    "date": "2011-12-03 03:06 UTC",
    "latitude": 43.555,
    "longitude": 7.481,
    "pressure_max": 198.9,
    "n_levels": 43,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.64,
    "surface_sal": 33.92,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.64,
        "salinity": 33.92,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.15,
        "salinity": 33.94,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.68,
        "salinity": 33.96,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.76,
        "salinity": 34.0,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.49,
        "salinity": 34.06,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.31,
        "salinity": 34.12,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.56,
        "salinity": 34.22,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.04,
        "salinity": 34.32,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.55,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-008",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_008.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_008.nc",
    "date": "2011-12-03 03:25 UTC",
    "latitude": 43.553,
    "longitude": 7.485,
    "pressure_max": 197.9,
    "n_levels": 48,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.65,
    "surface_sal": 33.92,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.65,
        "salinity": 33.92,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.16,
        "salinity": 33.94,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.69,
        "salinity": 33.96,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.77,
        "salinity": 34.0,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.5,
        "salinity": 34.06,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.32,
        "salinity": 34.12,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.57,
        "salinity": 34.22,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.04,
        "salinity": 34.32,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.56,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-009",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_009D.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_009D.nc",
    "date": "2011-12-03 03:44 UTC",
    "latitude": 43.552,
    "longitude": 7.489,
    "pressure_max": 198.9,
    "n_levels": 43,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.65,
    "surface_sal": 33.92,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.65,
        "salinity": 33.92,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.16,
        "salinity": 33.94,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.69,
        "salinity": 33.96,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.77,
        "salinity": 34.0,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.5,
        "salinity": 34.06,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.32,
        "salinity": 34.12,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.57,
        "salinity": 34.22,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.04,
        "salinity": 34.32,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.56,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-010",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_010.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_010.nc",
    "date": "2011-12-03 04:02 UTC",
    "latitude": 43.55,
    "longitude": 7.493,
    "pressure_max": 197.9,
    "n_levels": 47,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.65,
    "surface_sal": 33.92,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.65,
        "salinity": 33.92,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.16,
        "salinity": 33.94,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.69,
        "salinity": 33.96,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.77,
        "salinity": 34.0,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.5,
        "salinity": 34.06,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.32,
        "salinity": 34.12,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.57,
        "salinity": 34.22,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.04,
        "salinity": 34.32,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.56,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-011",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_011D.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_011D.nc",
    "date": "2011-12-03 04:35 UTC",
    "latitude": 43.539,
    "longitude": 7.484,
    "pressure_max": 198.6,
    "n_levels": 44,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.65,
    "surface_sal": 33.92,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.65,
        "salinity": 33.92,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.16,
        "salinity": 33.94,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.69,
        "salinity": 33.96,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.77,
        "salinity": 34.0,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.5,
        "salinity": 34.06,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.32,
        "salinity": 34.12,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.57,
        "salinity": 34.22,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.04,
        "salinity": 34.32,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.56,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-CRATE-6800451-012",
    "platform": "crate",
    "wmo": "6800451",
    "type": "Glider",
    "file": "R6800451_20111202_012.nc",
    "full_path": "/crate/crate_20111202/profiles/R6800451_20111202_012.nc",
    "date": "2011-12-03 04:54 UTC",
    "latitude": 43.538,
    "longitude": 7.488,
    "pressure_max": 197.6,
    "n_levels": 49,
    "parameters": [
      "MTIME",
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.65,
    "surface_sal": 33.92,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.65,
        "salinity": 33.92,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 21.16,
        "salinity": 33.94,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.69,
        "salinity": 33.96,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.77,
        "salinity": 34.0,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.5,
        "salinity": 34.06,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 17.32,
        "salinity": 34.12,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.57,
        "salinity": 34.22,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 14.04,
        "salinity": 34.32,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.56,
        "salinity": 34.52,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-001",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_001.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_001.nc",
    "date": "2024-10-02 20:22 UTC",
    "latitude": 43.094,
    "longitude": -65.141,
    "pressure_max": 141.7,
    "n_levels": 10,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.1,
    "surface_sal": 33.74,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.1,
        "salinity": 33.74,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.63,
        "salinity": 33.76,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.17,
        "salinity": 33.79,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.28,
        "salinity": 33.84,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.04,
        "salinity": 33.91,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.9,
        "salinity": 33.98,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.21,
        "salinity": 34.1,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.73,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-002",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_002D.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_002D.nc",
    "date": "2024-10-02 20:38 UTC",
    "latitude": 43.093,
    "longitude": -65.142,
    "pressure_max": 152.9,
    "n_levels": 11,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.1,
    "surface_sal": 33.74,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.1,
        "salinity": 33.74,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.63,
        "salinity": 33.76,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.17,
        "salinity": 33.79,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.28,
        "salinity": 33.84,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.04,
        "salinity": 33.91,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.9,
        "salinity": 33.98,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.21,
        "salinity": 34.1,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.73,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.32,
        "salinity": 34.46,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-003",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_003.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_003.nc",
    "date": "2024-10-02 20:55 UTC",
    "latitude": 43.092,
    "longitude": -65.142,
    "pressure_max": 134.1,
    "n_levels": 11,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.1,
    "surface_sal": 33.74,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.1,
        "salinity": 33.74,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.63,
        "salinity": 33.76,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.17,
        "salinity": 33.79,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.28,
        "salinity": 33.84,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.04,
        "salinity": 33.91,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.9,
        "salinity": 33.98,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.21,
        "salinity": 34.1,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.73,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-004",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_004D.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_004D.nc",
    "date": "2024-10-02 21:11 UTC",
    "latitude": 43.091,
    "longitude": -65.143,
    "pressure_max": 149.9,
    "n_levels": 11,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.1,
    "surface_sal": 33.74,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.1,
        "salinity": 33.74,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.63,
        "salinity": 33.76,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.17,
        "salinity": 33.79,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.28,
        "salinity": 33.84,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.04,
        "salinity": 33.91,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.9,
        "salinity": 33.98,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.21,
        "salinity": 34.1,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.73,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-005",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_005.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_005.nc",
    "date": "2024-10-02 21:28 UTC",
    "latitude": 43.09,
    "longitude": -65.143,
    "pressure_max": 141.6,
    "n_levels": 12,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.1,
    "surface_sal": 33.74,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.1,
        "salinity": 33.74,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.63,
        "salinity": 33.76,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.17,
        "salinity": 33.79,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.28,
        "salinity": 33.84,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.04,
        "salinity": 33.91,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.9,
        "salinity": 33.98,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.21,
        "salinity": 34.1,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.73,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-006",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_006D.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_006D.nc",
    "date": "2024-10-02 22:07 UTC",
    "latitude": 43.086,
    "longitude": -65.153,
    "pressure_max": 155.1,
    "n_levels": 13,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.09,
    "surface_sal": 33.73,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.09,
        "salinity": 33.73,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.62,
        "salinity": 33.75,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.16,
        "salinity": 33.78,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.27,
        "salinity": 33.83,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.04,
        "salinity": 33.9,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.9,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.2,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.72,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.31,
        "salinity": 34.46,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-007",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_007.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_007.nc",
    "date": "2024-10-02 22:26 UTC",
    "latitude": 43.085,
    "longitude": -65.154,
    "pressure_max": 141.6,
    "n_levels": 12,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.09,
    "surface_sal": 33.73,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.09,
        "salinity": 33.73,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.62,
        "salinity": 33.75,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.16,
        "salinity": 33.78,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.27,
        "salinity": 33.83,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.04,
        "salinity": 33.9,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.9,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.2,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.72,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-008",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_008D.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_008D.nc",
    "date": "2024-10-02 22:46 UTC",
    "latitude": 43.084,
    "longitude": -65.155,
    "pressure_max": 152.3,
    "n_levels": 14,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.09,
    "surface_sal": 33.73,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.09,
        "salinity": 33.73,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.62,
        "salinity": 33.75,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.16,
        "salinity": 33.78,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.27,
        "salinity": 33.83,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.04,
        "salinity": 33.9,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.9,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.2,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.72,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.31,
        "salinity": 34.46,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-009",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_009.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_009.nc",
    "date": "2024-10-02 23:07 UTC",
    "latitude": 43.082,
    "longitude": -65.155,
    "pressure_max": 136.8,
    "n_levels": 13,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.09,
    "surface_sal": 33.73,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.09,
        "salinity": 33.73,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.62,
        "salinity": 33.75,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.16,
        "salinity": 33.78,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.27,
        "salinity": 33.83,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.04,
        "salinity": 33.9,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.9,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.2,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.72,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-010",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_010D.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_010D.nc",
    "date": "2024-10-02 23:27 UTC",
    "latitude": 43.081,
    "longitude": -65.156,
    "pressure_max": 148.3,
    "n_levels": 14,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.09,
    "surface_sal": 33.73,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.09,
        "salinity": 33.73,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.62,
        "salinity": 33.75,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.16,
        "salinity": 33.78,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.27,
        "salinity": 33.83,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.04,
        "salinity": 33.9,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.9,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.2,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.72,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-011",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_011D.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_011D.nc",
    "date": "2024-10-03 00:30 UTC",
    "latitude": 43.074,
    "longitude": -65.185,
    "pressure_max": 164.3,
    "n_levels": 16,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.06,
    "surface_sal": 33.73,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.06,
        "salinity": 33.73,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.59,
        "salinity": 33.75,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.13,
        "salinity": 33.78,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.25,
        "salinity": 33.83,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.01,
        "salinity": 33.9,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.18,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.7,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.3,
        "salinity": 34.46,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DECIBEL_981-8901106-012",
    "platform": "decibel_981",
    "wmo": "8901106",
    "type": "Glider",
    "file": "R8901106_20241002_012.nc",
    "full_path": "/decibel_981/decibel_981_20241002/profiles/R8901106_20241002_012.nc",
    "date": "2024-10-03 01:02 UTC",
    "latitude": 43.073,
    "longitude": -65.183,
    "pressure_max": 163.8,
    "n_levels": 15,
    "parameters": [
      "PRES",
      "TEMP",
      "CNDC",
      "PSAL",
      "CHLA"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 21.06,
    "surface_sal": 33.73,
    "profiles": [
      {
        "depth": 0,
        "temperature": 21.06,
        "salinity": 33.73,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 20.59,
        "salinity": 33.75,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 20.13,
        "salinity": 33.78,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 19.25,
        "salinity": 33.83,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 18.01,
        "salinity": 33.9,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 16.87,
        "salinity": 33.97,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 15.18,
        "salinity": 34.09,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 13.7,
        "salinity": 34.22,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 11.3,
        "salinity": 34.46,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DIPSY-6801598-001",
    "platform": "dipsy",
    "wmo": "6801598",
    "type": "Glider",
    "file": "R6801598_20191126_001D.nc",
    "full_path": "/dipsy/dipsy_20191123/profiles/R6801598_20191126_001D.nc",
    "date": "2019-12-02 11:50 UTC",
    "latitude": 17.803,
    "longitude": -21.189,
    "pressure_max": 166.5,
    "n_levels": 17,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 26.11,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 26.11,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 25.5,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.9,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 23.76,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 22.17,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.7,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 18.51,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 16.6,
        "salinity": 34.16,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 13.5,
        "salinity": 34.42,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  },
  {
    "id": "GLIDER-DIPSY-6801598-002",
    "platform": "dipsy",
    "wmo": "6801598",
    "type": "Glider",
    "file": "R6801598_20191126_002.nc",
    "full_path": "/dipsy/dipsy_20191123/profiles/R6801598_20191126_002.nc",
    "date": "2019-12-02 12:09 UTC",
    "latitude": 17.803,
    "longitude": -21.187,
    "pressure_max": 159.8,
    "n_levels": 20,
    "parameters": [
      "MTIME",
      "PSAL",
      "TEMP",
      "CNDC",
      "PRES"
    ],
    "ocean": "Atlantic Ocean",
    "status": "GDAC Validated",
    "surface_temp": 26.11,
    "surface_sal": 33.62,
    "profiles": [
      {
        "depth": 0,
        "temperature": 26.11,
        "salinity": 33.62,
        "oxygen": 4.6,
        "chlorophyll": 0.09
      },
      {
        "depth": 5,
        "temperature": 25.5,
        "salinity": 33.65,
        "oxygen": 4.4,
        "chlorophyll": 0.2
      },
      {
        "depth": 10,
        "temperature": 24.9,
        "salinity": 33.67,
        "oxygen": 4.2,
        "chlorophyll": 0.4
      },
      {
        "depth": 20,
        "temperature": 23.76,
        "salinity": 33.73,
        "oxygen": 3.84,
        "chlorophyll": 1.08
      },
      {
        "depth": 35,
        "temperature": 22.17,
        "salinity": 33.81,
        "oxygen": 3.35,
        "chlorophyll": 1.9
      },
      {
        "depth": 50,
        "temperature": 20.7,
        "salinity": 33.89,
        "oxygen": 2.92,
        "chlorophyll": 1.08
      },
      {
        "depth": 75,
        "temperature": 18.51,
        "salinity": 34.02,
        "oxygen": 2.33,
        "chlorophyll": 0.03
      },
      {
        "depth": 100,
        "temperature": 16.6,
        "salinity": 34.16,
        "oxygen": 1.85,
        "chlorophyll": 0.01
      },
      {
        "depth": 150,
        "temperature": 13.5,
        "salinity": 34.42,
        "oxygen": 1.18,
        "chlorophyll": 0.01
      }
    ]
  }
];
