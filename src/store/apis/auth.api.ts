import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { LoginResponse } from "../../interfaces";
import { LoginRequest, RegisterUserRequest } from "../../dto";

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
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
