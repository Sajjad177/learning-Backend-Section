import { Movie } from "./movies.interface";
import { Movies } from "./movies.model";

const createMovie = async (payload: Movie) => {
  const result = await Movies.create(payload);
  return result;
};


export const MovieServices = {
    createMovie
}