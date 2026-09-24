import React, { useState, useMemo } from "react";
import {
  MapPin,
  Navigation,
  Compass,
  Crosshair,
  Radio,
  Minimize2,
  Maximize2,
  ChevronDown,
  Layers,
  Copy,
  Check,
  Globe,
  Waves,
  Eye,
  Info
} from "lucide-react";
import { IN_SITU_DATASET, InSituProfileRecord } from "../../data/inSituDataset";

export interface LocationAnalysis {
  lat: number;
  lon: number;
  dms: string;
  locationName: string;
  subRegion: string;
  eezZone: string;
  nearestCoast: string;
  depthEstimate: string;
  oceanBasin: string;
  hydroCurrent: string;
  surfaceCTD: string;
}

export function analyzeLocation(lat: number, lon: number): LocationAnalysis {
  const latDir = lat >= 0 ? "N" : "S";
  const lonDir = lon >= 0 ? "E" : "W";
  const absLat = Math.abs(lat);
  const absLon = Math.abs(lon);

  // Degrees, Minutes, Seconds
  const latDeg = Math.floor(absLat);
  const latMin = Math.floor((absLat - latDeg) * 60);
  const latSec = Math.round(((absLat - latDeg) * 60 - latMin) * 60);

  const lonDeg = Math.floor(absLon);
  const lonMin = Math.floor((absLon - lonDeg) * 60);
  const lonSec = Math.round(((absLon - lonDeg) * 60 - lonMin) * 60);

  const dms = `${latDeg}°${latMin.toString().padStart(2, "0")}'${latSec.toString().padStart(2, "0")}"${latDir}, ${lonDeg}°${lonMin.toString().padStart(2, "0")}'${lonSec.toString().padStart(2, "0")}"${lonDir}`;

  let locationName = "";
  let subRegion = "";
  let eezZone = "";
  let nearestCoast = "";
  let depthEstimate = "~1,850m (Pelagic Abyssal Plain)";
  let oceanBasin = "";
  let hydroCurrent = "East India Coastal Current (EICC)";
  let surfaceCTD = "28.8°C • 32.4 PSU";

  // Detailed Marine Geographic Bounding Engine
  if (lat >= 5 && lat <= 23 && lon >= 79 && lon <= 98) {
    oceanBasin = "Northern Indian Ocean (Bay of Bengal)";
    if (lat >= 17) {
      locationName = "Northern Bay of Bengal (Ganges-Brahmaputra Submarine Delta)";
      subRegion = "Sundarbans Offshore Fan & Continental Shelf";
      eezZone = "Indian EEZ (Northern Bengal Sector)";
      nearestCoast = "~140 km S of Sundarbans Delta / Sagar Island";
      depthEstimate = "~450–1,200m (Delta Slope)";
      hydroCurrent = "Freshwater Plume & Coastal Jet";
      surfaceCTD = "28.5°C • 29.8 PSU (Low Salinity Plume)";
    } else if (lat >= 13 && lat < 17 && lon >= 82 && lon <= 88) {
      locationName = "Central Bay of Bengal Deep Abyssal Basin";
      subRegion = "INCOIS OGCM Sector 4B (Core Observation Grid)";
      eezZone = "Indian Exclusive Economic Zone (EEZ)";
      nearestCoast = "~190 km E of Visakhapatnam Port, India";
      depthEstimate = "~2,200–3,100m (Abyssal Trench)";
      hydroCurrent = "East India Coastal Current (EICC) Mesoscale Eddy";
      surfaceCTD = "29.2°C • 32.6 PSU";
    } else if (lat >= 8 && lat < 13 && lon >= 80 && lon <= 86) {
      locationName = "Coromandel Offshore Basin & Sri Lanka Dome";
      subRegion = "Western Boundary Current Dynamic Zone";
      eezZone = "Indian EEZ (Coromandel Deep Sector)";
      nearestCoast = "~160 km E of Chennai Coast, India";
      depthEstimate = "~1,800–2,600m (Bathymetric Basin)";
      hydroCurrent = "Southwest Monsoon Current (SMC) & Sri Lanka Eddy";
      surfaceCTD = "29.6°C • 33.1 PSU";
    } else if (lon >= 90 && lon <= 97 && lat >= 6 && lat <= 15) {
      locationName = "Andaman Sea Basin & Ten Degree Channel";
      subRegion = "Andaman-Nicobar Subduction Trench";
      eezZone = "Indian EEZ (Andaman & Nicobar Sector)";
      nearestCoast = "~95 km W of Port Blair, Andaman Islands";
      depthEstimate = "~1,650–2,800m (Volcanic Submarine Arc)";
      hydroCurrent = "Equatorial Undercurrent & Tidal Solitons";
      surfaceCTD = "29.4°C • 32.2 PSU";
    } else {
      locationName = "Central-Eastern Bay of Bengal Pelagic Waters";
      subRegion = "International Waters (INCOIS Hydrographic Grid)";
      eezZone = "International Oceanic Waters";
      nearestCoast = "~260 km offshore Indian Subcontinent";
      depthEstimate = "~2,400m (Central Bay Pelagic Plain)";
      hydroCurrent = "Cyclonic Gyre Reversible Flow";
      surfaceCTD = "29.0°C • 32.8 PSU";
    }
  } else if (lat >= 6 && lat <= 24 && lon >= 64 && lon < 79) {
    oceanBasin = "Eastern Arabian Sea";
    if (lat <= 12) {
      locationName = "Lakshadweep Sea / Southeast Arabian Basin";
      subRegion = "Chagos-Laccadive Submarine Ridge System";
      eezZone = "Indian EEZ (Lakshadweep Union Territory)";
      nearestCoast = "~110 km W of Kochi / Lakshadweep Archipelago";
      depthEstimate = "~1,500–2,100m (Ridge Slope)";
      hydroCurrent = "West India Coastal Current (WICC)";
      surfaceCTD = "29.8°C • 35.2 PSU (High Salinity Core)";
    } else {
      locationName = "Konkan-Goa Continental Margin";
      subRegion = "Upwelling & Oxygen Minimum Zone (OMZ)";
      eezZone = "Indian EEZ (Western Continental Margin)";
      nearestCoast = "~150 km W of Goa / Mumbai Shelf";
      depthEstimate = "~1,400–2,000m (Western Slope)";
      hydroCurrent = "Arabian Sea High Salinity Water (ASHSW)";
      surfaceCTD = "28.9°C • 36.1 PSU (Evaporative Peak)";
    }
  } else if (lat >= -10 && lat < 6 && lon >= 60 && lon <= 100) {
    locationName = "Equatorial Indian Ocean Hydrographic Transect";
    subRegion = "Wyrtki Jet Dynamic Convergence Zone";
    eezZone = "International Waters (Equatorial Jet Region)";
    nearestCoast = "~380 km S of Dondra Head, Sri Lanka";
    depthEstimate = "~3,800–4,500m (Deep Ocean Floor)";
    oceanBasin = "Equatorial Indian Ocean";
    hydroCurrent = "Equatorial Wyrtki Jet & Subsurface Countercurrent";
    surfaceCTD = "29.5°C • 34.4 PSU";
  } else if (lat >= 35 && lat <= 45 && lon >= -5 && lon <= 20) {
    locationName = "Western Mediterranean Sea (Ligurian / Balearic Basin)";
    subRegion = "European GDAC EGO Glider Calibration Site";
    eezZone = "Mediterranean International / Pelagos Sanctuary";
    nearestCoast = "~45 km off Nice, France & Ligurian Coast";
    depthEstimate = "~500–2,000m (Mediterranean Deep Trench)";
    oceanBasin = "Mediterranean Sea";
    hydroCurrent = "Northern Mediterranean Current (Ligurian Slope)";
    surfaceCTD = "18.2°C • 38.2 PSU";
  } else if (lat >= 10 && lat <= 30 && lon >= -35 && lon <= -15) {
    locationName = "Eastern Tropical Atlantic (Cape Verde Abyssal Basin)";
    subRegion = "EGO Autonomous Glider Long-Range Transect";
    eezZone = "Atlantic Tropical Basin / High Seas";
    nearestCoast = "~220 km W of Cape Verde / African Coast";
    depthEstimate = "~2,800–3,600m (Cape Verde Basin)";
    oceanBasin = "North Atlantic Ocean";
    hydroCurrent = "North Equatorial Current (NEC)";
    surfaceCTD = "24.5°C • 36.5 PSU";
  } else {
    locationName = `Open Oceanic Basin (${latDir}-${lonDir} Sector)`;
    subRegion = "Global Pelagic Coordinate Grid";
    eezZone = "High Seas / International Marine Territory";
    nearestCoast = "~320 km nearest landmass";
    depthEstimate = "~2,500m (Oceanic Crust)";
    oceanBasin = `${latDir >= "N" ? "Northern" : "Southern"} Oceanic Basin`;
    hydroCurrent = "Open Ocean Geostrophic Circulation";
    surfaceCTD = "25.0°C • 34.5 PSU";
  }

  return {
    lat,
    lon,
    dms,
    locationName,
    subRegion,
    eezZone,
    nearestCoast,
    depthEstimate,
    oceanBasin,
    hydroCurrent,
    surfaceCTD
  };
}

interface LocationDisplayGadgetProps {
  onTargetIn3D?: (lat: number, lon: number, name: string) => void;
  isDark?: boolean;
  children?: React.ReactNode;
}

export const LocationDisplayGadget: React.FC<LocationDisplayGadgetProps> = ({
  onTargetIn3D,
  isDark = true,
  children
}) => {
  // Preset dataset locations from IN_SITU_DATASET
  const datasetOptions = useMemo(() => {
    return IN_SITU_DATASET.slice(0, 30).map((d) => ({
      id: d.id,
      label: `${d.platform} (WMO ${d.wmo}) - ${d.latitude.toFixed(2)}°N, ${d.longitude.toFixed(2)}°E`,
      lat: d.latitude,
      lon: d.longitude,
      platform: d.platform,
      wmo: d.wmo,
      ocean: d.ocean,
      maxDepth: d.pressure_max
    }));
  }, []);

  const [selectedPresetId, setSelectedPresetId] = useState<string>(datasetOptions[0]?.id || "");
  const [customLat, setCustomLat] = useState<number>(datasetOptions[0]?.lat ?? 13.85);
  const [customLon, setCustomLon] = useState<number>(datasetOptions[0]?.lon ?? 85.20);
  const [isManualInput, setIsManualInput] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Compute live analysis
  const analysis = useMemo(() => {
    return analyzeLocation(customLat, customLon);
  }, [customLat, customLon]);

  const handleSelectPreset = (id: string) => {
    setSelectedPresetId(id);
    const item = datasetOptions.find((o) => o.id === id);
    if (item) {
      setCustomLat(item.lat);
      setCustomLon(item.lon);
      setIsManualInput(false);
    }
  };

  const handleCopy = () => {
    const text = `${analysis.locationName} | ${analysis.lat.toFixed(4)}°N, ${analysis.lon.toFixed(4)}°E (${analysis.dms})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFocus = () => {
    if (onTargetIn3D) {
      onTargetIn3D(analysis.lat, analysis.lon, analysis.locationName);
    }
  };

  return (
    <aside
      aria-label="Location telemetry instrument"
      className="absolute top-13 sm:top-14 left-2.5 sm:left-3 z-30 transition-all duration-200 select-none flex flex-col items-start gap-2"
    >
      {/* ── COLLAPSED STATE: Sleek, compact pill (Not fully visible until clicked) ── */}
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          title="Click to enlarge location analysis & telemetry display"
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border backdrop-blur-md shadow-md text-xs font-semibold font-mono transition-all cursor-pointer group ${
            isDark
              ? "bg-[#030914]/85 border-cyan-500/30 text-white hover:border-cyan-400 hover:bg-[#071329] shadow-cyan-500/10"
              : "bg-white/90 border-slate-300 text-slate-800 hover:border-cyan-500 hover:bg-slate-50 shadow-sm"
          }`}
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_6px_#00f0ff]"></span>
          </div>
          <span className="text-cyan-400 font-bold uppercase tracking-wider text-[11px]">
            Location:
          </span>
          <span className="text-slate-200 max-w-[150px] sm:max-w-[200px] truncate">
            {analysis.locationName}
          </span>
          <span className="text-[10px] text-slate-400 hidden sm:inline opacity-75">
            ({customLat.toFixed(2)}°N, {customLon.toFixed(2)}°E)
          </span>
          <div className="flex items-center gap-1 pl-1 text-cyan-400 group-hover:scale-105 transition-transform">
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="text-[10px] hidden sm:inline font-bold">Enlarge</span>
          </div>
        </button>
      ) : (
        /* ── ENLARGED STATE: Full Digital Marine Avionics Telemetry Display ── */
        <div className="max-w-sm w-[92vw] sm:w-[380px] max-h-[80vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
          {/* Top Control Bar with Location Selector & Collapse Button */}
          <div className={`p-1.5 rounded-xl border backdrop-blur-md shadow-lg flex items-center justify-between gap-2 mb-2 ${
            isDark
              ? "bg-[#030914]/90 border-cyan-500/40 text-white shadow-cyan-500/15"
              : "bg-white/95 border-slate-300 text-slate-900 shadow-sm"
          }`}>
            <div className="flex items-center gap-1.5 flex-1 min-w-0">
              <div className="w-6 h-6 rounded-md bg-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400">
                <MapPin className="w-3.5 h-3.5 animate-pulse" />
              </div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 flex-shrink-0">
                Location:
              </span>
              <select
                value={isManualInput ? "custom" : selectedPresetId}
                onChange={(e) => {
                  if (e.target.value === "custom") {
                    setIsManualInput(true);
                  } else {
                    handleSelectPreset(e.target.value);
                  }
                }}
                className={`w-full text-xs font-mono py-1 px-1.5 rounded border focus:outline-none focus:ring-1 focus:ring-cyan-400 truncate ${
                  isDark
                    ? "bg-slate-900/95 border-slate-700 text-slate-100"
                    : "bg-slate-50 border-slate-300 text-slate-800"
                }`}
              >
                {datasetOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
                <option value="custom">✏️ Custom Coordinates Input...</option>
              </select>
            </div>

            {/* Minimize / Collapse Button */}
            <button
              onClick={() => setIsExpanded(false)}
              title="Collapse Location Display"
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer flex-shrink-0 flex items-center gap-1"
            >
              <Minimize2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] hidden sm:inline font-mono">Close</span>
            </button>
          </div>

          {/* Hardware-styled Screen Console */}
          <div className={`rounded-xl border overflow-hidden backdrop-blur-md shadow-2xl transition-all font-mono relative ${
            isDark
              ? "bg-[#020713]/95 border-cyan-500/40 text-slate-100 shadow-[0_0_30px_rgba(0,240,255,0.2)]"
              : "bg-white/95 border-slate-300 text-slate-900 shadow-xl"
          }`}>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.04] to-transparent pointer-events-none" />

            {/* Hardware Status Header */}
            <div className={`px-3 py-1.5 border-b flex items-center justify-between text-[10px] tracking-wider uppercase font-semibold ${
              isDark ? "bg-[#071329]/80 border-cyan-500/25 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"
            }`}>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
                </span>
                <span className="text-cyan-400 font-bold">GNSS FIXED</span>
                <span className="opacity-40">•</span>
                <span>INCOIS GEODESY</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <span>WGS-84</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>

            {/* Main LCD Screen */}
            <div className="p-3.5 space-y-3">
              {/* Digital Coordinates */}
              <div className={`p-2.5 rounded-lg border flex items-center justify-between ${
                isDark ? "bg-[#051126] border-cyan-500/30 text-cyan-300" : "bg-slate-50 border-slate-200 text-sky-700"
              }`}>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                    Analyzed Coordinates
                  </div>
                  <div className="text-sm font-bold tracking-tight text-cyan-400 flex items-center gap-2">
                    <span>{customLat >= 0 ? `${customLat.toFixed(4)}° N` : `${Math.abs(customLat).toFixed(4)}° S`}</span>
                    <span className="opacity-40">|</span>
                    <span>{customLon >= 0 ? `${customLon.toFixed(4)}° E` : `${Math.abs(customLon).toFixed(4)}° W`}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 opacity-80 mt-0.5">
                    DMS: {analysis.dms}
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Crosshair className="w-4 h-4 animate-spin-slow" />
                </div>
              </div>

              {/* Custom Coordinates Input Mode */}
              {isManualInput && (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5 font-bold">Latitude (-90 to 90)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={customLat}
                      onChange={(e) => setCustomLat(parseFloat(e.target.value) || 0)}
                      className="w-full px-2 py-1 rounded bg-slate-900 border border-cyan-500/30 text-white text-xs font-mono focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5 font-bold">Longitude (-180 to 180)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={customLon}
                      onChange={(e) => setCustomLon(parseFloat(e.target.value) || 0)}
                      className="w-full px-2 py-1 rounded bg-slate-900 border border-cyan-500/30 text-white text-xs font-mono focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              )}

              {/* Original Real-World Location Name */}
              <div className={`p-2.5 rounded-lg border ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-xs"
              }`}>
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center gap-1">
                  <Globe className="w-3 h-3 text-cyan-400" />
                  <span>Original Geographic Location</span>
                </div>
                <div className="text-xs font-bold text-white tracking-tight leading-snug">
                  {analysis.locationName}
                </div>
                <div className="text-[10px] text-cyan-400/90 mt-1 flex items-center gap-1">
                  <span>Sector:</span>
                  <span className="text-slate-300">{analysis.subRegion}</span>
                </div>
              </div>

              {/* Mini Telemetry Grid */}
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className={`p-2 rounded border ${isDark ? "bg-slate-950/60 border-slate-800/80" : "bg-slate-50 border-slate-200"}`}>
                  <span className="text-slate-400 block text-[9px] uppercase">Bathymetric Depth</span>
                  <span className="font-bold text-cyan-400">{analysis.depthEstimate}</span>
                </div>
                <div className={`p-2 rounded border ${isDark ? "bg-slate-950/60 border-slate-800/80" : "bg-slate-50 border-slate-200"}`}>
                  <span className="text-slate-400 block text-[9px] uppercase">Territory / EEZ</span>
                  <span className="font-bold text-emerald-400">{analysis.eezZone}</span>
                </div>
                <div className={`p-2 rounded border col-span-2 ${isDark ? "bg-slate-950/60 border-slate-800/80" : "bg-slate-50 border-slate-200"}`}>
                  <span className="text-slate-400 block text-[9px] uppercase">Nearest Coastal Landmark</span>
                  <span className="font-semibold text-slate-200">{analysis.nearestCoast}</span>
                </div>
                <div className={`p-2 rounded border col-span-2 ${isDark ? "bg-slate-950/60 border-slate-800/80" : "bg-slate-50 border-slate-200"}`}>
                  <span className="text-slate-400 block text-[9px] uppercase">Hydrodynamic Current & Water Mass</span>
                  <span className="font-semibold text-slate-300">{analysis.hydroCurrent} • {analysis.surfaceCTD}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleFocus}
                  className="flex-1 py-1.5 px-3 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-cyan-300 shadow-sm shadow-cyan-400/25 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-950" />
                  <span>Target in 3D Scene</span>
                </button>

                <button
                  onClick={handleCopy}
                  title="Copy Geographic Telemetry"
                  className={`py-1.5 px-2.5 rounded-lg border text-xs flex items-center justify-center gap-1 transition-all cursor-pointer ${
                    copied
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                      : isDark
                      ? "bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                      : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content positioned directly below location option */}
      {children}
    </aside>
  );
};
