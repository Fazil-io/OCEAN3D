import React, { useState, useEffect } from 'react';
import {
  Database,
  Upload,
  CheckCircle2,
  AlertCircle,
  Search,
  X
} from 'lucide-react';
import { api } from '../services/api';
import { DataSourceItem, GliderMission } from '../types';
import { useTheme } from '../context/ThemeContext';

export const DataSourcesPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [dataSources, setDataSources] = useState<DataSourceItem[]>([]);
  const [gliders, setGliders] = useState<GliderMission[]>([]);
  const [searchGlider, setSearchGlider] = useState<string>('');
  const [rawModal, setRawModal] = useState<any | null>(null);
  const [ingestStatus, setIngestStatus] = useState<{ msg: string; success: boolean } | null>(null);
  const [customJsonText, setCustomJsonText] = useState<string>('');

  useEffect(() => {
    api.getDataSources().then(setDataSources).catch(console.error);
    api.getGliders().then(setGliders).catch(console.error);
  }, []);

  const handleIngestJson = async () => {
    if (!customJsonText.trim()) return;
    try {
      const parsed = JSON.parse(customJsonText);
      const res = await api.ingestGlider(parsed);
      setIngestStatus({ msg: `Successfully ingested mission: ${res.mission?.callsign || 'Custom Glider'}!`, success: true });
      const updated = await api.getGliders();
      setGliders(updated);
      setCustomJsonText('');
    } catch (err: any) {
      setIngestStatus({ msg: `Ingestion Error: ${err.message}`, success: false });
    }
  };

  const filteredGliders = gliders.filter((g) =>
    g.callsign.toLowerCase().includes(searchGlider.toLowerCase()) ||
    g.platform_code.includes(searchGlider) ||
    (g.institution && g.institution.toLowerCase().includes(searchGlider.toLowerCase()))
  );

  return (
    <div className={`flex-1 w-full h-[calc(100vh-3.5rem)] overflow-y-auto p-4 sm:p-8 space-y-8 transition-colors ${
      isDark ? 'bg-[#030711] text-slate-100' : 'bg-slate-100 text-slate-800'
    }`}>
      {/* Title */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-cyan-500" />
          <h1 className="text-xl font-bold font-mono tracking-tight">
            Data Catalogs & Fleet Ingestion Studio
          </h1>
        </div>
        <p className="text-xs font-mono opacity-70">
          Smart India Hackathon 2026 • Real OceanGliders Archive & Numerical Model Ingestion Pipeline
        </p>
      </div>

      {/* Main Data Sources Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dataSources.map((ds) => (
          <div
            key={ds.id}
            className={`p-4 rounded-xl border flex flex-col justify-between space-y-3 ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold font-mono text-cyan-600 dark:text-cyan-400">{ds.name}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                  {ds.status}
                </span>
              </div>
              <p className="text-[11px] font-mono opacity-80">{ds.description || ds.coverage}</p>
            </div>
            <div className="border-t border-slate-700/40 dark:border-slate-800 pt-2 flex items-center justify-between text-[10px] font-mono">
              <span className="opacity-70">{ds.provider}</span>
              <span className="font-bold text-cyan-500">{ds.update_frequency}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Ingestion Studio */}
      <div className={`p-6 rounded-2xl border space-y-4 ${
        isDark ? 'bg-slate-900/40 border-cyan-500/30 shadow-lg' : 'bg-white border-cyan-300 shadow-md'
      }`}>
        <div className="flex items-center gap-2">
          <Upload className="w-4 h-4 text-cyan-500" />
          <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            EGO Glider Manifest JSON Ingestion Studio
          </h2>
        </div>

        <p className="text-xs opacity-80">
          Paste an EGO Deployment JSON specification or upload a manifest to register in-situ platforms dynamically.
        </p>

        <textarea
          rows={5}
          placeholder='{"EGODeployment": [{"DEPLOYMENT_ID": "622", "NAME": "BIOPOLE", "PLATFORMINSTANCE": [{"PLATFORM_CODE": "Amazon", "WMO_PLATFORM_CODE": 6800980}], "SENSORLIST": [{"SENSORMODEL": [{"SENSOR_MODEL": "SBE GPCTD"}]}]}]}'
          value={customJsonText}
          onChange={(e) => setCustomJsonText(e.target.value)}
          className={`w-full p-3 rounded-lg text-xs font-mono border focus:outline-none focus:border-cyan-500 ${
            isDark ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
          }`}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleIngestJson}
              className="px-4 py-2 rounded-lg bg-cyan-500 text-white text-xs font-bold font-mono hover:bg-cyan-400 transition-colors shadow-sm"
            >
              Parse & Ingest Manifest
            </button>
          </div>

          {ingestStatus && (
            <div className={`text-xs font-mono flex items-center gap-1.5 ${
              ingestStatus.success ? 'text-emerald-500' : 'text-rose-500'
            }`}>
              {ingestStatus.success ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              <span>{ingestStatus.msg}</span>
            </div>
          )}
        </div>
      </div>

      {/* 118 Ingested Fleet Table */}
      <div className={`p-6 rounded-2xl border space-y-4 ${
        isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Ingested OceanGliders Fleet ({gliders.length} Missions)
            </h2>
            <p className="text-xs opacity-70 font-mono">
              Directly extracted from 493,645 NetCDF archive files in dataset/
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 opacity-50" />
            <input
              type="text"
              placeholder="Search fleet..."
              value={searchGlider}
              onChange={(e) => setSearchGlider(e.target.value)}
              className={`w-full pl-8 pr-3 py-1.5 rounded-md text-xs font-mono border focus:outline-none focus:border-cyan-500 ${
                isDark ? 'bg-slate-950 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
              }`}
            />
          </div>
        </div>

        <div className="overflow-x-auto max-h-96">
          <table className="w-full text-left text-xs font-mono">
            <thead className={`border-b ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'}`}>
              <tr>
                <th className="py-2 px-3">Callsign</th>
                <th className="py-2 px-3">WMO ID</th>
                <th className="py-2 px-3">Institution</th>
                <th className="py-2 px-3">Project</th>
                <th className="py-2 px-3">Sensors</th>
                <th className="py-2 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 dark:divide-slate-800">
              {filteredGliders.map((g) => (
                <tr key={g.id} className={isDark ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}>
                  <td className="py-2.5 px-3 font-bold text-cyan-600 dark:text-cyan-400">{g.callsign}</td>
                  <td className="py-2.5 px-3">{g.platform_code}</td>
                  <td className="py-2.5 px-3 truncate max-w-[140px]">{g.institution || 'Ocean Institute'}</td>
                  <td className="py-2.5 px-3">{g.project || 'OceanGliders'}</td>
                  <td className="py-2.5 px-3 truncate max-w-[180px]">{(g.sensors || ['CTD', 'Optode']).join(', ')}</td>
                  <td className="py-2.5 px-3 text-right">
                    <button
                      onClick={() => setRawModal(g)}
                      className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors"
                    >
                      Inspect JSON
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Raw JSON Modal */}
      {rawModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`w-full max-w-2xl max-h-[80vh] flex flex-col rounded-2xl border p-6 space-y-4 ${
            isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-800'
          }`}>
            <div className="flex items-center justify-between">
              <h3 className="font-bold font-mono text-sm text-cyan-500">
                Raw Mission Manifest: {rawModal.callsign}
              </h3>
              <button onClick={() => setRawModal(null)} className="p-1 rounded hover:bg-slate-700/50">
                <X className="w-4 h-4" />
              </button>
            </div>
            <pre className={`flex-1 overflow-auto p-4 rounded-lg text-[11px] font-mono border ${
              isDark ? 'bg-slate-950 border-slate-800 text-emerald-400' : 'bg-slate-100 border-slate-200 text-slate-900'
            }`}>
              {JSON.stringify(rawModal, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
