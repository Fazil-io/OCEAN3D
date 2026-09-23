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
import { clientOceanEngine } from './clientOceanEngine';

// Supports optional custom backend via VITE_API_URL or relative /api
const envApiUrl = (import.meta as any).env?.VITE_API_URL;
const API_BASE = (envApiUrl || '/api').replace(/\/$/, '');

export const api = {
  async getMetadata(): Promise<DatasetMetadata> {
    try {
      const res = await fetch(`${API_BASE}/ocean/metadata`);
      if (!res.ok) throw new Error('Failed to fetch metadata from server');
      return await res.json();
    } catch {
      return clientOceanEngine.getMetadata();
    }
  },

  async getSlice(variable: string, depth: number, timeIdx: number = 0): Promise<OceanSlice> {
    try {
      const res = await fetch(`${API_BASE}/ocean/slice?variable=${variable}&depth=${depth}&time_idx=${timeIdx}`);
      if (!res.ok) throw new Error(`Failed to fetch slice from server`);
      return await res.json();
    } catch {
      return clientOceanEngine.getSlice(variable, depth, timeIdx);
    }
  },

  async getVolume(variable: string, timeIdx: number = 0, lowBandwidth: boolean = false): Promise<OceanVolume> {
    try {
      const res = await fetch(`${API_BASE}/ocean/volume?variable=${variable}&time_idx=${timeIdx}&low_bandwidth=${lowBandwidth}`);
      if (!res.ok) throw new Error(`Failed to fetch volume from server`);
      return await res.json();
    } catch {
      return clientOceanEngine.getVolume(variable, timeIdx, lowBandwidth);
    }
  },

  async getCurrents(depth: number, timeIdx: number = 0): Promise<CurrentVectorField> {
    try {
      const res = await fetch(`${API_BASE}/ocean/currents?depth=${depth}&time_idx=${timeIdx}`);
      if (!res.ok) throw new Error(`Failed to fetch currents from server`);
      return await res.json();
    } catch {
      return clientOceanEngine.getCurrents(depth, timeIdx);
    }
  },

  async getObservations(): Promise<Observation[]> {
    try {
      const res = await fetch(`${API_BASE}/observations`);
      if (!res.ok) throw new Error('Failed to fetch observations from server');
      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) throw new Error('Empty');
      return data;
    } catch {
      return clientOceanEngine.getObservations();
    }
  },

  async getGliders(): Promise<GliderMission[]> {
    try {
      const res = await fetch(`${API_BASE}/gliders`);
      if (!res.ok) throw new Error('Failed to fetch gliders from server');
      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) throw new Error('Empty');
      return data;
    } catch {
      return clientOceanEngine.getGliders();
    }
  },

  async ingestGlider(payload: any): Promise<{ status: string; mission?: GliderMission }> {
    try {
      const res = await fetch(`${API_BASE}/gliders/ingest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed to ingest glider on server');
      return await res.json();
    } catch {
      return clientOceanEngine.ingestGlider(payload);
    }
  },

  async getComparison(obsId: string, variable: string = 'temperature'): Promise<ModelComparison> {
    try {
      const res = await fetch(`${API_BASE}/compare?obs_id=${encodeURIComponent(obsId)}&variable=${variable}`);
      if (!res.ok) throw new Error(`Failed to compare observation on server`);
      return await res.json();
    } catch {
      return clientOceanEngine.getComparison(obsId, variable);
    }
  },

  async getDataSources(): Promise<DataSourceItem[]> {
    try {
      const res = await fetch(`${API_BASE}/datasources`);
      if (!res.ok) throw new Error('Failed to fetch data sources from server');
      return await res.json();
    } catch {
      return clientOceanEngine.getDataSources();
    }
  }
};
