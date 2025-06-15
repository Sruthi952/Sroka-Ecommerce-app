const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Import and use routes
const authRoutes = require("./src/users/user.route");
const productRoutes=require('./src/products/products.route');
const reviewRoutes = require ('./src/reviews/reviews.router');
const orderRoutes = require('./src/orders/orders.route');
const statsRoutes = require ('./src/stats/stats.route')
app.use("/api/auth", authRoutes);
app.use('/api/products',productRoutes);
app.use("/api/reviews",reviewRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/stats",statsRoutes)
// Database connection and server start7
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log(`✅ MongoDB Connected Successfully.`);
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB Connection Error:", err);
  });

// Default route
app.get("/", (req, res) => {
  res.send("Sroka Server Running....!");
});
