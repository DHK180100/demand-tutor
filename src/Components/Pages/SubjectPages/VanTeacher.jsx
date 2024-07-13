// Components/Pages/SubjectPages/VanTeacher.js
import React from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';

const VanTeacher = () => {
  const literatureTeachers = [
    { name: 'Teacher 1', description: 'Literature Teacher', image: 'path/to/image1.jpg', onClick: () => {}, classTeacher: 'Class 1' },
    { name: 'Teacher 2', description: 'Literature Teacher', image: 'path/to/image2.jpg', onClick: () => {}, classTeacher: 'Class 2' },
    { name: 'Teacher 3', description: 'Literature Teacher', image: 'path/to/image3.jpg', onClick: () => {}, classTeacher: 'Class 3' }
  ];

  return <SubjectPageTemplate subject="Literature" teachers={literatureTeachers} />;
};

export default VanTeacher;