const express = require("express");
const { uploadDataset } = require("../controllers/datasetController");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadDataset);

module.exports = router;
