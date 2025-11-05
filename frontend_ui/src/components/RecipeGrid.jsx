import React from 'react';
import RecipeCard from './RecipeCard';

/**
 * PUBLIC_INTERFACE
 * RecipeGrid - Responsive grid layout for recipe cards with loading/empty states.
 */
function RecipeGrid({ recipes, isLoading }) {
  if (isLoading) {
    return (
      <div className="state" role="status" aria-live="polite">
        <div className="spinner" />
        Loading recipes...
      </div>
    );
  }
  if (!recipes || recipes.length === 0) {
    return (
      <div className="state" role="status">
        No recipes found. Try a different search.
      </div>
    );
  }
  return (
    <div className="grid" data-testid="recipe-grid">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </div>
  );
}

export default RecipeGrid;
