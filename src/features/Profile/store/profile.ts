import { createApi } from "@reduxjs/toolkit/query/react";
import type { Profile } from "../types/profile";
import { appBaseQuery } from "Hooks/state";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: appBaseQuery(),
  endpoints: (build) => ({
    getProfile: build.query<Profile, void>({
      query: () => "profiles/me",
    }),
    postProfile: build.mutation<Profile, Pick<Profile, "username">>({
      query: (body) => ({
        url: "profiles",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLazyGetProfileQuery, usePostProfileMutation } = profileApi;
