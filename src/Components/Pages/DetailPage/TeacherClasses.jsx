import React from "react";
import { Button } from "antd";
import "tailwindcss/tailwind.css";

const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];

const TeacherClasses = () => {
  return (
    <div className="flex justify-center my-4">
      {classes.map((className, index) => (
        <Button key={index} className="mx-1">
          {className}
        </Button>
      ))}
    </div>
  );
};

export default TeacherClasses;
