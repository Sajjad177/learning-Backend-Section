import { NextFunction, Request, Response } from "express";







export const catchAsync = (fn) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Please try again",
        error: error,
      });
    }
  };
};
