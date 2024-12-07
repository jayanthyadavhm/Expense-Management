"use client";
import "../index.css";
import Layout from "../Components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import FeaturesAndStats from "./Feature";

const features = [
  {
    name: "AI-Powered Insights",
    description:
      "Get personalized financial recommendations tailored to your business.",
  },
  {
    name: "Expense Tracking",
    description:
      "Easily track and categorize expenses with NLP-powered automation.",
  },
  {
    name: "Blockchain Security",
    description:
      "Ensure tamper-proof records with transparent blockchain integration.",
  },
  {
    name: "Predictive Analytics",
    description:
      "Forecast future expenses and cash flow needs with advanced AI models.",
  },
];

const stats = [
  { name: "Businesses Supported", value: "500+" },
  { name: "Predicted Savings", value: "Up to 30%" },
  { name: "Data Security", value: "100% Transparent" },
  { name: "User Satisfaction", value: "95%" },
];

export default function Home() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard"); // Redirect to dashboard if token exists
    } else {
      navigate("/login"); // Redirect to login if no token
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-sans">
                <Typewriter
                  words={[
                    "In the Era of 90% Failed StartUps, Do You Want to Survive?",
                  ]}
                  loop={1} // Animates once
                  typeSpeed={100}
                  deleteSpeed={50}
                  cursor
                  cursorStyle="|"
                />
              </h1>

              <p className="mt-8 text-lg text-gray-500 sm:text-xl">
                Empower your business with AI-driven insights, secure blockchain
                tracking, and predictive analytics to optimize spending, improve
                profitability, and ensure financial stability.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={handleGetStartedClick}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </button>
                <Link
                  to="/learn-more"
                  className="text-sm font-semibold text-gray-900"
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturesAndStats />

      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <h2 className="text-4xl font-semibold text-white">
              Helping Small Businesses Succeed
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our AI-powered tool has already transformed financial management
              for businesses around the globe.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="text-center">
                <dt className="text-sm font-medium text-gray-400">
                  {stat.name}
                </dt>
                <dd className="mt-2 text-3xl font-bold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-16 sm:py-24 mt-56 mb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold text-white">
              Subscribe to Updates
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Stay updated with the latest insights and updates about our tool.
            </p>
            <div className="mt-6 flex gap-x-4">
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-auto rounded-md bg-gray-800 px-3.5 py-2 text-gray-200 shadow-sm focus:outline focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-600 px-3.5 py-2 text-white font-semibold shadow-sm hover:bg-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
