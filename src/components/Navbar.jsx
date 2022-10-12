import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar text-[#CAD5E2] bg-[#E6425E] md:px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#E6425E] text-[#CAD5E2] rounded-box w-52"
            >
              <li className="mr-5 hover:bg-[#CAD5E2] hover:text-black rounded-lg font-serif">
                <Link to="/">Home</Link>
              </li>
              <li className="mr-5 hover:bg-[#CAD5E2] hover:text-black rounded-lg font-serif">
                <Link to="statistics">Statistics</Link>
              </li>
              <li className="mr-5 hover:bg-[#CAD5E2] hover:text-black rounded-lg font-serif">
                <Link to="blog">Blog</Link>
              </li>
            </ul>
          </div>
          <Link className="md:text-2xl font-serif">The Quizzy Rascals</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="mr-5 hover:bg-[#CAD5E2] hover:text-black rounded-lg font-serif">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-5 hover:bg-[#CAD5E2] hover:text-black rounded-lg font-serif">
              <Link to="statistics">Statistics</Link>
            </li>
            <li className="mr-5 hover:bg-[#CAD5E2] hover:text-black rounded-lg font-serif">
              <Link to="blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
