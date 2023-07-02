import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterKey, GamesFilters } from "../../types/games";
import { getSearchParam } from "../../helpers/getSearchParam";

interface FilterLists {
  currencies: string[];
  providers: string[];
}

type GamesState = GamesFilters & FilterLists;

const initialCurrency = getSearchParam("currency");
const initialProvider = getSearchParam("provider");

const initialFilterKey = initialCurrency
  ? "currency"
  : initialProvider
  ? "provider"
  : "";
const initialFilterValue = getSearchParam(initialFilterKey) || "";
const initialLimit = Number(getSearchParam("limit") || 12);

const initialState: GamesState = {
  limit: initialLimit,
  filterKey: initialFilterKey,
  filterValue: initialFilterValue,
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
    setFilter(
      state,
      action: PayloadAction<{ key: FilterKey; value: string; limit?: number }>
    ) {
      state.filterKey = action.payload.key;
      state.filterValue = action.payload.value;
      state.limit = action.payload.limit || 12;
    },
    clearFilters(state) {
      state.filterKey = "";
      state.filterValue = "";
      state.limit = 12;
    },
  },
});

export const { increaseLimit, setFiltersLists, setFilter, clearFilters } =
  gamesSlice.actions;

export default gamesSlice;
