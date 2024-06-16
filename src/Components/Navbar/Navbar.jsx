import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";

import "./Navbar.css";
import { Link } from "react-router-dom";

export const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function Navbar() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = getCookie('token')
    setToken(token);
  }, []);

  const handleClick = () => {
    if (!token) {
      window.history.pushState({}, '', '/login');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
      document.cookie = 'token' + "=; Max-Age=-99999999;";
      window.history.pushState({}, '', '/');
      window.location.reload()
    }
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} height={50} alt="Logo" />
        </Link>
      </div>
      <div className="nav-login-button">
        <button onClick={handleClick} class="button">
          {token ? `Logout` : `Login`}
        </button>
        {/* <button onclick="document.location='Login.jsx'">Login</button> */}
      </div>
    </div>
  );
}

export default Navbar;
