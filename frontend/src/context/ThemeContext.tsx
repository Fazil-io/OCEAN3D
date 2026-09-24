import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const isManual = localStorage.getItem('ocean3d_theme_user_selected');
      const saved = localStorage.getItem('ocean3d_theme');
      if (isManual === 'true' && (saved === 'dark' || saved === 'light')) {
        return saved;
      }
      return 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ocean3d_theme', theme);
    } catch (e) {}
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('ocean3d_theme_user_selected', 'true');
        localStorage.setItem('ocean3d_theme', next);
      } catch (e) {}
      return next;
    });
  };

  const setTheme = (t: Theme) => {
    try {
      localStorage.setItem('ocean3d_theme_user_selected', 'true');
      localStorage.setItem('ocean3d_theme', t);
    } catch (e) {}
    setThemeState(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
