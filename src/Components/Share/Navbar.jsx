import { Link, NavLink } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import ThemeChange from "./ThemeChange";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const user = false;
  const navItems = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "Best Sales", path: "/" },
    { id: 2, name: "About", path: "/" },
  ];
  return (
    <div className="navbar bg-green-100 m-0 p-0">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-300 rounded-box w-52"
          >
            {navItems?.map((item) => (
              <NavLink to="/" className="btn bg-transparent" key={item.id}>
                {item.name}
              </NavLink>
            ))}
            <NavLink to="/" className="btn bg-transparent">
              Login / SignUp
            </NavLink>
            <li className="mx-auto btn btn-circle">
              <ThemeChange />
            </li>
          </ul>
        </div>
        <Link to="/" className="text-center m-0 p-0">
          <img className="m-0 p-0" src={logo} alt="Book bridge" width={120} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems?.map((item) => (
            <NavLink
              to="/"
              className="btn bg-transparent font-bold"
              key={item.id}
            >
              {item.name}
            </NavLink>
          ))}
          <li className="mt-3 bg-transparent">
            <ThemeChange />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          {/* wish list */}
          <div className="dropdown dropdown-end" title="Wish List">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <FcLike size={20} />
                <span className="badge badge-xs indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-green-300 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View Wish List
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="dropdown dropdown-end" title="Add to Card">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-xs indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-green-300 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-300 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="#">
              <button className="btn btn-outline border-2 rounded-xl border-yellow-300 hidden md:inline-block text-black hover:bg-yellow-100 hover:text-black hover:border-yellow-600 p-2 mx-2 font-bold">
                Login / SignUp
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
