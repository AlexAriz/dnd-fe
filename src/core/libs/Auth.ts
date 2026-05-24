import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import Logger from "Libs/Logger";
import router from "Libs/router";
import Routes from "Constants/routes";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "Constants/auth";
import type { AppDispatch } from "Types/state";
import { authActions } from "Features/Auth/store/auth";

const client: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export const registerAuthListener = (dispatch: AppDispatch) => {
  client.auth.onAuthStateChange((_event, session) => {
    if (!session) {
      dispatch(authActions.clearToken());
    } else {
      dispatch(authActions.setToken(session.access_token));
    }
  });
};

export const verifySession = async () => {
  const response = await client.auth.getSession();
  if (response.error) {
    Logger.error("Error getting user", { ...response.error });
    router.navigate(Routes.LOGIN);
  } else if (!response.data.session) {
    Logger.warn("Session expired");
    router.navigate(Routes.LOGIN);
  }
};

export const logout = async () => {
  const response = await client.auth.signOut();
  if (response.error) {
    Logger.error("Error logging out", { ...response.error });
    return false;
  }
  return true;
};

export const login = async (email: string, password: string) => {
  const response = await client.auth.signInWithPassword({ email, password });
  if (response.error) {
    Logger.error("Error signing in", { ...response.error });
  }
  return response.data.user;
};

export const signup = async (email: string, password: string) => {
  const response = await client.auth.signUp({ email, password });
  if (response.error) {
    Logger.error("Error signing up", { ...response.error });
    return false;
  }
  return true;
};
