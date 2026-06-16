import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import Logger from "Libs/Logger";
import router from "Libs/router";
import { PublicRoutes } from "Constants/routes";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "Constants/auth";
import type { AppDispatch } from "Types/state";
import { authActions } from "State/Auth";

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

export const verifySession = async (dispatch: AppDispatch) => {
  const response = await client.auth.getSession();
  if (response.error) {
    Logger.error("Error getting user", { ...response.error });
    dispatch(authActions.clearToken());
    router.navigate(PublicRoutes.LOGIN);
  } else if (!response.data.session) {
    Logger.warn("Session expired");
    dispatch(authActions.clearToken());
    router.navigate(PublicRoutes.LOGIN);
  } else {
    dispatch(authActions.setToken(response.data.session.access_token));
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

export async function uploadFile(file: File, fileName: string, bucket: string) {
  const uploadUrlResponse = await client.storage.from(bucket).createSignedUploadUrl(fileName, { upsert: true });
  if (uploadUrlResponse.error) {
    Logger.error("Error getting signed upload url", { ...uploadUrlResponse.error });
    return;
  }

  const { token } = uploadUrlResponse.data;
  const uploadResponse = await client.storage.from(bucket).uploadToSignedUrl(fileName, token, file, { upsert: true });
  if (uploadResponse.error) {
    Logger.error("Error uploading file", { ...uploadResponse.error });
    return;
  }
}

interface GetImageUrlParams {
  bucket: string;
  filename: string;
  options?: {
    download?: boolean;
    transform?: {
      width?: number;
      height?: number;
      resize?: "fill" | "cover" | "contain";
    };
  };
}
export async function getImageUrl({ bucket, filename, options }: GetImageUrlParams) {
  const { data, error } = await client.storage.from(bucket).createSignedUrl(filename, 60, options);
  if (error) {
    Logger.error("Error getting signed url", { ...error });
    return;
  }

  return data.signedUrl;
}
