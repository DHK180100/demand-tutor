import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/Pages/MainPage/MainPage';
import TeacherDetailPage from './Components/Pages/DetailPage/TeacherDetailPage';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
import WithNavbar from './Components/Layout/WithNavbar';
import WithoutNavbar from './Components/Layout/WithoutNavbar';

function App() {
  return (
    <Routes>
      <Route element={<WithNavbar />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/teacher-detail" element={<TeacherDetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<WithoutNavbar />}>
      </Route>
    </Routes>
  );
}

export default App;
