import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../constants";
import { GamesList } from "../../types/games";

const ONE_DAY = 60 * 60 * 24;

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query<GamesList, void>({
      query: () => "/games.json",
      keepUnusedDataFor: ONE_DAY,
    }),
  }),
});

export const { useGetAllGamesQuery } = gamesApi;
