import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import ThemeToggle from "../shared/ThemeToggle/ThemeToggle";
import { Tooltip } from 'react-tooltip'
import logo from "../../assets/logo.png";
const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  const handelLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        throw error;
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {
        user && <li>
        <NavLink to="/all-campaign">All Campaign</NavLink>
      </li>
      }
      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/support">Support</NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 left-0 z-50 container mx-auto navbar bg-base-100 dark:bg-dark-background transition-colors">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          {/* Drawer Toggle Button */}
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Drawer content button */}
              <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="my-drawer"
                className="drawer-overlay"
                aria-label="close sidebar"
              ></label>
              {/* Sidebar content */}
              <ul className="menu text-base-content min-h-full w-80 p-4 pt-6 bg-base-300">
                <label
                  className="btn bg-coffee font-extrabold rounded-full h-8 absolute top-0 right-0"
                  title="close"
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                >
                  X
                </label>
                {/* Links */}
                <div className="mt-6">{links}</div>
              </ul>
            </div>
          </div>
        </div>

        <img
          src={logo}
          alt="Logo"
          className="w-10 hidden md:block mr-3 rounded-lg"
        />
        <a className=" md:text-2xl font-semibold text-primary dark:text-dark-accent transition-colors">
          Elevate Funds
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-800 dark:text-dark-text transition-colors">
          {links}
        </ul>
      </div>

      {/* Login Button */}
      <div className="navbar-end gap-6">
        <ThemeToggle />
        {loading ? (
          <div className="border skeleton h-10 w-10 shrink-0 rounded-full"></div>
        ) : user ? (
          <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border border- ">
                <Tooltip id="my-tooltip" className="z-50"   place="left" />
                <img
                  alt={user?.displayName}
                  src={user?.photoURL}
                  data-tooltip-id="my-tooltip" 
                  data-tooltip-content={`${user?.displayName}`}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="bg-base-300 menu menu-sm dropdown-content rounded-box z-[10] mt-3 w-52 p-2 shadow dark:bg-dark-secondary dark:text-dark-text transition-colors"
            >
              <li className="text-center dark:text-gray-600 font-bold my-2">
                {user?.displayName}
              </li>
              {
        user && 
      <li>
        <NavLink to="/add-new-campaign">Add New Campaign</NavLink>
      </li>
      }
      {
        user && 
      <li>
        <NavLink to="/my-campaign">My Campaign</NavLink>
      </li>
      }
      {
        user && 
      <li>
        <NavLink to="/my-donations">My Donations</NavLink>
      </li>
      }
              <li>
                <button
                  onClick={handelLogOut}
                  className="btn btn-sm bg-primary text-white transition-colors"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <button
                  onClick={handelLogOut}
                  className="btn-sm bg-primary text-white rounded-md transition-colors"
                >
                  Logout
                </button>
          </div>

        ) : (<>
            <div className="">
              
          <Link
            to="/login"
            className="btn btn-sm bg-primary text-white transition-colors"
          >
            Login
          </Link>
              
          <Link
            to="/register"
            className="btn btn-sm bg-primary text-white transition-colors"
          >
            Register
          </Link>
            </div>
        </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
