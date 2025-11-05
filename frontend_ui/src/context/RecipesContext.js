import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { getRecipes } from '../data/mockRecipes';

const RecipesContext = createContext(undefined);

/**
 * PUBLIC_INTERFACE
 * useRecipes - Hook to access recipes context: recipes, query, setQuery, filteredRecipes, isLoading, error.
 */
export function useRecipes() {
  const ctx = useContext(RecipesContext);
  if (!ctx) {
    throw new Error('useRecipes must be used within RecipesProvider');
  }
  return ctx;
}

/**
 * PUBLIC_INTERFACE
 * RecipesProvider - Provides recipes data and client-side filtering by search query.
 */
export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetch (from mock data for now)
  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        setIsLoading(true);
        // Placeholder for future API:
        // const base = process.env.REACT_APP_API_BASE;
        // const res = await fetch(`${base}/recipes`, { signal: controller.signal });
        // const data = await res.json();
        const data = getRecipes();
        setRecipes(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    load();
    return () => controller.abort();
  }, []);

  const filteredRecipes = useMemo(() => {
    if (!query) return recipes;
    const q = query.trim().toLowerCase();
    return recipes.filter(r => {
      const inTitle = r.title.toLowerCase().includes(q);
      const inDesc = r.description?.toLowerCase().includes(q);
      const inTags = (r.tags || []).some(t => t.toLowerCase().includes(q));
      const inIngredients = (r.ingredients || []).some(i => i.toLowerCase().includes(q));
      return inTitle || inDesc || inTags || inIngredients;
    });
  }, [recipes, query]);

  const value = useMemo(() => ({
    recipes,
    query,
    setQuery,
    filteredRecipes,
    isLoading,
    error
  }), [recipes, query, filteredRecipes, isLoading, error]);

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
}
