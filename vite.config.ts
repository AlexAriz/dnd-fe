import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      Components: resolve(import.meta.dirname, "./src/core/components"),
      Constants: resolve(import.meta.dirname, "./src/core/constants"),
      Context: resolve(import.meta.dirname, "./src/core/contexts"),
      Features: resolve(import.meta.dirname, "./src/features"),
      Hooks: resolve(import.meta.dirname, "./src/core/hooks"),
      Layouts: resolve(import.meta.dirname, "./src/core/layouts"),
      Libs: resolve(import.meta.dirname, "./src/core/libs"),
      Providers: resolve(import.meta.dirname, "./src/core/providers"),
      Rules: resolve(import.meta.dirname, "./src/core/rules"),
      State: resolve(import.meta.dirname, "./src/core/store"),
      Types: resolve(import.meta.dirname, "./src/core/types"),
    },
  },
});
