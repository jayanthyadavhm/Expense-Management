const express = require("express");
const { signup, login, logout } = require("../controllers/authcontroller.js"); 
const getProfile=require("../controllers/getProfile.js")
const router = express.Router();
const authenticate = require("../middlewares/authMiddleware.js");
router.post("/signup", signup); 
router.post("/login", login);  
router.post("/logout", logout); 
router.get("/profile", authenticate, getProfile);
module.exports = router;
