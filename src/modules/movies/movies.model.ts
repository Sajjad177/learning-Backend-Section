import { model, Schema } from "mongoose";
import { Movie, MovieMethod, MovieModel, Review } from "./movies.interface";
import { format } from "date-fns";
import slugify from "slugify";

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

const movieSchema = new Schema<Movie, MovieModel, MovieMethod>({
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
  slug: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
});

//TODO Create-1st way [ - Normal way - ] : Pre-save hook to generate the slug before saving the movie
// movieSchema.pre("save", async function (next) {
// const date = format(this.releaseDate, "dd-MM-yyyy");

// // create slug ->  [npm is slugify]
// this.slug = slugify(`${this.title}-${date}`, {
//   lower: true,
// });
// next();
// });

// TODO -> create - 2nd way : this is mongoose custom method
movieSchema.method("createSlug", function createSlug(payload: Movie) {
  const date = format(payload.releaseDate, "dd-MM-yyyy");

  // create slug ->  [npm is slugify]
  const slug = slugify(`${payload.title}-${date}`, {
    lower: true,
  });
  return slug;
});

export const Movies = model<Movie, MovieModel>("Movies", movieSchema);
