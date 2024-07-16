// Components/Pages/SubjectPages/HoaTeacher.js
import React from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';

const ChemistryTeacher = () => {
  const chemistryTeachers = [
    { name: 'Teacher X', description: 'Chemistry Teacher', image: 'path/to/imageX.jpg', onClick: () => { }, classTeacher: 'Class X' },
    { name: 'Teacher Y', description: 'Chemistry Teacher', image: 'path/to/imageY.jpg', onClick: () => { }, classTeacher: 'Class Y' },
    { name: 'Teacher Z', description: 'Chemistry Teacher', image: 'path/to/imageZ.jpg', onClick: () => { }, classTeacher: 'Class Z' }
  ];

  return <SubjectPageTemplate subject="Chemistry" teachers={chemistryTeachers} />;
};

export default ChemistryTeacher;