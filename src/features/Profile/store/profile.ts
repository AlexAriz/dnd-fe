import { createApi } from "@reduxjs/toolkit/query/react";
import type { Profile } from "../types/profile";
import { appBaseQuery } from "Hooks/state";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: appBaseQuery(),
  tagTypes: ["Profile"],
  endpoints: (build) => ({
    getProfile: build.query<Profile, void>({
      query: () => "profiles/me",
      providesTags: ["Profile"],
    }),
    postProfile: build.mutation<Profile, string>({
      query: (username) => ({
        url: "profiles",
        method: "POST",
        body: {
          username,
        },
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useGetProfileQuery, usePostProfileMutation } = profileApi;
export const useGetProfileState = profileApi.endpoints.getProfile.useQueryState;
