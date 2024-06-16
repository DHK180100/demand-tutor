import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import './ProfileSideBar.css';

function ProfileSideBar() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isTutorOpen, setIsTutorOpen] = useState(false);

  const toggleAccount = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  const toggleTutor = () => {
    setIsTutorOpen(!isTutorOpen);
  };

  return (
    <div className="sidebar">
      <div className="tab" onClick={toggleAccount}>
        Account
      </div>
      <Collapse isOpened={isAccountOpen}>
        <ul className="list">
          <li className="list-item">User Profile</li>
          <li className="list-item">Tutor Followed</li>
          <li className="list-item">Option</li>
          <li className="list-item">History</li>
          <li className="list-item">Deposit</li>
          <li className="list-item">Withdraw</li>
        </ul>
      </Collapse>

      <div className="tab" onClick={toggleTutor}>
        Tutor
      </div>
      <Collapse isOpened={isTutorOpen}>
        <ul className="list">
          <li className="list-item">General</li>
          <li className="list-item">Best Followed</li>
          <li className="list-item">Album</li>
          <li className="list-item">Video</li>
          <li className="list-item">Wallet</li>
          <li className="list-item">Hired History</li>
          <li className="list-item">Setup Hire</li>
        </ul>
      </Collapse>
    </div>
  );
}

export default ProfileSideBar;
