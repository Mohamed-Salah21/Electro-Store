import Category from "../models/category.model";
import { Request, Response } from "express";
export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await Category.find({});
  if (!categories[0]) {
    return res.status(400).send({
      error: "not categories now",
    });
  }
  res.status(200).send({
    message: "All Categories are fetched",
    categories,
  });
};

