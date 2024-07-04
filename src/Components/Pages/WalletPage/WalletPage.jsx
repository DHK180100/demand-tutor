import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import { API_URL } from '../../../config';
import { getToken } from "../../../utils/common";

const { TabPane } = Tabs;

const WalletContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const MoneyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const MoneyAmount = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #4caf50;
`;

const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #007bff;
  color: white;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const WalletPage = () => {
  const [currentMoney, setCurrentMoney] = useState(0);
  const [rentalHistory, setRentalHistory] = useState([]);
  const [depositHistory, setDepositHistory] = useState([]);

  useEffect(() => {
    // Replace with actual data fetching
    setCurrentMoney(50000);
    setRentalHistory([
      { date: '2024-06-01', amount: 10000 },
      { date: '2024-05-25', amount: 15000 },
    ]);
    setDepositHistory([
      { date: '2024-06-02', amount: 20000 },
      { date: '2024-05-20', amount: 25000 },
    ]);
  }, []);


  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = getToken("token")
        console.log('token', token);
        const response = await fetch(`${API_URL}/wallets/transactions`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });
        if (!response.ok) {
          throw new Error('Network was not response ok');
        }
        console.log("response", response)
        const data = await response.json();
        setTransactions(data);
      }
      catch (err) {
        setTransactions(null);
      }
    })()
  }, []);
  console.log("transactions", transactions)
  if (!transactions) return <></>

  return (
    <WalletContainer>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Current Money" key="1">
          <MoneyContainer>
            <span>Available Balance:</span>
            <MoneyAmount>{currentMoney.toLocaleString()} đ</MoneyAmount>
          </MoneyContainer>
        </TabPane>
        <TabPane tab="Rental History" key="2">
          <HistoryTable>
            <thead>
              <tr>
                <TableHeader>Date</TableHeader>
                <TableHeader>Amount</TableHeader>
              </tr>
            </thead>
            <tbody>
              {rentalHistory.map((item, index) => (
                <tr key={index}>
                  <TableData>{item.date}</TableData>
                  <TableData>{item.amount.toLocaleString()} đ</TableData>
                </tr>
              ))}
            </tbody>
          </HistoryTable>
        </TabPane>
        <TabPane tab="Deposit History" key="3">
          <HistoryTable>
            <thead>
              <tr>
                <TableHeader>Date</TableHeader>
                <TableHeader>Amount</TableHeader>
              </tr>
            </thead>
            <tbody>
              {depositHistory.map((item, index) => (
                <tr key={index}>
                  <TableData>{item.date}</TableData>
                  <TableData>{item.amount.toLocaleString()} đ</TableData>
                </tr>
              ))}
            </tbody>
          </HistoryTable>
        </TabPane>
      </Tabs>
    </WalletContainer>
  );
};

const TransactionHistory = () => {


};
export default WalletPage;
