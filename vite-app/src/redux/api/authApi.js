import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../services/https";
const authApi = createApi({
  reducerPath: ["Auth"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: `/user/login`,
        body: payload,
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    register: builder.mutation({
      query: (payload) => ({
        url: "/user/register",
        body: payload,
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    getUserInfo: builder.query({
      query: () => ({
        url: `/user/getMe`,
        headers: {
          Authentication: sessionStorage.userToken,
        },
      }),
      providesTags: ["Auth"],
    }),
  }),
});
export const {
  useLoginMutation,
  useRegisterMutation,
  useLazyGetUserInfoQuery,
} = authApi;
export default authApi;
