import { Router } from "express";
import { getAllCategories } from "../controllar/category.controllar";
const router = Router();
router.route("/").get(getAllCategories);

export default router;
