// Components/Pages/SubjectPages/DiaTeacher.js
import React from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';

const DiaTeacher = () => {
  const geographyTeachers = [
    { name: 'Teacher 1', description: 'Geography Teacher', image: 'path/to/image1.jpg', onClick: () => {}, classTeacher: 'Class 1' },
    { name: 'Teacher 2', description: 'Geography Teacher', image: 'path/to/image2.jpg', onClick: () => {}, classTeacher: 'Class 2' },
    { name: 'Teacher 3', description: 'Geography Teacher', image: 'path/to/image3.jpg', onClick: () => {}, classTeacher: 'Class 3' }
  ];

  return <SubjectPageTemplate subject="Geography" teachers={geographyTeachers} />;
};

export default DiaTeacher;