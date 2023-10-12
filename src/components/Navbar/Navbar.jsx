import React from "react";
import NavLink from "../NavLink/NavLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1 className="title">FLIXX</h1>
      <ul className="links">
        <li className="link-item active">
          <NavLink text={"Movies"} />
        </li>
        <li className="link-item">
          <NavLink text={"TV Shows"} />
        </li>
        <li className="link-item">
          <NavLink text={"About"} />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
