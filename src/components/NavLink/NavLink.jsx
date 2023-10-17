import React from "react";
import { Link } from "react-router-dom";
import "./NavLink.css";

const NavLink = (props) => {
  return <Link to="/">{props.text}</Link>;
};

export default NavLink;
