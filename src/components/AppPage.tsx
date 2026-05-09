import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import Button from "@mui/joy/Button";

import { LANGUAGES } from "../constants/language";
import useLanguage from "../hooks/useLanguage";
import Auth from "../auth";
import Dummy from "./Dummy";
import Welcome from "./Welcome";

function AppPage() {
  const navigate = useNavigate();
  const { locale, changeLocale } = useLanguage();

  useEffect(() => {
    const init = async () => {
      const session = await Auth.getSession();

      if (!session.session) {
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

      <Routes>
        <Route index Component={Welcome} />

        <Route path="/dummy" Component={Dummy} />
      </Routes>
    </>
  );
}

export default AppPage;
