import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Tabs, Button, Modal, Form, Input, Select, Spin } from 'antd';
import { API_URL } from '../../../config';
import { getToken } from "../../../utils/common";

const { TabPane } = Tabs;
const { Option } = Select;


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

  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = getToken("token")
        console.log('token', token);
        const response = await fetch(`${API_URL}/wallets/Historytransactions`, {
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFinish = (values) => {
    console.log('Received values of form: ', values);
    // Add your submit logic here
    setIsModalVisible(false);
  };


  if (!transactions) return <></>

  return (
    <WalletContainer>
      <Button type="primary" onClick={showModal}>
        Withdrawal
      </Button>
      <Modal title="Rút tiền" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form layout="vertical" onFinish={handleFinish}>
          <Form.Item label="Số tiền rút" name="withdrawAmount" rules={[{ required: true, message: 'Please input the amount to withdraw!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Kênh thanh toán" name="paymentChannel" rules={[{ required: true, message: 'Please select the payment channel!' }]}>
            <Select>
              <Option value="bank">Tài khoản ngân hàng</Option>
              {/* Add other options as needed */}
            </Select>
          </Form.Item>
          <Form.Item label="Tài khoản ngân hàng" name="bankAccount" rules={[{ required: true, message: 'Please select the bank account!' }]}>
            <Select>
              <Option value="select">Select...</Option>
              {/* Add bank account options here */}
            </Select>
          </Form.Item>
          <Form.Item label="Tổng tiền nhận" name="totalAmount">
            <Input readOnly />
          </Form.Item>
          <Form.Item>
            <Button type="default" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }}>
              Send
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Current Money" key="1">
          <MoneyContainer>
            <span>Available Balance:</span>
            <MoneyAmount>{transactions.amount.toLocaleString()} đ</MoneyAmount>
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
              {transactions.hireTrans.map((item, index) => (
                <tr key={index}>
                  <TableData>{item.createAt}</TableData>
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
              {transactions.depositTrans.map((item, index) => (
                <tr key={index}>
                  <TableData>{item.createAt}</TableData>
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
