# SIH 2026 Problem Statement SIH26067
## Web-Based Interactive 3D Visualization Platform for Numerical Ocean Models and In-Situ Observations

**Team Name:** CodeHydra  
**Team Members:**
- **Shaila Neelofar K** (Team Leader)
- **Rifat N** (Pitch Deck & Presentation)
- **Mohammed Fazil S** (Prototype Development)
- **Rohith S** (Case Study & Video Docs)
- **Nishok Kumar R** (Prototype Development)
- **Pravin Lenin Naidu** (Pitch Deck & Presentation)

---

## 🌊 Project Overview
This platform is a specialized scientific oceanographic analysis and 3D exploration system. It bridges high-resolution **Numerical Ocean General Circulation Models (OGCM)** with in-situ observation platforms including **Argo Profiling Floats** and **Autonomous Underwater Gliders** in a unified, hardware-accelerated 3D WebGL environment.

### 🌟 Key Highlights
1. **Server-Side xarray & NetCDF4 Pipeline:** Raw multi-gigabyte 4D ocean models (Temperature, Salinity, U/V Current Velocities, Chlorophyll-a) are sliced, subsampled, and queried dynamically on the server. Zero multi-gigabyte dataset downloading to the client.
2. **Interactive 3D Three.js Ocean Workbench:**
   - **Horizontal Depth Slicing:** Continuous slicing from Sea Surface down to 1500m bathypelagic abyss with scientific colormaps (Turbo, Haline, Viridis, Plasma, CoolWarm).
   - **Dynamic Vector Streamlines:** GPU-instanced velocity particle animation flowing along actual eastward ($u$) and northward ($v$) current vectors.
   - **Isosurface Extraction:** Real-time 3D thermocline and front visualization.
   - **In-Situ Observational Network:** 3D Argo float buoys with radar ping beacons and underwater glider 3D saw-tooth trajectory ribbons.
3. **Model vs Observation Delta Engine:** Spatial interpolation matching in-situ measurements with numerical model predictions at identical depth layers and timestamps, computing Root Mean Square Error (RMSE), Mean Bias, and dual vertical profiles.
4. **Adaptive Low-Bandwidth Mode:** Instant one-click downsampling designed for bandwidth-constrained marine vessels and remote coastal field stations.
5. **Experimental WebXR VR Mode:** 6DoF immersion inside ocean depth layers.

---

## 🏗️ Architecture & Data Pipeline

```
Ocean Model (NetCDF-4)   Argo Profiles   Glider Trajectories / Profiles
          │                    │                       │
          ▼                    ▼                       ▼
    xarray / netCDF4       Pandas / SciPy        Pandas / SciPy
          │                    │                       │
          └────────────────────┼───────────────────────┘
                               ▼
                   FastAPI Scientific REST API
                     (Subsetting & Interpolation)
                               │
                               ▼ JSON Payloads
               React 18 + TypeScript + Vite Client
                               │
                               ▼
               Three.js / WebGL 3D Visualization
       (Depth Slices, Streamlines, Floats, Trajectories)
```

---

## 🚀 Getting Started & Installation

### Prerequisites
- **Python 3.10+**
- **Node.js 18+** and **npm**

---

### 1. Backend Setup (FastAPI + xarray)

```bash
# Navigate to backend directory
cd backend

# Install dependencies
pip install -r requirements.txt

# Start FastAPI server
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

The API will be live at `http://127.0.0.1:8000`.  
Interactive Swagger API documentation: `http://127.0.0.1:8000/docs`

---

### 2. Frontend Setup (React + Three.js + Vite)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Open your browser at `http://localhost:5173`.

---

### 3. One-Click Concurrent Startup Script

For hackathon presentation and evaluation, launch both services with a single command:

```bash
chmod +x start.sh
./start.sh
```

---

## 📁 Dataset Placement & Real NetCDF Hot-Swapping

By default, the backend includes a physically realistic, high-resolution Bay of Bengal synthetic ocean dataset (with mesoscale eddies, coastal currents, thermoclines, and haloclines) clearly labeled with a **DEMO DATA** watermark.

### To Replace Demo Data with Real INCOIS / Copernicus Datasets:

1. **Ocean Model NetCDF:** Place your CF-compliant NetCDF file at:
   `backend/app/data/ocean_model.nc`
   - Supported dimensions: `time`, `depth` (or `level`), `lat` (or `latitude`), `lon` (or `longitude`).
   - Supported variables: `temperature`, `salinity`, `u`, `v`, `chlorophyll`.
2. **Glider Trajectories & Profiles:** Place the standard OceanGliders / EGO index files at:
   - `backend/app/data/glider_traj_index.txt`
   - `backend/app/data/glider_prof_index.txt`
3. **Restart the FastAPI backend** (`uvicorn app.main:app --reload`). The backend will automatically recognize the real data file, index its coordinates, and serve it to the 3D explorer.

---

## 🧪 Scientific REST APIs

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/health` | `GET` | Health check, team details, and dataset status |
| `/api/ocean/metadata` | `GET` | Coordinate bounds, depth levels, time steps, variable ranges |
| `/api/ocean/slice` | `GET` | 2D horizontal depth slice for chosen variable, depth & time |
| `/api/ocean/volume` | `GET` | Downsampled 3D volumetric voxel grid |
| `/api/ocean/currents` | `GET` | U/V velocity vector field and seed particles |
| `/api/observations` | `GET` | All active in-situ Argo profiling floats |
| `/api/observations/{id}` | `GET` | Detailed float telemetry and vertical profile curve |
| `/api/gliders` | `GET` | Glider missions with 3D saw-tooth trajectories |
| `/api/gliders/{id}` | `GET` | Specific glider dive stations and profiles |
| `/api/compare` | `GET` | Spatial model vs in-situ observation profile comparison with RMSE |
| `/api/datasources` | `GET` | Official registry of connected & integration-ready repositories |

---

## 🏆 SIH 2026 Presentation Flow (Demo Script)

1. **Overview / Landing Page:** View BroCode branding, Problem Statement SIH26067 badge, project summary, and solution cards.
2. **Launch 3D Explorer:** Click *"Launch 3D Explorer"* to enter the 3D ocean scene.
3. **3D Navigation:** Orbit, zoom, and pan around the bathymetric bounding box with depth and latitude/longitude axes.
4. **Depth Slicing & Animation:** Select Temperature, move depth slider from 0m to 1500m, and click Play on the timeline.
5. **In-Situ Argo Floats:** Click on any Argo float in the 3D scene. View telemetry, depth profile chart, and model comparison metrics.
6. **Underwater Gliders:** Toggle Gliders and Trajectories. Inspect the 3D undulating saw-tooth dive path ribbon.
7. **Current Velocity Streamlines:** Switch variable to *Currents* or mode to *Current Particles* to see live animated flow.
8. **Low Bandwidth Mode:** Toggle *"Low Bandwidth Mode"* to verify adaptive downsampling and vessel-optimized transmission.
9. **Data Sources & About:** Navigate to Data Sources to review connected repository statuses and NetCDF integration instructions.

# OCEAN3D
