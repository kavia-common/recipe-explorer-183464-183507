import React, { createContext, useContext, useMemo, useState } from 'react';

const UIContext = createContext(undefined);

/**
 * PUBLIC_INTERFACE
 * useUI - Access UI state like theme and handlers.
 */
export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}

/**
 * PUBLIC_INTERFACE
 * UIProvider - Provides simple UI state (theme).
 */
export function UIProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
