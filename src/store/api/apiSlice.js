import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "configs/EnvironmentConfig";
import { signOut } from "store/slices/authSlice";


const baseQuery = fetchBaseQuery({
  baseUrl: env.API_ENDPOINT_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
      headers.set("ngrok-skip-browser-warning", "69420");
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Check if the status is 401
  if (result.error && result.error.status === 401) {
    // Dispatch logout action
    api.dispatch(signOut());
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth, // Use the custom base query
  tagTypes: [],
  endpoints: (builder) => ({}),
});
