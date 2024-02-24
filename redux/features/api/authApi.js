
import { apiSlice } from "./apiSlice";


const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/users/login",
        method: "POST",
        data: loginData,
      }),
    }),
    
    register: build.mutation({
      query: (registerData) => {
        return {
          url: "/users/signup",
          method: "POST",
          body: registerData,
        };
      },
    }),
  }),
});

export const { useUserLoginMutation, useRegisterMutation } = authApi;