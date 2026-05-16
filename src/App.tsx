import { RouterProvider } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";

import router from "Global/router";
import { IntlProvider } from "react-intl";
import { useAppSelector } from "Hooks/state";
import { languageSelectors } from "State/language";

function App() {
  const language = useAppSelector(languageSelectors.selectLanguage);
  const messages = useAppSelector(languageSelectors.selectMessages);

  return (
    <IntlProvider locale={language} messages={messages}>
      <CssBaseline />
      <RouterProvider router={router} />
    </IntlProvider>
  );
}

export default App;
