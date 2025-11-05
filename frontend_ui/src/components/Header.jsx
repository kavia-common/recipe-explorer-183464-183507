import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="searchbar" role="search" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', width: '100%' }}>
        <span className="search-icon" aria-hidden>🔎</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes by title, ingredient, or tag..."
          className="search-input"
          aria-label="Search recipes"
        />
        {/* Link to pixel-locked Sign In screen */}
        <Link to="/sign-in" className="btn secondary" style={{ whiteSpace: 'nowrap' }} aria-label="Go to Sign In">
          Sign In
        </Link>
      </div>
    </>
  );
}

export default Header;
