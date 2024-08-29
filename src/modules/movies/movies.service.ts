import { Types } from "mongoose";
import { Movie } from "./movies.interface";
import { Movies } from "./movies.model";
import { compareAsc, format } from "date-fns";
import slugify from "slugify";

const createMovie = async (payload: Movie) => {
  // title -< releaseDate create slug

  const date = format(payload.releaseDate, "dd-MM-yyyy");

  // create slug ->  [npm is slugify]
  const slug = slugify(`${payload.title}-${date}`);
  const result = await Movies.create({ ...payload, slug });
  return result;
};

const getAllMovies = async () => {
  const result = await Movies.find();
  return result;
};

const getSingleData = async (_id: Types.ObjectId | string) => {
  const result = await Movies.findById(_id);
  return result;
};

// Get Movie by slug
const getMovieBySlug = async (slug: string) => {
  const result = await Movies.findOne({ slug: slug });
  return result;
};

export const MovieServices = {
  createMovie,
  getAllMovies,
  getSingleData,
  getMovieBySlug,
};
