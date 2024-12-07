const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
    console.log("Received Token:", token);

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);

    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      return res.status(404).json({ message: "User not found" });
    }

    next();
  } catch (error) {
    console.error("Error in auth middleware:", error.message);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

module.exports = { protect };
