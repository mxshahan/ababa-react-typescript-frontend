import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { MovieListResponse } from "../../interfaces/models";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1/movie",
  }),
  endpoints: (build) => ({
    getMovies: build.query<MovieListResponse, {}>({
      query: (params) => ({
        url: "/all",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;
