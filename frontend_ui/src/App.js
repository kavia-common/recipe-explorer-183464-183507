import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
/* Import the tokenized, scoped stylesheet for recipe UI only. The Sign In route uses iframe and its own assets. */
import './tokens-app.css';
import { RecipesProvider } from './context/RecipesContext';
import { UIProvider } from './context/UIContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Home from './pages/Home';
import RecipeDetailPage from './pages/RecipeDetailPage';

/**
 * PUBLIC_INTERFACE
 * App - Root component that sets up providers, routing, and the app shell.
 * Includes ErrorBoundary to catch render errors.
 *
 * Routes:
 * - "/" (default): Pixel-locked Sign In screen via iframe, full-bleed without app header/footer.
 * - "/app": Original recipe UI home (with header/search).
 * - "/recipe/:id": Recipe details page (kept under app shell).
 * - "/sign-in": Alias to the pixel-locked Sign In (same as "/").
 */
function App() {
  // Helper renderers to isolate the pixel-locked sign-in without the app shell header.
  const SignInFrame = (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '1rem 0', minHeight: '100vh' }}>
      <iframe
        title="Sign In"
        src="/assets/sign-in-11-235.html"
        style={{
          width: 375,
          height: 812,
          border: 'none',
          borderRadius: 0,
          boxShadow: 'none',
          background: 'transparent'
        }}
      />
    </div>
  );

  const AppShell = ({ children }) => (
    <>
      {/* Inject shared tokens only for app routes */}
      <link rel="stylesheet" href="/assets/common.css" />
      <header className="header">
        <div className="container header-inner">
          <Header />
        </div>
      </header>
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );

  return (
    <div className="app-shell">
      <ErrorBoundary>
        <UIProvider>
          <RecipesProvider>
            <BrowserRouter>
              <Routes>
                {/* Default route: pixel-perfect Sign In, no header to avoid style interference */}
                <Route path="/" element={SignInFrame} />
                {/* Alias to sign-in */}
                <Route path="/sign-in" element={<Navigate to="/" replace />} />

                {/* Original app under /app */}
                <Route path="/app" element={<AppShell><Home /></AppShell>} />

                {/* Keep recipe details under app shell */}
                <Route path="/recipe/:id" element={<AppShell><RecipeDetailPage /></AppShell>} />

                {/* Legacy root redirect for recipes (optional fallback) */}
                <Route path="/recipes" element={<Navigate to="/app" replace />} />
              </Routes>
            </BrowserRouter>
          </RecipesProvider>
        </UIProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
