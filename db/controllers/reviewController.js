const Review = require("../models/review");
const User = require("../models/user");
const Restaurant = require("../models/restaurant");

// Thêm đánh giá cho nhà hàng
const addReview = async (req, res) => {
  const { restaurantId } = req.params;
  const { userId, rating, comment } = req.body;

  try {
    const review = await Review.create({
      userId,
      restaurantId,
      rating,
      comment,
    });
    return res.status(201).send(review);
  } catch (error) {
    return res.status(500).send({ message: "Lỗi khi thêm đánh giá", error });
  }
};

// Lấy danh sách đánh giá theo nhà hàng
const getReviewsByRestaurant = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const reviews = await Review.findAll({
      where: { restaurantId },
      include: [{ model: User, attributes: ["id", "name"] }],
    });
    return res.status(200).send(reviews);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Lỗi khi lấy danh sách đánh giá", error });
  }
};

// Lấy danh sách đánh giá của một user
const getReviewsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const reviews = await Review.findAll({
      where: { userId },
      include: [{ model: Restaurant, attributes: ["id", "name"] }],
    });
    return res.status(200).send(reviews);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Lỗi khi lấy danh sách đánh giá của user", error });
  }
};

module.exports = {
  addReview,
  getReviewsByRestaurant,
  getReviewsByUser,
};
