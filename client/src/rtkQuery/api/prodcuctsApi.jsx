// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseUrl } from "../../components/urls";
// const productsApi = createApi({
//   reducerPath: "productsApi",
//   tagTypes: ["Product"],
//   baseQuery: fetchBaseQuery({
//     baseUrl,
//   }),
//   endpoints: (builder) => ({
//     getAllProducts: () =>
//       builder.query({
//         query: () => `/products`,
//         providesTags: ["Product"],
//       }),
//   }),
// });
// export const { useGetAllProductsQuery } = productsApi;
// export default productsApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../components/urls";
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
    getProductsByCategory : builder.query({
      query : (id) => `/products/getByCategory/${id}`,
      providesTags: ["Products"],
    })
  }),
});

export const { useLazyFetchProductsQuery  , useLazyGetProductsByCategoryQuery  } = productsApi;
export default productsApi;
