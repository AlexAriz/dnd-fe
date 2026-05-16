import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
  server: {
    host: "local.brain-fe.com",
    port: 5173,
  },
  resolve: {
    alias: {
      Components: resolve(__dirname, "./src/components"),
      Constants: resolve(__dirname, "./src/constants"),
      Global: resolve(__dirname, "./src/global"),
      Hooks: resolve(__dirname, "./src/hooks"),
      Locales: resolve(__dirname, "./src/locales"),
      State: resolve(__dirname, "./src/state"),
      Types: resolve(__dirname, "./src/types"),
    },
  },
});
