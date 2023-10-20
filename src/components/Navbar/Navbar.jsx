import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ active }) => {
  return (
    <header className="navbar">
      <h1 className="title">
        <Link to={`/`}>FLIXX</Link>
      </h1>
      <ul className="links">
        <li className={`link-item ${active}`}>
          <Link to="/">Movies</Link>
        </li>
        <li className={`link-item ${active}`}>
          <Link to="/shows">TV Shows</Link>
        </li>
        <li className="link-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
