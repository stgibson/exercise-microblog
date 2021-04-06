import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

/**
 * Component for displaying navigation bar
 * @returns JSX code for rendering navigation bar
 */
const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">Blog</Link>
      <Link to="/new">Add a new post</Link>
    </div>
  );
};

export default NavBar;