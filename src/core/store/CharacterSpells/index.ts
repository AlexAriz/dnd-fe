import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { CharacterSpell } from "./type";

const characterSpellsApi = createApi({
  reducerPath: "characterSpellsApi",
  baseQuery: appBaseQuery(),
  tagTypes: ["CharacterSpells"],
  endpoints: (build) => ({
    getCharacterSpells: build.query<CharacterSpell[], string>({
      query: (characterId) => `characters/${characterId}/spells`,
      providesTags: (_result, _error, id) => [{ type: "CharacterSpells", id }],
    }),
  }),
});

export default characterSpellsApi;
export const { useGetCharacterSpellsQuery } = characterSpellsApi;
