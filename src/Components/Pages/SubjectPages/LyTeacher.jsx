// Components/Pages/SubjectPages/LyTeacher.js
import React from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';

const LyTeacher = () => {
  const physicsTeachers = [
    { name: 'Teacher A', description: 'Physics Teacher', image: 'path/to/imageA.jpg', onClick: () => {}, classTeacher: 'Class A' },
    { name: 'Teacher B', description: 'Physics Teacher', image: 'path/to/imageB.jpg', onClick: () => {}, classTeacher: 'Class B' },
    { name: 'Teacher C', description: 'Physics Teacher', image: 'path/to/imageC.jpg', onClick: () => {}, classTeacher: 'Class C' }
  ];

  return <SubjectPageTemplate subject="Physics" teachers={physicsTeachers} />;
};

export default LyTeacher;