import React, { useEffect } from "react";
import "animate.css"; // Import the animation library

const features = [
  { name: "AI-Powered Insights", description: "Get personalized financial recommendations tailored to your business." },
  { name: "Expense Tracking", description: "Easily track and categorize expenses with NLP-powered automation." },
  { name: "Blockchain Security", description: "Ensure tamper-proof records with transparent blockchain integration." },
  { name: "Predictive Analytics", description: "Forecast future expenses and cash flow needs with advanced AI models." },
];

const stats = [
  { name: "Businesses Supported", value: "500+" },
  { name: "Predicted Savings", value: "Up to 30%" },
  { name: "Data Security", value: "100% Transparent" },
  { name: "User Satisfaction", value: "95%" },
];

const FeaturesAndStats = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const animateOnIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    };

    const observer = new IntersectionObserver(animateOnIntersection, observerOptions);

    const elementsToAnimate = document.querySelectorAll(".feature, .stat");
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      if (observer) {
        elementsToAnimate.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div>
      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Solution?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="feature bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl opacity-0" // Initially hidden
              >
                <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-4 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <h2 className="text-4xl font-semibold text-white">
              Helping Small Businesses Succeed
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our AI-powered tool has already transformed financial management for businesses around the globe.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="stat bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl opacity-0" // Initially hidden
              >
                <dt className="text-sm font-medium text-gray-400">{stat.name}</dt>
                <dd className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndStats;
