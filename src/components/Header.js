import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-grey-500 px-8 py-4">
      <div>
        <h1 className="text-2xl font-extrabold">LOGO</h1>
      </div>

      <div>
        <ul className="flex space-x-5">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact </Link>
          </li>
          <li>
            <Link to="/Search"> Search </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}



