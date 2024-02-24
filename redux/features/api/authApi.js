import { apiSlice } from "./apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    

    register: build.mutation({
      query: (registerData) => {
        return {
          url: "/users/signup",
          method: "POST",
          body: registerData,
        };
      },
    }),

    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/users/login",
        method: "POST",
        data: loginData,
      }),
    }),
    
  }),
});

export const { useUserLoginMutation, useRegisterMutation } = authApi;
