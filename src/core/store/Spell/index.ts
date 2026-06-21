import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { SpellDetail, SpellSummary } from "./type";
import type { SortableColumns, SortOrder } from "Features/Spells/types/type";

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
      transformResponse: (spell: SpellDetail) => {
        const mdParts: string[] = [spell.markdown];

        if (spell.classes.length > 0) {
          const classes = spell.classes.map((_class) => _class.name);
          mdParts.push(`**Classes**: ${classes.join(", ")}`);
        }
        if (spell.subClasses.length > 0) {
          const subclasses = spell.subClasses.map((subclass) => `_${subclass.shortName}_ ${subclass.class.name}`);
          mdParts.push(`**Subclasses**: ${subclasses.join(", ")}`);
        }

        return {
          ...spell,
          markdown: mdParts.join("\n\n"),
        };
      },
      providesTags: (_result, _error, id) => [{ type: "Spell", id }],
    }),
  }),
});

export default spellApi;
export const { useGetSpellsQuery, useGetSpellQuery } = spellApi;
