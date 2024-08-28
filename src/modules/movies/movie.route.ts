import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.post("/", MovieControllers.createMovies);
router.get("/getData", MovieControllers.getAllMovies)
router.get("/:movieId", MovieControllers.getSingleData)

export const MovieRoutes = router;
