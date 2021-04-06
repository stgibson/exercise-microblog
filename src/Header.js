import React from "react";
import NavBar from "./NavBar";
import "./Header.css";

/**
 * Component for displaying header that appears on each page
 * @returns JSX code for rendering header
 */
const Header = () => {
  return (
    <div className="Header">
      <h1>Microblog</h1>
      <p>Get in the Rithm of blogging!</p>
      <NavBar />
    </div>
  );
};

export default Header;