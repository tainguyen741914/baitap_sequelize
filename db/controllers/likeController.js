const Like = require("../models/like");
const User = require("../models/user");
const Restaurant = require("../models/restaurant");

// Like hoặc Unlike nhà hàng
const likeOrUnlikeRestaurant = async (req, res) => {
  const { restaurantId } = req.params;
  const { userId } = req.body;

  try {
    const like = await Like.findOne({ where: { userId, restaurantId } });

    if (like) {
      await Like.destroy({ where: { userId, restaurantId } });
      return res.status(200).send({ message: "Unlike thành công!" });
    } else {
      await Like.create({ userId, restaurantId });
      return res.status(201).send({ message: "Like thành công!" });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Lỗi khi xử lý like/unlike", error });
  }
};

// Lấy danh sách likes theo nhà hàng
const getLikesByRestaurant = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const likes = await Like.findAll({
      where: { restaurantId },
      include: [{ model: User, attributes: ["id", "name"] }],
    });
    return res.status(200).send(likes);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Lỗi khi lấy danh sách like", error });
  }
};

// Lấy danh sách like của một user
const getLikesByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const likes = await Like.findAll({
      where: { userId },
      include: [{ model: Restaurant, attributes: ["id", "name"] }],
    });
    return res.status(200).send(likes);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Lỗi khi lấy danh sách like của user", error });
  }
};

module.exports = {
  likeOrUnlikeRestaurant,
  getLikesByRestaurant,
  getLikesByUser,
};
