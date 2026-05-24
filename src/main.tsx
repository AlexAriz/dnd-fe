import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Logger from "Libs/Logger";

import StateProvider from "Providers/StateProvider";
import StylesProvider from "Features/Theme/providers/StylesProvider";
import LanguageProvider from "Features/Language/providers/LanguageProvider";
import RoutesProvider from "Providers/RoutesProvider";
import AuthProvider from "Providers/AuthProvider";

Logger.init();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateProvider>
      <StylesProvider>
        <LanguageProvider>
          <AuthProvider>
            <RoutesProvider />
          </AuthProvider>
        </LanguageProvider>
      </StylesProvider>
    </StateProvider>
  </StrictMode>,
);
