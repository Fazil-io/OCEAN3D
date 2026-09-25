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
      // Clean up legacy persistent localStorage keys so users/evaluators are never stuck in dark mode
      localStorage.removeItem('ocean3d_theme_user_selected');
      localStorage.removeItem('ocean3d_theme');

      // Only check active tab/session storage if the user explicitly switched theme during current session
      const sessionTheme = sessionStorage.getItem('ocean3d_session_theme');
      if (sessionTheme === 'dark' || sessionTheme === 'light') {
        return sessionTheme;
      }
      return 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
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
        sessionStorage.setItem('ocean3d_session_theme', next);
      } catch (e) {}
      return next;
    });
  };

  const setTheme = (t: Theme) => {
    try {
      sessionStorage.setItem('ocean3d_session_theme', t);
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
