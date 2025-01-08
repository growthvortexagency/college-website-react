import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setActiveDropdown(null); // Close any open dropdown when toggling sidebar
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">Home<span></span></Link>
        <div className="dropdown">
          <Link to="/about">About Us ▼<span></span></Link>
          <div className="dropdown-content">
            <Link to="/about/patron">Patron<span></span></Link>
            <Link to="/about/trust">Trust<span></span></Link>
            <Link to="/about/vision & mission">Vision & Mission<span></span></Link>
            <Link to="/about/history">History<span></span></Link>
            <Link to="/about/governanceleadership">Governance & Leadership<span></span></Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/infrastructure">Infrastructure ▼<span></span></Link>
          <div className="dropdown-content">
            <Link to="/infrastructure/academicfacility">Academic Facility<span></span></Link>
            <Link to="/infrastructure/healthandsafety">Health & Safety<span></span></Link>
            <Link to="/infrastructure/oncampus">On Campus<span></span></Link>
            <Link to="/infrastructure/sports">Sports<span></span></Link>
            <Link to="/infrastructure/transportation">Transportation<span></span></Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/academics">Academics ▼<span></span></Link>
          <div className="dropdown-content">
            <Link to="/academics/commerce">Commerce<span></span></Link>
            <Link to="/academics/computerapplications">Computer Applications<span></span></Link>
            <Link to="/academics/management">Management<span></span></Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/placements">Placements ▼<span></span></Link>
          <div className="dropdown-content">
            <Link to="/placements/training">Training<span></span></Link>
            <Link to="/placements/placementsandstatistics">Placements Statistics<span></span></Link>
            <Link to="/placements/recrutingpartners">Recruiting Partner<span></span></Link>
            <Link to="/placements/brochures">Brochures<span></span></Link>
          </div>
        </div>
        <Link to="/faculties">Faculties<span></span></Link>
        <Link to="/library">Library<span></span></Link>
        <Link to="/naac">NAAC<span></span></Link>
        <Link to="/committees">Committees<span></span></Link>
        <Link to="/iqac">IQAC<span></span></Link>
        <Link to="/newsletter">Newsletter<span></span></Link>
      </div>

      <div className="dropdown">
        <Link to="/login">Login ▼<span></span></Link>
        <div className="login dropdown-content">
          <Link to="/login/adminlogin">Admin Login<span></span></Link>
          <Link to="/login/staffslogin">Staffs Login<span></span></Link>
          <Link to="/login/studentslogin">Students Login<span></span></Link>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <Link to="/" onClick={toggleSidebar}>Home</Link>
        <div className="mobile-dropdown">
          <div className="dropdown-header" onClick={() => toggleDropdown("about")}>
            About Us ▼
          </div>
          {activeDropdown === "about" && (
            <div className="mobile-dropdown-content">
              <Link to="/about/patron" onClick={toggleSidebar}>Patron</Link>
              <Link to="/about/trust" onClick={toggleSidebar}>Trust</Link>
              <Link to="/about/vision & mission" onClick={toggleSidebar}>Vision & Mission</Link>
              <Link to="/about/history" onClick={toggleSidebar}>History</Link>
              <Link to="/about/governanceleadership" onClick={toggleSidebar}>Governance & Leadership</Link>
            </div>
          )}
        </div>
        <div className="mobile-dropdown">
          <div className="dropdown-header" onClick={() => toggleDropdown("infrastructure")}>
            Infrastructure ▼
          </div>
          {activeDropdown === "infrastructure" && (
            <div className="mobile-dropdown-content">
              <Link to="/infrastructure/academicfacility" onClick={toggleSidebar}>Academic Facility</Link>
              <Link to="/infrastructure/healthandsafety" onClick={toggleSidebar}>Health & Safety</Link>
              <Link to="/infrastructure/oncampus" onClick={toggleSidebar}>On Campus</Link>
              <Link to="/infrastructure/sports" onClick={toggleSidebar}>Sports</Link>
              <Link to="/infrastructure/transportation" onClick={toggleSidebar}>Transportation</Link>
            </div>
          )}
        </div>
        <div className="mobile-dropdown">
          <div className="dropdown-header" onClick={() => toggleDropdown("academics")}>
          Academics ▼
          </div>
          {activeDropdown === "academics" && (
            <div className="mobile-dropdown-content">
              <Link to="/academics/commerce" onClick={toggleSidebar}>Commerce</Link>
              <Link to="/academics/computerapplications" onClick={toggleSidebar}>Computer Applications</Link>
              <Link to="/academics/management" onClick={toggleSidebar}>Management</Link>
            </div>
          )}
        </div>
        <div className="mobile-dropdown">
          <div className="dropdown-header" onClick={() => toggleDropdown("placements")}>
          Placements ▼
          </div>
          {activeDropdown === "placements" && (
            <div className="mobile-dropdown-content">
              <Link to="/placements/training" onClick={toggleSidebar}>Training</Link>
              <Link to="/placements/placementsandstatistics" onClick={toggleSidebar}>Placements Statistics</Link>
              <Link to="/about/vision & mission" onClick={toggleSidebar}>Recruting Partners</Link>
              <Link to="/placements/brochures" onClick={toggleSidebar}>Brochures</Link>
            </div>
          )}
        </div>
        <Link to="/faculties" onClick={toggleSidebar}>Faculties</Link>
        <Link to="/library" onClick={toggleSidebar}>Library</Link>
        <Link to="/naac" onClick={toggleSidebar}>NAAC</Link>
        <Link to="/committees" onClick={toggleSidebar}>Committees</Link>
        <Link to="/iqac" onClick={toggleSidebar}>IQAC</Link>
        <Link to="/newsletter" onClick={toggleSidebar}>Newsletter</Link>
        <div className="mobile-dropdown">
          <div className="dropdown-header" onClick={() => toggleDropdown("login")}>
          Login ▼
          </div>
          {activeDropdown === "login" && (
            <div className="mobile-dropdown-content">
              <Link to="/login/adminlogin" onClick={toggleSidebar}>Admin Login</Link>
              <Link to="/login/staffslogin" onClick={toggleSidebar}>Staffs Login</Link>
              <Link to="/login/studentslogin" onClick={toggleSidebar}>Students Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
