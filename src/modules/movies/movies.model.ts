import { model, Schema } from "mongoose";
import { Movie, Review } from "./movies.interface";

const reviewSchema = new Schema<Review>({
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const movieSchema = new Schema<Movie>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  releaseDate: {
    type: String,
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
  },
  reviews: {
    type: [reviewSchema],
  },
//   slug: {
//     type: String,
//   },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
});



export const Movies = model<Movie>("Movies", movieSchema)







// TODO : best way to create schema ->
// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     match: /.+\@.+\..+/,
//   },
//   rating: {
//     type: Number,
//     required: true,
//     min: 0,
//     max: 5,
//   },
//   comment: {
//     type: String,
//     required: true,
//   },
// });

// const movieSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   releaseDate: {
//     type: Date,
//     required: true,
//   },
//   genre: {
//     type: String,
//     required: true,
//   },
//   isDeleted: {
//     type: Boolean,
//     default: false,
//   },
//   viewCount: {
//     type: Number,
//     default: 0,
//   },
//   reviews: [reviewSchema],
// });

// module.exports = mongoose.model("Movie", movieSchema);
