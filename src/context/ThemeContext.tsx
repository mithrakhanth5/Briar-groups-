'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductWorldTheme } from '@/types';

interface ThemeTokens {
  accent: string;
  accentGlow: string;
  bgPrimary: string;
  bgSecondary: string;
  hairline: string;
  name: string;
}

export const THEME_PRESETS: Record<ProductWorldTheme, ThemeTokens> = {
  'heritage-ink': {
    accent: '#C5A880',
    accentGlow: 'rgba(197, 168, 128, 0.35)',
    bgPrimary: '#080d0a',
    bgSecondary: '#0f1712',
    hairline: 'rgba(197, 168, 128, 0.2)',
    name: 'Heritage Ink',
  },
  malanad: {
    accent: '#10b981',
    accentGlow: 'rgba(16, 185, 129, 0.45)',
    bgPrimary: '#03140d',
    bgSecondary: '#062015',
    hairline: 'rgba(16, 185, 129, 0.25)',
    name: 'Malanad Rainforest',
  },
  megamalai: {
    accent: '#f59e0b',
    accentGlow: 'rgba(245, 158, 11, 0.45)',
    bgPrimary: '#120e05',
    bgSecondary: '#1d1709',
    hairline: 'rgba(245, 158, 11, 0.25)',
    name: 'Megamalai Golden Cloud',
  },
  rockwood: {
    accent: '#818cf8',
    accentGlow: 'rgba(129, 140, 248, 0.45)',
    bgPrimary: '#090c17',
    bgSecondary: '#111627',
    hairline: 'rgba(129, 140, 248, 0.25)',
    name: 'Rockwood Blue Mountain',
  },
  talayar: {
    accent: '#ea580c',
    accentGlow: 'rgba(234, 88, 12, 0.45)',
    bgPrimary: '#140805',
    bgSecondary: '#210d09',
    hairline: 'rgba(234, 88, 12, 0.25)',
    name: 'Talayar Sunrise Copper',
  },
  'misty-black': {
    accent: '#d97706',
    accentGlow: 'rgba(217, 119, 6, 0.45)',
    bgPrimary: '#0e0906',
    bgSecondary: '#1a100b',
    hairline: 'rgba(217, 119, 6, 0.25)',
    name: 'Misty Black Mahogany',
  },
  'misty-green': {
    accent: '#34d399',
    accentGlow: 'rgba(52, 211, 153, 0.45)',
    bgPrimary: '#04110a',
    bgSecondary: '#091c12',
    hairline: 'rgba(52, 211, 153, 0.25)',
    name: 'Misty Green Dew',
  },
};

interface ThemeContextType {
  activeTheme: ProductWorldTheme;
  setTheme: (theme: ProductWorldTheme) => void;
  tokens: ThemeTokens;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<ProductWorldTheme>('heritage-ink');

  const tokens = THEME_PRESETS[activeTheme] || THEME_PRESETS['heritage-ink'];

  useEffect(() => {
    // Inject dynamic CSS variables into document root with smooth CSS transition
    const root = document.documentElement;
    root.style.setProperty('--theme-accent', tokens.accent);
    root.style.setProperty('--theme-accent-glow', tokens.accentGlow);
    root.style.setProperty('--theme-bg-primary', tokens.bgPrimary);
    root.style.setProperty('--theme-bg-secondary', tokens.bgSecondary);
    root.style.setProperty('--theme-hairline', tokens.hairline);
  }, [tokens]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setTheme: setActiveTheme, tokens }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
