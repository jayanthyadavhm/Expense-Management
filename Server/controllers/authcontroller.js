const generateToken = require("../lib/utils");
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  console.log(fullName);
  console.log(email);
  console.log(password);

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Hash password
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save(); 

   
    generateToken(newUser._id, res);

    res.status(201).json({
      success: true,
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      token: newUser.token,  
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found", 
        success: false,
      });
    }

    
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid credentials", 
        success: false,
      });
    }

    
    generateToken(user._id, res);

    return res.status(200).json({
      success: true,
      message: "Login successful",
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
     
      
    });
  } catch (error) {
    console.error("Error in login controller:", error.message);

   
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};


const logout = (req, res) => {
  try{
   res.cookie("jwt","",{maxAge:0});
   res.status(200).json({message:"Logged out successfully"});
  }
  catch (error)
  {
  console.log("Error during logged out container");
  }
  res.status(500).json({
    message:"Internal Server error"
   });
};

module.exports = { signup, login, logout };
