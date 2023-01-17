const express = require("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} = require("../controller/orderController");
router.post("/orders", addOrderItems);
router.get("/orders/:id", getOrderById);
router.put("/orders/:id/pay", updateOrderToPaid);
router.post("/myorders", getMyOrders);
module.exports = router;
