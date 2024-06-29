// import React from 'react';
// import Navbar from '../../Navbar/Navbar';
// import '../Register/Register.css';
// import { FcGoogle } from "react-icons/fc";

// function Register() {
//   return (
//     <div>
//       <Navbar />
//       <div className='register-container'>
//         <div className="register-inputs">
//           <h3>Create an account</h3>
//           <p>Enter your email to sign up for this app</p>
//           <div className="register-input">
//             <input type="text" placeholder='Email' />
//           </div>
//           <div className="register-input">
//             <input type="text" placeholder='Username' />
//           </div>
//           <div className="register-input">
//             <input type="password" placeholder='Password' />
//           </div>
//           <div className="register-input">
//             <input type="password" placeholder='Confirm Password' />
//           </div>
//           <div className="register-button">
//             <button className="register-btn">Register with email</button>
//           </div>
//           {/* <div className="register-button">
//             <button className="register-google-btn">
//               <FcGoogle size={24} /> Register with Google
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register;

import React, { useState } from "react";
import { Form, Button, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import logo from "../../Assets/logo.png"; // Ensure this path is correct
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../../config";

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

const RegisterButton = styled(Button)`
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
  background-color: rgb(241 245 249 / 70%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Register = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login,
        password,
        email,
        langKey: "en",
      }),
    });
    // const data = await response.json();
    if (response && response.ok) {
      window.history.pushState({}, '', '/login');
      window.location.reload()

    }
    console.log('response', response);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In");
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Container>
      {/* <Half>
        <img
          src={logo}
          alt="Logo"
          className="mt-24 max-w-full max-h-40 object-contain"
        />
      </Half> */}
      <Half>
        <div className="flex flex-col justify-center items-center w-full max-w-md">
          <SignInContainer>
            <h2 className="font-semibold text-3xl mb-5">Tạo tài khoản mới</h2>
            <p className="font-medium text-2xl text-slate-500 MB-10">
              Vui lòng nhập thông tin để đăng ký
            </p>

            <Form
              name="register"
              className="mt-10 w-full"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Vui lòng nhập email!" }]}
              >
                <Input className="h-10" placeholder="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>

              <Form.Item
                name="login"
                rules={[
                  { required: true, message: "Vui lòng nhập tên đăng nhập!" },
                ]}
              >
                <Input className="h-10" placeholder="Tên đăng nhập"
                  type="text"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
              >
                <Input.Password className="h-10" placeholder="Password" />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  { required: true, message: "Vui lòng nhập lại mật khẩu!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Mật khẩu nhập lại không khớp!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  className="h-10"
                  placeholder="Xác nhận mật khẩu"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full text-base h-10 font-semibold"
                  onClick={handleSubmit}
                >
                  Đăng ký
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
                    Đăng ký với Google
                  </Button>
                </div>
              </Form.Item>

              <Form.Item>
                <p className="text-base text-center font-semibold">
                  Bạn đã có tài khoản?
                  <Link to="/login" className="ml-2 font-bold text-cyan-700">
                    Đăng nhập
                  </Link>
                </p>
              </Form.Item>
            </Form>
          </SignInContainer>
        </div>
      </Half>
    </Container >
  );
};

export default Register;
