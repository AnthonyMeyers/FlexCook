import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ingredientApi = createApi({
  reducerPath: "ingredientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8001/api",
  }),
  tagTypes: [],
  refetchOnReconnect: true,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getAllIngredients: builder.query({
      query: () => "/",
    }),
  }),
});
