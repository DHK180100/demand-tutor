import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useWebSocket } from './Components/Contexts/SockContext';
import WithNavbar from './Components/Layout/WithNavbar';
import { getToken } from './Components/Navbar/Navbar';
import ChatBox from './Components/Pages/DetailPage/ChatBox';
import TeacherDetailPage from './Components/Pages/DetailPage/TeacherDetailPage';
import IdentityCardPage from './Components/Pages/IdentityCard/IdentityCardPage';
import Login from './Components/Pages/Login/Login';
import MainPage from './Components/Pages/MainPage/MainPage';
import TutorProfilePage from './Components/Pages/ProfilePage/TutorProfilePage/TutorProfilePage';
import UserProfilePage from './Components/Pages/ProfilePage/UserProfilePage/UserProfilePage';
import Register from './Components/Pages/Register/Register';
import WalletPage from './Components/Pages/WalletPage/WalletPage';
import { API_URL } from './config';
import AdminPage from './Components/Pages/Admin/AdminPage';
import WithoutNavbar from './Components/Layout/WithoutNavbar';
import ScheduleProfile from './Components/Pages/ProfilePage/ScheduleProfile/ScheduleProfile';
import ToanTeacher from './Components/Pages/SubjectPages/ToanTeacher';
import LyTeacher from './Components/Pages/SubjectPages/LyTeacher';
import HoaTeacher from './Components/Pages/SubjectPages/HoaTeacher';
import SuTeacher from './Components/Pages/SubjectPages/SuTeacher';
import VanTeacher from './Components/Pages/SubjectPages/VanTeacher';
import DiaTeacher from './Components/Pages/SubjectPages/DiaTeacher';
import AnhTeacher from './Components/Pages/SubjectPages/AnhTeacher';
import OtherTeacher from './Components/Pages/SubjectPages/OtherTeacher';

function App() {
  const [visible, setVisible] = useState(false);
  const socket = useWebSocket();

  useEffect(() => {
    // Connect WebSocket when component is mounted
    socket?.connect?.(onMessageReceived);

    // Disconnect WebSocket when component is unmounted
    return () => {
      socket?.disconnect();
    };
  }, []);

  const onMessageReceived = async (res) => {
    const result = JSON.parse(res.body);
    const token = getToken('token');
    const resp = await fetch(`${API_URL}/app-users/GetCurrentAppUser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const currentUser = await resp.json();

    if (result?.receiver === currentUser?.user?.login) {
      setVisible(true);
    }
  };

  return (
    <>
      <Routes>
        <Route element={<WithNavbar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/teacher-detail/:id" element={<TeacherDetailPage />} />
          <Route path="/UserProfile" element={<UserProfilePage />} />
          <Route path="/TutorProfile" element={<TutorProfilePage />} />
          <Route path="/ScheduleProfile" element={<ScheduleProfile />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/IdentityCard" element={<IdentityCardPage />} />
          <Route path="/ToanTeacher" element={<ToanTeacher />} />
          <Route path="/LyTeacher" element={<LyTeacher />} />
          <Route path="/HoaTeacher" element={<HoaTeacher />} />
          <Route path="/SuTeacher" element={<SuTeacher />} />
          <Route path="/VanTeacher" element={<VanTeacher />} />
          <Route path="/DiaTeacher" element={<DiaTeacher />} />
          <Route path="/AnhTeacher" element={<AnhTeacher />} />
          <Route path="/OtherTeacher" element={<OtherTeacher />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<WithNavbar />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
      <ChatBox visible={visible} onClose={() => setVisible(false)} />
    </>
  );
}

export default App;
