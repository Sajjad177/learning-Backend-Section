import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.post("/", MovieControllers.createMovies);
router.get("/getData", MovieControllers.getAllMovies)
router.get("/id/:movieId", MovieControllers.getSingleData);
// using slug(Deffrient a id)
router.get("/slug/:slug", MovieControllers.getMovieBySlug);

export const MovieRoutes = router;
