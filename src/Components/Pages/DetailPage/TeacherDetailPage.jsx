import React from "react";
import "./style/TeacherDetailPage.css";
import TeacherCard from "./TeacherCard";
import TeacherClasses from "./TeacherClasses";
import TeacherInfo from "./TeacherInfo";
import BreadcrumbWithBackButton from "../../UI/BreadCrumb/BreadCrumb";
import TeacherVideo from "./TeacherVideo";
import TeacherFeedback from "./TeacherFeedback";

const TeacherDetailPage = () => {
  return (
    <div className="teacher-detail-page container mx-auto p-4">
      <div className=" mb-8 w-full max-w-[1100px]">
        <BreadcrumbWithBackButton currentTab={"Thông tin chi tiết giáo viên"} />
      </div>
      <TeacherCard
        name="Teacher name"
        hours="500"
        completionRate="95.5"
        price={30000}
        rating={4}
        status="Ready"
      />

      <TeacherInfo />
      <TeacherVideo />
      <TeacherFeedback />
    </div>
  );
};

export default TeacherDetailPage;
