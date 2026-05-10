import { createClient, SupabaseClient } from "@supabase/supabase-js";
import Logger from "./logger";

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

  static async getSession() {
    const response = await Auth.getClient()?.auth.getUser();
    if (response?.error) {
      Logger.error("Error getting user", { ...response.error });
    } else {
      return response?.data;
    }
  }

  static async login(email: string, password: string) {
    const response = await Auth.getClient()?.auth.signInWithPassword({ email, password });
    if (response?.error) {
      Logger.error("Error signing in", { ...response.error });
    } else {
      return response?.data;
    }
  }

  static async signup(email: string, password: string) {
    const response = await Auth.getClient()?.auth.signUp({ email, password });
    if (response?.error) {
      Logger.error("Error signing up", { ...response.error });
    } else {
      return response?.data;
    }
  }
}

export default Auth;
