import { Routes, Route } from 'react-router-dom';
import SideBar from '../../../components/AdminSideBar.js';
import MainDashboard from './MainDashboard.js';
import FacultyPage from './FacultyPage.js';
import NewsEvents from './NewsAndEvents.js';
import '../../../styles/pages/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className='admin-page-main-container'>
      <SideBar />
      <div className="admin-page-content">
        <Routes>
          <Route path="dashboard" element={<MainDashboard />} />
          <Route path="faculties" element={<FacultyPage />} />
          <Route path="newsandevents" element={<NewsEvents />} />
        </Routes>
      </div>
    </div>
  )
};

export default AdminDashboard;
