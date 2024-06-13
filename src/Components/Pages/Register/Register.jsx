import React from 'react';
import Navbar from '../../Navbar/Navbar';
import '../Register/Register.css';
import { FcGoogle } from "react-icons/fc";

function Register() {
  return (
    <div>
      <Navbar />
      <div className='register-container'>
        <div className="register-inputs">
          <h3>Create an account</h3>
          <p>Enter your email to sign up for this app</p>
          <div className="register-input">
            <input type="text" placeholder='Email' />
          </div>
          <div className="register-input">
            <input type="text" placeholder='Username' />
          </div>
          <div className="register-input">
            <input type="password" placeholder='Password' />
          </div>
          <div className="register-input">
            <input type="password" placeholder='Confirm Password' />
          </div>
          <div className="register-button">
            <button className="register-btn">Register with email</button>
          </div>
          {/* <div className="register-button">
            <button className="register-google-btn">
              <FcGoogle size={24} /> Register with Google
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Register;
