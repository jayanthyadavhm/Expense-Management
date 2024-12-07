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
    alert(`Collaborate request sent for company ID: ${companyId}`);
    // Implement collaboration logic (e.g., API call)
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Submitted Companies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company._id}
            className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-2">{company.companyName}</h3>
            <p className="text-gray-600">
              <strong>Industry:</strong> {company.industryDomain}
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> {company.location}
            </p>
            <button
              onClick={() => handleCollaborate(company._id)}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Collaborate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
