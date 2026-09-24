import React from 'react';
import { Info, Code, ShieldCheck, Users, Cpu, Waves, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AboutPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`flex-1 w-full h-full min-h-0 overflow-y-auto p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-8 transition-colors ${
      isDark ? 'bg-[#030711] text-slate-100' : 'bg-slate-100 text-slate-800'
    }`}>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-cyan-500" />
            <h1 className="text-2xl font-black font-mono">Smart India Hackathon 2026</h1>
          </div>
          <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
            Problem Statement ID: SIH26067 • Interactive 3D Oceanographic Platform
          </p>
        </div>

        {/* Team Card */}
        <div className={`p-6 rounded-2xl border space-y-4 ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-500" />
            <h2 className="text-base font-bold font-mono">Team CodeHydra</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-xs font-mono">
            <div className={`p-3 rounded-lg border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className="text-[10px] opacity-70">Team Leader</span>
              <p className="font-bold text-cyan-600 dark:text-cyan-400 text-sm mt-0.5">Shaila Neelofar K</p>
            </div>
            <div className={`p-3 rounded-lg border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className="text-[10px] opacity-70">Pitch Deck & Presentation</span>
              <p className="font-bold text-cyan-600 dark:text-cyan-400 text-sm mt-0.5">Rifat N</p>
            </div>
            <div className={`p-3 rounded-lg border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className="text-[10px] opacity-70">Prototype Development</span>
              <p className="font-bold text-cyan-600 dark:text-cyan-400 text-sm mt-0.5">Mohammed Fazil S</p>
            </div>
            <div className={`p-3 rounded-lg border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className="text-[10px] opacity-70">Case Study & Video Docs</span>
              <p className="font-bold text-cyan-600 dark:text-cyan-400 text-sm mt-0.5">Rohith S</p>
            </div>
            <div className={`p-3 rounded-lg border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className="text-[10px] opacity-70">Prototype Development</span>
              <p className="font-bold text-cyan-600 dark:text-cyan-400 text-sm mt-0.5">Nishok Kumar R</p>
            </div>
            <div className={`p-3 rounded-lg border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className="text-[10px] opacity-70">Pitch Deck & Presentation</span>
              <p className="font-bold text-cyan-600 dark:text-cyan-400 text-sm mt-0.5">Pravin Lenin Naidu</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className={`p-6 rounded-2xl border space-y-4 ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-500" />
            <h2 className="text-base font-bold font-mono">Technology Architecture</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs font-mono">
            <div className={`p-4 rounded-xl border space-y-2 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className="font-bold text-cyan-500">Frontend Stack</h3>
              <ul className="space-y-1 opacity-80">
                <li>• React 18 + TypeScript + Vite</li>
                <li>• Three.js + React Three Fiber + Drei (GPU WebGL 3D)</li>
                <li>• Tailwind CSS + Lucide Icons + Recharts</li>
                <li>• Dual Theme Engine (Dark Abyss & Light Marine)</li>
              </ul>
            </div>

            <div className={`p-4 rounded-xl border space-y-2 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className="font-bold text-cyan-500">Backend Stack</h3>
              <ul className="space-y-1 opacity-80">
                <li>• Python 3.14 + FastAPI + Uvicorn</li>
                <li>• xarray + NetCDF4 + NumPy + SciPy</li>
                <li>• Real OceanGliders & EGO NetCDF Ingestion Pipeline</li>
                <li>• Dynamic Vertical Interpolation & RMSE Calculation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
