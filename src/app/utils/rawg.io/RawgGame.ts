import fetcher, { type IAPIResponse } from "../fetcher";

interface IGame {
  id: number;
  slug: string;
  name: string;
  /** ISO-date */
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  /** ISO-date */
  updated: string;
  esrb_rating: IESRB_Rating;
  platforms: IGamePlatform[];
}

interface IESRB_Rating {
  id: number;
  /** Enum: `everyone` `everyone-10-plus` `teen` `mature` `adults-only` `rating-pending` */
  slug: string;
  /** Enum: `Everyone` `Everyone 10+` `Teen` `Mature` `Adults Only` `Rating Pending` */
  name: string;
}

interface IGamePlatform {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
  released_at: string;
  requirements: {
    minimum: string;
    recommended: string;
  };
}

export interface IGetAllGamesResponse extends IAPIResponse<IGame> {}

interface IGetAllGamesParams {
  page: number;
  page_size: number;
  search: string;
  /** Disable fuzziness for the search query. */
  search_precise: string;
  /** Mark the search query as exact. */
  search_exact: boolean;
  /** Filter by parent platforms, for example: 1,2,3. */
  parent_platforms: string;
  /** Filter by platforms, for example: 4,5. */
  platforms: string;
  /** Filter by stores, for example: 5,6. */
  stores: string;
  /** Filter by developers, for example: 1612,18893 or valve-software,feral-interactive. */
  developers: string;
  /** Filter by publishers, for example: 354,20987 or electronic-arts,microsoft-studios. */
  publishers: string;
  /** Filter by genres, for example: 4,51 or action,indie. */
  genres: string;
  /** Filter by tags, for example: 31,7 or singleplayer,multiplayer. */
  tags: string;
  /** Filter by creators, for example: 78,28 or cris-velasco,mike-morasky. */
  creators: string;
  /** Filter by a release date, for example: 2010-01-01,2018-12-31.1960-01-01,1969-12-31. */
  date: string;
  /** Filter by an update date, for example: 2020-12-01,2020-12-31. */
  updated: string;
  /** Filter by platforms count, for example: 1. */
  platforms_count: number;
  /** Filter by a metacritic rating, for example: 80,100. */
  metacritic: string;
  /** Exclude games from a particular collection, for example: 123. */
  exclude_collection: number;
  exclude_additions: boolean;
  exclude_parents: boolean;
  exclude_game_series: boolean;
  /** Exclude stores, for example: 5,6. */
  exclude_stores: string;
  /** Available fields: `name`, `released`, `added`, `created`, `updated`, `rating`, `metacritic`. You can reverse the sort order adding a hyphen, for example: `-released`. */
  ordering: string;
}

class RawgGame {
  async getAllGames(params: Partial<IGetAllGamesParams> = {}) {
    try {
      return await fetcher.get<IGetAllGamesResponse[]>("/games", {
        params,
      });
    } catch (err) {
      const _err = err as Error;
      throw Error(_err.message);
    }
  }

  async getGameDetails(idOrSlug: string | number) {
    try {
      return await fetcher.get("/games", {
        params: {
          id: idOrSlug,
        },
      });
    } catch (err) {
      const _err = err as Error;
      throw Error(_err.message);
    }
  }
}

export default RawgGame;
