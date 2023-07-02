import { ChangeEvent, useEffect } from "react";
import { useGetAllGamesQuery } from "../../store/games/games.api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  clearFilters,
  setFilter,
  setFiltersLists,
} from "../../store/games/games.slice";
import { FilterKey } from "../../types/games";
import { useSearchParams } from "react-router-dom";

const useGamesFilters = () => {
  const dispatch = useAppDispatch();

  const { data: games } = useGetAllGamesQuery();

  const { filterKey, filterValue, currencies, providers } = useAppSelector(
    (state) => state.games
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>, key: FilterKey) => {
    const value = e.target.value;

    searchParams.set("limit", "12");
    searchParams.delete("currency");
    searchParams.delete("provider");

    if (value) searchParams.set(key, value);

    setSearchParams(searchParams);

    dispatch(
      setFilter({
        key,
        value,
      })
    );
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

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, []);

  return {
    handleChange,
    filterKey,
    filterValue,
    currencies,
    providers,
  };
};

export default useGamesFilters;
