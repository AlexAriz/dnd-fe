import { IntlProvider } from "react-intl";
import en from "../locales/en.json";

function LanguageProvider({ children }: React.PropsWithChildren) {
  return (
    <IntlProvider locale="en" messages={en}>
      {children}
    </IntlProvider>
  );
}

export default LanguageProvider;
