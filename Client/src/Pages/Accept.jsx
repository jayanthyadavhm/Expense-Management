import React from "react";

const AcceptRejectPage = () => {
  const handleAccept = () => {
    alert("You have accepted the request!");
  };

  const handleReject = () => {
    alert("You have rejected the request.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Action Required
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Please review the request and take an appropriate action.
        </p>
        <div className="flex justify-between space-x-4">
          <button
            onClick={handleAccept}
            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptRejectPage;
