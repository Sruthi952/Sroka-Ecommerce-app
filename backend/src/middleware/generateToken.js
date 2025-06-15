const jwt = require("jsonwebtoken");
const User = require("../users/user.model");
require("dotenv").config();

// ✅ Use correct env variable name
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      console.error("User not found in generateToken!");
      return null;
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    return null;
  }
};

module.exports = generateToken;
