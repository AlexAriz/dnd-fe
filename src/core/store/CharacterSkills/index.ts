import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { CharacterSkill } from "./type";
import type { AvailableSkills } from "State/Skills/type";

const characterSkillsApi = createApi({
  reducerPath: "characterSkillsApi",
  baseQuery: appBaseQuery(),
  tagTypes: ["CharacterSkills"],
  endpoints: (build) => ({
    getCharacterSkills: build.query<Record<AvailableSkills, CharacterSkill>, string>({
      query: (characterId) => `characters/${characterId}/skills`,
      providesTags: (_result, _error, id) => [{ type: "CharacterSkills", id }],
    }),
  }),
});

export default characterSkillsApi;
export const { useGetCharacterSkillsQuery } = characterSkillsApi;
