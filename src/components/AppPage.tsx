import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Button from "@mui/joy/Button";

import { LANGUAGES } from "../constants/language";
import useLanguage from "../hooks/useLanguage";
import Auth from "../global/auth";
import { CircularProgress } from "@mui/joy";

function AppPage() {
  const { locale, changeLocale } = useLanguage();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await Auth.verifySession();
      setLoading(false);
    };

    init();
  }, []);

  return (
    <>
      {loading ?
        <CircularProgress />
      : <>
          {Object.values(LANGUAGES).map((language) => (
            <Button
              key={language}
              variant={locale === language ? "solid" : "soft"}
              onClick={() => changeLocale(language)}
            >
              {language}
            </Button>
          ))}

          <Outlet />
        </>
      }
    </>
  );
}

export default AppPage;
