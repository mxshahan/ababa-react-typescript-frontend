import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { DefaultResponse, LoginResponse } from "../../interfaces/models";
import { LoginRequest, RegisterUserRequest } from "../../interfaces/dto";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1/auth",
  }),
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (loginRequest) => ({
        url: "/login",
        method: "POST",
        body: loginRequest,
      }),
    }),
    register: build.mutation<LoginResponse, RegisterUserRequest>({
      query: (registerUserRequest) => ({
        url: "/register",
        method: "POST",
        body: registerUserRequest,
      }),
    }),
    logout: build.mutation<DefaultResponse, void>({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi;
