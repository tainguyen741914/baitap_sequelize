const sequelize = require("../config/database");
const User = require("./user");
const Restaurant = require("./restaurant");
const Like = require("./like");
const Review = require("./review");
const Order = require("./order");

// Thiết lập các mối quan hệ
User.hasMany(Like, { foreignKey: "userId" });
Like.belongsTo(User, { foreignKey: "userId" });

Restaurant.hasMany(Like, { foreignKey: "restaurantId" });
Like.belongsTo(Restaurant, { foreignKey: "restaurantId" });

User.hasMany(Review, { foreignKey: "userId" });
Review.belongsTo(User, { foreignKey: "userId" });

Restaurant.hasMany(Review, { foreignKey: "restaurantId" });
Review.belongsTo(Restaurant, { foreignKey: "restaurantId" });

User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

Restaurant.hasMany(Order, { foreignKey: "restaurantId" });
Order.belongsTo(Restaurant, { foreignKey: "restaurantId" });

// Đồng bộ các model với database
sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Error creating database:", err);
  });

module.exports = {
  User,
  Restaurant,
  Like,
  Review,
  Order,
};
