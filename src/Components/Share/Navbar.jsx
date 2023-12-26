import { Link, NavLink } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
// import Marquee from "react-fast-marquee";
import ThemeChange from "./ThemeChange";
import logo from "../../assets/logo.png";
import { useState } from "react";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const user = false;
  const navItems = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "Best Sales", path: "/" },
    { id: 2, name: "About", path: "/about" },
  ];

  const openSearchModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      {/* navbar */}
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
              className="menu menu-sm dropdown-content mt-3 z-[15] p-2 shadow bg-green-300 rounded-box w-52 text-black"
            >
              {navItems?.map((item) => (
                <NavLink
                  to={`${item.path}`}
                  className="btn bg-transparent"
                  key={item.id}
                >
                  {item.name}
                </NavLink>
              ))}
              {!user ? (
                <NavLink to="/" className="btn bg-transparent">
                  Login / SignUp
                </NavLink>
              ) : (
                <NavLink to="/">Profile</NavLink>
              )}
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
          <ul className="menu menu-horizontal px-1 text-black">
            {navItems?.map((item) => (
              <NavLink
                to={`${item.path}`}
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
            {/* search */}
            <div className="dropdown dropdown-end" title="Search">
              <button
                onClick={openSearchModal}
                className="btn btn-circle bg-transparent"
              >
                <FcSearch size={25} />
              </button>
            </div>
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
                className="mt-3 z-[10] card card-compact dropdown-content w-52 bg-green-300 shadow"
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
                className="mt-3 z-[10] card card-compact dropdown-content w-52 bg-green-300 shadow"
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
              <div className="hidden md:inline-block dropdown dropdown-end">
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
                  className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-green-300 rounded-box w-52"
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
              <Link to="/login">
                <button className="btn btn-outline border-2 rounded-xl border-yellow-300 hidden md:inline-block text-black hover:bg-yellow-100 hover:text-black hover:border-yellow-600 p-2 mx-2 font-bold">
                  Login / SignUp
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* marquee */}
      {/* <div className="relative font-semibold">
        <button className="btn z-10 bg-green-600 hover:bg-green-500 text-white absolute">
          Notice
        </button>
        <Marquee>
          <p className="mt-3 mx-5">
            পড় তোমার প্রভুর নামে যিনি তোমাকে সৃষ্টি করেছেন। 📕{" "}
            <span className="text-green-800">(আল-কোরআন)</span>
          </p>
          <p className="mt-3 mx-5">
            বইগুলি হলো চিরস্থায়ী স্বতন্ত্র বন্ধন, জানানো এবং বিশ্ববিদ্যালয়ের
            অনুসন্ধানের জন্য একটি অজুহাত ভ্রমণের উপায়। 🔖
          </p>
          <p className="mt-3 mx-5">
            একটি ভাল বই হলে এটি একটি শোকের বা স্বপ্নের কামড়ে প্রতিষ্ঠিত হয়। 🧾
          </p>
          <p className="mt-3 mx-5">
            বই পড়ার মাধ্যমে মানুষ অন্যান্য ব্যক্তিদের মানবিক অভিজ্ঞতা ভাগ করতে
            পারে, এটি সৃষ্টির সাথে একটি পথের মতো হতে পারে। 📖
          </p>
          <p className="mt-3 mx-5">
            একটি বই পড়া হলে, আপনি একটি নতুন জগৎে ভ্রমণ করতে পারেন, অন্যান্য
            সময়ে অন্যান্য যোগাযোগ বা কাজের স্থানে পৌঁছতে সাহায্য করতে পারেন। 📚
          </p>
          <p className="mt-3 mx-5">
            বই পড়ার অভ্যন্তরে একটি অদৃশ্য বিশ্ব তৈরি হয়, যা আপনাকে নতুন চিন্তা
            করতে এবং বিশ্বভরে আরও বৃদ্ধি করতে সাহায্য করতে পারে। 📔
          </p>
        </Marquee>
      </div> */}
      <SearchModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}
