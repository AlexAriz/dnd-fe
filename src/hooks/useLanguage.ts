import { useEffect, useState } from "react";
import intl from "react-intl-universal";
import { LANGUAGES, LOCALES } from "../constants/language";
import type { Languages } from "../types/language";

const useLanguage = () => {
  const [locale, setLocale] = useState<Languages>(LANGUAGES.EN);
  const [localeLoaded, setLocaleLoaded] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      await intl.init({
        locales: LOCALES,
        currentLocale: locale,
      });
      setLocaleLoaded(true);
    };
    init();
  }, [locale]);

  const changeLocale = (newLocale: Languages) => {
    setLocaleLoaded(false);
    setLocale(newLocale);
  };

  return {
    locale,
    changeLocale,
    localeLoaded,
  };
};

export default useLanguage;
