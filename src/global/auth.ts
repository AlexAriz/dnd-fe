import { createClient, SupabaseClient } from "@supabase/supabase-js";
import Logger from "./logger";
import Routes from "../constants/routes";
import store from "../state/store";
import { currentUserActions } from "../state/currentUser";
import router from "./router";

class Auth {
  private static client: SupabaseClient;
  private static readonly supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL;
  private static readonly supabasePublishableKey: string = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  private static getClient() {
    if (Auth.client) {
      return Auth.client;
    } else {
      try {
        Auth.client = createClient(Auth.supabaseUrl, Auth.supabasePublishableKey);
        return Auth.client;
      } catch (error) {
        Logger.error("Error initializing Supabase", { error });
      }
    }
  }

  static async verifySession() {
    const response = await Auth.getClient()?.auth.getUser();
    if (!response?.data.user) {
      Logger.error("Error getting user", { ...response?.error });
      router.navigate(Routes.Login);
    } else {
      store.dispatch(currentUserActions.setUser(response.data.user));
    }
  }

  static async login(email: string, password: string) {
    const response = await Auth.getClient()?.auth.signInWithPassword({ email, password });
    if (!response?.data.user) {
      Logger.error("Error signing in", { ...response?.error });
    } else {
      store.dispatch(currentUserActions.setUser(response.data.user));
      router.navigate(Routes.Root);
    }
  }

  static async signup(email: string, password: string) {
    const response = await Auth.getClient()?.auth.signUp({ email, password });
    if (!response?.data.user) {
      Logger.error("Error signing up", { ...response?.error });
    } else {
      router.navigate(Routes.Login);
    }
  }
}

export default Auth;
