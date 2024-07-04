import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { getPendingUsers, approveUser, rejectUser } from '../../../api'; // Correct path to api.js

const ApproveUsers = () => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const fetchPendingUsers = async () => {
    const data = await getPendingUsers();
    setPendingUsers(data);
  };

  const handleApprove = (userId) => {
    approveUser(userId).then(() => fetchPendingUsers());
  };

  const handleReject = (userId) => {
    rejectUser(userId).then(() => fetchPendingUsers());
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button onClick={() => handleApprove(record.id)}>Approve</Button>
          <Button onClick={() => handleReject(record.id)}>Reject</Button>
          <Button onClick={() => handleViewDetails(record)}>View Details</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={pendingUsers} columns={columns} />
      {selectedUser && (
        <Modal
          title="Tutor Details"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>University Graduate: {selectedUser.universityGraduate}</p>
          <p>Class: {selectedUser.class}</p>
          <p>Student ID: {selectedUser.studentId}</p>
          <p>Graduation Year: {selectedUser.graduationYear}</p>
          <p>Major: {selectedUser.major}</p>
          <p>Academic Rank: {selectedUser.academicRank}</p>
          <p>Identity Card: {selectedUser.identityCard}</p>
          <p>University Degree Certificate: {selectedUser.universityDegreeCertificate}</p>
          <p>Master Degree Certificate: {selectedUser.masterDegreeCertificate}</p>
          <p>Secondary Degree Certificate: {selectedUser.secondaryDegreeCertificate}</p>
        </Modal>
      )}
    </>
  );
};

export default ApproveUsers;
