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

const API_BASE = '/api';

export const api = {
  async getMetadata(): Promise<DatasetMetadata> {
    const res = await fetch(`${API_BASE}/ocean/metadata`);
    if (!res.ok) throw new Error('Failed to fetch ocean metadata');
    return res.json();
  },

  async getSlice(variable: string, depth: number, timeIdx: number = 0): Promise<OceanSlice> {
    const res = await fetch(`${API_BASE}/ocean/slice?variable=${variable}&depth=${depth}&time_idx=${timeIdx}`);
    if (!res.ok) throw new Error(`Failed to fetch slice for ${variable} at depth ${depth}`);
    return res.json();
  },

  async getVolume(variable: string, timeIdx: number = 0, lowBandwidth: boolean = false): Promise<OceanVolume> {
    const res = await fetch(`${API_BASE}/ocean/volume?variable=${variable}&time_idx=${timeIdx}&low_bandwidth=${lowBandwidth}`);
    if (!res.ok) throw new Error(`Failed to fetch volume for ${variable}`);
    return res.json();
  },

  async getCurrents(depth: number, timeIdx: number = 0): Promise<CurrentVectorField> {
    const res = await fetch(`${API_BASE}/ocean/currents?depth=${depth}&time_idx=${timeIdx}`);
    if (!res.ok) throw new Error(`Failed to fetch currents at depth ${depth}`);
    return res.json();
  },

  async getObservations(): Promise<Observation[]> {
    const res = await fetch(`${API_BASE}/observations`);
    if (!res.ok) throw new Error('Failed to fetch observations');
    return res.json();
  },

  async getGliders(): Promise<GliderMission[]> {
    const res = await fetch(`${API_BASE}/gliders`);
    if (!res.ok) throw new Error('Failed to fetch gliders');
    return res.json();
  },

  async ingestGlider(payload: any): Promise<{ status: string; mission?: GliderMission }> {
    const res = await fetch(`${API_BASE}/gliders/ingest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Ingestion failed' }));
      throw new Error(err.detail || 'Failed to ingest glider manifest');
    }
    return res.json();
  },

  async getComparison(obsId: string, variable: string = 'temperature'): Promise<ModelComparison> {
    const res = await fetch(`${API_BASE}/compare?obs_id=${encodeURIComponent(obsId)}&variable=${variable}`);
    if (!res.ok) throw new Error(`Failed to compare observation ${obsId}`);
    return res.json();
  },

  async getDataSources(): Promise<DataSourceItem[]> {
    const res = await fetch(`${API_BASE}/datasources`);
    if (!res.ok) throw new Error('Failed to fetch data sources');
    return res.json();
  }
};
