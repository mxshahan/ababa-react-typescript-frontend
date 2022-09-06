import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { FavouriteListResponse } from "../../interfaces/models/favourite.model";

export const favouriteApi = createApi({
  reducerPath: "favouriteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1/favs",
  }),
  endpoints: (build) => ({
    getMyFavourites: build.query<FavouriteListResponse, {}>({
      query: (params) => ({
        url: "/",
        method: "GET",
        params,
      }),
    }),
    toggleFavourite: build.mutation<FavouriteListResponse, string>({
      query: (movieId) => ({
        url: `/toggle/${movieId}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetMyFavouritesQuery, useToggleFavouriteMutation } = favouriteApi;
