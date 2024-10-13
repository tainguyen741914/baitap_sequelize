const express = require("express");
const {
  addOrder,
  getOrdersByUser,
  getOrdersByRestaurant,
} = require("../controllers/orderController");

const router = express.Router();

// Route để thêm đơn hàng cho một nhà hàng
router.post("/restaurants/:restaurantId/orders", addOrder);

// Route để lấy danh sách đơn hàng mà một user đã đặt
router.get("/users/:userId/orders", getOrdersByUser);

// Route để lấy danh sách đơn hàng của một nhà hàng cụ thể
router.get("/restaurants/:restaurantId/orders", getOrdersByRestaurant);

module.exports = router;
