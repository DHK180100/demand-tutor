import React, { useEffect, useState } from 'react';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import './UserProfilePage.css';
import classroom_image from '../../../Assets/classroom.png';
import teacher_image from '../../../Assets/teacher.png';
import { MdOutlineEmail } from "react-icons/md";
import { API_URL } from '../../../../config';
import { getToken } from '../../../../utils/common';



function UserProfilePage() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const token = getToken("token")
        console.log('token', token)
        const response = await fetch(`${API_URL}/app-users/getUserProfile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
        // console.log("user", user)
      } catch (err) {
        setUser(null);
      }
    })()
  },);
  if (!user) return <></>

  return (
    <div className="user-profile-container">
      <ProfileSideBar />
      <div className="user-profile-content">
        <div className="fixed-row">
          <div className="image-container">
            <img src={classroom_image} alt="Classroom" className="profile-image" />
          </div>
        </div>
        <div className="row">
          <div className="user-profile">
            <img src={teacher_image} alt="Classroom" className="user-profile-image rounded-image" />
          </div>
          <div className='profile-details'>
            <h3>Alexa Rowles</h3>
            <p>Email: alexa.rowles@example.com</p>
          </div>
          <button className="edit-button">Edit</button>
        </div>
        <div className="user-profile-name-row">
          <div className='user-profile-input-bars'>
            <div className='user-profile-fullname-input-bar'>
              <label>Full Name</label>
              <br />
              <input type="text" placeholder="Full Name" />
            </div>
            <div className='user-profile-firstname-input-bar'>
              <label>First Name</label>
              <br />
              <input type="text" placeholder="First Name" />
            </div>
          </div>
        </div>
        <div className="user-profile-info-row">
          <div className='user-profile-input-bars'>
            <div className='user-profile-country-input-bar'>
              <label>Country</label>
              <br />
              <input type="text" placeholder="Country" />
            </div>
            <div className='user-profile-gender-input-bar'>
              <label>Gender</label>
              <br />
              <input type="text" placeholder="Gender" />
            </div>
          </div>
        </div>
        <div className="user-profile-email">
          <label>My Email Address</label>
          <div className='email-details'>
            <MdOutlineEmail />
            <label>User@gmail.com</label>
          </div>
          <p>1 month ago</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;