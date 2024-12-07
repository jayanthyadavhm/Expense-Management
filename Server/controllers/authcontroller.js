const generateToken = require("../lib/utils");
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ fullName, email, password: hashedPassword });
    await newUser.save();

    const token = generateToken(newUser._id);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token, // Return token for local storage
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error in signup:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found", success: false });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      console.log("Invalid credentials");
      return res.status(401).json({ message: "Invalid credentials", success: false });
    }

    const token = generateToken(user._id);
    console.log("Generated token:", token);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token, // Return token for local storage
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error in login:", error.message);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const logout = (req, res) => {
  try {
    // Since local storage is used, no server-side cookie manipulation is required
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { signup, login, logout };
