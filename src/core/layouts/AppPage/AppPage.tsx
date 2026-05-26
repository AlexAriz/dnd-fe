import { Outlet, useMatch, useNavigate } from "react-router";

import Header from "Layouts/AppPage/components/Header";
import LoadingPage from "Layouts/AppPage/components/LoadingPage";
import { useEffect } from "react";
import { verifySession } from "Libs/Auth";
import { useGetProfileQuery } from "Features/Profile/store/profile";
import { useAppDispatch } from "Hooks/state";
import { AppRoutes } from "Constants/routes";
import { useSelector } from "react-redux";
import { authSelectors } from "Features/Auth/store/auth";

function AppPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isProfile = useMatch(AppRoutes.PROFILE);
  const isAuthReady = useSelector(authSelectors.selctIsAuthReady);
  const { data: profile, isLoading, isFetching } = useGetProfileQuery(undefined, { skip: !isAuthReady });
  const loading: boolean = !isAuthReady || isLoading;

  useEffect(() => {
    verifySession(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (!isFetching && !isProfile && !profile) {
      navigate(AppRoutes.PROFILE);
    }
  }, [isFetching, isProfile, navigate, profile]);

  return loading ?
      <LoadingPage />
    : <div className="w-lvw h-lvh scroll-auto">
        <Header />
        <main className="pt-16 w-lvw px-3">
          <Outlet />
        </main>
      </div>;
}

export default AppPage;
