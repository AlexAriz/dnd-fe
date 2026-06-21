import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { SpellDetail, SpellSummary } from "./type";
import type { SortableColumns, SortOrder } from "Features/Spells/types/type";

const spellApi = createApi({
  reducerPath: "spellApi",
  baseQuery: appBaseQuery(),
  endpoints: (build) => ({
    getSpells: build.query<SpellSummary[], { sortOrder: SortOrder; sortBy: SortableColumns }>({
      query: (queryParams) => ({ url: "spells", params: queryParams }),
    }),
    getSpell: build.query<SpellDetail, string>({
      query: (spellId) => `spells/${spellId}`,
    }),
  }),
});

export default spellApi;
export const { useGetSpellsQuery, useGetSpellQuery } = spellApi;
