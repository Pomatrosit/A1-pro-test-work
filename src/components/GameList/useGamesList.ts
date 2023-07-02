import { useMemo } from "react";
import { useGetAllGamesQuery } from "../../store/games/games.api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Game, GamesFilters, GamesList as IGamesList } from "../../types/games";
import { increaseLimit } from "../../store/games/games.slice";
import { useSearchParams } from "react-router-dom";

const getSortedByPopularityGames = (games: IGamesList | undefined) => {
  if (!games) return [];
  return Object.values(games).sort(
    (a, b) => a.collections.popularity - b.collections.popularity
  );
};

const getDisplayedGames = (games: Game[], filters: GamesFilters) => {
  let filteredGames: Game[] = games;

  const { filterKey, filterValue, limit } = filters;

  if (filterValue) {
    switch (filterKey) {
      case "provider": {
        filteredGames = games.filter((game) => game.provider === filterValue);
        break;
      }

      case "currency": {
        filteredGames = games.filter((game) => {
          const currencies = game.real || {};
          return Object.keys(currencies).includes(filterValue);
        });
        break;
      }

      default:
        break;
    }
  }

  return {
    displayedGames: filteredGames.slice(0, limit),
    noLimitedLength: filteredGames.length,
  };
};

const useGamesList = () => {
  const dispatch = useAppDispatch();

  const { limit, filterKey, filterValue } = useAppSelector(
    (state) => state.games
  );

  const { data: games, isLoading, error } = useGetAllGamesQuery();

  const sortedGames = useMemo(() => getSortedByPopularityGames(games), [games]);

  const { displayedGames, noLimitedLength } = useMemo(
    () => getDisplayedGames(sortedGames, { limit, filterKey, filterValue }),
    [sortedGames, limit, filterKey, filterValue]
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const handleShowMore = () => {
    dispatch(increaseLimit());
    searchParams.set("limit", String(limit + 12));
    setSearchParams(searchParams);
  };

  const isShowMoreButtonShowed = noLimitedLength > limit;

  return {
    displayedGames,
    isLoading,
    error,
    handleShowMore,
    isShowMoreButtonShowed,
    sortedGames,
  };
};

export default useGamesList;
