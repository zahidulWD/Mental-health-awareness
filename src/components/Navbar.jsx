

import { IoIosArrowDown } from "react-icons/io";
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

          {/* Mobile Menu */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-orange-100/90 rounded-box w-52 backdrop-blur-md"
              >
                <li><NavLink to="/" end className="hover:bg-transparent">Home</NavLink></li>
                <li><NavLink to="/prices" end className="hover:bg-transparent">Prices</NavLink></li>
                <li><NavLink to="/features" end className="hover:bg-transparent">Features</NavLink></li>
                <li><NavLink to="/contact" end className="hover:bg-transparent">Contact</NavLink></li>

                {/* Mobile Wellness Dropdown */}
                <li>
                  <details>
                    <summary className="cursor-pointer">Wellness</summary>
                    <ul className="pl-4 mt-2 space-y-2">
                      <li><NavLink to="/wellness/meditation">Meditation Guides</NavLink></li>
                      <li><NavLink to="/wellness/breathing">Breathing Exercises</NavLink></li>
                      <li><NavLink to="/wellness/mindfulness">Mindfulness Practices</NavLink></li>
                      <li><NavLink to="/wellness/sleep">Sleep & Relaxation</NavLink></li>
                      <li><NavLink to="/wellness/stress">Stress Management</NavLink></li>
                    </ul>
                  </details>
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="menu menu-horizontal gap-8 items-center bg-transparent">
              <li className="group">
                <NavLink to="/" end className="hover:bg-transparent">
                  <span className="relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors">
                    Home
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] w-0 group-hover:w-full transition-all"></span>
                  </span>
                </NavLink>
              </li>
              <li className="group">
                <NavLink to="/prices" end className="hover:bg-transparent">
                  <span className="relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors">
                    Prices
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] w-0 group-hover:w-full transition-all"></span>
                  </span>
                </NavLink>
              </li>
              <li className="group">
                <NavLink to="/features" end className="hover:bg-transparent">
                  <span className="relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors">
                    Features
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] w-0 group-hover:w-full transition-all"></span>
                  </span>
                </NavLink>
              </li>
              <li className="group">
                <NavLink to="/contact" end className="hover:bg-transparent">
                  <span className="relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors">
                    Contact
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] w-0 group-hover:w-full transition-all"></span>
                  </span>
                </NavLink>
              </li>

              {/* Desktop Wellness Dropdown */}
              <NavLink className="relative group">
                <span className="cursor-pointer flex items-center gap-1 text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors">
                  Wellness <IoIosArrowDown />
                </span>
                <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                  <li><NavLink to="/wellness/meditation" className="block px-4 py-2 hover:bg-[#F5F9F0] text-[#2B3E00]">Meditation Guides</NavLink></li>
                  <li><NavLink to="/wellness/breathing" className="block px-4 py-2 hover:bg-[#F5F9F0] text-[#2B3E00]">Breathing Exercises</NavLink></li>
                  <li><NavLink to="/wellness/mindfulness" className="block px-4 py-2 hover:bg-[#F5F9F0] text-[#2B3E00]">Mindfulness Practices</NavLink></li>
                  <li><NavLink to="/wellness/sleep" className="block px-4 py-2 hover:bg-[#F5F9F0] text-[#2B3E00]">Sleep & Relaxation</NavLink></li>
                  <li><NavLink to="/wellness/stress" className="block px-4 py-2 hover:bg-[#F5F9F0] text-[#2B3E00]">Stress Management</NavLink></li>
                </ul>
              </NavLink>
            </ul>
          </div>

          {/* Desktop Register */}
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
