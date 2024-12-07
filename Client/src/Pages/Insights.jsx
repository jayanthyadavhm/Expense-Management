import React, { useState } from "react";
import axios from "axios";

export default function ExpenseUploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [insights, setInsights] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage("Please select a dataset file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Upload the file to the backend
      const uploadResponse = await axios.post(
        "http://localhost:8080/api/dataset/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Assuming the backend processes and stores the file and generates some analysis
      setMessage(uploadResponse.data.message || "File uploaded successfully!");

      // Set the insights (assuming the backend processes the dataset and returns analysis)
      setInsights(uploadResponse.data.insights);

    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to upload dataset. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Add Your Company Expenses Dataset
      </h1>
      <p className="text-gray-600 mb-6">
        Upload your expense dataset file (e.g., Excel, CSV) for analysis.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="fileInput"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Choose Dataset File:
          </label>
          <input
            type="file"
            id="fileInput"
            accept=".csv, .xlsx"
            onChange={handleFileChange}
            className="border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload and Generate Insights
        </button>
      </form>

      {message && <p className="text-green-600 font-medium mt-4">{message}</p>}

      {insights && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Generated Insights</h2>
          <pre className="bg-gray-100 p-4">{JSON.stringify(insights, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
