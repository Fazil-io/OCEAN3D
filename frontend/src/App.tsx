import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { LandingPage } from './pages/LandingPage';
import { ExplorerPage } from './pages/ExplorerPage';
import { ObservationsPage } from './pages/ObservationsPage';
import { DataSourcesPage } from './pages/DataSourcesPage';
import { AboutPage } from './pages/AboutPage';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Observation, GliderMission } from './types';

const MainApp: React.FC = () => {
  const getInitialTab = (): 'landing' | 'explorer' | 'observations' | 'datasources' | 'about' => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['landing', 'explorer', 'observations', 'datasources', 'about'].includes(hash)) {
        return hash as any;
      }
    }
    return 'landing';
  };

  const [activeTab, setActiveTab] = useState<'landing' | 'explorer' | 'observations' | 'datasources' | 'about'>(getInitialTab);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['landing', 'explorer', 'observations', 'datasources', 'about'].includes(hash)) {
        setActiveTab(hash as any);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const [lowBandwidth, setLowBandwidth] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [selectedObsToExplore, setSelectedObsToExplore] = useState<Observation | GliderMission | null>(null);
  const { theme } = useTheme();

  const handleToggleFullscreen = () => {
    if (!isFullscreen) {
      setActiveTab('explorer');
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  };

  const handleTabChange = (tab: 'landing' | 'explorer' | 'observations' | 'datasources' | 'about') => {
    setActiveTab(tab);
    if (typeof window !== 'undefined') {
      window.location.hash = tab;
    }
    if (tab !== 'explorer') {
      setIsFullscreen(false);
    }
  };

  return (
    <div className={`h-screen flex flex-col font-serif transition-colors duration-200 overflow-hidden ${
      theme === 'dark' ? 'bg-[#030711] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        lowBandwidth={lowBandwidth}
        onToggleLowBandwidth={() => setLowBandwidth((prev) => !prev)}
        isDemo={true}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      <main className="flex-1 overflow-hidden flex flex-col">
        {activeTab === 'landing' && (
          <LandingPage
            onLaunchExplorer={() => {
              setActiveTab('explorer');
            }}
            onExploreData={() => setActiveTab('datasources')}
          />
        )}

        {activeTab === 'explorer' && (
          <ExplorerPage
            lowBandwidth={lowBandwidth}
            onToggleLowBandwidth={() => setLowBandwidth((prev) => !prev)}
            initialSelectedItem={selectedObsToExplore}
            isFullscreen={isFullscreen}
            onToggleFullscreen={handleToggleFullscreen}
          />
        )}

        {activeTab === 'observations' && (
          <ObservationsPage
            onSelectAndExplore={(obs: Observation | GliderMission) => {
              setSelectedObsToExplore(obs);
              setActiveTab('explorer');
            }}
          />
        )}

        {activeTab === 'datasources' && <DataSourcesPage />}

        {activeTab === 'about' && <AboutPage />}
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;
