import React, { useState } from "react";
import {
  Compass,
  Waves,
  Activity,
  Database,
  Info,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  Menu,
  X
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface NavbarProps {
  activeTab: "landing" | "explorer" | "observations" | "datasources" | "about";
  setActiveTab: (tab: "landing" | "explorer" | "observations" | "datasources" | "about") => void;
  lowBandwidth: boolean;
  onToggleLowBandwidth: () => void;
  isDemo: boolean;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  lowBandwidth,
  onToggleLowBandwidth,
  isDemo,
  isFullscreen = false,
  onToggleFullscreen
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // User actual navigation elements
  const navItems = [
    { id: "landing" as const, label: "Overview", icon: Compass },
    { id: "explorer" as const, label: "3D Explorer", icon: Waves },
    { id: "observations" as const, label: "In-Situ Profiles", icon: Activity },
    { id: "datasources" as const, label: "Fleet & Ingestion", icon: Database },
  ];

  const handleTabClick = (tab: "landing" | "explorer" | "observations" | "datasources" | "about") => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`blend-nav sticky top-0 z-50 w-full select-none transition-colors duration-200 border-b backdrop-blur-md ${
        isDark
          ? "bg-[#030711]/95 border-cyan-500/20 text-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.6)]"
          : "bg-white/95 border-slate-200 text-slate-800 shadow-sm"
      }`}
    >
      {/* 1. TOP SUB-TIER: Auxiliary links, project metadata & utilities in Blend style matched to Ocean theme */}
      <div
        className={`px-4 sm:px-8 py-1.5 flex items-center justify-between text-[12px] border-b transition-colors ${
          isDark
            ? "border-white/[0.08] bg-[#070f22]/70 text-slate-400"
            : "border-slate-100 bg-slate-50/90 text-slate-500"
        }`}
      >
        {/* Left Side: System Live & SIH Ocean details */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
            </span>
            <span
              className={`text-[11px] font-mono tracking-wider uppercase font-semibold ${
                isDark ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              System Live
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px]">
            <span className="opacity-40">•</span>
            <span className={isDark ? "text-slate-300 font-mono" : "text-slate-600 font-mono"}>
              SIH 2026
            </span>
            <span className="opacity-40">•</span>
            <span className={isDark ? "text-cyan-400 font-mono font-medium" : "text-cyan-700 font-mono font-semibold"}>
              PS SIH26067
            </span>
            {isDemo && (
              <>
                <span className="opacity-40">•</span>
                <span className={`hidden md:inline ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  INCOIS NetCDF & 118 Gliders Active
                </span>
              </>
            )}
          </div>
        </div>

        {/* Right Side: About, Lite Mode & Theme Toggle */}
        <div className="flex items-center gap-4 sm:gap-6 font-medium text-[12px]">
          {/* About link */}
          <button
            onClick={() => handleTabClick("about")}
            className={`transition-colors cursor-pointer py-0.5 ${
              activeTab === "about"
                ? isDark
                  ? "text-cyan-400 font-semibold"
                  : "text-cyan-600 font-semibold"
                : isDark
                ? "text-slate-400 hover:text-white"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            About
          </button>

          <div className={`h-3 w-[1px] ${isDark ? "bg-white/10" : "bg-slate-200"}`} />

          {/* Lite Mode toggle */}
          <button
            onClick={onToggleLowBandwidth}
            title="Toggle Low Bandwidth Mode"
            className={`flex items-center gap-1.5 transition-colors cursor-pointer text-[11px] ${
              lowBandwidth
                ? isDark
                  ? "text-cyan-400 font-semibold"
                  : "text-cyan-600 font-semibold"
                : isDark
                ? "text-slate-400 hover:text-slate-200"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                lowBandwidth ? "bg-cyan-400 shadow-[0_0_6px_#00f0ff]" : "bg-slate-400"
              }`}
            />
            <span>Lite Mode</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            className={`transition-colors cursor-pointer flex items-center gap-1 text-[11px] ${
              isDark ? "text-slate-400 hover:text-amber-300" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden md:inline text-amber-300">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-sky-600" />
                <span className="hidden md:inline text-slate-700">Dark</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. MAIN TIER: Brand Logo, Nav Elements & Cyan Ocean CTA Button */}
      <div className="px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand: Ocean3D with matching website cyan theme */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleTabClick("landing")}
            className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 via-cyan-500 to-teal-400 p-[1px] shadow-sm shadow-cyan-500/20">
              <div
                className={`w-full h-full rounded-lg flex items-center justify-center transition-colors ${
                  isDark ? "bg-[#030711] group-hover:bg-[#071329]" : "bg-white group-hover:bg-slate-50"
                }`}
              >
                <Waves className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            <div className="flex items-baseline">
              <span
                className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors ${
                  isDark
                    ? "text-white group-hover:text-cyan-300"
                    : "text-slate-900 group-hover:text-cyan-600"
                }`}
              >
                OCEAN<span className={isDark ? "text-cyan-400" : "text-sky-600"}>3D</span>
              </span>
              <span
                className={`hidden sm:inline-block ml-2 text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded border ${
                  isDark
                    ? "text-cyan-400/90 bg-cyan-950/40 border-cyan-800/40"
                    : "text-sky-700 bg-sky-50 border-sky-200"
                }`}
              >
                CodeHydra
              </span>
            </div>
          </button>
        </div>

        {/* User Navigation Elements (Blend CSS layout with Ocean Cyan accents) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 font-semibold text-[14px]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`group relative py-1 transition-colors cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? isDark
                      ? "text-white"
                      : "text-sky-600 font-bold"
                    : isDark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive
                      ? isDark
                        ? "text-cyan-400"
                        : "text-sky-600"
                      : isDark
                      ? "text-slate-400 group-hover:text-cyan-300"
                      : "text-slate-400 group-hover:text-sky-600"
                  }`}
                />
                <span>{item.label}</span>
                {/* Blend CSS Active / Hover underline accent in Ocean Cyan */}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? "w-full bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                        : "w-full bg-sky-600"
                      : isDark
                      ? "w-0 group-hover:w-full bg-cyan-500/40"
                      : "w-0 group-hover:w-full bg-sky-500/40"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right Side: CTA Button in Blend Style with Ocean Theme Cyan Colours */}
        <div className="flex items-center gap-3">
          {onToggleFullscreen ? (
            <button
              onClick={onToggleFullscreen}
              title={isFullscreen ? "Exit Full Screen" : "Full Screen 3D Visualization"}
              className={`group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md font-bold text-[13px] sm:text-[14px] transition-all duration-200 cursor-pointer ${
                isDark
                  ? "bg-cyan-400 text-[#030711] shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-[#38bdf8] hover:shadow-[0_0_28px_rgba(0,240,255,0.6)] hover:scale-[1.02] active:scale-[0.98]"
                  : "bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-md shadow-cyan-500/25 hover:from-sky-500 hover:to-cyan-400 hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className={`w-4 h-4 ${isDark ? "text-[#030711]" : "text-white"}`} />
                  <span>Exit Fullscreen</span>
                </>
              ) : (
                <>
                  <Maximize2 className={`w-4 h-4 ${isDark ? "text-[#030711]" : "text-white"}`} />
                  <span>Full Screen 3D</span>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={() => handleTabClick("explorer")}
              className={`group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md font-bold text-[13px] sm:text-[14px] transition-all duration-200 cursor-pointer ${
                isDark
                  ? "bg-cyan-400 text-[#030711] shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-[#38bdf8] hover:shadow-[0_0_28px_rgba(0,240,255,0.6)] hover:scale-[1.02] active:scale-[0.98]"
                  : "bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-md shadow-cyan-500/25 hover:from-sky-500 hover:to-cyan-400 hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              <Waves className={`w-4 h-4 ${isDark ? "text-[#030711]" : "text-white"}`} />
              <span>Launch 3D</span>
            </button>
          )}

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isDark
                ? "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 3. MOBILE MENU (Drawer in matching Ocean theme color) */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t px-4 py-4 space-y-2 animate-in fade-in duration-150 ${
            isDark ? "border-white/10 bg-[#030711]" : "border-slate-200 bg-white"
          }`}
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2.5 transition-colors ${
                    isActive
                      ? isDark
                        ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                        : "bg-sky-50 text-sky-700 border border-sky-200"
                      : isDark
                      ? "text-slate-200 hover:bg-white/5 hover:text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive
                        ? isDark
                          ? "text-cyan-400"
                          : "text-sky-600"
                        : isDark
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div
            className={`pt-3 border-t flex items-center justify-between text-xs ${
              isDark ? "border-white/10 text-slate-300" : "border-slate-200 text-slate-600"
            }`}
          >
            <button
              onClick={() => handleTabClick("about")}
              className={`py-1 ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}
            >
              About
            </button>
            <button
              onClick={onToggleLowBandwidth}
              className={`py-1 ${lowBandwidth ? (isDark ? "text-cyan-400" : "text-sky-600") : "opacity-70"}`}
            >
              Lite: {lowBandwidth ? "On" : "Off"}
            </button>
            <button
              onClick={toggleTheme}
              className={`py-1 ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}
            >
              Theme: {isDark ? "Dark" : "Light"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
