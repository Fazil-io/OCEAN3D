import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ModelComparison } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ComparisonChartProps {
  comparison: ModelComparison;
  title?: string;
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({
  comparison,
  title = 'Numerical Model vs. In-Situ Observation'
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const chartData = (comparison.profile_comparison || []).map((pt) => ({
    depth: pt.depth,
    obs: pt.obs_val,
    model: pt.model_val,
    diff: pt.diff
  })).sort((a, b) => a.depth - b.depth);

  const maxDepth = chartData.length > 0 ? Math.max(...chartData.map(d => d.depth)) : 2000;
  const allVals = chartData.flatMap(d => [d.obs, d.model]).filter(v => v != null);
  const minVal = allVals.length > 0 ? Math.min(...allVals) : 0;
  const maxVal = allVals.length > 0 ? Math.max(...allVals) : 35;
  const padding = (maxVal - minVal) * 0.05 || 0.5;

  return (
    <div className={`w-full h-full flex flex-col p-3 rounded-lg border transition-colors ${
      isDark ? 'bg-slate-900/60 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800 shadow-xs'
    }`}>
      {/* Header & Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span className="text-xs font-semibold font-mono tracking-wide">{title}</span>
        <div className="flex items-center gap-2 font-mono text-[10px]">
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            RMSE: {comparison.rmse.toFixed(3)} {comparison.units}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            Bias: {comparison.mean_bias > 0 ? `+${comparison.mean_bias.toFixed(3)}` : comparison.mean_bias.toFixed(3)}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            Δ%: {comparison.percent_difference.toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 w-full min-h-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            layout="vertical"
            margin={{ top: 6, right: 16, left: 8, bottom: 6 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={isDark ? '#1e293b' : '#e2e8f0'}
            />
            {/* X-axis = the variable values (temperature / salinity) */}
            <XAxis
              type="number"
              domain={[minVal - padding, maxVal + padding]}
              stroke={isDark ? '#94a3b8' : '#64748b'}
              fontSize={10}
              tickFormatter={(v) => Number(v).toFixed(1)}
            />
            {/* Y-axis = depth: in SVG coords Y=0 is at TOP, so 0m (surface) renders at top
                and maxDepth renders at bottom — the correct oceanographic convention.
                Do NOT use `reversed` here; it would flip this and put 2000m at top. */}
            <YAxis
              dataKey="depth"
              type="number"
              domain={[0, maxDepth]}
              stroke={isDark ? '#94a3b8' : '#64748b'}
              fontSize={9}
              tickCount={7}
              width={42}
              label={{
                value: 'Depth (m)',
                angle: -90,
                position: 'insideLeft',
                offset: -30,
                fill: isDark ? '#94a3b8' : '#64748b',
                fontSize: 9
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
              formatter={(value: any, name: any) => [
                `${Number(value).toFixed(2)} ${comparison.units}`,
                name === 'obs' ? 'In-Situ Observation' : 'ROMS/HYCOM Model'
              ]}
              labelFormatter={(label) => `Depth: ${label} m`}
            />
            <Legend
              wrapperStyle={{ fontSize: '10px', paddingTop: '4px' }}
              formatter={(val) => (val === 'obs' ? 'In-Situ Sensor' : 'OGCM Model')}
            />
            <Line
              type="monotone"
              dataKey="obs"
              name="obs"
              stroke="#06b6d4"
              strokeWidth={2.5}
              dot={{ r: 3, fill: '#06b6d4' }}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="model"
              name="model"
              stroke="#f43f5e"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={{ r: 2.5, fill: '#f43f5e' }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
