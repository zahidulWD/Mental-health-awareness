
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, logout } = useContext(AppContext);


  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Prices", path: "/prices" },
    { name: "Features", path: "/features" },
    { name: "Our Consultants", path: "/consultants" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#FDF1DA]/90 shadow-md backdrop-blur-lg transition-all duration-300">
      <div className="container-custom flex justify-between items-center py-4">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-[#FA7054] font-normal md:font-medium lg:font-semibold text-lg md:text-xl lg:text-2xl">
            Mind <span className="text-[#4F7100]">Nest</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal gap-8 items-center bg-transparent">
            {menuItems.map(item => (
              <li key={item.name} className="group">
                <NavLink to={item.path} end className="hover:bg-transparent">
                  <span className="relative inline-block text-base font-medium text-gray-700 hover:text-[#4F7100] transition-colors">
                    {item.name}
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-[#4F7100] w-0 group-hover:w-full transition-all"></span>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Login/User */}
        <div className="hidden lg:flex">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-sm rounded-full">{user.email[0].toUpperCase()}</label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li className="font-medium">{user.email}</li>
                <li>
                  <button onClick={logout} className="btn btn-sm bg-red-600 text-white w-full">Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login" className="btn bg-[#4F7100] text-white rounded-3xl px-6 font-semibold">Login</NavLink>
          )}
        </div>

        {/* Mobile Drawer + User */}
        <div className="lg:hidden flex items-center gap-2">

          {/* User dropdown */}
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-sm rounded-full">{user.email[0].toUpperCase()}</label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
                <li className="font-medium">{user.email}</li>
                <li>
                  <button onClick={logout} className="btn bg-red-600 text-white w-full">Logout</button>
                </li>
              </ul>
            </div>
          )}

          {/* Drawer */}
          <div className="drawer">
            <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-end">
              {/* Hamburger Button */}
              <label htmlFor="mobile-drawer" className="btn btn-ghost p-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>

            <div className="drawer-side">
              <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
              <ul className="menu bg-[#FDF1DA] min-h-full w-64 p-6 gap-4">

                {/* Drawer Logo */}
                <Link to="/" className="text-[#FA7054] font-medium text-2xl mb-6 block">
                  Mind <span className="text-[#4F7100]">Nest</span>
                </Link>

                {/* Menu Items */}
                {menuItems.map(item => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className="text-gray-700 hover:text-[#4F7100]"
                      onClick={() => document.getElementById("mobile-drawer")?.click()}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}

                {/* Login button if user not logged in */}
                {!user && (
                  <div className="mt-6">
                    <NavLink
                      to="/login"
                      className="btn bg-[#4F7100] text-white w-full"
                      onClick={() => document.getElementById("mobile-drawer")?.click()}
                    >
                      Login
                    </NavLink>
                  </div>
                )}

              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
