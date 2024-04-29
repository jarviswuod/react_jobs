import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-600">
      <div className="flex items-center justify-between gap-8 py-5 px-12 text-2xl border-b-2">
        <Link to="/">
          <img className="w-12 rounded-full" src="./reactimg.png" alt="img" />
        </Link>

        <nav>
          <ul className="flex items-center justify-between gap-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Job</Link>
            </li>
            <li>
              <Link to="/add-job">Add Job</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
