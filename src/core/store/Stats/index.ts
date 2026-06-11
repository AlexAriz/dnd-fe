import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "Hooks/state";
import type { StatSummary } from "./type";

const statApi = createApi({
  reducerPath: "statApi",
  baseQuery: appBaseQuery(),
  endpoints: (build) => ({
    getStats: build.query<StatSummary[], void>({
      query: () => "stats",
    }),
  }),
});

export default statApi;
export const { useGetStatsQuery } = statApi;
