/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface Movie {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  isDeleted: boolean;
  viewCount: number;
  totalRating :number;
  
  slug: string;
}

//TODO create - 2nd way : Create slug with interface ->
export type MovieMethod = {
  createSlug(payload: Movie): string;
};

export type MovieModel = Model<Movie, Record<string, unknown>, MovieMethod>;
