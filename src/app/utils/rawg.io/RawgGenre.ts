import { fetchsub, type IAPIResponse } from "../fetcher";

interface IGenre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface IGenreDetail extends IGenre {
  description: string;
}

export interface IGetAllGenreResponse extends IAPIResponse<IGenre> {}
export interface IGetGenreResponse extends IGenreDetail {}

/** @see https://api.rawg.io/docs/#operation/genres_list */
interface IGetAllGenreParams {
  ordering: string;
  page: number;
  page_size: number;
}

class RawgGenre {
  async getAllGenres(params: Partial<IGetAllGenreParams> = {}) {
    try {
      return await fetchsub.get<IGetAllGenreResponse[]>("/genres", {
        params,
      });
    } catch (err) {
      const _err = err as Error;
      throw Error(_err.message);
    }
  }

  async getGenreById(id: string | number) {
    try {
      return await fetchsub.get<IGetGenreResponse>("/genres", {
        params: {
          id,
        },
      });
    } catch (err) {
      const _err = err as Error;
      throw Error(_err.message);
    }
  }
}

export default RawgGenre;
