import { NextFunction, Request, Response } from "express";
import { ReviewServices } from "./reviews.service";
import { catchAsync } from "../../utils/catchAsync";

// const addReview = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const reviewData = req.body;
//     const result = await ReviewServices.addReview(slug, reviewData);
//     res.status(200).json({
//       success: true,
//       message: "Review created successfully",
//       data: result,
//     });
//   } catch (error) {
//     console.error("Error creating review:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to create review",
//     });
//   }
// };

// TODO: Organized way to handle it ->

const addReview = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { slug } = req.params;
    const reviewData = req.body;
    const result = await ReviewServices.addReview(slug, reviewData);

    res.status(200).json({
      success: true,
      message: "Review created successfully",
      data: result,
    });
  }
);

// const getAllReviews = async (req: Request, res: Response) => {
//   try {
//     const result = await ReviewServices.getAllReviews();
//     res.status(200).json({
//       success: true,
//       message: "All reviews retrieved successfully",
//       data: result,
//     });
//   } catch (error) {
//     console.error("Error retrieving all reviews:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to retrieve all reviews",
//     });
//   }
// };

// const getReviewById = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const result = await ReviewServices.getReviewById(slug);
//     if (result) {
//       res.status(200).json({
//         success: true,
//         message: "Review retrieved successfully",
//         data: result,
//       });
//     } else {
//       res.status(404).json({
//         success: false,
//         message: "Review not found",
//       });
//     }
//   } catch (error) {
//     console.error("Error retrieving review:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to retrieve review",
//     });
//   }
// };

// const updateReview = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const result = await ReviewServices.updateReview(slug);
//     if (result) {
//       res.status(200).json({
//         success: true,
//         message: "Review retrieved successfully",
//         data: result,
//       });
//     } else {
//       res.status(404).json({
//         success: false,
//         message: "Review not found",
//       });
//     }
//   } catch (error) {
//     console.error("Error retrieving review:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to retrieve review",
//     });
//   }
// };

// const deleteReview = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const result = await ReviewServices.deleteReview(slug);
//     if (result) {
//       res.status(200).json({
//         success: true,
//         message: "Review retrieved successfully",
//         data: result,
//       });
//     } else {
//       res.status(404).json({
//         success: false,
//         message: "Review not found",
//       });
//     }
//   } catch (error) {
//     console.error("Error retrieving review:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to retrieve review",
//     });
//   }
// };

export const ReviewControllers = {
  addReview,
  // getAllReviews,
  // getReviewById,
  // updateReview,
  // deleteReview,
};
