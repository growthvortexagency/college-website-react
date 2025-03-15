import React from 'react'
import '../styles/AcademicsSection.css'
import BCAimage from '../assets/images/BCA.webp'
import BCOMimage from '../assets/images/BCOM.webp'
import BBAimage from '../assets/images/BBA.webp'
import { Link } from "react-router-dom";

const AcademicsSection = () => {
    return (
        <section class="academics">
            <div class="academics-container">
                <h1>Academics</h1>
                <p>
                    Empowering students to excel academically and lead with
                    purpose in a dynamic world.
                </p>
                <div class="cards">
                    <div class="card">
                        <img src={BCOMimage} alt="Graduate Education" />
                        <h3>Bachelor of Commerce (B.Com)</h3>
                        <Link to="/academics/commerce">B.Com Course &rsaquo;</Link>
                    </div>
                    <div class="card">
                        <img src={BCAimage} alt="BCA Course" />
                        <h3>Bachelor of Computer Applications (BCA)</h3>
                        <Link to="/academics/ComputerApplications">BCA Course &rsaquo;</Link>
                    </div>
                    <div class="card">
                        <img src={BBAimage} alt="Driving Impact" />
                        <h3>Bachelor of Business Administration (BBA)</h3>
                        <Link to="/academics/Management">BBA Course &rsaquo;</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AcademicsSection
