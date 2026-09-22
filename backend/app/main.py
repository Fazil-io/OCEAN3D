from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router

app = FastAPI(
    title="SIH 2026 Problem Statement SIH26067 - 3D Ocean Visualization Platform",
    description="Backend API serving numerical ocean model outputs (NetCDF/xarray) and in-situ observations (Argo/Glider) for Team CodeHydra.",
    version="1.0.0"
)

# Enable CORS for Vite frontend development and production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(router)

@app.get("/")
def root():
    return {
        "message": "SIH 2026 Problem Statement SIH26067: 3D Ocean Model & Observation Platform",
        "team": "CodeHydra (Rifat N, Mohammed Fazil S, Rohith S)",
        "docs": "/docs",
        "status": "operational"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
