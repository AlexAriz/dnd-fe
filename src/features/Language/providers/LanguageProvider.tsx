import { IntlProvider } from "react-intl";
import { languageSelectors } from "../store/language";
import { useAppSelector } from "Hooks/state";

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
