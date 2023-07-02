import { useMemo } from "react";
import { useGetAllGamesQuery } from "../../store/games/games.api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Game, GamesFilters, GamesList as IGamesList } from "../../types/games";
import { increaseLimit } from "../../store/games/games.slice";

const getSortedByPopularityGames = (games: IGamesList | undefined) => {
  if (!games) return [];
  return Object.values(games).sort(
    (a, b) => a.collections.popularity - b.collections.popularity
  );
};

const getDisplayedGames = (games: Game[], filters: GamesFilters) => {
  let filteredGames: Game[] = games;

  const { filterCurrency, filterProvider, limit } = filters;

  if (filterCurrency) {
    filteredGames = filteredGames.filter((game) => {
      const currencies = game.real || {};
      return Object.keys(currencies).includes(filterCurrency);
    });
  }

  if (filterProvider) {
    filteredGames = filteredGames.filter(
      (game) => game.provider === filterProvider
    );
  }

  return {
    displayedGames: filteredGames.slice(0, limit),
    noLimitedLength: filteredGames.length,
  };
};

const useGamesList = () => {
  const dispatch = useAppDispatch();

  const { limit, filterCurrency, filterProvider } = useAppSelector(
    (state) => state.games
  );

  const { data: games, isLoading, error } = useGetAllGamesQuery();

  const sortedGames = useMemo(() => getSortedByPopularityGames(games), [games]);

  const { displayedGames, noLimitedLength } = useMemo(
    () =>
      getDisplayedGames(sortedGames, { limit, filterCurrency, filterProvider }),
    [sortedGames, limit, filterCurrency, filterProvider]
  );

  const handleShowMore = () => {
    dispatch(increaseLimit());
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
