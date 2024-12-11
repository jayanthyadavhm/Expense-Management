// routes/user.js
const express = require("express");

const User = require("../models/user"); 
const { protect } = require("../middlewares/authMiddleware");
const getUser = require("../controllers/getUser");

const router = express.Router();


router.get("/me",protect,getUser);

module.exports = router;
