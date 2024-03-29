import { ChangeEvent, useEffect } from "react";
import { useGetAllGamesQuery } from "../../store/games/games.api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  setFilterCurrency,
  setFilterProvider,
  setFiltersLists,
} from "../../store/games/games.slice";
import { FilterKey } from "../../types/games";

const useGamesFilters = () => {
  const dispatch = useAppDispatch();

  const { data: games } = useGetAllGamesQuery();

  const { filterProvider, filterCurrency, currencies, providers } =
    useAppSelector((state) => state.games);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>, key: FilterKey) => {
    const value = e.target.value;

    if (key === "provider") {
      dispatch(setFilterProvider(value));
    } else if (key === "currency") {
      dispatch(setFilterCurrency(value));
    }
  };

  useEffect(() => {
    if (games) {
      const currencies = new Set<string>();
      const providers = new Set<string>();

      Object.values(games).forEach((game) => {
        providers.add(game.provider);
        if (game.real) {
          Object.keys(game.real).forEach((currencyKey) => {
            currencies.add(currencyKey);
          });
        }
      });

      dispatch(
        setFiltersLists({
          currencies: [...currencies],
          providers: [...providers],
        })
      );
    }
  }, [games, dispatch]);

  return {
    handleChange,
    filterProvider,
    filterCurrency,
    currencies,
    providers,
  };
};

export default useGamesFilters;
