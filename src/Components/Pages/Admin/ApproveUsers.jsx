import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { getPendingUsers, approveUser, rejectUser } from '../../../api'; // Correct path to api.js

const ApproveUsers = () => {
  const [pendingUsers, setPendingUsers] = useState([]);

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
        </>
      ),
    },
  ];

  return (
    <Table dataSource={pendingUsers} columns={columns} />
  );
};

export default ApproveUsers;
