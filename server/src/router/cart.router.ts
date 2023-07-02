import { Router } from "express";
import {
  getCartItems,
  createOrder,
  removeOrder,
  updateQuantity,
  clearCart,
} from "../controllar/cart.controllar";
import { checkAuth } from "../middleware/auth";
const router = Router();
router.route("/").all().get(checkAuth, getCartItems);
router.route("/order/add").post(checkAuth, createOrder);
router.route("/order/updateQty/:id").post(checkAuth, updateQuantity);
router.route("/order/remove/:id").delete(checkAuth, removeOrder);
router.route('/orders/clear').delete(checkAuth,clearCart)
export default router;
