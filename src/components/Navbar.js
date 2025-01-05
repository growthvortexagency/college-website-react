import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
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
            <Link to="placements/training">Training<span></span></Link>
            <Link to="placements/placementsandstatistics">Placements Statistics<span></span></Link>
            <Link to="placements/recrutingpartners">Recruiting Partner<span></span></Link>
            <Link to="placements/brochures">Brochures<span></span></Link>
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
    </div>
  );
};

export default Navbar;
