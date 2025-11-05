import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
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
 */
function App() {
  return (
    <div className="app-shell">
      <ErrorBoundary>
        <UIProvider>
          <RecipesProvider>
            <BrowserRouter>
              <header className="header">
                <div className="container header-inner">
                  <Header />
                </div>
              </header>
              <main>
                <div className="container">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipe/:id" element={<RecipeDetailPage />} />
                    {/*
                      PUBLIC_INTERFACE
                      Static Sign In page: rendered via iframe to keep HTML/CSS pixel-perfect and isolated.
                      The /assets folder is served by the dev server as static files from the repository root.
                    */}
                    <Route
                      path="/sign-in"
                      element={
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                          <iframe
                            title="Sign In"
                            src="/assets/sign-in-11-235.html"
                            style={{
                              width: 375,
                              height: 812,
                              border: '1px solid rgba(0,0,0,0.08)',
                              borderRadius: 12,
                              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                              background: 'white'
                            }}
                          />
                        </div>
                      }
                    />
                  </Routes>
                </div>
              </main>
            </BrowserRouter>
          </RecipesProvider>
        </UIProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
