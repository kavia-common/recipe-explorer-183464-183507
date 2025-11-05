import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipesContext';
import { getRecipeById } from '../data/mockRecipes';
import RecipeDetail from '../components/RecipeDetail';

/**
 * PUBLIC_INTERFACE
 * RecipeDetailPage - Page for /recipe/:id showing a single recipe's details.
 */
function RecipeDetailPage() {
  const { id } = useParams();
  const { recipes, isLoading } = useRecipes();

  // For robustness, use either context data or fallback to local getter
  const recipe = useMemo(() => {
    return recipes.find(r => r.id === String(id)) || getRecipeById(id);
  }, [id, recipes]);

  if (isLoading && !recipe) {
    return (
      <div className="state" role="status">
        <div className="spinner" />
        Loading recipe...
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="state" role="alert">
        Recipe not found.
        <div style={{ marginTop: '.75rem' }}>
          <Link className="btn" to="/">← Back to recipes</Link>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div style={{ margin: '1rem 0' }}>
        <Link className="btn" to="/">← Back</Link>
      </div>
      <RecipeDetail recipe={recipe} />
    </section>
  );
}

export default RecipeDetailPage;
