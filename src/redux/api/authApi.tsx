import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    userLogin: build.mutation({
      query: (loginData: any) => ({
        url: "/login",
        method: "POST",
        data: loginData,
      }),
    }),

    register: build.mutation({
      query: (registerData: any) => {
        return {
          url: "/signup",
          method: "POST",
          body: registerData,
        };
      },
    }),
  }),
});

export const { useUserLoginMutation, useRegisterMutation } = authApi;
