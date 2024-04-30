import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "border-b border-b-[#49557e] pb-.5" : "";

  return (
    <header className="bg-blue-600">
      <div className="flex items-center justify-between gap-8 py-5 px-12 text-2xl border-b-2">
        <Link to="/">
          <img className="w-12 rounded-full" src="./reactimg.png" alt="img" />
        </Link>

        <nav>
          <ul className="flex items-center justify-between gap-8">
            <li>
              <NavLink className={linkClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={linkClass} to="/jobs">
                Job
              </NavLink>
            </li>
            <li>
              <NavLink className={linkClass} to="/add-job">
                Add Job
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
