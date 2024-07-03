import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { getUsers, addUser, editUser, deleteUser } from '../../../api'; // Correct path to api.js

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleAdd = () => {
    // logic to add user
  };

  const handleEdit = (userId) => {
    // logic to edit user
  };

  const handleDelete = (userId) => {
    // logic to delete user
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
    { title: 'Wallet', dataIndex: 'wallet', key: 'wallet' },
    { title: 'Role', dataIndex: 'role', key: 'role' }, // Added Role column
    { title: 'Actions', key: 'actions', render: (text, record) => (
        <>
          <Button onClick={() => handleEdit(record.id)}>Edit</Button>
          <Button onClick={() => handleDelete(record.id)}>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Button type="primary" onClick={handleAdd}>Add User</Button>
      <Table dataSource={users} columns={columns} />
    </>
  );
};

export default ManageUsers;
