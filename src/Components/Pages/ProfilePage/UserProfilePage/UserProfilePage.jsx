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

      } catch (err) {
        setUser(null);
      }
    })()
  }, []);
  console.log("user", user)
  if (!user) return <></>


  return (
    <div className="user-profile-container">
      <ProfileSideBar />
      <div className="user-profile-content">
        <div className="fixed-row">
          <div className="image-container">
            <img src={user.imgUrl} alt="Classroom" className="profile-image" />
          </div>
        </div>
        <div className="row">
          <div className="user-profile">
            <img src={user.imgUrl} alt="Classroom" className="user-profile-image rounded-image" />
          </div>
          <div className='profile-details'>
            <h3>{user.firstName}&nbsp;{user.lastName}</h3>
            <p>{user.email}</p>
          </div>
          <button className="edit-button">Edit</button>
        </div>
        <div className="user-profile-name-row">
          <div className='user-profile-input-bars'>
            <div className='user-profile-fullname-input-bar'>
              <label>Full Name</label>
              <br />
              <input type="text" placeholder="Full Name" value={`${user.firstName} ${user.lastName}`} />
            </div>
            <div className='user-profile-firstname-input-bar'>
              <label>Bank</label>
              <br />
              <input type="text" placeholder={user.bankName} value={user.bankName} />
            </div>
          </div>
        </div>
        <div className="user-profile-info-row">
          <div className='user-profile-input-bars'>
            <div className='user-profile-country-input-bar'>
              <label>Bank Number</label>
              <br />
              <input type="text" placeholder="Country" value={user.bankNumber} />
            </div>
            <div className='user-profile-gender-input-bar'>
              <label>Gender</label>
              <br />
              <input type="text" placeholder="Gender" value={user.gender} />
            </div>
          </div>
        </div>
        <div className="user-profile-email">
          <label>My Email Address: </label>
          <div className='email-details'>
            <MdOutlineEmail />
            <label>{user.email}</label>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;