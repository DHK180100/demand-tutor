import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Button, Rate, Modal, Select, Input } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import TeacherClasses from "./TeacherClasses";
import { formatCurrency, getToken } from "../../../utils/common";
import { API_URL } from "../../../config";
import ChatBox from "../../Pages/DetailPage/ChatBox"; // Updated import path

const CardContainer = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid #eaeaea;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 1100px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
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

const TeacherNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative; /* For positioning the follow icon */
`;

const TeacherName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
`;

const FollowIconWrapper = styled.div`
  position: absolute;
  top: -10px; /* Adjust to move icon higher/lower */
  right: 100px; /* Adjust to move icon left/right */
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap; /* Prevent overflow */
`;

const FollowIcon = styled(UserAddOutlined)`
  font-size: 2rem; /* Adjust the size as needed */
  cursor: pointer;
  color: ${({ followed }) => (followed ? "#ff4d4f" : "#007bff")};
  &:hover {
    color: ${({ followed }) => (followed ? "#ff7875" : "#0056b3")};
  }
`;

const FollowButton = styled(Button)`
  height: 30px;
  font-weight: 600;
  font-size: 1rem;
  width: 80px;
  background-color: ${({ followed }) => (followed ? "#ff4d4f" : "#ffa500")};
  color: white;
  margin-top: 5px;
  &:hover {
    background-color: ${({ followed }) => (followed ? "#ff7875" : "#ffcc00")};
    color: white;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const InfoItem = styled.div`
  margin-right: 16px;
  font-size: 1rem;
  color: #555;
  text-align: center;
  flex: 1 0 21%;
`;

const Price = styled.div`
  font-size: 2rem;
  color: #ff4d4f;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 10px;
  &:hover {
    background-color: #ff7875;
    color: white;
  }
`;

const ChatButton = styled(Button)`
  height: 40px;
  font-weight: 600;
  font-size: 1.25rem;
  width: 90%;
  background-color: #ffa500;
  color: white;
  margin-bottom: 10px;
  &:hover {
    background-color: #ffcc00;
    color: white;
  }
`;

const ReportButton = styled(Button)`
  height: 40px;
  font-weight: 600;
  font-size: 1.25rem;
  width: 90%;
  background-color: #ff4d4f;
  color: white;
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
  followers,
}) => {
  const [isHireModalVisible, setIsHireModalVisible] = useState(false);
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [isChatModalVisible, setIsChatModalVisible] = useState(false);
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const [hireDuration, setHireDuration] = useState(1);
  const [message, setMessage] = useState("");
  const [reportMessage, setReportMessage] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}/app-users/GetCurrentAppUser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response && response.ok) {
        const data = await response.json();
        setProfileData(data);
        // Check if the tutor is already followed
        const isFollowed = data.followedTutors.includes(2); // Adjust tutorId accordingly
        setFollowed(isFollowed);
        return;
      }
      setProfileData(null);
    })();
  }, []);

  const hireCost = useMemo(() => {
    return price * hireDuration;
  }, [hireDuration, price]);

  const showHireModal = () => {
    setIsHireModalVisible(true);
  };

  const handleHireOk = async () => {
    setIsHireModalVisible(false);
    const values = {
      timeHire: hireDuration,
      totalPrice: hireCost,
      appUser: {
        id: profileData.id,
      },
      tutor: {
        id: 2,
      },
    };
    if (profileData.wallet.amount < hireCost) return setIsPaymentModalVisible(true);
    try {
      const response = await fetch(`${API_URL}/hire-tutors/hireTutor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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

  const handleFollow = async () => {
    try {
      const response = await fetch(`${API_URL}/follow`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ tutorId: 2 }), // Adjust tutorId accordingly
      });
      if (response && response.ok) {
        setFollowed(!followed);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const showChatModal = () => {
    setIsChatModalVisible(true);
  };

  const handleChatClose = () => {
    setIsChatModalVisible(false);
  };

  const showReportModal = () => {
    setIsReportModalVisible(true);
  };

  const handleReportOk = async () => {
    setIsReportModalVisible(false);
    // Handle the report submission
    try {
      const response = await fetch(`${API_URL}/reports/report`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tutorId: 2, // Adjust tutorId accordingly
          message: reportMessage,
        }),
      });
      if (response && response.ok) {
        //handle success
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleReportCancel = () => {
    setIsReportModalVisible(false);
  };

  return (
    <CardContainer>
      <div>
        <TeacherImage
          src="https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg"
          alt="Teacher"
        />
        <p
          className={`font-semibold text-center my-2 ${
            status === "BUSY" ? "text-red-500" : "text-green-500"
          }`}
        >
          {status}
        </p>
      </div>
      <TeacherInfo>
        <TeacherNameContainer>
          <TeacherName>{name}</TeacherName>
          <FollowIconWrapper>
            <FollowIcon followed={followed} onClick={handleFollow} />
            <FollowButton followed={followed} onClick={handleFollow}>
              {followed ? "FOLLOWING" : "FOLLOW"}
            </FollowButton>
          </FollowIconWrapper>
        </TeacherNameContainer>
        <Info>
          <InfoItem>
            <p className="text-lg font-bold my-2 text-gray-500">Already rented</p>
            <p className="text-red-500">{hours} hours</p>
          </InfoItem>
          <InfoItem>
            <p className="text-lg font-bold my-2 text-gray-500">Completion rate</p>
            <p className="text-red-500">{completionRate}%</p>
          </InfoItem>
          <InfoItem>
            <p className="text-lg font-bold my-2 text-gray-500">Followers</p>
            <p className="text-red-500">{followers}</p>
          </InfoItem>
          <InfoItem>
            <p className="text-lg font-bold my-2 text-gray-500">Device status</p>
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
          <ChatButton onClick={showChatModal}>CHAT</ChatButton>
          <ReportButton onClick={showReportModal}>REPORT</ReportButton>
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
          <p>Cost: {formatCurrency(hireCost)}</p>
          {profileData && profileData.wallet && (
            <div>
              <span>
                Current balance: {formatCurrency(profileData.wallet.amount || 0)}
              </span>
            </div>
          )}
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
      <Modal
        title="Report Tutor"
        visible={isReportModalVisible}
        onOk={handleReportOk}
        onCancel={handleReportCancel}
        footer={[
          <Button key="back" onClick={handleReportCancel}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={handleReportOk}>
            Submit
          </Button>,
        ]}
      >
        <div>
          <Input.TextArea
            className="mt-4"
            rows={4}
            value={reportMessage}
            onChange={(e) => setReportMessage(e.target.value)}
            placeholder="Describe the issue..."
          />
        </div>
      </Modal>
      <ChatBox visible={isChatModalVisible} onClose={handleChatClose} />
    </CardContainer>
  );
};

export default TeacherCard;