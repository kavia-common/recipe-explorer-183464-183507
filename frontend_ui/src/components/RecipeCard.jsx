import React from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag';

/**
 * PUBLIC_INTERFACE
 * RecipeCard - Card showing recipe image, title, description, tags, and time.
 */
function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="link" aria-label={`View recipe ${recipe.title}`}>
      <article className="card">
        <div className="card-media">
          <img src={recipe.image} alt={recipe.title} loading="lazy" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{recipe.title}</h3>
          <p className="card-desc">{recipe.description}</p>
          <div className="badges">
            {recipe.tags?.slice(0, 3).map((t) => (
              <Tag key={t} text={t} />
            ))}
            <span className="meta" title="Preparation time">⏱ {recipe.time}m</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default RecipeCard;
