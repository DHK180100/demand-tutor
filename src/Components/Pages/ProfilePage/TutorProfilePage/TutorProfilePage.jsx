import React, { useEffect, useState } from 'react';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import './TutorProfilePage.css';
import classroom_image from '../../../Assets/classroom.png';
import teacher_image from '../../../Assets/teacher.png';
import { getToken } from '../../../../utils/common';
import { API_URL } from '../../../../config';

function TutorProfilePage() {
    const [tutorProfile, setTutorProfile] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const token = getToken("token")
                console.log('token', token)
                const response = await fetch(`${API_URL}/app-users/getAllCertifycate`, {
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
                setTutorProfile(data);


            } catch (err) {
                setTutorProfile(null);
            }
        })()
    }, []);


    const updateTutorProfile = async (updatedTutor) => {
        try {
            const response = await fetch(`${API_URL}/app-users/update-certificate`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken("token")}`
                },
                body: JSON.stringify(updatedTutor)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Failed to update tutor profile:', err);
            return null;
        }
    }

    const handleChange = (e, type) => {
        const { value } = e.target;
        setTutorProfile({ ...tutorProfile, [type]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const updatedTutor = await updateTutorProfile(tutorProfile);
            if (updatedTutor) {
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
    console.log("tutorProfile", tutorProfile)
    if (!tutorProfile) return <></>
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
                        <h3>{tutorProfile.fname}&nbsp;{tutorProfile.lname}</h3>
                        <p>{tutorProfile.email}</p>
                    </div>
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className="edit-button">EDIT</button>
                </div>
                <div className='tutor-profile-input-row'>
                    <div className='tutor-profile-input-bars'>
                        <div className='tutor-profile-university-graduate-input-bar'>
                            <label>University Graduate</label>
                            <br />
                            <input
                                type='text'
                                placeholder='University Graduate'
                                value={tutorProfile.school}
                                onChange={(e) => handleChange(e, 'school')} />
                        </div>
                        <div className='tutor-profile-major-input-bar'>
                            <label>Major</label>
                            <br />
                            <input
                                type='text'
                                placeholder='Major'
                                value={tutorProfile.major}
                                onChange={(e) => handleChange(e, 'major')} />
                        </div>
                    </div>
                </div>
                <div className='tutor-profile-input-row'>
                    <div className='tutor-profile-input-bars'>
                        <div className='tutor-profile-student-id-input-bar'>
                            <label>Student ID</label>
                            <br />
                            <input
                                type='text'
                                placeholder='Student ID'
                                value={tutorProfile.studentID}
                                onChange={(e) => handleChange(e, 'studentID')} />
                        </div>
                        <div className='tutor-profile-graduation-year-input-bar'>
                            <label>Graduation Year</label>
                            <br />
                            <input type='text' placeholder='Graduation Year' value={tutorProfile.year} />
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
            </div>
        </div>
    );
}

export default TutorProfilePage;
