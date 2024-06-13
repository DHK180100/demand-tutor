import React from 'react'
import Navbar from '../../Navbar/Navbar'
import '../Login/Login.css'
import logo from 'C:/Users/dante/OneDrive/Desktop/REACT/tutor/src/Components/Assets/logo.png';
import { FcGoogle } from "react-icons/fc";
function Login() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className="half">
          <img src={logo} alt="Logo" />
        </div>
        <div className="half">
          <div className="inputs">
            <div className="input">
              <input type="text" placeholder='Email' />
            </div>
            <div className="input">
              <input type="password" placeholder='Password' />
            </div>
            <div className="button">
              <button className="login-btn">Login</button>
            </div>
            {/* <div className="button">
              <button className="google-btn">
                <FcGoogle /> Login with Google
              </button>
            </div> */}
            <div className="create-account-link">
              <a href='/Register'>Create new account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
