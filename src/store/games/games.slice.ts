import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterKey, GamesFilters } from "../../types/games";

interface FilterLists {
  currencies: string[];
  providers: string[];
}

type GamesState = GamesFilters & FilterLists;

const initialState: GamesState = {
  limit: 12,
  filterKey: "",
  filterValue: "",
  currencies: [],
  providers: [],
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    increaseLimit(state) {
      state.limit += 12;
    },
    setFiltersLists(
      state,
      action: PayloadAction<{ currencies: string[]; providers: string[] }>
    ) {
      state.currencies = action.payload.currencies;
      state.providers = action.payload.providers;
    },
    setFilter(state, action: PayloadAction<{ key: FilterKey; value: string }>) {
      state.filterKey = action.payload.key;
      state.filterValue = action.payload.value;
      state.limit = 12;
    },
  },
});

export const { increaseLimit, setFiltersLists, setFilter } = gamesSlice.actions;

export default gamesSlice;
