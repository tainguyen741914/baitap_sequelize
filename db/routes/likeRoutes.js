const express = require("express");
const {
  likeOrUnlikeRestaurant,
  getLikesByRestaurant,
  getLikesByUser,
} = require("../controllers/likeController");

const router = express.Router();

// Route để Like hoặc Unlike một nhà hàng
router.post("/restaurants/:restaurantId/like", likeOrUnlikeRestaurant);

// Route để lấy danh sách người dùng đã like một nhà hàng cụ thể
router.get("/restaurants/:restaurantId/likes", getLikesByRestaurant);

// Route để lấy danh sách các nhà hàng mà một user đã like
router.get("/users/:userId/likes", getLikesByUser);

module.exports = router;
