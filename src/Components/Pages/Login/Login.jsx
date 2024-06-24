import React from "react";
import { Form, Button, Input, Checkbox } from "antd";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import logo from "../../Assets/logo.png"; // Ensure this path is correct
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url(${require("../../Assets/classroom.png")});
  background-size: cover;
  background-position: center;
`;

const Half = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const StyledInput = styled(Input)`
  width: 100%;
  max-width: 480px;
  height: 3rem;
  border-radius: 0.375rem;
`;

const LoginButton = styled(Button)`
  width: 100%;
  max-width: 480px;
  background-color: #007bff;
  color: white;
  height: 3rem;
  border-radius: 0.375rem;
`;

const GoogleButton = styled(Button)`
  width: 100%;
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  height: 3rem;
`;

const CreateAccountLink = styled.a`
  margin-top: 1.25rem;
  text-decoration: underline;
  color: #333;
`;

const SignInContainer = styled.div`
    width: 600px;
    border-radius: 0.75rem;
    padding: 50px 100px 50px 100px;
    background-color: rgb(241 245 249 / 54%););
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    `;

const BaseURL = "http://42.116.248.123:8080/api";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In");
  };

  const onFinish = async (values) => {
    try {
      const response = await fetch(`${BaseURL}/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response && response.ok) {
        const data = await response.json();
        document.cookie = `token=${data.id_token};expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/`;
        window.history.pushState({}, "", "/");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      return;
    }
  };

  return (
    <Container>
      <Half>
        <img
          src={logo}
          alt="Logo"
          className="mt-24 max-w-full max-h-40 object-contain"
        />
      </Half>
      <Half>
        <div className="flex flex-col justify-center items-center w-full max-w-md">
          <SignInContainer>
            <h2 className="font-semibold text-3xl mb-5">
              Chào mừng bạn đến với ON TURTO DEMAND
            </h2>
            <p className="font-medium text-2xl text-slate-500 MB-10">
              Vui lòng nhập thông tin để đăng nhập
            </p>

            <Form
              name="normal_login"
              className="mt-10 w-full"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Vui lòng nhập email!" }]}
              >
                <Input className="h-10" placeholder="Tên đăng nhập" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
              >
                <Input.Password className="h-10" placeholder="Password" />
              </Form.Item>

              <Form.Item className="flex justify-between items-center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className="text-base font-semibold">
                    Nhớ mật khẩu
                  </Checkbox>
                </Form.Item>
                <Link
                  to="/forget-password"
                  className="text-base font-semibold text-cyan-700"
                >
                  Quên mật khẩu ?
                </Link>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full text-base h-10 font-semibold"
                >
                  Đăng nhập
                </Button>
              </Form.Item>

              <Form.Item>
                <div className="w-full flex justify-center gap-4">
                  <Button
                    type="primary"
                    className="bg-red-500 flex-grow text-base h-10 font-semibold"
                    onClick={handleGoogleSignIn}
                  >
                    <FcGoogle />
                    Google+
                  </Button>
                </div>
              </Form.Item>

              <Form.Item>
                <p className="text-base text-center font-semibold">
                  Tôi chưa có tài khoản ?
                  <Link to="/register" className="ml-2 font-bold text-cyan-700">
                    Đăng ký
                  </Link>
                </p>
              </Form.Item>
            </Form>
          </SignInContainer>
        </div>
      </Half>
    </Container>
  );
};

export default Login;
