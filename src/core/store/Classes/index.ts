import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { ClassSummary } from "./type";

const classApi = createApi({
  reducerPath: "classApi",
  baseQuery: appBaseQuery(),
  endpoints: (build) => ({
    getClasses: build.query<ClassSummary[], void>({
      query: () => "classes",
    }),
  }),
});

export default classApi;
export const { useGetClassesQuery } = classApi;
