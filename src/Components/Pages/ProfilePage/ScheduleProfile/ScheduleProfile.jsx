import React from 'react';
import './../TutorProfilePage/TutorProfilePage.css';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import classroom_image from '../../../Assets/classroom.png';
import teacher_image from '../../../Assets/teacher.png';

const subjects = [
    { name: 'Toán', levels: [10, 11, 12] },
    { name: 'Lý', levels: [10, 11, 12] },
    { name: 'Hóa', levels: [10, 11, 12] },
    { name: 'Sử', levels: [10, 11, 12] },
    { name: 'Văn', levels: [10, 11, 12] },
    { name: 'Địa', levels: [10, 11, 12] },
    { name: 'Anh', levels: [10, 11, 12] }
];

function ScheduleProfile() {
    const renderSubjectCheckboxes = () => {
        return subjects.map((subject, subjectIndex) => (
            <div key={subjectIndex} className="subject-group">
                <h4>{subject.name}</h4>
                {subject.levels.length > 0 ? (
                    subject.levels.map((level, levelIndex) => (
                        <div key={levelIndex} className="checkbox-item">
                            <input
                                type="checkbox"
                                id={`subject-${subjectIndex}-level-${level}`}
                                name={`subject-${subjectIndex}-level-${level}`}
                            />
                            <label htmlFor={`subject-${subjectIndex}-level-${level}`}>{`${subject.name} ${level}`}</label>
                        </div>
                    ))
                ) : (
                    <div className="checkbox-item">
                        <input
                            type="checkbox"
                            id={`subject-${subjectIndex}`}
                            name={`subject-${subjectIndex}`}
                        />
                        <label htmlFor={`subject-${subjectIndex}`}>{subject.name}</label>
                    </div>
                )}
            </div>
        ));
    };

    return (
        <div>
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
                    <div className="tutor-toggle-container">
                        <div className="tutor-toggle">
                            <label className="toggle-label">Be Tutor</label>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className="subject-checkboxes-container">
                        {renderSubjectCheckboxes()}
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
