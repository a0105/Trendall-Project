import React, { useState } from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

import logo from "../../images/latrobe-logo.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="border-b sticky top-0 z-10   border-b-zinc-300 bg-white bg-opacity-50 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-between py-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="La Trobe Logo" className="h-9 w-auto" />
            <h1 className="text-sm font-semibold">
              <Link to="/Home"> A.D TRENDALL RESEARCH CENTER</Link>
            </h1>
          </div>
          {/* Desktop navigation */}
          <div className="hidden  text-gray-900 md:flex">
            <Link className={buttonVariants({ variant: "link" })} to="/Home">
              Home
            </Link>
            <Link className={buttonVariants({ variant: "link" })} to="/About">
              About
            </Link>
            <Link className={buttonVariants({ variant: "link" })} to="/News">
              News
            </Link>
            <Link className={buttonVariants({ variant: "link" })} to="/Contact">
              Contact
            </Link>
            <Link className={buttonVariants({ variant: "link" })} to="/Search">
              Search
            </Link>
          </div>
          {/* Mobile menu button */}
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
        </div>
        {/* Mobile menu */}
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
    </nav>
  );
}
