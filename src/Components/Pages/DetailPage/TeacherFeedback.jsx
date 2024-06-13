import React from "react";
import { Rate, Pagination } from "antd";

const feedbackData = [
  {
    name: "Nguyễn Văn A",
    date: "4/21/2024, 5:25:36 PM",
    comment: "Nice teacher",
    rating: 4,
  },
  {
    name: "Nguyễn Văn A",
    date: "4/21/2024, 5:25:36 PM",
    comment: "Nice teacher",
    rating: 4,
  },
  // Add more feedback items here as needed
];

const TeacherFeedback = () => {
  return (
    <div className="mt-8 w-full max-w-[1100px]">
      <h2 className="text-2xl font-semibold my-8">Feedback</h2>
      <div className="space-y-4 mx-4">
        {feedbackData.map((feedback, index) => (
          <div key={index} className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">{feedback.date}</p>
              <h3 className="font-bold text-gray-700">{feedback.name}</h3>
              <p className="ml-2 my-2">{feedback.comment}</p>
            </div>
            <div className="flex flex-col items-center">
              <Rate disabled defaultValue={feedback.rating} />
              <span className="text-sm text-gray-500">(hire 1h)</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default TeacherFeedback;
