import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { CharacterDetail, CharacterSummary } from "../types/character";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: appBaseQuery(),
  endpoints: (build) => ({
    getCharacters: build.query<CharacterSummary[], void>({
      query: () => "characters",
    }),
    getCharacter: build.query<CharacterDetail, string>({
      query: (characterId) => `characters/${characterId}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterQuery } = characterApi;
