import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Modal } from "antd";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ChatHeader = styled.div`
  padding: 10px;
  background-color: #1890ff;
  color: white;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ChatMessages = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f5f5f5;
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #eaeaea;
`;

const ChatInput = styled(Input.TextArea)`
  flex-grow: 1;
  margin-right: 10px;
`;

const SendButton = styled(Button)`
  flex-shrink: 0;
`;

const ChatBox = ({ visible, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <Modal
      title="Chat"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={400}
    >
      <ChatContainer>
        <ChatHeader>Chat with Tutor</ChatHeader>
        <ChatMessages>
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </ChatMessages>
        <ChatInputContainer>
          <ChatInput
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <SendButton type="primary" onClick={handleSend}>
            Send
          </SendButton>
        </ChatInputContainer>
      </ChatContainer>
    </Modal>
  );
};

export default ChatBox;
