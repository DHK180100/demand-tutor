// Components/Pages/SubjectPages/SubjectPageTemplate.js
import React from 'react';
import './SubjectPageTemplate.css';
import TeacherCardUI from '../../UI/Card/TeacherCard';

const SubjectPageTemplate = ({ subject, teachers }) => {
  return (
    <div className="subject-page">
      <h2>Here's the list of our {subject} Teachers</h2>
      <div className="four-divs-container">
        {teachers.map((teacher, index) => (
          <TeacherCardUI
            key={index}
            name={teacher.name}
            description={teacher.description}
            image={teacher.image}
            onClick={teacher.onClick}
            classTeacher={teacher.classTeacher}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectPageTemplate;
