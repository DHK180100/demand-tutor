import React, { useState, useEffect } from 'react';
import { List, Button, Modal, Form, Input, Select, Table } from 'antd';

const { Option } = Select;

const ViewWithdrawalReports = () => {
    const [reports, setReports] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Simulate fetching withdrawal reports
    useEffect(() => {
        // Replace with your actual API call
        const fetchedReports = [
            {
                id: 1,
                userId: 1,
                name: 'John Doe',
                email: 'john@example.com',
                status: 'InActive',
                amount: '50,000',
                paymentChannel: 'Tài khoản ngân hàng',
                bankAccount: 'Select',
                totalAmount: '50,000',
                viewed: false
            },
            {
                id: 2,
                userId: 2,
                name: 'Jane Smith',
                email: 'jane@example.com',
                status: 'InActive',
                amount: '70,000',
                paymentChannel: 'Tài khoản ngân hàng',
                bankAccount: 'Select',
                totalAmount: '70,000',
                viewed: false
            },
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

    const handleStatusChange = (reportId, status) => {
        setReports((prevReports) =>
            prevReports.map((report) =>
                report.id === reportId ? { ...report, status } : report
            )
        );
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => (
                <span>{text === 'Active' ? 'Active' : 'InActive'}</span>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <div>
                    <Button
                        type="primary"
                        onClick={() => handleStatusChange(record.id, 'Active')}
                        disabled={record.status === 'Active'}
                    >
                        Confirm
                    </Button>
                    <Button
                        type="danger"
                        onClick={() => handleStatusChange(record.id, 'InActive')}
                        disabled={record.status === 'InActive'}
                    >
                        Reject
                    </Button>
                    <Button onClick={() => handleReportClick(record)}>
                        View Withdrawal
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <h1>View Withdrawal Reports</h1>
            <Table dataSource={reports} columns={columns} rowKey="id" />

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
    );
};

export default ViewWithdrawalReports;
