import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { SpellSummary } from "State/Spell/type";
import type { LearnSpellPayload } from "./type";

const characterSpellsApi = createApi({
  reducerPath: "characterSpellsApi",
  baseQuery: appBaseQuery(),
  tagTypes: ["CharacterSpells"],
  endpoints: (build) => ({
    getKnownSpells: build.query<SpellSummary[], string>({
      query: (characterId) => `characters/${characterId}/spells/known`,
      providesTags: (_result, _error, id) => [{ type: "CharacterSpells", id }],
    }),
    learnSpell: build.mutation<void, LearnSpellPayload>({
      query: (learnSpellPayload) => ({
        url: `characters/${learnSpellPayload.characterId}/spells/${learnSpellPayload.spellId}`,
        method: "POST",
      }),
      invalidatesTags: (_result, _error, { characterId: id }) => [{ type: "CharacterSpells", id }],
    }),
  }),
});

export default characterSpellsApi;
export const { useGetKnownSpellsQuery, useLearnSpellMutation } = characterSpellsApi;
