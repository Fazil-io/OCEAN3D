import React from 'react';
import { ColormapName } from '../../types';
import { generateGradientCss } from '../../utils/colormaps';
import { useTheme } from '../../context/ThemeContext';

interface ColorbarProps {
  variable: string;
  units: string;
  minVal: number;
  maxVal: number;
  colormap: ColormapName;
}

export const Colorbar: React.FC<ColorbarProps> = ({
  variable,
  units,
  minVal,
  maxVal,
  colormap
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const gradient = generateGradientCss(colormap);

  const steps = 4;
  const tickLabels: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const val = minVal + (i / steps) * (maxVal - minVal);
    tickLabels.push(val.toFixed(1));
  }

  return (
    <div className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-xl border backdrop-blur-md transition-colors font-serif shadow-md select-none ${
      isDark
        ? 'bg-slate-950/85 border-slate-800/80 text-slate-200'
        : 'bg-white/95 border-slate-300 text-slate-900 shadow-md'
    }`}>
      <div className="flex items-center justify-between mb-1 text-[11px] sm:text-xs font-semibold">
        <span className="capitalize text-cyan-600 dark:text-cyan-400 font-bold truncate max-w-[90px] sm:max-w-none">{variable}</span>
        <span className="opacity-80 text-[10px] sm:text-[11px] font-normal">[{units}]</span>
      </div>

      <div
        className="h-2.5 sm:h-3.5 w-full rounded-md shadow-inner border border-black/30"
        style={{ background: gradient }}
      />

      <div className="flex justify-between mt-0.5 sm:mt-1 text-[9px] sm:text-[11px] font-semibold opacity-90 font-mono">
        <span>{tickLabels[0]}</span>
        <span className="hidden xs:inline sm:inline">{tickLabels[2]}</span>
        <span>{tickLabels[4]}</span>
      </div>
    </div>
  );
};
