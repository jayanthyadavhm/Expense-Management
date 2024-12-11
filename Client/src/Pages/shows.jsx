import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShowCompanies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/startup-company/show');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  const handleCollaborate = (companyId) => {
    alert(`Collaboration request sent for company ID: ${companyId}`);
    // Implement collaboration logic (e.g., API call)
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-center mb-10 text-gray-800">Collaborate with Companies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company._id}
            className="bg-white border border-gray-300 rounded-md p-4 hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm font-medium">
                  {company.companyName.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">{company.companyName}</h3>
                <p className="text-sm text-gray-600">{company.industryDomain}</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-700">
                <strong>Location:</strong> {company.location}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Size:</strong> {company.size}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Products Offered:</strong> {company.productsOfferedDescription || 'N/A'}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Products Needed:</strong> {company.productsNeededDescription || 'N/A'}
              </p>
              {company.companyWebsite && (
                <a
                  href={company.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Visit Website
                </a>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-600">
                {company.primaryContactName ? `Contact: ${company.primaryContactName}` : 'No Contact Info'}
              </p>
              <button
                onClick={() => handleCollaborate(company._id)}
                className="text-sm bg-gray-800 text-white py-1 px-3 rounded hover:bg-gray-700 transition"
              >
                Collaborate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
