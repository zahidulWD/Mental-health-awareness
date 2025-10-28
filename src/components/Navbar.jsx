

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#FDF1DA]/90 shadow-md backdrop-blur-lg transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-[#FA7054] font-normal md:font-medium lg:font-semibold text-lg md:text-xl lg:text-2xl">
              Mind <span className="text-[#4F7100]">Nest</span>
            </h1>
          </Link>

          {/* Mobile / Tablet Menu Icon */}
          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-orange-100/90 rounded-box w-52 backdrop-blur-md"
              >
                <li>
                  <NavLink to="/" end className="hover:bg-transparent">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/prices" end className="hover:bg-transparent">
                    Prices
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/features" end className="hover:bg-transparent">
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" end className="hover:bg-transparent">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className="btn bg-[#4F7100] text-white rounded-3xl font-semibold mt-2"
                  >
                    Register now
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop / Tablet Horizontal Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="menu menu-horizontal gap-8 items-center bg-transparent">
              {["/", "/prices", "/features", "/contact"].map((path, index) => {
                const names = ["Home", "Prices", "Features", "Contact"];
                return (
                  <li key={index} className="group bg-transparent hover:bg-transparent">
                    <NavLink to={path} end className="hover:bg-transparent">
                      {({ isActive }) => (
                        <span
                          className={`relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors`}
                        >
                          {names[index]}
                          <span
                            className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] transition-all duration-300 ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                          ></span>
                        </span>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop Register Button */}
          <div className="hidden lg:flex">
            <NavLink
              to="/register"
              className="btn bg-[#4F7100] text-white rounded-3xl font-semibold px-6"
            >
              Register now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
