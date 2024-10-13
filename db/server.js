const express = require("express");
const app = express();

const likeRoutes = require("./routes/likeRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/api", likeRoutes);
app.use("/api", reviewRoutes);
app.use("/api", orderRoutes);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
