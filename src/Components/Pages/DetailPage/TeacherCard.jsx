import React from "react";
import styled from "styled-components";
import { Button, Rate } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import TeacherClasses from "./TeacherClasses";

const CardContainer = styled.div`
  display: flex;
  // align-items: center;
  background-color: white;
  border: 1px solid #eaeaea;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 1100px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TeacherImage = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 16px;
`;

const TeacherInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 20px;
  margin-left: 20px;
`;

const TeacherName = styled.h2`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: 670;
  margin-bottom: 30px;
  width: 90%;
`;

const Info = styled.div`
  display: flex;
  jussify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const InfoItem = styled.div`
  margin-right: 16px;
  font-size: 1rem;
  color: #555;
`;

const Price = styled.div`
  font-size: 2rem;
  color: #ff4d4f;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ActionButtons = styled.div`
  align-items: center;
  margin-top: 30px;
`;

const HireButton = styled(Button)`
  height: 40px;
  font-weight: 600;
  font-size: 1.25rem;
  width: 90%;
  background-color: #ff4d4f;
  color: white;
  margin-right: 8px;
  &:hover {
    background-color: #ff7875;
    color: white;
  }
`;

const TeacherCard = ({
  name,
  hours,
  completionRate,
  price,
  rating,
  status,
}) => {
  return (
    <CardContainer>
      <div>
        <TeacherImage
          src="https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg"
          alt="Teacher"
        />
        <p className="text-green-500 font-semibold text-center my-2">Ready</p>
      </div>
      <TeacherInfo>
        <TeacherName>
          <p className="">{name}</p>
          <p className="mr-5">
            <UserAddOutlined />
          </p>
        </TeacherName>
        <Info>
          <InfoItem>
            <p className="text-lg font-bold my-2 text-gray-500">
              Already rented
            </p>
            <p className="text-red-500">{hours} hours</p>
          </InfoItem>
          <InfoItem>
            <p className="text-lg font-bold my-2 text-gray-500">
              Completion rate
            </p>
            <p className="text-red-500">{completionRate}%</p>
          </InfoItem>
          <InfoItem>
            <p className="text-lg font-bold my-2 text-gray-500">
              Device status
            </p>
            <p role="img" aria-label="microphone" className="text-red-500">
              🎤
            </p>
          </InfoItem>
        </Info>
        <div className="mt-6 w-full max-w-[800px] border rounded-md ">
          <TeacherClasses />
        </div>
      </TeacherInfo>
      <div className="w-[300px]">
        <Price>{price} đ/h</Price>
        <div className="flex">
          <Rate disabled defaultValue={rating} />
          <p className="text-gray-400 ml-4"> 50 Rating</p>
        </div>
        <ActionButtons>
          <HireButton>HIRE</HireButton>
          <Button
            className="w-[90%] mt-6 text-xl font-semibold h-[40px]"
            type="default"
          >
            CHAT
          </Button>
        </ActionButtons>
      </div>
    </CardContainer>
  );
};

export default TeacherCard;
