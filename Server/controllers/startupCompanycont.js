const Company = require('../models/company');

// Controller to handle storing company data
const submitCompany = async (req, res) => {
  try {
    const newCompany = new Company({
      companyName: req.body.companyName,
      industryDomain: req.body.industryDomain,
      location: req.body.location,
      size: req.body.size,
      primaryContactName: req.body.primaryContactName,
      primaryContactEmail: req.body.primaryContactEmail,
      primaryContactPhone: req.body.primaryContactPhone,
      companyWebsite: req.body.companyWebsite,
      socialMediaLinks: req.body.socialMediaLinks,
      productsOfferedDescription: req.body.productsOfferedDescription,
      productsOfferedCapacity: req.body.productsOfferedCapacity,
      productsOfferedPricing: req.body.productsOfferedPricing,
      productsNeededDescription: req.body.productsNeededDescription,
      productsNeededQuantity: req.body.productsNeededQuantity,
      productsNeededDelivery: req.body.productsNeededDelivery,
      collaborationType: req.body.collaborationType,
      collaborationRegion: req.body.collaborationRegion,
      // createdBy: req.user._id, 
    });
    console.log('Request Body:', req.body);


    await newCompany.save();
    res.status(201).send({ message: 'Company data saved successfully' });
  } catch (error) {
    console.error('Error saving company data:', error);
    res.status(500).send({ message: 'Error saving company data', error: error.message });
  }
  
};

module.exports = submitCompany ;
