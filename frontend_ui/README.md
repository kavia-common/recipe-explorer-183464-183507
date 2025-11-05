# Recipe Explorer Frontend (React)

A modern, responsive React app that lets users browse, search, and view detailed recipes. Styled using the Ocean Professional theme with blue and amber accents.

## Features

- Responsive grid of recipe cards (2–4 columns based on viewport)
- Real-time client-side search by title, ingredient, or tag
- Detailed recipe page with image, time, servings, ingredients, and steps
- Reusable components: Header, RecipeCard, RecipeGrid, RecipeDetail, Tag, Loading/Empty states
- ErrorBoundary to catch render errors with a friendly message
- Local mock data layer (no backend required) with seamless future API switch
- Routing via react-router-dom for `/`, `/recipe/:id`, and `/sign-in`
- Ocean Professional theme using CSS variables and clean, modern UI

## Getting Started

From this directory:

```bash
npm install
npm start
```

Open http://localhost:3000 to view it in your browser.

## Sign In Screen (Pixel-Locked)

- Route: `http://localhost:3000/sign-in`
- This screen is rendered via a static HTML file served from `/assets/sign-in-11-235.html` and embedded in the app using an iframe to ensure pixel-perfect fidelity to Figma.
- All DOM structure, class names, and CSS variables are preserved as generated. Do not modify `assets/common.css` or `assets/sign-in-11-235.css`.
- Images are referenced under `assets/figmaimages/` and paths remain unchanged.

## Environment Variables

The app uses environment variables for future backend configuration. Copy `.env.example` to `.env` and adjust as needed.

- `REACT_APP_API_BASE` – Base URL for backend API (not used yet; reserved for future integration)
- Other optional variables are listed in `.env.example`.

## Project Structure

- `src/data/mockRecipes.js` – Local mock data and helper functions
- `src/context/RecipesContext.js` – Recipes state and search filtering (React Context)
- `src/context/UIContext.js` – Theme and UI-level state (extensible)
- `src/components/` – Reusable UI components
- `src/pages/` – Route pages: Home and RecipeDetailPage
- `src/App.js` – Routing and app shell
- `src/App.css` – Theme and component styles
- `assets/` – Static, generated Figma assets for the Sign In screen (HTML, CSS, JS, images)

## Design & Theme

- Primary: `#2563EB`
- Secondary: `#F59E0B`
- Modern rounded corners, subtle shadows, and smooth focus rings

## Switching to a Real API (Future)

Replace the mock loader in `RecipesContext` with a fetch call:

```js
const base = process.env.REACT_APP_API_BASE;
const res = await fetch(`${base}/recipes`);
const data = await res.json();
setRecipes(data);
```

## Scripts

- `npm start` – Start dev server
- `npm test` – Run tests
- `npm run build` – Production build

