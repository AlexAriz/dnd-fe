import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Button from "@mui/joy/Button";

import { LANGUAGES } from "../constants/language";
import useLanguage from "../hooks/useLanguage";
import Auth from "../global/auth";

function AppPage() {
  const navigate = useNavigate();
  const { locale, changeLocale } = useLanguage();

  useEffect(() => {
    const init = async () => {
      const session = await Auth.getSession();

      if (!session?.session) {
        navigate("/login");
      }
    };

    init();
  }, [navigate]);

  return (
    <>
      {Object.values(LANGUAGES).map((language) => (
        <Button key={language} variant={locale === language ? "solid" : "soft"} onClick={() => changeLocale(language)}>
          {language}
        </Button>
      ))}

      <Outlet />
    </>
  );
}

export default AppPage;
