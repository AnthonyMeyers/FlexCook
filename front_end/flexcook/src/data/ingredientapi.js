import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ingredientApi = createApi({
  reducerPath: "ingredientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8001/api",
  }),
  tagTypes: ["INVENTORY"],
  refetchOnReconnect: true,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getAllIngredients: builder.query({
      query: () => ({
        url: "/ingredients",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }),
    }),
    getIngredientsFromUser: builder.query({
      query: (userId) => ({
        url: `/inventories?page=1&pagination=false&usrInv=${userId}`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }),
      providesTags: ["INVENTORY"],
    }),
    //Wijzig de prioriteit van een todo
    updateInventoryCount: builder.mutation({
      query: ({ invId, invCount }) => ({
        url: `/inventories/${invId}`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        method: "PUT",
        body: { id: invId, invCnt: invCount },
      }),
      invalidatesTags: ["INVENTORY"],
    }),
  }),
});

export default ingredientApi;
export const {
  useGetAllIngredientsQuery,
  useGetIngredientsFromUserQuery,
  useUpdateInventoryCountMutation,
} = ingredientApi;
