import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// PUBLIC_INTERFACE
export default defineConfig(() => {
  /**
   * Vite configuration for the Recipe Explorer frontend.
   * - Binds dev server to 0.0.0.0 so it's reachable from outside the container
   * - Uses PORT env var if provided, else defaults to 3000
   */
  const port = Number(process.env.PORT) || 3000;

  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port,
    },
    preview: {
      host: "0.0.0.0",
      port,
    },
  };
});
