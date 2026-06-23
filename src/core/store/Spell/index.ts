import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { SpellDetail, SpellSummary } from "./type";
import type { SortableColumns, SortOrder } from "Features/SpellList/types/type";

const spellApi = createApi({
  reducerPath: "spellApi",
  baseQuery: appBaseQuery(),
  tagTypes: ["Spell"],
  endpoints: (build) => ({
    getSpells: build.query<SpellSummary[], { sortOrder: SortOrder; sortBy: SortableColumns }>({
      query: (queryParams) => ({ url: "spells", params: queryParams }),
      providesTags: [{ type: "Spell", id: "LIST" }],
    }),
    getSpell: build.query<SpellDetail, string>({
      query: (spellId) => `spells/${spellId}`,
      providesTags: (_result, _error, id) => [{ type: "Spell", id }],
    }),
  }),
});

export default spellApi;
export const { useGetSpellsQuery, useGetSpellQuery } = spellApi;
