import { createClient, SupabaseClient } from "@supabase/supabase-js";

class Auth {
  private static client: SupabaseClient;
  private static readonly supabaseUrl: string = import.meta.env.SUPABASE_URL;
  private static readonly supabasePublishableKey: string = import.meta.env.SUPABASE_PUBLISHABLE_KEY;

  private static getClient() {
    if (Auth.client) {
      return Auth.client;
    } else {
      Auth.client = createClient(Auth.supabaseUrl, Auth.supabasePublishableKey);
      return Auth.client;
    }
  }

  static async getSession() {
    const { data } = await Auth.getClient().auth.getSession();

    return data;
  }

  static async login(email: string, password: string) {
    const { data } = await Auth.getClient().auth.signInWithPassword({ email, password });

    return data;
  }
}

export default Auth;
