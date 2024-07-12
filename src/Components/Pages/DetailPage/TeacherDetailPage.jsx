import React, { useEffect, useState } from "react";
import "./style/TeacherDetailPage.css";
import TeacherCard from "./TeacherCard";
import TeacherClasses from "./TeacherClasses";
import TeacherInfo from "./TeacherInfo";
import BreadcrumbWithBackButton from "../../UI/BreadCrumb/BreadCrumb";
import TeacherVideo from "./TeacherVideo";
import TeacherFeedback from "./TeacherFeedback";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../config";
import { getToken } from "../../../utils/common";

const TeacherDetailPage = () => {
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = getToken("token")
        console.log('token', token);
        console.log('id', id)
        const response = await fetch(`${API_URL}/tutors/GetCustom/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTutor(data);
      } catch (err) {
        setTutor(null);
      }
    })()
  }, [id]);
  console.log("tutor", tutor)
  if (!tutor) return <></>
  return (
    <div className="teacher-detail-page container mx-auto p-4">
      <div className=" mb-8 w-full max-w-[1100px]">
        <BreadcrumbWithBackButton currentTab={"Thông tin chi tiết giáo viên"} />
      </div>
      <TeacherCard
        tutorID={tutor.tutorID}
        firstName={`${tutor.firstName} ${tutor.lastName}`}
        totalHoursHired={`${tutor.totalHoursHired}`}
        percentSuccess={`${tutor.percentSuccess}`}
        price={tutor.price}
        averageRate={tutor.averageRate}
        status={`${tutor.status}`}
        followerCount={tutor.followerCount}

      />

      <TeacherInfo information={tutor.information} />
      <TeacherVideo videoUrl={tutor.videoUrl} />
      <TeacherFeedback ratings={tutor.cusrating} />
    </div>
  );
};

export default TeacherDetailPage;
