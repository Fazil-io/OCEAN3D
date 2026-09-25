import React from 'react';
import {
  Waves,
  Compass,
  Database,
  Activity,
  Layers,
  Sparkles,
  ArrowRight,
  Radio,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface LandingPageProps {
  onLaunchExplorer: () => void;
  onExploreData: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onLaunchExplorer,
  onExploreData
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`flex-1 w-full h-full min-h-0 overflow-y-auto flex flex-col justify-between p-4 sm:p-8 md:p-12 transition-colors ${
      isDark ? 'bg-[#030711] text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto space-y-6 pt-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Smart India Hackathon 2026 • Problem Statement SIH26067</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight leading-tight">
          Next-Gen 3D Oceanographic Data Visualization & Integration Platform
        </h1>

        <p className={`text-sm sm:text-base max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Seamlessly fuse 4D numerical ocean model simulations (ROMS/HYCOM) with high-density in-situ Argo profiling floats and autonomous OceanGliders across the Northern Indian Ocean.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onLaunchExplorer}
            className="w-full sm:w-auto justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-bold font-mono text-sm flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
          >
            <Waves className="w-4 h-4" />
            <span>Launch 3D Explorer</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreData}
            className={`w-full sm:w-auto justify-center px-6 py-3 rounded-xl border font-bold font-mono text-sm flex items-center gap-2 transition-all cursor-pointer ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-sm'
            }`}
          >
            <Database className="w-4 h-4 text-cyan-500" />
            <span>Fleet & Ingestion Studio</span>
          </button>
        </div>
      </div>

      {/* 3 Pillar Features */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className={`p-6 rounded-2xl border space-y-2 ${
          isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-2">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm font-mono">4D OGCM Volumetric Engine</h3>
          <p className="text-xs opacity-75 leading-relaxed">
            Real-time xarray server slicing of high-resolution temperature, salinity, velocity streamlines, and chlorophyll at 0–1500m depth.
          </p>
        </div>

        <div className={`p-6 rounded-2xl border space-y-2 ${
          isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-2">
            <Activity className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm font-mono">1,116 Gliders & Argo In-Situ</h3>
          <p className="text-xs opacity-75 leading-relaxed">
            Directly parses 824,641+ NetCDF archive profiles and 1,116 glider missions across 184 platforms in dataset/ with full 3D sawtooth trajectory ribbons.
          </p>
        </div>

        <div className={`p-6 rounded-2xl border space-y-2 ${
          isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-2">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm font-mono">Statistical Model Comparison</h3>
          <p className="text-xs opacity-75 leading-relaxed">
            Live cross-validation calculating vertical profile RMSE, Mean Bias, Pearson R², and maximum anomaly deltas.
          </p>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="text-center text-[11px] font-mono opacity-60 pt-4 border-t border-slate-200 dark:border-slate-800">
        Engineered by Team CodeHydra • Smart India Hackathon 2026
      </div>
    </div>
  );
};
