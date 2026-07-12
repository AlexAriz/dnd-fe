import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { CharacterStat } from "./type";
import type { AvailableStats } from "State/Stats/type";

const characterStatsApi = createApi({
  reducerPath: "characterStatsApi",
  baseQuery: appBaseQuery(),
  tagTypes: ["CharacterStats"],
  endpoints: (build) => ({
    getCharacterStats: build.query<Record<AvailableStats, CharacterStat>, string>({
      query: (characterId) => `characters/${characterId}/stats`,
      providesTags: (_result, _error, id) => [{ type: "CharacterStats", id }],
    }),
  }),
});

export default characterStatsApi;
export const { useGetCharacterStatsQuery } = characterStatsApi;
