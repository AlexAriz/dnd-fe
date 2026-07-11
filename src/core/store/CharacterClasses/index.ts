import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { CharacterClass } from "./type";

const characterClassesApi = createApi({
  reducerPath: "characterClassesApi",
  baseQuery: appBaseQuery(),
  tagTypes: ["CharacterClasses"],
  endpoints: (build) => ({
    getCharacterClasses: build.query<CharacterClass[], string>({
      query: (characterId) => `characters/${characterId}/classes`,
      providesTags: (_request, _error, id) => [{ type: "CharacterClasses", id }],
    }),
  }),
});

export default characterClassesApi;
export const { useGetCharacterClassesQuery } = characterClassesApi;
