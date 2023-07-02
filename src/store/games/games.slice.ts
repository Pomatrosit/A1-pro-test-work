import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface GamesState {
  limit: number;
  filterProvider: string;
  filterCurrency: string;
  currencies: string[];
  providers: string[];
}

const initialState: GamesState = {
  limit: 12,
  filterProvider: "",
  filterCurrency: "",
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
    setFilterProvider(state, action: PayloadAction<string>) {
      state.filterProvider = action.payload;
    },
    setFilterCurrency(state, action: PayloadAction<string>) {
      state.filterCurrency = action.payload;
    },
    clearFilters(state) {
      state.filterCurrency = "";
      state.filterProvider = "";
      state.limit = 12;
    },
  },
});

export const {
  increaseLimit,
  setFiltersLists,
  setFilterProvider,
  setFilterCurrency,
  clearFilters,
} = gamesSlice.actions;

export default gamesSlice;
