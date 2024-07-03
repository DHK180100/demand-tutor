import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getReports } from '../../../api'; // Correct path to api.js

const ViewReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const data = await getReports();
    setReports(data);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Student Name', dataIndex: 'studentName', key: 'studentName' },
    { title: 'Tutor Name', dataIndex: 'tutorName', key: 'tutorName' },
    { title: 'Report', dataIndex: 'report', key: 'report' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
  ];

  return (
    <Table dataSource={reports} columns={columns} />
  );
};

export default ViewReports;
