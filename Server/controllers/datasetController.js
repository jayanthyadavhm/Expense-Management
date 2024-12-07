const fs = require("fs");
const path = require("path");

const uploadDataset = async (req, res) => {
  try {
    // Check if a file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Log file information
    console.log("Uploaded File Details:", req.file);

    // Resolve file path
    const filePath = path.resolve(req.file.path);
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found at path: ${filePath}`);
    }

    // Respond with success message and file details
    res.status(200).json({
      message: "File uploaded and stored successfully!",
      fileDetails: {
        originalName: req.file.originalname,
        storedPath: filePath,
      },
    });
  } catch (error) {
    console.error("Error processing dataset:", error);

    // Cleanup the file in case of error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({
      message: "Failed to process dataset. Please try again later.",
      error: error.message,
    });
  }
};

module.exports = { uploadDataset };
