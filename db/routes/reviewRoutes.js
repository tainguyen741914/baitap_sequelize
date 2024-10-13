const express = require("express");
const {
  addReview,
  getReviewsByRestaurant,
  getReviewsByUser,
} = require("../controllers/reviewController");

const router = express.Router();

// Route để thêm đánh giá cho một nhà hàng
router.post("/restaurants/:restaurantId/reviews", addReview);

// Route để lấy danh sách đánh giá của một nhà hàng cụ thể
router.get("/restaurants/:restaurantId/reviews", getReviewsByRestaurant);

// Route để lấy danh sách đánh giá mà một user đã thực hiện
router.get("/users/:userId/reviews", getReviewsByUser);

module.exports = router;
