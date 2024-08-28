import { Request, Response } from "express";
import { MovieServices } from "./movies.service";

const createMovies = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.createMovie(movieData);

  try {
    res.status(200).json({
      success: true,
      message: "Movie is created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to created movies",
    });
  }
};

export const MovieControllers = {
  createMovies,
};
