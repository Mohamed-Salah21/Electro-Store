import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../services/https";

const favouritesApi = createApi({
  reducerPath: ["favouritesApi"],
  tagTypes: ["Favourites"],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) =>
      headers.set("Authentication", sessionStorage.userToken),
  }),
  endpoints: (builder) => ({
    getFavourites: builder.query({
      query: () => `/favourites`,
      providesTags: ["Favourites"],
    }),
    addToFavourites: builder.mutation({
      query: (productId) => ({
        url: `/favourites/add/${productId}`,
        method: "POST",
      }),
      invalidatesTags: ["Favourites"],
    }),
    removeFromFavourites: builder.mutation({
      query: (productId) => ({
        url: `/favourites/remove/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favourites"],
    }),
  }),
});
export const {
  useGetFavouritesQuery,
  useAddToFavouritesMutation,
  useRemoveFromFavouritesMutation,
} = favouritesApi;
export default favouritesApi;
