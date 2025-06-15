const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("./user.model");
const generateToken = require("../middleware/generateToken");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();
require("dotenv").config(); // Ensure .env file is loaded


// register  endpoint
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing required fields!" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Create and save new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    // ✅ Send only success message
    res.status(201).send({ message: "User registered successfully!" });

  } catch (error) {
    res.status(500).send({ message: "Error registering user" });
  }
});


//login end point 

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password!" });
    }

    const token = await generateToken(user.id);
    
    // ✅ Set cookie with token
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    // ✅ Send all user details in response
    res.status(200).json({
      message: "User logged in successfully!",
      token,
      user: {
        _id: user._id,
        username: user.username,  
        email: user.email,
        role: user.role,
        profileImage:user.profileImage,
         bio:user.bio,
         profession:user.profession,
      },
    });

  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Error logging in user" });
  }
});
 //logout endpoints
 router.post("/logout",  (req, res) => {
  res.clearCookie('token');
  res.status(200).send({ message: "Logged out successfully!" });
 })



 //delete a user endpoint 
 router.delete("/users/:id", async (req, res) => {
  try {
    const {id}=req.params;
    const user=await User.findByIdAndDelete(id);
    if(!user){
      return res.status(404).send({message:"User not found"})
    }
    res.status(200).send({message:"User deleted successfully!"})
  } catch (error) {
    console.error(" Error deleting  user:", error);
    res.status(500).json({ message: "Error deleting user" });
  }
 })
 //get all users endpoint 
 router.get('/users',async(req,res) => {
  try {
    const users = await User.find({},'id email role').sort({createdAt: -1});
    res.status(200).send(users)
  } catch (error) {
    console.error(" Error fetching  users:", error);
    res.status(500).send({ message: "Error fetching  user" });
  }
 })


 //update user role
 router.put("/users/:id", async (req, res) => {
  try {
    const {id} =req.params;
    const {role}=req.body;
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
      }
      res.status(200).send({ message: "User role updated successfully!" });
  } catch (error) {
    console.error(" Error updating user role:", error);
    res.status(500).send({ message: "Error updating user role" });
  }
 }
)

//edit or update  profile end point
router.patch('/edit-profile',async (req,res) => {
  try {
    const {userId,username,profileImage,bio,profession}= req.body;
    if(!userId){
      return res.status(400).send({message:"Please provide user id"})
    }
    const user = await User.findById(userId);
    if(!user){
      return res.status(400).send({message:"User Not Found !"})
    }
    // update Profile image
    if (username !== undefined) user.username =username;
    if (profileImage !== undefined) user.profileImage= profileImage;
    if (bio !== undefined) user.bio = bio;
    if (profession !== undefined) user.profession = profession;
    await user.save();
    res.status(200).send({ message: "Profile updated successfully!",
      user:{
      _id:user._id,
      username: user.username,  
      email: user.email,
      role: user.role,
      profileImage:user.profileImage,
       bio:user.bio,
       profession:user.profession,
    },
   });
    



  } catch (error) {
    console.error(" Error updating  user profile:", error);
    res.status(500).send({ message: "Error updating user profile" });
  }
})
module.exports = router;
