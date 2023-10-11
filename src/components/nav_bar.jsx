import React from "react";
import cara_logo from "../assets/CARA_sys_logo.png"
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src= {cara_logo}/>
      </div>
      {/* <ul className="navbar-links">
        <li className="navbar-link"><a href="#">Solutions</a></li>
        <li className="navbar-link"><a href="#">About</a></li>
        <li className="navbar-link"><a href="#">Contact Us</a></li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
