import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../services/https";
const categoriesApi = createApi({
  reducerPath: ["Categories"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/categories`,
      providesTags: ["Category"],
    }),
  }),
});
export const { useGetCategoriesQuery } = categoriesApi;
export default categoriesApi;
