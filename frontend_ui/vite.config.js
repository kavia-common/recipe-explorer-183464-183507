import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// PUBLIC_INTERFACE
export default defineConfig(() => {
  /**
   * Vite configuration for the Recipe Explorer frontend.
   * - Binds dev server to 0.0.0.0 so it's reachable from outside the container
   * - Uses PORT env var if provided, else defaults to 3000
   * - Allows preview/dev access from the hosted preview domain to prevent "Blocked host" errors
   */
  const port = Number(process.env.PORT) || 3000;

  // Hostname to allow in preview/dev environments
  const previewHost = "vscode-internal-14301-beta.beta01.cloud.kavia.ai";

  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port,
      // Allow usage of any free port if the default is occupied in shared environments
      strictPort: false,
      // Permit external preview host
      allowedHosts: [previewHost],
    },
    preview: {
      host: "0.0.0.0",
      port,
      // Ensure preview also allows the external host
      allowedHosts: [previewHost],
    },
  };
});
