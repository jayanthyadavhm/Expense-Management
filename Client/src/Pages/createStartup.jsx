import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function StartupCompanyForm() {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState('');
  const [industryDomain, setIndustryDomain] = useState('');
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');
  const [primaryContactName, setPrimaryContactName] = useState('');
  const [primaryContactEmail, setPrimaryContactEmail] = useState('');
  const [primaryContactPhone, setPrimaryContactPhone] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [productsOfferedDescription, setProductsOfferedDescription] = useState('');
  const [productsOfferedCapacity, setProductsOfferedCapacity] = useState('');
  const [productsOfferedPricing, setProductsOfferedPricing] = useState('');
  const [productsNeededDescription, setProductsNeededDescription] = useState('');
  const [productsNeededQuantity, setProductsNeededQuantity] = useState('');
  const [productsNeededDelivery, setProductsNeededDelivery] = useState('');
  const [collaborationType, setCollaborationType] = useState('');
  const [collaborationRegion, setCollaborationRegion] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // // Fetch user ID from local storage (JWT decoding can also be done here)
    // const token = localStorage.getItem('token'); // Assuming the token is stored in local storage
    // const userId = token ? JSON.parse(atob(token.split('.')[1])).userId : null; // Decode token to extract userId

    // if (!userId) {
    //   alert('User not authenticated');
    //   return;
    // }

    const formData = {
      companyName,
      industryDomain,
      location,
      size,
      primaryContactName,
      primaryContactEmail,
      primaryContactPhone,
      companyWebsite,
      socialMediaLinks,
      productsOfferedDescription,
      productsOfferedCapacity,
      productsOfferedPricing,
      productsNeededDescription,
      productsNeededQuantity,
      productsNeededDelivery,
      collaborationType,
      collaborationRegion,
      // createdBy: userId, // Add the user's ID to the request payload
    };

    try {
      const response = await axios.post('http://localhost:8080/api/startup-company/create', formData);
      console.log('Success:', response.data);
      alert('Company data saved successfully');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Error saving company data');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      {/* Company Information */}
      <div className="border-b border-gray-200 pb-12">
        <h2 className="text-xl font-semibold text-gray-900">Company Information</h2>
        <p className="mt-1 text-sm text-gray-600">
          Provide your company's registration and contact information.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="company-name" className="block text-sm font-medium text-gray-900">Company Name</label>
            <input
              id="company-name"
              name="company-name"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="industry-domain" className="block text-sm font-medium text-gray-900">Industry Domain</label>
            <input
              id="industry-domain"
              name="industry-domain"
              type="text"
              value={industryDomain}
              onChange={(e) => setIndustryDomain(e.target.value)}
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="location" className="block text-sm font-medium text-gray-900">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="size" className="block text-sm font-medium text-gray-900">Company Size</label>
            <input
              id="size"
              name="size"
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          {/* Primary Contact Information */}
          <div className="sm:col-span-3">
            <label htmlFor="primary-contact-name" className="block text-sm font-medium text-gray-900">Primary Contact Name</label>
            <input
              id="primary-contact-name"
              name="primary-contact-name"
              type="text"
              value={primaryContactName}
              onChange={(e) => setPrimaryContactName(e.target.value)}
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="primary-contact-email" className="block text-sm font-medium text-gray-900">Primary Contact Email</label>
            <input
              id="primary-contact-email"
              name="primary-contact-email"
              type="email"
              value={primaryContactEmail}
              onChange={(e) => setPrimaryContactEmail(e.target.value)}
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="primary-contact-phone" className="block text-sm font-medium text-gray-900">Primary Contact Phone</label>
            <input
              id="primary-contact-phone"
              name="primary-contact-phone"
              type="text"
              value={primaryContactPhone}
              onChange={(e) => setPrimaryContactPhone(e.target.value)}
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="company-website" className="block text-sm font-medium text-gray-900">Company Website</label>
            <input
              id="company-website"
              name="company-website"
              type="url"
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="social-media-links" className="block text-sm font-medium text-gray-900">Social Media Links</label>
            <input
              id="social-media-links"
              name="social-media-links"
              type="text"
              value={socialMediaLinks.join(', ')}
              onChange={(e) => setSocialMediaLinks(e.target.value.split(', '))}
              placeholder="Enter links separated by commas"
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>
        </div>
      </div>

      {/* Collaboration Information */}
      <div className="border-b border-gray-200 pb-12">
        <h2 className="text-xl font-semibold text-gray-900">Collaboration Information</h2>
        <p className="mt-1 text-sm text-gray-600">
          Tell us about the products/services your company offers and needs, as well as collaboration preferences.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="products-offered-description" className="block text-sm font-medium text-gray-900">Products/Services Offered</label>
            <textarea
              id="products-offered-description"
              name="products-offered-description"
              value={productsOfferedDescription}
              onChange={(e) => setProductsOfferedDescription(e.target.value)}
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="products-offered-capacity" className="block text-sm font-medium text-gray-900">Capacity</label>
            <input
              id="products-offered-capacity"
              name="products-offered-capacity"
              type="text"
              value={productsOfferedCapacity}
              onChange={(e) => setProductsOfferedCapacity(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="products-offered-pricing" className="block text-sm font-medium text-gray-900">Pricing Model</label>
            <input
              id="products-offered-pricing"
              name="products-offered-pricing"
              type="text"
              value={productsOfferedPricing}
              onChange={(e) => setProductsOfferedPricing(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="products-needed-description" className="block text-sm font-medium text-gray-900">Products/Services Needed</label>
            <textarea
              id="products-needed-description"
              name="products-needed-description"
              value={productsNeededDescription}
              onChange={(e) => setProductsNeededDescription(e.target.value)}
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="products-needed-quantity" className="block text-sm font-medium text-gray-900">Quantity</label>
            <input
              id="products-needed-quantity"
              name="products-needed-quantity"
              type="text"
              value={productsNeededQuantity}
              onChange={(e) => setProductsNeededQuantity(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="products-needed-delivery" className="block text-sm font-medium text-gray-900">Delivery Requirements</label>
            <input
              id="products-needed-delivery"
              name="products-needed-delivery"
              type="text"
              value={productsNeededDelivery}
              onChange={(e) => setProductsNeededDelivery(e.target.value)}
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>

          {/* Additional Fields */}
          <div className="sm:col-span-3">
            <label htmlFor="collaboration-type" className="block text-sm font-medium text-gray-900">Target Collaboration Type</label>
            <select
              id="collaboration-type"
              name="collaboration-type"
              value={collaborationType}
              onChange={(e) => setCollaborationType(e.target.value)}
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            >
              <option value="">Select a collaboration type</option>
              <option value="Strategic Partnership">Strategic Partnership</option>
              <option value="One-Time Transaction">One-Time Transaction</option>
              <option value="Long-Term Supplier">Long-Term Supplier</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="collaboration-region" className="block text-sm font-medium text-gray-900">Preferred Collaboration Region</label>
            <input
              id="collaboration-region"
              name="collaboration-region"
              type="text"
              value={collaborationRegion}
              onChange={(e) => setCollaborationRegion(e.target.value)}
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 border border-gray-300 focus:ring-opacity-50"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          className="w-full py-2 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-700"
        >
          Submit
        </button>
       
      </div>
    </form>
  );
}
