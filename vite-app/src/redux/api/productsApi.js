import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../services/https";
const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    getProductsByCategory: builder.query({
      query: (id) => `/products${id ? `/getByCategory/${id}` : ""}  `,
      providesTags: ["Products"],
    }),
  }),
});

export const { useLazyFetchProductsQuery, useLazyGetProductsByCategoryQuery } =
  productsApi;
export default productsApi;
