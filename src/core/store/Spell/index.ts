import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { SpellSummary } from "./type";

const spellApi = createApi({
  reducerPath: "spellApi",
  baseQuery: appBaseQuery(),
  tagTypes: ["Spell"],
  endpoints: (build) => ({
    getSpells: build.query<SpellSummary[], void>({
      query: () => "spells",
      providesTags: (spells) =>
        spells ?
          [...spells.map(({ id }) => ({ type: "Spell" as const, id })), { type: "Spell", id: "LIST" }]
        : [{ type: "Spell", id: "LIST" }],
    }),
  }),
});

export default spellApi;
export const { useGetSpellsQuery } = spellApi;
