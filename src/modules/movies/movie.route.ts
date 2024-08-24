import express, { Request, Response } from "express";
import { Movies } from "./movies.model";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const result = await Movies.create(req.body);
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
});

export const MovieRoutes = router;
