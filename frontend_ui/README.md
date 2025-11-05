# Recipe Explorer Frontend (React)

A modern, responsive React app that lets users browse, search, and view detailed recipes. Styled using the Ocean Professional theme with blue and amber accents.

## Features

- Responsive grid of recipe cards (2–4 columns based on viewport)
- Real-time client-side search by title, ingredient, or tag
- Detailed recipe page with image, time, servings, ingredients, and steps
- Reusable components: Header, RecipeCard, RecipeGrid, RecipeDetail, Tag, Loading/Empty states
- ErrorBoundary to catch render errors with a friendly message
- Local mock data layer (no backend required) with seamless future API switch
- Routing via react-router-dom for `/` (Sign In), `/app` (recipes home), `/recipe/:id` (details)
- Ocean Professional theme using CSS variables and clean, modern UI

## Getting Started

From this directory:

```bash
npm install
npm start
```

Open http://localhost:3000 to view it in your browser.

## Navigation

- `/` – Sign In (pixel-perfect Figma screen rendered via iframe; no app header or footer injected)
- `/app` – Recipe Explorer (original app home with header and search)
- `/recipe/:id` – Recipe detail page
- `/sign-in` – Alias that redirects to `/`

## Sign In Screen (Pixel-Locked)

- Served from `/assets/sign-in-11-235.html` inside an iframe to preserve exact DOM/CSS.
- Do not modify `assets/common.css` or `assets/sign-in-11-235.css`.
- Assets are served from `/assets` and images remain under `/assets/figmaimages/`.
- The Sign In route is rendered full-bleed without the app shell header/footer to avoid CSS interference.

## Shared Design Tokens (New)

The recipe UI now consumes shared tokens from `assets/common.css`. These tokens are applied only to the recipe routes (`/app`, `/recipe/:id`) by importing `src/tokens-app.css` in `App.js`. All styles are scoped under `.app-shell` to avoid affecting the pixel-locked Sign In iframe.

- Token import: `@import "/assets/common.css";`
- Scope: `.app-shell { ... }`
- Components and pages have been refactored to use tokenized colors, spacing, radii, shadows, and typography scale.

To adjust the theme, update values in `assets/common.css` (for shared tokens) or adjust the semantic mappings inside `.app-shell` in `src/tokens-app.css` for the recipe UI.

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
- `src/tokens-app.css` – Scoped token-based styles for the recipe UI (imports `/assets/common.css`)
- `assets/` – Static, generated Figma assets for the Sign In screen (HTML, CSS, JS, images)

## Design & Theme

- Primary: Ocean Blue (`var(--color-1976d2)`)
- Secondary: Amber (`var(--color-ff9c00)`)
- Modern rounded corners, subtle shadows, and smooth focus rings
- Backgrounds and gradients aligned to tokens; Ocean Professional theme mapping preserved

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
