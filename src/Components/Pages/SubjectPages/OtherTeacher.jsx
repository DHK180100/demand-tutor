// Components/Pages/SubjectPages/OtherTeacher.js
import React from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';

const OtherTeacher = () => {
  const otherTeachers = [
    { name: 'Teacher 1', description: 'Other Subject Teacher', image: 'path/to/image1.jpg', onClick: () => {}, classTeacher: 'Class 1' },
    { name: 'Teacher 2', description: 'Other Subject Teacher', image: 'path/to/image2.jpg', onClick: () => {}, classTeacher: 'Class 2' },
    { name: 'Teacher 3', description: 'Other Subject Teacher', image: 'path/to/image3.jpg', onClick: () => {}, classTeacher: 'Class 3' }
  ];

  return <SubjectPageTemplate subject="Other" teachers={otherTeachers} />;
};

export default OtherTeacher;