import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// PUBLIC_INTERFACE
export function getEnvConfig() {
  /** Returns environment configuration from process.env. */
  return {
    apiBase: process.env.REACT_APP_API_BASE,
    backendUrl: process.env.REACT_APP_BACKEND_URL,
    frontendUrl: process.env.REACT_APP_FRONTEND_URL,
    wsUrl: process.env.REACT_APP_WS_URL,
    nodeEnv: process.env.REACT_APP_NODE_ENV,
    port: process.env.REACT_APP_PORT,
    logLevel: process.env.REACT_APP_LOG_LEVEL,
    healthPath: process.env.REACT_APP_HEALTHCHECK_PATH,
    featureFlags: process.env.REACT_APP_FEATURE_FLAGS,
    experiments: process.env.REACT_APP_EXPERIMENTS_ENABLED
  };
}

function Home() {
  const env = getEnvConfig();
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial", padding: 24 }}>
      <header style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <h1 style={{ margin: 0 }}>Recipe Explorer</h1>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main style={{ marginTop: 24 }}>
        <p>Welcome! This UI is ready. Dependencies are updated to latest compatible versions.</p>
        <section style={{ marginTop: 16, padding: 12, border: "1px solid #e5e7eb", borderRadius: 8 }}>
          <h3 style={{ marginTop: 0 }}>Environment</h3>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", background: "#f9fafb", padding: 12, borderRadius: 6 }}>
{JSON.stringify(env, null, 2)}
          </pre>
        </section>
      </main>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 24 }}>
      <h2>About</h2>
      <p>A modern, minimal React scaffold to support browsing and searching recipes.</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
