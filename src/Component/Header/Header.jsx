import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src={logo} className="w-40 " alt="Flowbite Logo" />
          </Link>

          <div className="flex items-center md:order-2">
            {user ? (
              <div className="flex items-center">
                <Link
                  to="/dashboard/myclass"
                  className="mr-3 ml-3 text-lg font-semibold text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  type="button"
                  className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  {user.photoURL ? (
                    <img
                      className="h-10 w-10 rounded-3xl border-blue-500"
                      src={user.photoURL}
                      alt={user.displayName}
                      title={user.displayName}
                    />
                  ) : (
                    <img
                      className="h-10 w-10 rounded-3xl border-blue-500"
                      src="https://i.ibb.co/zRCMzv0/download.jpg"
                      alt=""
                    />
                  )}
                </button>
                <button
                  onClick={handleLogOut}
                  type="button"
                  className="text-lg underline ml-5 font-semibold text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="mr-3 text-lg font-semibold text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="mr-3 ml-3 text-lg font-semibold text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Sign Up
                </Link>
              </div>
            )}
            {user && (
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                {/* User dropdown menu */}
              </div>
            )}
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={mobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="w-6 h-6" />{" "}
            </button>
          </div>
          <div
            className={`${
              mobileMenuOpen ? "" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="instructors"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Instructor
                </Link>
              </li>
              <li>
                <Link
                  to="allclass"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Classes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
