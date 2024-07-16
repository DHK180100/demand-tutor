// Components/Pages/SubjectPages/ToanTeacher.js
import React from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';

const MathTeacher = () => {
  const mathTeachers = [
    { name: 'Teacher 1', description: 'Math Teacher', image: 'path/to/image1.jpg', onClick: () => { }, classTeacher: 'Class 1' },
    { name: 'Teacher 2', description: 'Math Teacher', image: 'path/to/image2.jpg', onClick: () => { }, classTeacher: 'Class 2' },
    { name: 'Teacher 3', description: 'Math Teacher', image: 'path/to/image3.jpg', onClick: () => { }, classTeacher: 'Class 3' }
  ];

  return <SubjectPageTemplate subject="Math" teachers={mathTeachers} />;
};

export default MathTeacher;