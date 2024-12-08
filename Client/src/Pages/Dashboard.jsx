import React, { useState, useEffect } from "react";
import axios from "axios";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import UploadExpenditure from "./Insights";
import ShowCompanies from "./shows";
import FeaturesAndStats from "./Feature";
import StartupCompanyForm from "./createStartup";

const navigation = [
  { name: "Dashboard", view: "dashboard" },
  { name: "Register", view: "register" }, 
  { name: "Collaborate", view: "collaborate" },
  { name: "Expense Track", view: "expense" },
  { name: "Profile", view: "profile" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Profile = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 shadow rounded-lg">
      <div className="flex items-center space-x-8">
        <img
          src={user?.imageUrl || "https://via.placeholder.com/200"}
          alt="Profile"
          className="h-48 w-48 rounded-full shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{user?.username || "John Doe"}</h1>
          <p className="text-lg text-gray-600 mb-4">{user?.email || "john.doe@example.com"}</p>
          <p className="text-gray-700">
            Welcome to your profile! Update your details or explore the dashboard using the menu.
          </p>
        </div>
      </div>
    </div>
  );
};

const ExpenseTrack = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/insights");
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white p-6 shadow rounded-lg">
      <h1
        className="text-2xl font-bold mb-4 hover:underline cursor-pointer"
        onClick={handleNavigation}
      >
        Expense Track
      </h1>
      <p className="text-gray-700">
        Explore AI-based analytics, performance metrics, and expense tracking.
      </p>
    </div>
  );
};
const Register = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white p-6 shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <p className="text-gray-700">
        
      </p>
    </div>
  );
};

const Collaborate = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/collaborate");
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white p-6 shadow rounded-lg">
      <h1
        className="text-2xl font-bold mb-4 hover:underline cursor-pointer"
        onClick={handleNavigation}
      >
        Collaborate
      </h1>
      <p className="text-gray-700">
        Team up with others, share ideas, and work on exciting projects together.
      </p>
    </div>
  );
};

export default function Dashboard() {
  const [currentView, setCurrentView] = useState("profile");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          const response = await axios.get("http://localhost:8080/api/user/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img alt="Your Logo" className="h-8 w-8" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => setCurrentView(item.view)}
                          className={classNames(
                            currentView === item.view
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <Menu as="div" className="relative ml-3">
                      <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user?.imageUrl || "https://via.placeholder.com/50"}
                          alt="User"
                        />
                      </Menu.Button>
                      <Transition
                        as={React.Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            <button
                              onClick={handleLogout}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Logout
                            </button>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>

      <main>
        {currentView === "profile" && <Profile user={user} />}
        {currentView === "dashboard" && (
          <div className="max-w-7xl mx-auto mt-10 p-6 bg-gray-100 shadow rounded-lg">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            
                    





            <FeaturesAndStats/>
          </div>
       

        )}
        {currentView === "expense" && <UploadExpenditure />}
        {currentView === "insights" && <Insights />}
        {currentView === "collaborate" && <ShowCompanies/>}
        {currentView==="register" && <StartupCompanyForm/>}
      </main>
    </div>
  );
}
