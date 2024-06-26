import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Button, Rate, Modal, Select, Input, InputNumber } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import TeacherClasses from "./TeacherClasses";
import { formatCurrency, getToken } from "../../../utils/common";
import { API_URL } from "../../../config";

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

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  padding: 10px;
  border-radius: 8px;
`;

const PaymentImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const token = getToken("token");


const TeacherCard = ({
  name,
  hours,
  completionRate,
  price,
  rating,
  status,
  ratingAmount,
}) => {
  const [isHireModalVisible, setIsHireModalVisible] = useState(false);
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [hireDuration, setHireDuration] = useState(1);
  const [message, setMessage] = useState("");
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}/app-users/GetCurrentAppUser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      if (response && response.ok) {
        const data = await response.json();
        setProfileData(data)
        return
      }
      setProfileData(null)
    })()
  }, []);

  const hireCost = useMemo(() => { return price * hireDuration }, [hireDuration, price])

  const showHireModal = () => {
    setIsHireModalVisible(true);
  };

  const handleHireOk = async () => {
    setIsHireModalVisible(false);
    const values = {
      timeHire: hireDuration,
      totalPrice: hireCost,
      appUser: {
        id: profileData.id
      },
      tutor: {
        id: 2
      }
    }
    if (profileData.wallet.amount < hireCost) return setIsPaymentModalVisible(true);
    try {
      const response = await fetch(`${API_URL}/hire-tutors/hireTutor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(values),
      });
      if (response && response.ok) {
        //handle success
      }
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      return;
    }

  };

  const handleHireCancel = () => {
    setIsHireModalVisible(false);
  };

  const handlePaymentOk = () => {
    setIsPaymentModalVisible(false);
    // Handle payment confirmation
  };

  const handlePaymentCancel = () => {
    setIsPaymentModalVisible(false);
  };

  return (
    <CardContainer>
      <div>
        <TeacherImage
          src="https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg"
          alt="Teacher"
        />
        <p className={`font-semibold text-center my-2 ${status === "BUSY" ? 'text-red-500' : 'text-green-500'}`}>{status}</p>
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
          <p className="text-gray-400 ml-4">{ratingAmount} Ratings</p>
        </div>
        <ActionButtons>
          <HireButton onClick={showHireModal}>HIRE</HireButton>
          <Button
            className="w-[90%] mt-6 text-xl font-semibold h-[40px]"
            type="default"
          >
            CHAT
          </Button>
        </ActionButtons>
      </div>
      <Modal
        title="Hire Tutor"
        visible={isHireModalVisible}
        onOk={handleHireOk}
        onCancel={handleHireCancel}
        footer={[
          <Button key="back" onClick={handleHireCancel}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={handleHireOk}>
            Hire
          </Button>,
        ]}
      >
        <div>
          <p>Tutor Name: {name}</p>
          <div>
            <label>Time to Hire: </label>
            <Select
              value={`${hireDuration} hours`}
              onChange={(value) => setHireDuration(parseInt(value))}
            >
              <Select.Option value="1">1 hour</Select.Option>
              <Select.Option value="2">2 hours</Select.Option>
              <Select.Option value="3">3 hours</Select.Option>
            </Select>
          </div>
          <p>
            Cost: {formatCurrency(hireCost)}
          </p>
          {profileData && profileData.wallet && <div>
            <span>Current balance: {formatCurrency(profileData.wallet.amount || 0)}</span>
          </div>}
          <Input.TextArea
            className="mt-4"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
        </div>
      </Modal>
      <Modal
        title="Deposit"
        visible={isPaymentModalVisible}
        onOk={handlePaymentOk}
        onCancel={handlePaymentCancel}
        footer={[
          <Button key="back" onClick={handlePaymentCancel}>
            Close
          </Button>,
        ]}
      >
        <PaymentOption>
          <PaymentImage
            src="https://static.mservice.io/img/logo-momo.png"
            alt="Momo QR code"
          />
          <p>Momo QR code</p>
        </PaymentOption>
        {/* Add more payment options here if needed */}
      </Modal>
    </CardContainer>
  );
};

export default TeacherCard;
