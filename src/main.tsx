import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/inter";

import App from "./App.tsx";
import Logger from "./global/logger.ts";
import { Provider } from "react-redux";
import store from "./state/store.ts";

Logger.init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
