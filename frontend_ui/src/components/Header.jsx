import React from 'react';
import { useRecipes } from '../context/RecipesContext';

/**
 * PUBLIC_INTERFACE
 * Header - Displays brand and a global search input that filters recipes in real-time.
 */
function Header() {
  const { query, setQuery } = useRecipes();

  return (
    <>
      <div className="brand">
        <div className="brand-logo" aria-hidden>🍽️</div>
        <h1 className="brand-title">Recipe Explorer</h1>
      </div>
      <div className="searchbar" role="search">
        <span className="search-icon" aria-hidden>🔎</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes by title, ingredient, or tag..."
          className="search-input"
          aria-label="Search recipes"
        />
      </div>
    </>
  );
}

export default Header;
