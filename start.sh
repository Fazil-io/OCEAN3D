#!/bin/bash
echo "=========================================================="
echo " Starting SIH 2026 Problem Statement SIH26067 Platform"
echo " Team: CodeHydra (Rifat N, Mohammed Fazil S, Rohith S)"
echo "=========================================================="

# 1. Start Python FastAPI backend
echo "[1/2] Starting Python FastAPI backend on port 8000..."
cd backend
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload &
BACKEND_PID=$!
cd ..

# 2. Start Vite React frontend
echo "[2/2] Starting Vite React frontend on port 5173..."
cd frontend
/usr/local/bin/npm run dev -- --host 0.0.0.0 --port 5173 &
FRONTEND_PID=$!
cd ..

echo ""
echo "✨ Services started successfully!"
echo "📡 Backend API: http://127.0.0.1:8000/docs"
echo "🌐 Frontend 3D Explorer: http://localhost:5173"
echo "Press Ctrl+C to stop both servers."

trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null" EXIT INT TERM
wait
