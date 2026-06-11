import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { SkillSummary } from "./type";

const skillApi = createApi({
  reducerPath: "skillApi",
  baseQuery: appBaseQuery(),
  endpoints: (build) => ({
    getSkills: build.query<SkillSummary[], void>({
      query: () => "skills",
    }),
  }),
});

export default skillApi;
export const { useGetSkillsQuery } = skillApi;
