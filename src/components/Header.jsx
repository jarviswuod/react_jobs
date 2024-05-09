import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkClass = ({ isActive }) => (isActive ? "text-[#fff] bg-[#000]" : "");

  return (
    <header className="bg-[#dedede] py-6 px-12">
      <div className="flex items-center justify-between gap-6">
        <NavLink to="/">
          <img
            src="imgreact.png"
            alt="react logo"
            className="w-12 rounded-full"
          />
        </NavLink>

        <nav>
          <ul className="flex items-center justify-between gap-12 text-2xl">
            <NavLink className={linkClass} to="/">
              Home
            </NavLink>
            <NavLink className={linkClass} to="/jobs">
              Jobs
            </NavLink>
            <NavLink className={linkClass} to="/add-job">
              Add job
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
