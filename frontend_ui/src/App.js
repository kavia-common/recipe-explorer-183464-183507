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
