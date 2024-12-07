const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user.js");
const startupCompanyRoutes = require("./routes/startUpcompany.js");

const connectDb = require("./lib/db.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

// Use routes
app.use("/api/auth", authRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/user", userRoutes);


app.use("/api/startup-company", startupCompanyRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
  connectDb();
});
