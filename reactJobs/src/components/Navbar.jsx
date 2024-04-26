import React from "react";

const Navbar = () => {
  return (
    <header className="bg-blue-600">
      <div className="flex items-center justify-between gap-8 py-5 px-12 text-2xl border-b-2">
        <a href="/">
          <img className="w-12 rounded-full" src="./reactimg.png" alt="img" />
        </a>

        <nav>
          <ul className="flex items-center justify-between gap-8">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/jobs">Job</a>
            </li>
            <li>
              <a href="/add-job">Add Job</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
