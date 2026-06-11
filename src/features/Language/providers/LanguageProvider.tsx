import { IntlProvider } from "react-intl";

import { useAppSelector } from "Hooks/state";
import { languageSelectors } from "State/Language";

function LanguageProvider({ children }: React.PropsWithChildren) {
  const language = useAppSelector(languageSelectors.selectLanguage);
  const messages = useAppSelector(languageSelectors.selectMessages);

  return (
    <IntlProvider locale={language} messages={messages}>
      {children}
    </IntlProvider>
  );
}

export default LanguageProvider;
