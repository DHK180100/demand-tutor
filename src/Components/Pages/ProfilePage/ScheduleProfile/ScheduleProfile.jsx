import React, { useEffect, useState } from 'react';
import './../TutorProfilePage/TutorProfilePage.css';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import classroom_image from '../../../Assets/classroom.png';
import teacher_image from '../../../Assets/teacher.png';
import { getToken } from '../../../../utils/common';
import { API_URL } from '../../../../config';

const subjects = [
    { name: 'Math', levels: [10, 11, 12] },
    { name: 'Physic', levels: [10, 11, 12] },
    { name: 'Chemistry', levels: [10, 11, 12] },
    { name: 'English', levels: [10, 11, 12] }
];

const platforms = ['Zalo', 'Zoom', 'Google Meet', 'Microsoft Teams'];

function ScheduleProfile() {
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [rentalCost, setRentalCost] = useState(300000); // default value in VND
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handlePlatformChange = (event) => {
        setSelectedPlatform(event.target.value);
    };

    const handleRentalCostChange = (event) => {
        setRentalCost(event.target.value);
    };

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

    const [tutorDetails, setTutorDetails] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const token = getToken("token")
                const response = await fetch(`${API_URL}/app-users/getTutorProfile`, {
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
                setTutorDetails(data);
            } catch (err) {
                setTutorDetails(null);
            }
        })()
    }, []);

    const updateTutorDetails = async (updatedDetails) => {
        try {
            const response = await fetch(`${API_URL}/app-users/updateTutorProfile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken("token")}`
                },
                body: JSON.stringify(updatedDetails)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Failed to update user profile:', err);
            return null;
        }
    }

    const handleChange = (e, type) => {
        const { value } = e.target;
        setTutorDetails({ ...tutorDetails, [type]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const updatedProfile = await updateTutorDetails(tutorDetails);
            if (updatedProfile) {
                setSuccess('Cập nhật hồ sơ thành công!');
                alert('Cập nhật hồ sơ thành công!')
            }
        } catch (error) {
            setError('Cập nhật hồ sơ thất bại');
            alert('Cập nhật hồ sơ thất bại');
        } finally {
            setLoading(false);
        }
    };

    console.log("tutorDetails", tutorDetails)
    if (!tutorDetails) return <></>
    return (
        <div>
            <div className="tutor-profile-container">
                <ProfileSideBar />
                <div className="tutor-profile-content">
                    <div className="fixed-row">
                        <div className="image-container">
                            <img src={classroom_image} alt="Classroom" className="profile-image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="tutor-profile">
                            <img src={tutorDetails.image} alt="Classroom" className="tutor-profile-image rounded-image" />
                        </div>
                        <div className='profile-details'>
                            <h3>{tutorDetails.fname}</h3>
                            <p>{tutorDetails.email}</p>
                        </div>
                    </div>
                    <div className="tutor-toggle-container">
                        <div className="tutor-toggle">
                            <label className="toggle-label">Be Tutor</label>
                            <label
                                className="switch"
                            >
                                <input
                                    type="checkbox"
                                // value={tutorDetails.beTutor}
                                // onChange={(e) => handleChange(e, 'beTutor')}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className="subject-checkboxes-container">
                        {renderSubjectCheckboxes()}
                    </div>
                    <div className="introduce-yourself-container">
                        <h3>Introduce yourself</h3>
                        <textarea
                            placeholder="Write something about yourself..."
                            value={tutorDetails.introduce}
                            onChange={(e) => handleChange(e, 'introduce')}>
                        </textarea>
                    </div>
                    <div className="additional-info-container">
                        <div className="info-row">
                            <label>Rental Cost (VND)</label>
                            <input
                                type="number"
                                className="info-button"
                                value={tutorDetails.price}
                                onChange={(e) => handleChange(e, 'price')}
                                min="0"
                            />
                        </div>
                        <div className="info-row">
                            <label>Choose Platform</label>
                            <select className="info-button" value={selectedPlatform} onChange={handlePlatformChange}>
                                <option value="" disabled>Select Platform</option>
                                {platforms.map((platform, index) => (
                                    <option key={index} value={platform}>{platform}</option>
                                ))}
                            </select>
                        </div>
                        <div className="info-row">
                            <label className="bold-label">Platform</label>
                            <p>{selectedPlatform}</p>
                        </div>
                    </div>
                    <div className="save-button-container">
                        <button
                            onClick={(e) => handleSubmit(e)}
                            className="edit-button">EDIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleProfile;
