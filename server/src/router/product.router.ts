import { Router } from "express";
import {
  addProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
} from "../controllar/product.controllar";
const router: Router = Router();
router.route("/").get(getAllProducts);
router.route("/:id").get(getProductById).get(getProductsByCategory);
router.route("/add").post(addProduct);
export default router;
