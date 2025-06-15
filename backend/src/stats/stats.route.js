const express = require('express');
const User = require('../users/user.model');
const Order = require('../orders/orders.model');
const Products = require('../products/product.model');
const Reviews = require('../reviews/reviews.model');

const router = express.Router();

// 🧠 User Stats by Email
router.get('/user-stats/:email', async (req, res) => {
  const { email } = req.params;
  if (!email) {
    return res.status(400).send({ message: "Email is required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const userOrders = await Order.find({ userId: user._id });
    const totalSpent = userOrders.reduce((acc, order) => acc + (order.amount || 0), 0);

    res.status(200).json({
      user: {
        name: user.name,
        email: user.email,
      },
      orderCount: userOrders.length,
      totalSpent: totalSpent.toFixed(2),
    });
  } catch (error) {
    console.error("Error fetching user stats", error);
    res.status(500).send({ message: "Failed to fetch user stats" });
  }
});

// GET Admin Stats
router.get('/admin-stats', async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Products.countDocuments();
    const totalReviews = await Reviews.countDocuments();
    const totalUsers = await User.countDocuments();

    // Total Earnings
    const totalEarningsResult = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalEarnings: { $sum: "$amount" }
        }
      }
    ]);

    const totalEarnings = totalEarningsResult.length > 0
      ? totalEarningsResult[0].totalEarnings
      : 0;

    // Monthly Earnings
    const monthlyEarningResult = await Order.aggregate([
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" }
          },
          monthlyEarnings: { $sum: "$amount" }
        }
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 }
      }
    ]);

    // Format Monthly Earnings
    const monthlyEarnings = monthlyEarningResult.map((entry) => ({
      month: entry._id.month,
      year: entry._id.year,
      earnings: entry.monthlyEarnings.toFixed(2)
    }));

    res.status(200).json({
      totalOrders,
      totalProducts,
      totalReviews,
      totalUsers,
      totalEarnings,
      monthlyEarnings
    });
  } catch (error) {
    console.error("Error fetching admin stats", error);
    res.status(500).send({ message: "failed to fetch admin stats" });
  }
});

module.exports = router;
