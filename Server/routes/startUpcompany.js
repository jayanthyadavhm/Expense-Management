const express = require("express");
const SubmitCompany = require("../controllers/startupCompanycont");
const Company = require("../models/company"); // Import the Company model

const router = express.Router();

// Create a new Startup Company
router.post("/create", SubmitCompany);

// Show all startup companies
router.get('/show', async (req, res) => {
    try {
        const companies = await Company.find({});
        res.status(200).json(companies);
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ message: 'Error fetching companies', error: error.message });
    }
});

// // Get all startup companies created by a specific user
// router.get("/user/:userId", startupCompanyController.getCompaniesByUser);

// // Get a specific startup company by ID
// router.get("/:companyId", startupCompanyController.getCompanyById);

// // Update a specific startup company
// router.put("/:companyId", startupCompanyController.updateCompany);

// // Delete a startup company
// router.delete("/:companyId", startupCompanyController.deleteCompany);

module.exports = router;
