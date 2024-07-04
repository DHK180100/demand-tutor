import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { getTotalIncome } from '../../../api'; // Correct path to api.js

const TotalIncome = () => {
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    fetchTotalIncome();
  }, []);

  const fetchTotalIncome = async () => {
    const income = await getTotalIncome();
    setTotalIncome(income);
  };

  return (
    <Card title="Total Income" style={{ width: 300 }}>
      <p>{totalIncome.toLocaleString()} đ</p>
    </Card>
  );
};

export default TotalIncome;
