import React from 'react';
import Tag from './Tag';

/**
 * PUBLIC_INTERFACE
 * RecipeDetail - Detailed view of a single recipe.
 */
function RecipeDetail({ recipe }) {
  if (!recipe) return null;

  return (
    <div className="detail">
      <section className="detail-hero">
        <img src={recipe.image} alt={recipe.title} />
      </section>
      <section className="detail-body">
        <h2 style={{ marginTop: 0 }}>{recipe.title}</h2>
        <div className="meta" aria-label="Recipe meta">
          <span>⏱ {recipe.time} minutes</span>
          <span>•</span>
          <span>🍽 Serves {recipe.servings}</span>
        </div>
        <div className="badges" style={{ marginTop: '.6rem' }}>
          {recipe.tags?.map((t, idx) => (
            <Tag key={t} text={t} color={idx % 2 ? 'amber' : 'blue'} />
          ))}
        </div>

        <div className="divider" />

        <h3 className="section-title">Ingredients</h3>
        <ul className="list">
          {recipe.ingredients?.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <div className="divider" />

        <h3 className="section-title">Preparation</h3>
        <ol className="list">
          {recipe.steps?.map((s, i) => (
            <li key={i} style={{ marginBottom: '.4rem' }}>{s}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
