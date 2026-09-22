import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { ProfileMeasurement } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProfileChartProps {
  profiles: ProfileMeasurement[];
  variable: 'temperature' | 'salinity' | 'oxygen' | 'chlorophyll';
  title?: string;
}

export const ProfileChart: React.FC<ProfileChartProps> = ({
  profiles,
  variable,
  title
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const varConfig: Record<string, { label: string; unit: string; color: string }> = {
    temperature: { label: 'Temperature', unit: '°C', color: '#f97316' },
    salinity: { label: 'Salinity', unit: 'PSU', color: '#06b6d4' },
    oxygen: { label: 'Dissolved Oxygen', unit: 'mg/L', color: '#10b981' },
    chlorophyll: { label: 'Chlorophyll', unit: 'mg/m³', color: '#a855f7' }
  };

  const currentVar = varConfig[variable] || varConfig.temperature;
  const chartData = [...(profiles || [])].sort((a, b) => a.depth - b.depth);

  return (
    <div className={`w-full h-full flex flex-col p-3 rounded-lg border transition-colors ${
      isDark ? 'bg-slate-900/60 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800 shadow-xs'
    }`}>
      {title && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold font-mono tracking-wide">{title}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono">
            {currentVar.label} [{currentVar.unit}]
          </span>
        </div>
      )}

      <div className="flex-1 w-full min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={isDark ? '#1e293b' : '#e2e8f0'}
            />
            <XAxis
              type="number"
              domain={['auto', 'auto']}
              stroke={isDark ? '#94a3b8' : '#64748b'}
              fontSize={10}
              tickFormatter={(v) => Number(v).toFixed(1)}
            />
            <YAxis
              dataKey="depth"
              type="number"
              reversed
              stroke={isDark ? '#94a3b8' : '#64748b'}
              fontSize={10}
              label={{
                value: 'Depth (m)',
                angle: -90,
                position: 'insideLeft',
                fill: isDark ? '#94a3b8' : '#64748b',
                fontSize: 10
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? '#0b1329' : '#ffffff',
                borderColor: isDark ? '#38bdf8' : '#0284c7',
                borderRadius: '8px',
                fontSize: '11px',
                color: isDark ? '#f8fafc' : '#0f172a',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
              formatter={(value: any) => [`${Number(value).toFixed(2)} ${currentVar.unit}`, currentVar.label]}
              labelFormatter={(label) => `Depth: ${label} m`}
            />
            <Line
              type="monotone"
              dataKey={variable}
              stroke={currentVar.color}
              strokeWidth={2.5}
              dot={{ r: 3, fill: currentVar.color }}
              activeDot={{ r: 5, stroke: '#ffffff', strokeWidth: 1.5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
