import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "../constants/auth";
import Logger from "../../../core/providers/Logger";
import router from "../../../router";
import Routes from "Constants/routes";

const client: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export const verifySession = async () => {
  const response = await client.auth.getSession();
  if (response.error) {
    Logger.error("Error getting user", { ...response.error });
    router.navigate(Routes.LOGIN);
  } else if (!response.data.session) {
    Logger.warn("Session expired");
    router.navigate(Routes.LOGIN);
  } else {
    return response.data.session.user;
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
