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

export enum FILTER_KEYS {
  CURRENCY = "currency",
  PROVIDER = "provider",
  LIMIT = "limit",
  EMPTY = "",
}

export type FilterKey = FILTER_KEYS;

export interface GamesFilters {
  limit: number;
  filterCurrency: string;
  filterProvider: string;
}
