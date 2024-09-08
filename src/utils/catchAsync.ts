/* eslint-disable no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from "express";

export const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      console.error("Error:", error);
      res.status(500).json({
        success: false,
        message: "Please try again",
        error: error.message || "Something went wrong",
      });
    });
  };
};

// export const catchAsync = (fn) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await fn(req, res, next);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({
//         success: false,
//         message: "Please try again",
//         error: error,
//       });
//     }
//   };
// };
