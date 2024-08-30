import { Types } from "mongoose";
import { Movie } from "./movies.interface";
import { Movies } from "./movies.model";

const createMovie = async (payload: Movie) => {
  // const result = await Movies.create(payload);

  //TODO : create - 2nd way : modify interface
  const result = new Movies(payload);
  const slug = result.createSlug(payload);
  result.slug = slug;
  await result.save(); // database saving
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
