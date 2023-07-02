import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../services/https";
/* 
/cart/orders/clear
 */
const cartApi = createApi({
  reducerPath: ["Cart"],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) =>
      headers.set("Authentication", sessionStorage.userToken),
  }),
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => `/cart`,
      providesTags: ["Cart"],
    }),
    addOrder: builder.mutation({
      query: (payload) => ({
        url: "/cart/order/add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeOrder: builder.mutation({
      query: (id) => ({
        url: `/cart/order/remove/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    updateQty: builder.mutation({
      query: (id, payload) => ({
        url: `/cart/updateQty/${id}`,
        method: "put",
        body: payload,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});
export const {
  useGetCartItemsQuery,
  useAddOrderMutation,
  useRemoveOrderMutation,
  useUpdateQtyMutation,
} = cartApi;
export default cartApi;
