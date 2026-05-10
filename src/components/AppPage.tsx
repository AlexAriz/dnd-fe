import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Button from "@mui/joy/Button";

import { LANGUAGES } from "../constants/language";
import useLanguage from "../hooks/useLanguage";
import Auth from "../global/auth";
import Routes from "../constants/routes";
import { useAppDispatch } from "../hooks/state";
import { currentUserActions } from "../state/currentUser";

function AppPage() {
  const navigate = useNavigate();
  const { locale, changeLocale } = useLanguage();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      const data = await Auth.getSession();

      if (!data?.user) {
        navigate(Routes.Login);
      } else {
        dispatch(currentUserActions.setUser(data.user));
      }
    };

    init();
  }, [dispatch, navigate]);

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
