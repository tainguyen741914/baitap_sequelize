const Order = require("../models/order");
const User = require("../models/user");
const Restaurant = require("../models/restaurant");

// Thêm đơn hàng cho nhà hàng
const addOrder = async (req, res) => {
  const { restaurantId } = req.params;
  const { userId, items, totalAmount } = req.body;

  try {
    const order = await Order.create({
      userId,
      restaurantId,
      items,
      totalAmount,
    });
    return res.status(201).send(order);
  } catch (error) {
    return res.status(500).send({ message: "Lỗi khi thêm đơn hàng", error });
  }
};

// Lấy danh sách đơn hàng của user
const getOrdersByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.findAll({
      where: { userId },
      include: [{ model: Restaurant, attributes: ["id", "name"] }],
    });
    return res.status(200).send(orders);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Lỗi khi lấy danh sách đơn hàng của user", error });
  }
};

// Lấy danh sách đơn hàng của một nhà hàng
const getOrdersByRestaurant = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const orders = await Order.findAll({
      where: { restaurantId },
      include: [{ model: User, attributes: ["id", "name"] }],
    });
    return res.status(200).send(orders);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Lỗi khi lấy danh sách đơn hàng của nhà hàng", error });
  }
};

module.exports = {
  addOrder,
  getOrdersByUser,
  getOrdersByRestaurant,
};
