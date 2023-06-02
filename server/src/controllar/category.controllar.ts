import Category from "../models/category.model";
import { Request, Response } from "express";
import { CategoryI } from "../models/category.model";
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

export const addNewCategory = async (req: Request, res: Response) => {
  const check: CategoryI | any = await Category.findOne({
    name: req.body.name,
  });
  if (check) {
    return res.status(400).send({
      error: "Category name is already used before",
    });
  }
  const newCategory = new Category({ ...req.body });
  newCategory.save();
  res.status(200).send({
    success: true,
    message: "Category is created successfully",
  });
};
