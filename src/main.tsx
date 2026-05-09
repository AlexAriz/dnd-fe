import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/inter";

import App from "./App.tsx";
import Logger from "./global/logger.ts";

Logger.init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
