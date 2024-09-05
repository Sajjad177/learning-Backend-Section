import { Movies } from "../movies/movies.model";
import { TReview } from "./reviews.interface";
import { Review } from "./reviews.model";
import mongoose from "mongoose";

const addReview = async (
  slug: string,
  reviewData: Partial<TReview>
): Promise<TReview | null> => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const movie = await Movies.findOne({ slug }).session(session);

    if (!movie) {
      throw new Error("Movie not found");
    }

    const review = await Review.create(
      [
        {
          movie: movie._id,
          ...reviewData,
        },
      ],
      { session }
    );

    const reviewsCount = await Review.countDocuments({
      movie: movie._id,
    }).session(session);

    // throw new Error("Movie not found")

    await Movies.updateOne(
      { slug },
      { totalRating: reviewsCount },
      { session }
    );

    await session.commitTransaction();
    return review[0];
  } catch (error) {
    await session.abortTransaction();
    console.error("Error adding review:", error);
    throw error;
  } finally {
    session.endSession();
  }
};

export const ReviewServices = {
  addReview,
  // getAllReviews,
  // getReviewById,
  // updateReview,
  // deleteReview,
};
