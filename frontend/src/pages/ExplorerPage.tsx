import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Maximize2,
  Minimize2,
  RotateCcw,
  Sliders,
  Camera,
  Download,
  Search,
  ChevronRight,
  X,
  Contrast,
  Layers,
  Thermometer,
  Droplets,
  Wind,
  Leaf,
  Activity
} from 'lucide-react';
import { OceanScene } from '../three/OceanScene';
import { Colorbar } from '../components/common/Colorbar';
import { ProfileChart } from '../charts/ProfileChart';
import { ComparisonChart } from '../charts/ComparisonChart';
import { LocationDisplayGadget } from '../components/common/LocationDisplayGadget';
import { api } from '../services/api';
import {
  DatasetMetadata,
  OceanSlice,
  OceanVolume,
  CurrentVectorField,
  Observation,
  GliderMission,
  ModelComparison,
  ColormapName,
  VisualizationMode,
  CameraPreset
} from '../types';
import { useTheme } from '../context/ThemeContext';

interface ExplorerPageProps {
  lowBandwidth: boolean;
  onToggleLowBandwidth: () => void;
  initialSelectedItem?: Observation | GliderMission | null;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}

const VARIABLES = [
  { id: 'temperature', label: 'Temperature', unit: '°C', Icon: Thermometer },
  { id: 'salinity',    label: 'Salinity',    unit: 'PSU', Icon: Droplets },
  { id: 'u',          label: 'U-Current',   unit: 'm/s', Icon: Wind },
  { id: 'v',          label: 'V-Current',   unit: 'm/s', Icon: Wind },
  { id: 'chlorophyll',label: 'Chlorophyll', unit: 'mg/m³', Icon: Leaf }
];

const MODES: { id: VisualizationMode; label: string }[] = [
  { id: 'slice',    label: 'Depth Slice' },
  { id: 'volume',   label: '3D Volume' },
  { id: 'currents', label: 'Currents' },
  { id: 'insitu',   label: 'In-Situ' }
];

const COLORMAPS: ColormapName[] = ['turbo', 'haline', 'viridis', 'plasma', 'coolwarm', 'spectral'];

const DEPTH_PRESETS = [
  { label: '0m',    d: 0 },
  { label: '50m',   d: 50 },
  { label: '150m',  d: 150 },
  { label: '500m',  d: 500 },
  { label: '1000m', d: 1000 }
];

const CAMERA_PRESETS: { id: CameraPreset; label: string }[] = [
  { id: 'iso',   label: '3D Iso' },
  { id: 'top',   label: 'Top' },
  { id: 'side',  label: 'Side' },
  { id: 'reset', label: 'Reset' }
];

export const ExplorerPage: React.FC<ExplorerPageProps> = ({
  lowBandwidth,
  onToggleLowBandwidth,
  initialSelectedItem,
  isFullscreen = false,
  onToggleFullscreen
}) => {
  const [showControlsDrawer, setShowControlsDrawer] = useState<boolean>(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [variable,      setVariable]      = useState<string>('temperature');
  const [depth,         setDepth]         = useState<number>(10.0);
  const [timeIdx,       setTimeIdx]       = useState<number>(0);
  const [isPlaying,     setIsPlaying]     = useState<boolean>(false);
  const [visMode,       setVisMode]       = useState<VisualizationMode>('slice');
  const [colormap,      setColormap]      = useState<ColormapName>('turbo');
  const [cameraPreset,  setCameraPreset]  = useState<CameraPreset>('iso');
  const [autoContrast,  setAutoContrast]  = useState<boolean>(true);
  const [showArgo,      setShowArgo]      = useState<boolean>(true);
  const [showGliders,   setShowGliders]   = useState<boolean>(true);
  const [showTrajectories, setShowTrajectories] = useState<boolean>(true);
  const [showBathymetry,   setShowBathymetry]   = useState<boolean>(true);
  const [showGrid,      setShowGrid]      = useState<boolean>(true);
  const [customMin,     setCustomMin]     = useState<number | undefined>(undefined);
  const [customMax,     setCustomMax]     = useState<number | undefined>(undefined);
  const [metadata,      setMetadata]      = useState<DatasetMetadata | null>(null);
  const [sliceData,     setSliceData]     = useState<OceanSlice | null>(null);
  const [volumeData,    setVolumeData]    = useState<OceanVolume | null>(null);
  const [currentsData,  setCurrentsData]  = useState<CurrentVectorField | null>(null);
  const [observations,  setObservations]  = useState<Observation[]>([]);
  const [gliders,       setGliders]       = useState<GliderMission[]>([]);
  const [selectedItem,  setSelectedItem]  = useState<Observation | GliderMission | null>(
    initialSelectedItem || null
  );
  const [comparison,    setComparison]    = useState<ModelComparison | null>(null);
  const [searchMission, setSearchMission] = useState<string>('');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (initialSelectedItem) setSelectedItem(initialSelectedItem);
  }, [initialSelectedItem]);

  useEffect(() => {
    api.getMetadata().then(setMetadata).catch(console.error);
    api.getObservations().then(setObservations).catch(console.error);
    api.getGliders().then(setGliders).catch(console.error);
  }, []);

  useEffect(() => {
    if (visMode === 'slice') {
      api.getSlice(variable, depth, timeIdx).then(setSliceData).catch(console.error);
    } else if (visMode === 'volume') {
      api.getVolume(variable, timeIdx, lowBandwidth).then(setVolumeData).catch(console.error);
    }
    if (visMode === 'currents' || visMode === 'slice') {
      api.getCurrents(depth, timeIdx).then(setCurrentsData).catch(console.error);
    }
  }, [variable, depth, timeIdx, visMode, lowBandwidth]);

  useEffect(() => {
    if (selectedItem) {
      api.getComparison(selectedItem.id, variable).then(setComparison).catch(console.error);
    } else {
      setComparison(null);
    }
  }, [selectedItem, variable]);

  useEffect(() => {
    if (!isPlaying || !metadata) return;
    const interval = setInterval(() => {
      setTimeIdx((prev) => (prev + 1) % metadata.time_steps.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isPlaying, metadata]);

  const handleTargetLocation = (lat: number, lon: number, name: string) => {
    const match = observations.find(o => Math.abs(o.latitude - lat) < 0.3 && Math.abs(o.longitude - lon) < 0.3)
      || gliders.find(g => Math.abs(g.latitude - lat) < 0.3 && Math.abs(g.longitude - lon) < 0.3);

    if (match) {
      setSelectedItem(match);
    } else {
      setSelectedItem({
        id: `LOC-${lat.toFixed(2)}-${lon.toFixed(2)}`,
        type: 'Location Target',
        platform_code: name,
        latitude: lat,
        longitude: lon,
        timestamp: new Date().toISOString(),
        current_depth: 0,
        variables: {},
        profiles: [],
        status: 'Active Location',
        is_demo: false
      });
    }
  };

  const handleExportSnapshot = () => {
    if (canvasRef.current) {
      const url = canvasRef.current.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `Ocean3D_${variable}_${depth}m.png`;
      link.href = url;
      link.click();
    }
  };

  const handleExportCSV = () => {
    if (!sliceData) return;
    const header = ['Latitude', 'Longitude', 'Value', 'Variable', 'Depth_m'].join(',');
    const rows: string[] = [header];
    sliceData.values.forEach((row, rIdx) => {
      const lat = sliceData.lats[rIdx];
      row.forEach((val, cIdx) => {
        const lon = sliceData.lons[cIdx];
        if (val !== null && !isNaN(val)) {
          rows.push([lat, lon, val, sliceData.variable, sliceData.depth].join(','));
        }
      });
    });
    const blob = new Blob([rows.join(String.fromCharCode(10))], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `slice_${sliceData.variable}_${sliceData.depth}m.csv`;
    link.href = url;
    link.click();
  };

  const filteredGliders = gliders.filter((g) =>
    g.callsign.toLowerCase().includes(searchMission.toLowerCase()) ||
    (g.name && g.name.toLowerCase().includes(searchMission.toLowerCase())) ||
    g.platform_code.includes(searchMission)
  );

  const currentVar = VARIABLES.find((v) => v.id === variable);

  /* ─── Panel style helpers ────────────────────────────────────── */
  const panel = isDark
    ? 'bg-[#050d1c]/95 border-slate-800 text-slate-200'
    : 'bg-white/98 border-slate-200 text-slate-800 shadow-sm';
  const panelCard = isDark
    ? 'bg-slate-900/70 border-slate-800'
    : 'bg-slate-50 border-slate-200';
  const btnBase = `transition-all text-xs font-semibold rounded-lg border`;
  const btnActive = 'bg-cyan-500 text-white border-cyan-400 shadow-sm';
  const btnIdle = isDark
    ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100';

  return (
    <div className="flex-1 h-full w-full flex flex-row overflow-hidden">

      {/* ══════════════════ 3D VIEWPORT ══════════════════ */}
      <div className="flex-1 h-full relative overflow-hidden">
        <OceanScene
          sliceData={visMode !== 'insitu' ? sliceData : null}
          volumeData={visMode === 'volume' ? volumeData : null}
          currentsData={(visMode === 'currents' || visMode === 'slice') ? currentsData : null}
          observations={observations}
          gliders={gliders}
          selectedItem={selectedItem}
          onSelectItem={setSelectedItem}
          visMode={visMode}
          colormap={colormap}
          customMin={customMin}
          customMax={customMax}
          showArgo={showArgo}
          showGliders={showGliders}
          showTrajectories={showTrajectories}
          showBathymetry={showBathymetry}
          showGrid={showGrid}
          cameraPreset={cameraPreset}
          canvasRef={canvasRef}
          lowBandwidth={lowBandwidth}
        />

        {/* ── Location Analysis & Telemetry Display Gadget ── */}
        <LocationDisplayGadget
          isDark={isDark}
          onTargetIn3D={handleTargetLocation}
        />

        {/* ── Top-Left: Mode Selector ─────────────────── */}
        <div className={`absolute top-3 left-3 flex items-center gap-1 p-1 rounded-xl border backdrop-blur-md z-10 ${panel}`}>
          {MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => setVisMode(m.id)}
              className={`px-3 py-1.5 ${btnBase} ${visMode === m.id ? btnActive : btnIdle}`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* ── Top-Right: Quick Actions ────────────────── */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
          <button
            onClick={() => setAutoContrast(!autoContrast)}
            title="Toggle Auto-Contrast"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold backdrop-blur-md transition-all ${
              autoContrast
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                : isDark
                  ? 'bg-slate-950/85 border-slate-800 text-slate-400'
                  : 'bg-white/95 border-slate-300 text-slate-600'
            }`}
          >
            <Contrast className="w-3.5 h-3.5" />
            <span>{autoContrast ? 'Auto-Contrast' : 'Manual Scale'}</span>
          </button>

          <button
            onClick={handleExportSnapshot}
            title="Save PNG Snapshot"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold backdrop-blur-md transition-all ${
              isDark ? 'bg-slate-950/85 border-slate-800 text-slate-200 hover:bg-slate-800' : 'bg-white/95 border-slate-300 text-slate-800 hover:bg-slate-100'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-cyan-500" />
            <span>Snapshot</span>
          </button>

          <button
            onClick={handleExportCSV}
            title="Export CSV Data"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold backdrop-blur-md transition-all ${
              isDark ? 'bg-slate-950/85 border-slate-800 text-slate-200 hover:bg-slate-800' : 'bg-white/95 border-slate-300 text-slate-800 hover:bg-slate-100'
            }`}
          >
            <Download className="w-3.5 h-3.5 text-emerald-500" />
            <span>CSV</span>
          </button>

          {/* Fullscreen Mode Controls & Toggle */}
          {isFullscreen ? (
            <>
              <button
                onClick={() => setShowControlsDrawer(!showControlsDrawer)}
                title="Toggle Controls Panel"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold backdrop-blur-md transition-all ${
                  showControlsDrawer
                    ? 'bg-cyan-500 text-white border-cyan-400 shadow-md shadow-cyan-500/20'
                    : isDark
                      ? 'bg-slate-950/85 border-slate-800 text-cyan-300 hover:bg-slate-800'
                      : 'bg-white/95 border-slate-300 text-cyan-700 hover:bg-slate-100'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>{showControlsDrawer ? 'Close Panel' : 'Controls'}</span>
              </button>

              {onToggleFullscreen && (
                <button
                  onClick={onToggleFullscreen}
                  title="Exit Fullscreen Visualization"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold backdrop-blur-md bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30 transition-all"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span>Exit Fullscreen</span>
                </button>
              )}
            </>
          ) : (
            onToggleFullscreen && (
              <button
                onClick={onToggleFullscreen}
                title="Expand 3D Viewport to Full Screen (Header stays visible)"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold backdrop-blur-md transition-all ${
                  isDark ? 'bg-slate-950/85 border-slate-800 text-cyan-300 hover:bg-slate-800' : 'bg-white/95 border-slate-300 text-cyan-700 hover:bg-slate-100'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5 text-cyan-500" />
                <span>Fullscreen</span>
              </button>
            )
          )}
        </div>

        {/* ── Bottom-Left: Colorbar ───────────────────── */}
        <div className="absolute bottom-16 left-4 z-10 w-64">
          <Colorbar
            variable={currentVar?.label || variable}
            units={currentVar?.unit || metadata?.variables[variable]?.units || ''}
            minVal={customMin !== undefined ? customMin : (sliceData?.min_val ?? 0)}
            maxVal={customMax !== undefined ? customMax : (sliceData?.max_val ?? 30)}
            colormap={colormap}
          />
        </div>

        {/* ── Bottom-Center: Camera Presets ──────────── */}
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-1.5 rounded-xl border backdrop-blur-md z-10 ${panel}`}>
          <span className="text-[11px] font-bold opacity-60 pr-1">Camera:</span>
          {CAMERA_PRESETS.map((c) => (
            <button
              key={c.id}
              onClick={() => setCameraPreset(c.id)}
              className={`px-2.5 py-1 ${btnBase} ${cameraPreset === c.id ? btnActive : btnIdle}`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════ RIGHT CONTROL PANEL ══════════════════ */}
      {(!isFullscreen || showControlsDrawer) && (
        <aside
          className={
            isFullscreen
              ? `fixed top-14 right-0 bottom-0 w-80 sm:w-96 border-l shadow-2xl flex flex-col z-40 backdrop-blur-xl transition-all duration-200 ${
                  isDark ? 'border-slate-800 bg-slate-950/95 text-slate-100' : 'border-slate-200 bg-white/95 text-slate-900'
                }`
              : `w-80 border-l flex flex-col h-full overflow-y-auto z-20 transition-colors flex-shrink-0 ${panel}`
          }
        >
          {/* Panel Header */}
          <div className={`px-4 py-3 border-b flex items-center justify-between flex-shrink-0 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-500" />
              <span className="text-xs font-bold tracking-widest uppercase">Scientific Controls</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/30 font-bold">
                4D INCOIS OGCM
              </span>
              {isFullscreen && (
                <button
                  onClick={() => setShowControlsDrawer(false)}
                  className={`p-1 rounded-lg border text-xs ${btnIdle}`}
                  title="Close Controls Drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-3">

          {/* ── 1. Variable Selector ──────────────────── */}
          <div className={`p-3 rounded-xl border ${panelCard}`}>
            <p className="text-[11px] font-bold text-cyan-500 uppercase tracking-wider mb-2">Ocean Variable</p>
            <div className="grid grid-cols-1 gap-1">
              {VARIABLES.map((v) => {
                const { Icon } = v;
                return (
                  <button
                    key={v.id}
                    onClick={() => setVariable(v.id)}
                    className={`flex items-center gap-2.5 px-3 py-2 ${btnBase} text-left ${variable === v.id ? btnActive : btnIdle}`}
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="flex-1">{v.label}</span>
                    <span className="text-[10px] opacity-60">{v.unit}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── 2. Time Dimension ─────────────────────── */}
          <div className={`p-3 rounded-xl border space-y-2 ${panelCard}`}>
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold text-cyan-500 uppercase tracking-wider">Time Dimension</p>
              <span className="text-[11px] font-mono opacity-80">
                {metadata?.time_steps[timeIdx] ?? `Step ${timeIdx + 1}`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-bold transition-colors shadow-sm"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <input
                type="range"
                min={0}
                max={(metadata?.time_steps.length || 5) - 1}
                value={timeIdx}
                onChange={(e) => setTimeIdx(parseInt(e.target.value))}
                className="flex-1 accent-cyan-500"
              />
              <button
                onClick={() => { setTimeIdx(0); setIsPlaying(false); }}
                title="Reset"
                className={`p-1.5 rounded-lg border ${btnIdle}`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ── 3. Depth Slice ────────────────────────── */}
          <div className={`p-3 rounded-xl border space-y-2 ${panelCard}`}>
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold text-cyan-500 uppercase tracking-wider">Z-Depth Cross-Section</p>
              <span className="text-sm font-bold font-mono">{depth.toFixed(0)} m</span>
            </div>
            <input
              type="range"
              min={0}
              max={1000}
              step={10}
              value={depth}
              onChange={(e) => setDepth(parseFloat(e.target.value))}
              className="w-full accent-cyan-500"
            />
            <div className="grid grid-cols-5 gap-1">
              {DEPTH_PRESETS.map((p) => (
                <button
                  key={p.d}
                  onClick={() => setDepth(p.d)}
                  className={`py-1 text-center text-[11px] ${btnBase} ${Math.abs(depth - p.d) < 5 ? btnActive : btnIdle}`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── 4. Colormap Palette ───────────────────── */}
          <div className={`p-3 rounded-xl border space-y-2 ${panelCard}`}>
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold text-cyan-500 uppercase tracking-wider">Colormap Palette</p>
              <span className="text-[11px] font-bold capitalize text-cyan-400">{colormap}</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {COLORMAPS.map((cm) => (
                <button
                  key={cm}
                  onClick={() => setColormap(cm)}
                  className={`py-1.5 capitalize text-center ${btnBase} ${colormap === cm ? btnActive : btnIdle}`}
                >
                  {cm}
                </button>
              ))}
            </div>
          </div>

          {/* ── 5. Layer Visibility ───────────────────── */}
          <div className={`p-3 rounded-xl border space-y-2 ${panelCard}`}>
            <p className="text-[11px] font-bold text-cyan-500 uppercase tracking-wider mb-1">Layer Visibility</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Argo Floats', state: showArgo,         setState: setShowArgo },
                { label: 'Gliders',     state: showGliders,      setState: setShowGliders },
                { label: 'Trajectories',state: showTrajectories, setState: setShowTrajectories },
                { label: 'Bathymetry',  state: showBathymetry,   setState: setShowBathymetry },
                { label: 'Grid Floor',  state: showGrid,         setState: setShowGrid }
              ].map(({ label, state, setState }) => (
                <label key={label} className="flex items-center gap-2 cursor-pointer text-xs font-semibold">
                  <input
                    type="checkbox"
                    checked={state}
                    onChange={(e) => setState(e.target.checked)}
                    className="rounded accent-cyan-500 w-3.5 h-3.5"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* ── 6. In-Situ Asset Quick Selector ──────── */}
          <div className={`p-3 rounded-xl border space-y-2 ${panelCard}`}>
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold text-cyan-500 uppercase tracking-wider">In-Situ Inspector</p>
              <span className="text-[10px] opacity-60">{gliders.length} Gliders · {observations.length} Argo</span>
            </div>

            {/* Argo quick buttons */}
            <div className="flex flex-wrap gap-1">
              {observations.slice(0, 4).map((obs) => (
                <button
                  key={obs.id}
                  onClick={() => setSelectedItem(obs)}
                  className={`px-2 py-0.5 text-[11px] rounded border font-semibold transition-all ${
                    selectedItem?.id === obs.id
                      ? 'bg-amber-500 text-white border-amber-400'
                      : isDark
                        ? 'bg-slate-800 text-amber-300 border-amber-500/30 hover:bg-slate-700'
                        : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                  }`}
                >
                  {obs.platform_code}
                </button>
              ))}
            </div>

            {/* Glider search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 opacity-40" />
              <input
                type="text"
                placeholder="Search callsign / WMO..."
                value={searchMission}
                onChange={(e) => setSearchMission(e.target.value)}
                className={`w-full pl-8 pr-3 py-1.5 rounded-lg text-xs border focus:outline-none focus:border-cyan-500 ${
                  isDark ? 'bg-slate-950 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-800'
                }`}
              />
            </div>

            <div className="max-h-24 overflow-y-auto space-y-0.5 pr-0.5">
              {filteredGliders.slice(0, 8).map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedItem(g)}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs text-left transition-all ${
                    selectedItem?.id === g.id
                      ? 'bg-cyan-500 text-white font-bold'
                      : isDark
                        ? 'hover:bg-slate-800 text-slate-300'
                        : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="truncate font-semibold">{g.callsign} ({g.platform_code})</span>
                  <ChevronRight className="w-3 h-3 opacity-50 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* ── 7. Selected Asset Detail Panel ───────── */}
          {selectedItem && (
            <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-900/90 border-cyan-500/40' : 'bg-white border-cyan-400 shadow-md'}`}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-xs font-bold text-cyan-500">
                    {'name' in selectedItem ? selectedItem.name : selectedItem.id}
                  </p>
                  <p className="text-[10px] opacity-60 mt-0.5">
                    WMO {selectedItem.platform_code} · {selectedItem.type}
                  </p>
                  <p className="text-[10px] opacity-60">
                    {selectedItem.latitude.toFixed(2)}°N, {selectedItem.longitude.toFixed(2)}°E · {selectedItem.current_depth}m
                  </p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className={`p-1 rounded hover:bg-slate-700/40`}
                >
                  <X className="w-3.5 h-3.5 opacity-60" />
                </button>
              </div>
              <div className="h-56 w-full">
                {comparison ? (
                  <ComparisonChart
                    comparison={comparison}
                    title={`${selectedItem.platform_code} vs OGCM`}
                  />
                ) : (
                  <ProfileChart
                    profiles={selectedItem.profiles}
                    variable={variable === 'salinity' ? 'salinity' : 'temperature'}
                    title="In-Situ CTD Profile"
                  />
                )}
              </div>
            </div>
          )}

        </div>{/* end scrollable area */}
      </aside>
      )}
    </div>
  );
};
