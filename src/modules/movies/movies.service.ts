import { Types } from "mongoose";
import { Movie } from "./movies.interface";
import { Movies } from "./movies.model";

const createMovie = async (payload: Movie) => {
  const result = await Movies.create(payload);
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

export const MovieServices = {
  createMovie,
  getAllMovies,
  getSingleData
};
