import React from 'react';
import { useRecipes } from '../context/RecipesContext';
import RecipeGrid from '../components/RecipeGrid';

/**
 * PUBLIC_INTERFACE
 * Home - Displays search results in a grid of recipe cards.
 */
function Home() {
  const { filteredRecipes, isLoading, error } = useRecipes();

  if (error) {
    return (
      <div className="state" role="alert">
        Failed to load recipes.
      </div>
    );
  }

  return (
    <section>
      <div style={{ marginTop: '1rem' }} className="helper">
        Tip: Try searching "salmon", "vegan" or "pizza".
      </div>
      <RecipeGrid recipes={filteredRecipes} isLoading={isLoading} />
    </section>
  );
}

export default Home;
