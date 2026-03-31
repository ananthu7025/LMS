'use client';
import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';

/* ──────────────────────────────────────────────────────────
 *  Theme types
 * ────────────────────────────────────────────────────────── */
type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  dark: string;
  black: string;
  white: string;
  cardColor: string;
  bodyBg: string;
  bodyColor: string;
  headingColor: string;
  textMuted: string;
  borderColor: string;
}

interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setTheme: (t: ThemeMode) => void;
  isSmallScreen: boolean;
  colors: ThemeColors;
  getCssVar: (name: string, raw?: boolean) => string;
}

const LAYOUT_BREAKPOINT = 1200;
const STORAGE_KEY = 'lexed-theme';
const CSS_PREFIX = 'bs-';

/* ──────────────────────────────────────────────────────────
 *  Helpers (replaces helpers.js getCssVar + config.js)
 * ────────────────────────────────────────────────────────── */
function getCssVar(name: string, raw = false): string {
  if (typeof window === 'undefined') return '';
  if (raw) {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(`--${CSS_PREFIX}${name}`)
      .trim();
  }
  return `var(--${CSS_PREFIX}${name})`;
}

function readColors(): ThemeColors {
  return {
    primary: getCssVar('primary'),
    secondary: getCssVar('secondary'),
    success: getCssVar('success'),
    info: getCssVar('info'),
    warning: getCssVar('warning'),
    danger: getCssVar('danger'),
    dark: getCssVar('dark'),
    black: getCssVar('pure-black'),
    white: getCssVar('white'),
    cardColor: getCssVar('paper-bg'),
    bodyBg: getCssVar('body-bg'),
    bodyColor: getCssVar('body-color'),
    headingColor: getCssVar('heading-color'),
    textMuted: getCssVar('secondary-color'),
    borderColor: getCssVar('border-color'),
  };
}

function resolveTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'system') {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return mode;
}

/* ──────────────────────────────────────────────────────────
 *  Context
 * ────────────────────────────────────────────────────────── */
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('light');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [colors, setColors] = useState<ThemeColors>(readColors);

  // Initialise from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored) setThemeState(stored);
  }, []);

  // Apply theme to <html> data-bs-theme and persist
  const setTheme = useCallback((t: ThemeMode) => {
    setThemeState(t);
    localStorage.setItem(STORAGE_KEY, t);
    document.documentElement.setAttribute('data-bs-theme', resolveTheme(t));
  }, []);

  // Sync on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', resolveTheme(theme));
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (theme === 'system') {
        document.documentElement.setAttribute('data-bs-theme', resolveTheme('system'));
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  // Responsive breakpoint
  useEffect(() => {
    const check = () => setIsSmallScreen(window.innerWidth < LAYOUT_BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Re-read CSS vars after theme change
  useEffect(() => {
    const timer = setTimeout(() => setColors(readColors()), 50);
    return () => clearTimeout(timer);
  }, [theme]);

  const resolvedTheme = resolveTheme(theme);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, isSmallScreen, colors, getCssVar }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
}
