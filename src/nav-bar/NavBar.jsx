import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav nav-pills" id="nav-style">
        <li className="nav-item" id="nav-link-one">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about/">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
