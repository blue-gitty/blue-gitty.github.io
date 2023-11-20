import React from "react";
import cara_logo from "../assets/logo_asset.svg"
const NavBar = () => {



  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img  src= {cara_logo} alt= 'cara_logo' style={{ width: '120px', height: 'auto' }}  />
      </div>
      <ul className="navbar-links">
        {/* <li className="navbar-link"><a href="#">Solutions</a></li> */}
        {/* <li className="navbar-link"><a href="#">About</a></li> */}
        {/* <li className="navbar-link"><a href="#">Contact Us</a></li> */}
      </ul>

    </nav>
  );
};

export default NavBar;
