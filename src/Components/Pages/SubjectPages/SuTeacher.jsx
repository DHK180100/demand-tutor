// Components/Pages/SubjectPages/SuTeacher.js
import React from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';

const SuTeacher = () => {
  const historyTeachers = [
    { name: 'Teacher 1', description: 'History Teacher', image: 'path/to/image1.jpg', onClick: () => {}, classTeacher: 'Class 1' },
    { name: 'Teacher 2', description: 'History Teacher', image: 'path/to/image2.jpg', onClick: () => {}, classTeacher: 'Class 2' },
    { name: 'Teacher 3', description: 'History Teacher', image: 'path/to/image3.jpg', onClick: () => {}, classTeacher: 'Class 3' }
  ];

  return <SubjectPageTemplate subject="History" teachers={historyTeachers} />;
};

export default SuTeacher;