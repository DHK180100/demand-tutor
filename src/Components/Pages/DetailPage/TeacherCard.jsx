import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, Rate, Modal, Select, Input } from 'antd';
import TeacherClasses from './TeacherClasses';
import { formatCurrency, getToken } from '../../../utils/common';
import { API_URL } from '../../../config';
import ChatBox from '../../Pages/DetailPage/ChatBox'; // Updated import path
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
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
  flex: 1 0 21%; /* Adjust as needed */
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

const FollowButton = styled(Button)`
  height: 40px;
  font-weight: 600;
  font-size: 1.25rem;
  width: 90%;
  background-color: #ffa500;
  color: white;
  &:hover {
    background-color: #ffcc00;
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

const token = getToken('token');

const TeacherCard = ({
  tutorID,
  firstName,
  lastName,
  userName,
  totalHoursHired,
  percentSuccess,
  price,
  averageRate,
  teach,
  status,
  contact,
  videoUrl,
  cusrating,
  information,
  login,
  numberFollow: initialNumberFollow,
  email,
  img
}) => {
  const [isHireModalVisible, setIsHireModalVisible] = useState(false);
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [isChatModalVisible, setIsChatModalVisible] = useState(false);
  const [hireDuration, setHireDuration] = useState(1);
  const [message, setMessage] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false); // Thêm trạng thái theo dõi
  const [numberFollow, setNumberFollow] = useState(initialNumberFollow);
  const [isHiring, setIsHiring] = useState(false); // Trạng thái thuê tutor
  const [countdownTime, setCountdownTime] = useState(null); // Thời gian đếm ngược
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}/app-users/GetCurrentAppUser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response && response.ok) {
        const data = await response.json();
        setProfileData(data);
        return;
      }
      setProfileData(null);
    })();
  }, []);


  const hireCost = useMemo(() => {
    return price * hireDuration;
  }, [hireDuration, price]);

  const showHireModal = () => {
    if (!token) {
      navigate('/login');
    } else {
      setIsHireModalVisible(true);
    }
  };

  const handleHireOk = async () => {
    if (!profileData || !profileData.id) {
      navigate('/login');
      return;
    }
    setIsHiring(true); // Đặt trạng thái hiring khi bắt đầu quá trình thuê

    const values = {
      timeHire: hireDuration,
      totalPrice: hireCost,
      appUser: {
        id: profileData.id,
      },
      tutor: {
        id: tutorID,
      },
    };

    try {
      const response = await fetch(`${API_URL}/hire-tutors/hireTutor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsHireModalVisible(false);
        setIsHiring(false); // Kết thúc quá trình hiring thành công

        // Reload lại trang sau khi hiring thành công
        setTimeout(() => {
          window.location.reload();
        }, 1000); // Sau 1 giây reload lại trang
      } else {
        setIsHiring(false); // Đặt lại trạng thái hiring khi có lỗi
        console.error('Failed to hire tutor');
      }
    } catch (error) {
      setIsHiring(false); // Đặt lại trạng thái hiring khi có lỗi
      console.error('Error:', error);
    }
  };

  const startCountdown = () => {
    const interval = setInterval(() => {
      setCountdownTime(prev => prev - 1000);
    }, 1000);

    // Clear interval when countdownTime reaches 0
    setTimeout(() => {
      clearInterval(interval);
      setCountdownTime(null);
    }, countdownTime);
  };
  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}/follows/getAllFollowedTutor`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response && response.ok) {
        const followedTutors = await response.json();
        setIsFollowing(followedTutors.some(tutor => tutor.tutorId === tutorID));
      }
    })();
  }, [tutorID]);

  const handleHireCancel = () => {
    setIsHireModalVisible(false);
  };

  const handlePaymentOk = () => {
    setIsPaymentModalVisible(false);
    // Handle payment confirmation
  };

  const handleFollow = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const response = await fetch(`${API_URL}/follows/FollowAndUnFollow/${tutorID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setIsFollowing(!isFollowing); // Cập nhật trạng thái theo dõi
        setNumberFollow(prev => isFollowing ? prev - 1 : prev + 1); // Cập nhật số người theo dõi
      } else {
        console.error('Failed to follow/unfollow tutor');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const showChatModal = () => {
    if (!token) {
      navigate('/login');
    } else {
      setIsChatModalVisible(true);
    }
  };

  const handleChatClose = () => {
    setIsChatModalVisible(false);
  };
  const handlePaymentCancel = () => {
    setIsPaymentModalVisible(false);
  };

  return (
    <CardContainer>
      <div>
        <TeacherImage
          src={img}
          alt='Teacher'
        />
        <p
          className={`font-semibold text-center my-2 ${status === 'BUSY' ? 'text-red-500' : 'text-green-500'
            }`}
        >
          {status}
        </p>
      </div>
      <TeacherInfo>
        <TeacherName>
          <p className=''>{firstName}</p>
        </TeacherName>
        <Info>
          <InfoItem>
            <p className='text-lg font-bold my-2 text-gray-500'>
              Already rented
            </p>
            <p className='text-red-500'>{totalHoursHired} Hours</p>
          </InfoItem>
          <InfoItem>
            <p className='text-lg font-bold my-2 text-gray-500'>
              Completion rate
            </p>
            <p className='text-red-500'>{percentSuccess}%</p>
          </InfoItem>
          <InfoItem>
            <p className='text-lg font-bold my-2 text-gray-500'>Followers</p>
            <p className='text-red-500'>{numberFollow}</p>
          </InfoItem>
          <InfoItem>
            <p className='text-lg font-bold my-2 text-gray-500'>
              Device status
            </p>
            <p role='img' aria-label='microphone' className='text-red-500'>
              🎤
            </p>
          </InfoItem>
        </Info>
        <div className='mt-6 w-full max-w-[800px] border rounded-md '>
          <TeacherClasses teach={teach} />
        </div>
      </TeacherInfo>
      <div className='w-[300px]'>
        <Price>{price} đ/h</Price>
        <div className='flex'>
          <Rate disabled defaultValue={cusrating} />
          <p className='text-gray-400 ml-4'>{averageRate} Ratings</p>
        </div>
        <ActionButtons>
          <HireButton onClick={showHireModal} disabled={isHiring}>
            {isHiring ? 'Hiring...' : 'HIRE'}
          </HireButton>
          <FollowButton onClick={showChatModal}>CHAT</FollowButton>
          <FollowButton onClick={handleFollow}>
            {isFollowing ? 'Unfollow' : 'Follow'}
          </FollowButton>
        </ActionButtons>
      </div>
      <Modal
        title='Hire Tutor'
        visible={isHireModalVisible}
        onOk={handleHireOk}
        onCancel={handleHireCancel}
        footer={[
          <Button key='back' onClick={handleHireCancel}>
            Close
          </Button>,
          <Button key='submit' type='primary' onClick={handleHireOk}>
            Hire
          </Button>,
        ]}
      >
        <div>
          <p>Tutor Name: {firstName}</p>
          <div>
            <label>Time to Hire: </label>
            <Select
              value={`${hireDuration} hours`}
              onChange={(value) => setHireDuration(parseInt(value))}
            >
              <Select.Option value='1'>1 hour</Select.Option>
              <Select.Option value='2'>2 hours</Select.Option>
              <Select.Option value='3'>3 hours</Select.Option>
              <Select.Option value='4'>4 hours</Select.Option>
              <Select.Option value='5'>5 hours</Select.Option>
            </Select>
          </div>
          <p>Cost: {formatCurrency(hireCost)}</p>
          {profileData && profileData.wallet && (
            <div>
              <span>
                Current balance:{' '}
                {formatCurrency(profileData.wallet.amount || 0)}
              </span>
            </div>
          )}
          <Input.TextArea
            className='mt-4'
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Type a message...'
          />
        </div>
      </Modal>
      <Modal
        title='Deposit'
        visible={isPaymentModalVisible}
        onOk={handlePaymentOk}
        onCancel={handlePaymentCancel}
        footer={[
          <Button key='back' onClick={handlePaymentCancel}>
            Close
          </Button>,
        ]}
      >
        <PaymentOption>
          <PaymentImage
            src='https://static.mservice.io/img/logo-momo.png'
            alt='Momo QR code'
          />
          <p>Momo QR code</p>
        </PaymentOption>
        {/* Add more payment options here if needed */}
      </Modal>
      <ChatBox
        visible={isChatModalVisible}
        onClose={handleChatClose}
        receiver={login}
      />
    </CardContainer>
  );
};

export default TeacherCard;
