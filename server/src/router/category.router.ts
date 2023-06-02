import { Router } from "express";
import { addNewCategory, getAllCategories } from "../controllar/category.controllar";
const router = Router();
router.route("/").get(getAllCategories);
router.route("/create").post(addNewCategory);

export default router;
