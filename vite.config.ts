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
      Components: resolve(__dirname, "./src/core/components"),
      Constants: resolve(__dirname, "./src/core/constants"),
      Context: resolve(__dirname, "./src/core/contexts"),
      Features: resolve(__dirname, "./src/features"),
      Hooks: resolve(__dirname, "./src/core/hooks"),
      Layouts: resolve(__dirname, "./src/core/layouts"),
      Libs: resolve(__dirname, "./src/core/libs"),
      Providers: resolve(__dirname, "./src/core/providers"),
      Rules: resolve(__dirname, "./src/core/rules"),
      State: resolve(__dirname, "./src/core/store"),
      Types: resolve(__dirname, "./src/core/types"),
    },
  },
});
