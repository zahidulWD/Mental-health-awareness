import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo_2 1 (1).png";

const Navbar = () => {
  return (
    <div className="bg-[#FDF1DA]">
        <div className="container-custom">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-orange-200"
            >
              <li className="group bg-transparent hover:bg-transparent">
                <NavLink to="/" end className="hover:bg-transparent">
                  {({ isActive }) => (
                    <span
                      className={`relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors hover:bg-transparent px-0 py-0`}
                    >
                      Home
                      <span
                        className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="group bg-transparent hover:bg-transparent">
                <NavLink to="/prices" end className="hover:bg-transparent">
                  {({ isActive }) => (
                    <span
                      className={`relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors hover:bg-transparent px-0 py-0`}
                    >
                      Prices
                      <span
                        className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="group bg-transparent hover:bg-transparent">
                <NavLink to="/features" end className="hover:bg-transparent">
                  {({ isActive }) => (
                    <span
                      className={`relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors hover:bg-transparent px-0 py-0`}
                    >
                      Features
                      <span
                        className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="group bg-transparent hover:bg-transparent">
                <NavLink to="/contact" end className="hover:bg-transparent">
                  {({ isActive }) => (
                    <span
                      className={`relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors hover:bg-transparent px-0 py-0`}
                    >
                      Contact
                      <span
                        className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="group bg-transparent hover:bg-transparent">
                <NavLink
                  to="/register"
                  className="btn bg-[#4F7100] text-white rounded-3xl font-semibold px-6 py-5 "
                >
                  Register now
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-auto w-18 lg:w-28 ml-20 lg:ml-0"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 items-center bg-transparent">
            <li className="group bg-transparent hover:bg-transparent">
              <NavLink to="/" end className="hover:bg-transparent">
                {({ isActive }) => (
                  <span
                    className={`relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors hover:bg-transparent px-0 py-0`}
                  >
                    Home
                    <span
                      className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </span>
                )}
              </NavLink>
            </li>
            <li className="group bg-transparent hover:bg-transparent">
              <NavLink to="/prices" end className="hover:bg-transparent">
                {({ isActive }) => (
                  <span
                    className={`relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors hover:bg-transparent px-0 py-0`}
                  >
                    Prices
                    <span
                      className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </span>
                )}
              </NavLink>
            </li>
            <li className="group bg-transparent hover:bg-transparent">
              <NavLink to="/features" end className="hover:bg-transparent">
                {({ isActive }) => (
                  <span
                    className={`relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors hover:bg-transparent px-0 py-0`}
                  >
                    Features
                    <span
                      className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </span>
                )}
              </NavLink>
            </li>
            <li className="group bg-transparent hover:bg-transparent">
              <NavLink to="/contact" end className="hover:bg-transparent">
                {({ isActive }) => (
                  <span
                    className={`relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors hover:bg-transparent px-0 py-0`}
                  >
                    Contact
                    <span
                      className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <NavLink to="/register" className="btn bg-[#4F7100] text-white rounded-3xl font-semibold px-6 py-5 ">
            Register now
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;


