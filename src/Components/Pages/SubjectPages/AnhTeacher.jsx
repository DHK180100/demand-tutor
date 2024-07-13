// Components/Pages/SubjectPages/AnhTeacher.js
import React from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';

const AnhTeacher = () => {
  const englishTeachers = [
    { name: 'Teacher 1', description: 'English Teacher', image: 'path/to/image1.jpg', onClick: () => {}, classTeacher: 'Class 1' },
    { name: 'Teacher 2', description: 'English Teacher', image: 'path/to/image2.jpg', onClick: () => {}, classTeacher: 'Class 2' },
    { name: 'Teacher 3', description: 'English Teacher', image: 'path/to/image3.jpg', onClick: () => {}, classTeacher: 'Class 3' }
  ];

  return <SubjectPageTemplate subject="English" teachers={englishTeachers} />;
};

export default AnhTeacher;