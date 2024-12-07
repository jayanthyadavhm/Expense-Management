const express=require("express");
const cors = require('cors');
const app=express();
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
const PORT=process.env.PORT;
const authRoutes = require('./routes/auth.js');
const connectDb = require("./lib/db.js");

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
    connectDb()
});