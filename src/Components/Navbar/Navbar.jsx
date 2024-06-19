import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button, Avatar, Badge } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  WalletOutlined,
  LogoutOutlined,
  ProfileOutlined,
  ScheduleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import logo from "../Assets/logo.png";
import styled from "styled-components";

import "./Navbar.css";
import { Link } from "react-router-dom";

export const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const NavbarContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 70px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavButton = styled(Button)`
  height: 40px;
  font-size: 16px;
`;

const UserButton = styled(Button)`
  height: 47px;
  font-size: 16px;
`;

const WalletBalance = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const notifications = (
  <Menu>
    <Menu.Item key="1">
      <Link to="/notification1">Notification 1</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/notification2">Notification 2</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/notification3">Notification 3</Link>
    </Menu.Item>
  </Menu>
);

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<SettingOutlined />}>
      <Link to="/UserProfile">Profile Settings</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<ProfileOutlined />}>
      <Link to="/TutorProfile">Tutor Profile</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<ScheduleOutlined />}>
      <Link to="/ScheduleProfile">Schedule Profile</Link>
    </Menu.Item>
    <Menu.Item key="4" icon={<WalletOutlined />}>
      <Link to="/wallet">My Wallet</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5" icon={<LogoutOutlined />}>
      <p className="font-semibold text-cyan-700">Logout</p>
    </Menu.Item>
  </Menu>
);

function Navbar() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("John Doe");
  const [walletBalance, setWalletBalance] = useState(128000);

  const handleLogin = () => {
    setToken("fakeToken"); // Fake token for demonstration
  };

  const handleLogout = () => {
    setToken(null);
  };

  useEffect(() => {
    const token = getCookie("token");
    setToken(token);
  }, []);

  const handleClick = () => {
    if (!token) {
      window.history.pushState({}, "", "/login");
      window.dispatchEvent(new PopStateEvent("popstate"));
    } else {
      document.cookie = "token" + "=; Max-Age=-99999999;";
      window.history.pushState({}, "", "/");
      window.location.reload();
    }
  };

  return (
    <NavbarContainer>
      <NavLogo>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </NavLogo>
      <NavMenu>
        {token && (
          <>
            <Dropdown
              overlay={notifications}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Badge count={5}>
                <BellOutlined style={{ fontSize: "24px" }} />
              </Badge>
            </Dropdown>
            <Link to="/wallet">
              <WalletBalance>
                <WalletOutlined />
                <span>{walletBalance.toLocaleString()} đ</span>
              </WalletBalance>
            </Link>
          </>
        )}
        {!token ? (
          <>
            <Link to="/login">
              <NavButton type="primary" onClick={handleLogin}>
                Login
              </NavButton>
            </Link>
            <Link to="/register">
              <NavButton>Sign Up</NavButton>
            </Link>
          </>
        ) : (
          <Dropdown overlay={menu} trigger={["click"]}>
            <UserButton>
              <Avatar
                style={{ backgroundColor: "rgb(14 116 144)" }}
                icon={<UserOutlined />}
              />
              <span className="ml-2 font-semibold text-cyan-700">
                {username}
              </span>
            </UserButton>
          </Dropdown>
        )}
      </NavMenu>
    </NavbarContainer>
  );
}

export default Navbar;
