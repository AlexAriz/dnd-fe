import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useMatch, useNavigate } from "react-router";

import Header from "Layouts/AppPage/components/Header";
import LoadingPage from "Layouts/AppPage/components/LoadingPage";
import { verifySession } from "Libs/Supabase";
import { useGetProfileQuery } from "State/Profile";
import { useAppDispatch } from "Hooks/state";
import { HiddenPaths } from "Constants/routes";
import { authSelectors } from "State/Auth";
import ProfileContext from "Context/ProfileContext";

function AppPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isProfile = !!useMatch(HiddenPaths.PROFILE);
  const isAuthReady = useSelector(authSelectors.selctIsAuthReady);
  const { data: profile, isLoading, isFetching, isError } = useGetProfileQuery(undefined, { skip: !isAuthReady });
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
    : <ProfileContext value={profile}>
        <div className="w-lvw h-lvh scroll-auto">
          <Header />
          <main className="pt-16 w-lvw px-3">
            <Outlet />
          </main>
        </div>
      </ProfileContext>;
}

export default AppPage;
