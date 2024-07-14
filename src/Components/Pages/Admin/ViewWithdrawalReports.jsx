import React, { useState, useEffect } from 'react';
import { List, Button, Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

const ViewWithdrawalReports = () => {
    const [reports, setReports] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Simulate fetching withdrawal reports
    useEffect(() => {
        // Replace with your actual API call
        const fetchedReports = [
            { id: 1, title: 'Withdrawal Report 1', amount: '50,000', paymentChannel: 'Tài khoản ngân hàng', bankAccount: 'Select', totalAmount: '50,000', viewed: false },
            { id: 2, title: 'Withdrawal Report 2', amount: '70,000', paymentChannel: 'Tài khoản ngân hàng', bankAccount: 'Select', totalAmount: '70,000', viewed: false },
        ];
        setReports(fetchedReports);
    }, []);

    const handleReportClick = (report) => {
        setSelectedReport(report);
        setIsModalVisible(true);
    };

    const handleConfirmViewed = () => {
        // Mark the report as viewed
        setReports((prevReports) =>
            prevReports.map((report) =>
                report.id === selectedReport.id ? { ...report, viewed: true } : report
            )
        );
        setSelectedReport(null);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setSelectedReport(null);
        setIsModalVisible(false);
    };

    return (
        <div>
            <h1>View Withdrawal Reports</h1>
            <div style={{ display: 'flex' }}>
                <List
                    style={{ width: '40%' }}
                    bordered
                    dataSource={reports}
                    renderItem={(report) => (
                        <List.Item onClick={() => handleReportClick(report)}>
                            <span style={{ textDecoration: report.viewed ? 'line-through' : 'none' }}>
                                {report.title}
                            </span>
                        </List.Item>
                    )}
                />
                <div style={{ width: '60%', paddingLeft: '20px' }}>
                    <Modal
                        title="Rút tiền"
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="back" onClick={handleCancel}>
                                Hủy
                            </Button>,
                            <Button key="submit" type="primary" onClick={handleConfirmViewed}>
                                Confirm Viewed
                            </Button>,
                        ]}
                    >
                        {selectedReport && (
                            <Form layout="vertical">
                                <Form.Item label="Số tiền rút">
                                    <Input value={selectedReport.amount} disabled />
                                </Form.Item>
                                <Form.Item label="Kênh thanh toán">
                                    <Input value={selectedReport.paymentChannel} disabled />
                                </Form.Item>
                                <Form.Item label="Tài khoản ngân hàng">
                                    <Select defaultValue={selectedReport.bankAccount} disabled>
                                        <Option value="Select">Select</Option>
                                        {/* Add more options as needed */}
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Tổng tiền nhận">
                                    <Input value={selectedReport.totalAmount} disabled />
                                </Form.Item>
                            </Form>
                        )}
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ViewWithdrawalReports;
