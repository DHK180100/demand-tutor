import './App.css';
import MainPage from './Components/Pages/MainPage/MainPage';
import TeacherDetailPage from './Components/Pages/DetailPage/TeacherDetailPage';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import WalletPage from './Components/Pages/WalletPage/WalletPage';
import AdminPage from './Components/Pages/Admin/AdminPage';
import { Routes, Route } from 'react-router-dom';
import WithNavbar from './Components/Layout/WithNavbar';
import WithoutNavbar from './Components/Layout/WithoutNavbar';
import UserProfilePage from './Components/Pages/ProfilePage/UserProfilePage/UserProfilePage';
import TutorProfilePage from './Components/Pages/ProfilePage/TutorProfilePage/TutorProfilePage';
import ScheduleProfile from './Components/Pages/ProfilePage/ScheduleProfile/ScheduleProfile';
import IdentityCardPage from './Components/Pages/IdentityCard/IdentityCardPage';
import ToanTeacher from './Components/Pages/SubjectPages/ToanTeacher';
import LyTeacher from './Components/Pages/SubjectPages/LyTeacher';
import HoaTeacher from './Components/Pages/SubjectPages/HoaTeacher';
import SuTeacher from './Components/Pages/SubjectPages/SuTeacher';
import VanTeacher from './Components/Pages/SubjectPages/VanTeacher';
import DiaTeacher from './Components/Pages/SubjectPages/DiaTeacher';
import AnhTeacher from './Components/Pages/SubjectPages/AnhTeacher';
import OtherTeacher from './Components/Pages/SubjectPages/OtherTeacher';

function App() {
  return (
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
      </Route>
      <Route element={<WithoutNavbar />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<WithNavbar />}> {/* Admin Page with Navbar */}
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;
