import { Movies } from "../movies/movies.model";
import { TReview } from "./reviews.interface";
import { Review } from "./reviews.model";

const addReview = async (
  slug: string,
  reviewData: Partial<TReview>
): Promise<TReview> => {
  //add reviews ->
  const movie = await Movies.findOne({ slug });

  if (!movie) {
    throw new Error("Movie is not found");
  }

  const review = await Review.create({
    movie: movie._id,
    ...reviewData,
  });

  const reviewsCount = await Review.countDocuments({ movie: movie._id });

  await Movies.updateOne(
    { slug },
    { totalRating: reviewsCount },
    { new: true }
  );

  return review;
};

export const ReviewServices = {
  addReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
