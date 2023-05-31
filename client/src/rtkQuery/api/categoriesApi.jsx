import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../components/urls";
const CategoriesApi = createApi({
  reducerPath: "CategoriesApi",
  tagTypes: ["Category"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/categories`,
      providesTags: ["Category"],
    }),
  }),
});
export const { useGetCategoriesQuery } = CategoriesApi;
export default CategoriesApi;
