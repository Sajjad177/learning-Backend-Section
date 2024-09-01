import express from "express";
import { MovieControllers } from "./movie.controller";
import { ReviewControllers } from "../reviews/reviews.controller";

const router = express.Router();

router.post("/", MovieControllers.createMovies);
router.get("/getData", MovieControllers.getAllMovies);
router.get("/id/:movieId", MovieControllers.getSingleData);
// using slug(Deffrient a id)
router.get("/slug/:slug", MovieControllers.getMovieBySlug);

router.post("/:slug/review", ReviewControllers.addReview);
router.get("/:slug/reviews", ReviewControllers.getAllReviews);
router.put("/:slug/review", ReviewControllers.getReviewById);
router.delete("/:slug/review", ReviewControllers.deleteReview);
export const MovieRoutes = router;
