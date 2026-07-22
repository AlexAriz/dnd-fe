import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { SpellSummary } from "State/Spell/type";

const characterSpellsApi = createApi({
  reducerPath: "characterSpellsApi",
  baseQuery: appBaseQuery(),
  tagTypes: ["CharacterSpells"],
  endpoints: (build) => ({
    getKnownSpells: build.query<SpellSummary[], string>({
      query: (characterId) => `characters/${characterId}/spells/known`,
      providesTags: (_result, _error, id) => [{ type: "CharacterSpells", id }],
    }),
  }),
});

export default characterSpellsApi;
export const { useGetKnownSpellsQuery } = characterSpellsApi;
