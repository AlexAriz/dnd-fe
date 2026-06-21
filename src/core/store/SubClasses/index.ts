import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { SubClassSummary } from "./type";

const subClassApi = createApi({
  reducerPath: "subClassApi",
  baseQuery: appBaseQuery(),
  endpoints: (build) => ({
    getSubClasses: build.query<SubClassSummary[], string>({
      query: (classId) => `classes/${classId}/subclasses`,
    }),
  }),
});

export default subClassApi;
export const { useGetSubClassesQuery } = subClassApi;
