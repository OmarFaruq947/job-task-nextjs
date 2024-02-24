
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://staging-api.erpxbd.com/api/v1",
  }),
  endpoints: (builder) => ({
    // end points
  }),
});

