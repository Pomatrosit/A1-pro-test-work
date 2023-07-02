interface GameCollections {
  popularity: number;
}

export interface Game {
  title: string;
  collections: GameCollections;
  demo: string;
  provider: string;
  oldKey: string;
  real?: Record<string, { id: number }>;
}

export type GamesList = Record<string, Game>;

export type FilterKey = "currency" | "provider" | "";

export interface GamesFilters {
  limit: number;
  filterKey: FilterKey;
  filterValue: string;
}
