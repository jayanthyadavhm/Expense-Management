require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 3000;

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(cors());
app.use(express.json());

// Multer setup for file upload
const upload = multer({ dest: "uploads/" });

app.post("/analyze-expenditure", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).send("No file uploaded.");
        }

        // Read the uploaded file (assume it's a CSV)
        const filePath = path.join(__dirname, file.path);
        const fileContent = fs.readFileSync(filePath, "utf8");

        // Generate insights prompt
        const prompt = `
        Analyze the following company expenditure data and provide insights in text format:
        {
          "Unnecessary Expenses": "List specific expenses and why they are unnecessary.",
          "Cost Optimization Suggestions": "Suggest areas where costs can be reduced and the potential savings.",
          "Trends and Patterns": "Identify trends in spending (e.g., recurring high expenses).",
          "Recommendations": "Provide actionable recommendations for improving financial efficiency.",
          "Predicted Growth": "Estimate future growth based on expenditure trends."
        }
        Data:
        ${fileContent}
        Make sure to include detailed reasoning for each point.
        `;

        console.log("Generated prompt:", prompt);

        // Generate content using Gemini AI
        const result = await model.generateContent(prompt);
        const rawText = result.response.text(); // Fetch raw text from response
        console.log("Raw AI Output:", rawText);

        // Cleanup the uploaded file
        fs.unlinkSync(filePath);

        // Send the response
        res.json({ insights: rawText });
    } catch (error) {
        console.error("Error analyzing expenditure:", error);
        res.status(500).send("Error analyzing expenditure.");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
