import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';
import Navbar from "./components/Navbar";

/* Importing Navigation Elements Pages */
import Home from "./pages/Home/Home";
import GovernanceLeadership from "./pages/About/GovernanceLeadership";
import History from "./pages/About/History";
import Patron from "./pages/About/Patron";
import Trust from "./pages/About/Trust";
import VisionandMission from "./pages/About/VisionandMission";
import Commerce from "./pages/Academics/Commerce";
import ComputerApplications from "./pages/Academics/ComputerApplications";
import Management from "./pages/Academics/Management";
import Committees from './pages/Committees/Committees';
import AcademicFacility from './pages/Infrastructure/AcademicFacility';
import HealthandSafety from './pages/Infrastructure/HealthandSafety';
import OnCampus from './pages/Infrastructure/OnCampus';
import Sports from './pages/Infrastructure/Sports';
import Transportation from './pages/Infrastructure/Transportation';
import IQAC from './pages/IQAC/IQAC';
import AdminLogin from './pages/Login/AdminLogin';
import StaffsLogin from './pages/Login/StaffsLogin';
import StudentsLogin from './pages/Login/StudentsLogin';
import NAAC from './pages/NAAC/NAAC';
import Newsletter from './pages/Newsletter/Newsletter';
import Brochures from './pages/Placements/Brochures';
import PlacementsandStatistics from './pages/Placements/PlacementsandStatistics';
import RecrutingPartners from './pages/Placements/RecrutingPartners';
import Training from './pages/Placements/Training';
import Faculties from "./pages/Faculties/Faculties";
import Library from "./pages/Library/Library";
import StaffDashboard from "./pages/Dashboards/staffsdashboards";

function AppContent() {
  const location = useLocation();

  // Define routes where Header and Navbar should not appear
  const noHeaderNavbarRoutes = [
    "/login/adminlogin",
    "/login/staffslogin",
    "/login/studentslogin"
  ];

  const shouldHideHeaderNavbar = noHeaderNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* Render Header and Navbar only if not in noHeaderNavbarRoutes */}
      {!shouldHideHeaderNavbar && <Header />}
      {!shouldHideHeaderNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About/GovernanceLeadership" element={<GovernanceLeadership />} />
        <Route path="/About/History" element={<History />} />
        <Route path="/About/Patron" element={<Patron />} />
        <Route path="/About/Trust" element={<Trust />} />
        <Route path="/About/Vision & Mission" element={<VisionandMission />} />
        <Route path="/Infrastructure/AcademicFacility" element={<AcademicFacility />} />
        <Route path="/Infrastructure/HealthandSafety" element={<HealthandSafety />} />
        <Route path="/Infrastructure/OnCampus" element={<OnCampus />} />
        <Route path="/Infrastructure/Sports" element={<Sports />} />
        <Route path="/Infrastructure/Transportation" element={<Transportation />} />
        <Route path="/Academics/Commerce" element={<Commerce />} />
        <Route path="/Academics/ComputerApplications" element={<ComputerApplications />} />
        <Route path="/Academics/Management" element={<Management />} />
        <Route path="/Placements/Brochures" element={<Brochures />} />
        <Route path="/Placements/PlacementsandStatistics" element={<PlacementsandStatistics />} />
        <Route path="/Placements/RecrutingPartners" element={<RecrutingPartners />} />
        <Route path="/Placements/Training" element={<Training />} />
        <Route path="/Faculties" element={<Faculties />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/NAAC" element={<NAAC />} />
        <Route path="/Committees" element={<Committees />} />
        <Route path="/IQAC" element={<IQAC />} />
        <Route path="/Newsletter" element={<Newsletter />} />
        <Route path="/Login/AdminLogin" element={<AdminLogin />} />
        <Route path="/Login/StaffsLogin" element={<StaffsLogin />} />
        <Route path="/Login/StudentsLogin" element={<StudentsLogin />} />
        <Route path="/Dashboards/StaffDashboard" element={<StaffDashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className='container'>
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
