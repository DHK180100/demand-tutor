import React from 'react';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import './TutorProfilePage.css';
import classroom_image from '../../../Assets/classroom.png';
import teacher_image from '../../../Assets/teacher.png';

function TutorProfilePage() {
    return (
        <div className="tutor-profile-container">
            <ProfileSideBar />
            <div className="tutor-profile-content">
                <div className="tutor-fixed-row">
                    <div className="tutor-image-container">
                        <img src={classroom_image} alt="Classroom" className="classroom-profile-image" />
                    </div>
                </div>
                <div className="tutor-row">
                    <div className="tutor-profile">
                        <img src={teacher_image} alt="Classroom" className="tutor-profile-image rounded-image" />
                    </div>
                    <div className='tutor-profile-details'>
                        <h3>Alexa Rowles</h3>
                        <p>Email: alexa.rowles@example.com</p>
                    </div>
                </div>
                <div className='tutor-profile-input-row'>
                    <div className='tutor-profile-input-bars'>
                        <div className='tutor-profile-university-graduate-input-bar'>
                            <label>University Graduate</label>
                            <br />
                            <input type='text' placeholder='University Graduate' />
                        </div>
                        <div className='tutor-profile-class-input-bar'>
                            <label>Class</label>
                            <br />
                            <input type='text' placeholder='Class' />
                        </div>
                    </div>
                </div>
                <div className='tutor-profile-input-row'>
                    <div className='tutor-profile-input-bars'>
                        <div className='tutor-profile-student-id-input-bar'>
                            <label>Student ID</label>
                            <br />
                            <input type='text' placeholder='Student ID' />
                        </div>
                        <div className='tutor-profile-graduation-year-input-bar'>
                            <label>Graduation Year</label>
                            <br />
                            <input type='text' placeholder='Graduation Year' />
                        </div>
                    </div>
                </div>
                <div className='tutor-profile-input-row'>
                    <div className='tutor-profile-input-bars'>
                        <div className='tutor-profile-major-input-bar'>
                            <label>Major</label>
                            <br />
                            <input type='text' placeholder='Major' />
                        </div>
                        <div className='tutor-profile-academic-rank-input-bar'>
                            <label>Academic Rank</label>
                            <br />
                            <input type='text' placeholder='Academic Rank' />
                        </div>
                    </div>
                </div>
                <div className='tutor-additional-info'>
                    <div className='add-image'>
                        <label>University Degree Certificate</label>
                        <br />
                        <button>+Add Image</button>
                    </div>
                    <div className='add-image'>
                        <label>Master Degree Certificate</label>
                        <br />
                        <button>+Add Image</button>
                    </div>
                    <div className='add-image'>
                        <label>Secondary Degree Certificate</label>
                        <br />
                        <button>+Add Image</button>
                    </div>
                </div>
                <div className="send-button-container">
                    <button className='send-button'>Send</button>
                </div>
            </div>
        </div>
    );
}

export default TutorProfilePage;
