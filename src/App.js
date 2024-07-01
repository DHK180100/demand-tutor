import './App.css';
import MainPage from './Components/Pages/MainPage/MainPage';
import TeacherDetailPage from './Components/Pages/DetailPage/TeacherDetailPage';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import WalletPage from './Components/Pages/WalletPage/WalletPage'; // Corrected path to WalletPage
import { Routes, Route } from 'react-router-dom';
import WithNavbar from './Components/Layout/WithNavbar';
import WithoutNavbar from './Components/Layout/WithoutNavbar';
import UserProfilePage from './Components/Pages/ProfilePage/UserProfilePage/UserProfilePage';
import TutorProfilePage from './Components/Pages/ProfilePage/TutorProfilePage/TutorProfilePage';
import ScheduleProfile from './Components/Pages/ProfilePage/ScheduleProfile/ScheduleProfile';

function App() {
  return (
    <Routes>
      <Route element={<WithNavbar />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/teacher-detail/:id" element={<TeacherDetailPage />} />
        <Route path="/UserProfile" element={<UserProfilePage />} />
        <Route path="/TutorProfile" element={<TutorProfilePage />} />
        <Route path="/ScheduleProfile" element={<ScheduleProfile />} />
        <Route path="/wallet" element={<WalletPage />} /> {/* New Wallet Page Route */}
        <Route path="/login" element={<Login />} /> {/* Login Route */}
        <Route path="/register" element={<Register />} /> {/* Register Route */}
      </Route>
    </Routes>
  );
}

export default App;
