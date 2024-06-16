import React from 'react';
import './../TutorProfilePage/TutorProfilePage.css';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';

function ScheduleProfile() {
    const renderCheckboxes = () => {
        const checkboxes = [];
        for (let i = 1; i <= 24; i++) {
            checkboxes.push(
                <div key={i} className="checkbox-item">
                    <input type="checkbox" id={`hour-${i}`} name={`hour-${i}`} />
                    <label htmlFor={`hour-${i}`}>{`${i}:00`}</label>
                </div>
            );
        }
        return checkboxes;
    };

    return (
        <div>
            <div className="tutor-profile-container">
                <ProfileSideBar />
                <div className="tutor-profile-content">
                    <div className="tutor-fixed-row">
                        <div className="tutor-image-container">
                            <img src="./src/Components/Assets/classroom.png" alt="Classroom" className="classroom-profile-image" />
                        </div>
                    </div>
                    <div className="tutor-row">
                        <div className="tutor-profile">
                            <img src="./src/Components/Assets/teacher.png" alt="Classroom" className="tutor-profile-image rounded-image" />
                        </div>
                        <div className='tutor-profile-details'>
                            <h3>Alexa Rowles</h3>
                            <p>Email: alexa.rowles@example.com</p>
                        </div>
                    </div>
                    <div className="tutor-toggle-container">
                        <div className="tutor-toggle">
                            <label className="toggle-label">Be Tutor</label>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className="hour-checkboxes-container">
                        {renderCheckboxes()}
                    </div>
                    <div className="introduce-yourself-container">
                        <h3>Introduce yourself</h3>
                        <textarea placeholder="Write something about yourself..."></textarea>
                    </div>
                    <div className="additional-info-container">
                        <div className="info-row">
                            <label>Rental Cost</label>
                            <button className="info-button">30.0</button>
                        </div>
                        <div className="info-row">
                            <label>Choose Platform</label>
                            <button className="info-button">Choose</button>
                        </div>
                        <div className="info-row">
                            <label className="bold-label">Platform</label>
                        </div>
                    </div>
                    <div className="save-button-container">
                        <button className="save-button">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleProfile;
