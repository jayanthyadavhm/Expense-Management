import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Logo"
                className="h-8 mr-3"
              />
              <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                YourBrand
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>

      {/* Fixed Footer Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md">
        <div className="sm:flex sm:items-center sm:justify-between container mx-auto px-4 py-4">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 YourBrand™. All rights reserved.
          </span>
          <div className="flex space-x-6 sm:justify-center">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.293H9.692V10.5h3.129V8.131c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.465.099 2.797.143v3.24H17.61c-1.588 0-1.896.755-1.896 1.862V10.5h3.793l-.494 4.207h-3.299V24h6.462c.732 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.827 9.827 0 0 1-2.828.775A4.942 4.942 0 0 0 23.337 3.2a9.864 9.864 0 0 1-3.127 1.194 4.925 4.925 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.925 4.925 0 0 0 1.524 6.573 4.901 4.901 0 0 1-2.23-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.93 4.93 0 0 0 4.604 3.417A9.873 9.873 0 0 1 0 21.539a13.921 13.921 0 0 0 7.548 2.212c9.056 0 14.009-7.508 14.009-14.009 0-.213-.005-.426-.014-.637A9.984 9.984 0 0 0 24 4.557z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
