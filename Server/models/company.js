const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  industryDomain: { type: String, required: true },
  location: { type: String, required: true },
  size: { type: String, required: true },
  primaryContactName: { type: String, required: true },
  primaryContactEmail: { type: String, required: true },
  primaryContactPhone: { type: String, required: true },
  companyWebsite: { type: String },
  socialMediaLinks: { type: [String] },
  productsOfferedDescription: { type: String },
  productsOfferedCapacity: { type: String },
  productsOfferedPricing: { type: String },
  productsNeededDescription: { type: String },
  productsNeededQuantity: { type: String },
  productsNeededDelivery: { type: String },
  collaborationType: { type: String },
  collaborationRegion: { type: String },
  // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
});

module.exports = mongoose.model('Company', companySchema);
