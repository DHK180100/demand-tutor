import React from "react";
import logo from "../Assets/logo.png";

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} height={50} alt="Logo" />
        </Link>
      </div>
      <div className="nav-login-button">
        <a href="/Login" class="button">
          Login
        </a>
        {/* <button onclick="document.location='Login.jsx'">Login</button> */}
      </div>
    </div>
  );
}

export default Navbar;
