import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Logger from "./core/providers/Logger";

import StateProvider from "./core/providers/StateProvider";
import StylesProvider from "Features/Theme/providers/StylesProvider";
import LanguageProvider from "Features/Language/providers/LanguageProvider";
import RoutesProvider from "./core/providers/RoutesProvider";

Logger.init();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateProvider>
      <StylesProvider>
        <LanguageProvider>
          <RoutesProvider />
        </LanguageProvider>
      </StylesProvider>
    </StateProvider>
  </StrictMode>,
);
