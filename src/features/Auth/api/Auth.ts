import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "../constants/auth";

class Auth {
  private static client: SupabaseClient | null = null;

  public static getClient(): SupabaseClient {
    if (!Auth.client) {
      Auth.client = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    }

    return Auth.client;
  }
}

export default Auth;
