import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useMatch, useNavigate } from "react-router";

import Header from "Layouts/AppPage/components/Header";
import LoadingPage from "Layouts/AppPage/components/LoadingPage";
import { verifySession } from "Libs/Auth";
import { useGetProfileQuery } from "State/Profile";
import { useAppDispatch } from "Hooks/state";
import { HiddenPaths } from "Constants/routes";
import { authSelectors } from "State/Auth";

function AppPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isProfile = !!useMatch(HiddenPaths.PROFILE);
  const isAuthReady = useSelector(authSelectors.selctIsAuthReady);
  const { isLoading, isFetching, isError } = useGetProfileQuery(undefined, { skip: !isAuthReady });
  const showLoader = !isAuthReady || isLoading;

  useEffect(() => {
    verifySession(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (!showLoader && !isFetching && isError && !isProfile) {
      navigate(HiddenPaths.PROFILE);
    }
  }, [isError, isFetching, isProfile, showLoader, navigate]);

  return showLoader ?
      <LoadingPage />
    : <div className="w-lvw h-lvh scroll-auto">
        <Header />
        <main className="pt-16 w-lvw px-3">
          <Outlet />
        </main>
      </div>;
}

export default AppPage;
