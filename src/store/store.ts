import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./games/games.slice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gamesApi } from "./games/games.api";

export const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
