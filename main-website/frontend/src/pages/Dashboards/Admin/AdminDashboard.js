import { useEffect, useState } from "react";
import { useNavigate, Routes, Route } from 'react-router-dom';
import SideBar from '../../../components/SideBar.js';
import MainDashboard from './MainDashboard.js';
import FacultyPage from './FacultyPage.js';
import '../../../styles/pages/AdminDashboard.css';

const AdminDashboard = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("http://localhost:5000/api/admin/check-session", {
        credentials: "include",
      });

      if (response.ok) {
        setAuth(true);
      } else {
        navigate("/login/adminlogin");
      }
    };

    checkAuth();
  }, [navigate]);

  return auth ? (
    <div className='admin-page-main-container'>
      <SideBar />
      <div className="admin-page-content">
        <Routes>
          <Route path="dashboard" element={<MainDashboard />} />
          <Route path="faculties" element={<FacultyPage />} />
        </Routes>
      </div>
    </div>
  ) : null;
};

export default AdminDashboard;
