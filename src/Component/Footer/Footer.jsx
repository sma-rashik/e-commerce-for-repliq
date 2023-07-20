import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link className="flex items-center mb-4 sm:mb-0">
              <img src={logo} className="h-20 mr-3" alt="Flowbite Logo" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  to="/instructors"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Instructors
                </Link>
              </li>
              <li>
                <Link to="/allclass" className="mr-4 hover:underline md:mr-6">
                  All Class
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <Link to="/" className="hover:underline">
              CricDemy™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
