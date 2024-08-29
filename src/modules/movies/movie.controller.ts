import { Request, Response } from "express";
import { MovieServices } from "./movies.service";

//TODO : Create a data -> :
const createMovies = async (req: Request, res: Response) => {
  try {
    const movieData = req.body;
    const result = await MovieServices.createMovie(movieData);
    res.status(200).json({
      success: true,
      message: "Movie created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error creating movie:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create movie",
    });
  }
};

// TODO : Get all data -> :

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieServices.getAllMovies();
    res.status(200).json({
      success: true,
      message: "All movies retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error retrieving all movies:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve all movies",
    });
  }
};

// TODO : Get singleData -> :

const getSingleData = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const result = await MovieServices.getSingleData(movieId);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Movie retrieved successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }
  } catch (error) {
    console.error("Error retrieving movie:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve movie",
    });
  }
};


// TODO : Get singleData with slug -> :

const getMovieBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await MovieServices.getMovieBySlug(slug);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Movie retrieved successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }
  } catch (error) {
    console.error("Error retrieving movie:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve movie",
    });
  }
};

export const MovieControllers = {
  createMovies,
  getAllMovies,
  getSingleData,
  getMovieBySlug,
};
