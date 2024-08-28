import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.post("/", MovieControllers.createMovies);

export const MovieRoutes = router;
