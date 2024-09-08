import { ObjectId } from "mongoose";

export interface TReview {
  movie: ObjectId;
  email: string;
  rating: number;
  comment: string;
}

//! Mission-3 :  part-8 time -> 16 minutes
