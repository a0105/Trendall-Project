import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/latrobe-logo.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="relative">
      <header className="border-grey-500 flex items-center justify-between border-b-[1px] border-gray-100 px-8 py-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="La Trobe Logo" className="h-9 w-auto" />
          <div className="h-6 border-r border-black"></div>
          <h1 className="text-sm font-semibold ">A.D TRENDALL RESEARCH CENTER</h1>
        </div>

        <div className="md:flex">
          <ul className="hidden space-x-1 text-base   md:flex">
            <li
              variant="outline"
              className="py-1 duration-200 rounded-md px-2 hover:bg-slate-400/15 hover:ease-in-out"
            >
              <Link to="/Home">Home</Link>
            </li>
            <li className="rounded-md px-2 py-1 duration-200 hover:bg-slate-400/15 hover:ease-in-out">
              <Link to="/about">About</Link>
            </li>
            <li className="rounded-md px-2 py-1 duration-200 hover:bg-slate-400/15 hover:ease-in-out">
              <Link to="/news">News</Link>
            </li>
            <li className="rounded-md px-2 py-1 duration-200 hover:bg-slate-400/15 hover:ease-in-out">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="rounded-md px-2 py-1 duration-200 hover:bg-slate-400/15 hover:ease-in-out">
              <Link to="/Search">Search</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } border-grey-500 absolute left-0 top-full w-full border bg-white`}
      >
        <ul className="flex flex-col space-y-6 px-4 py-2">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
