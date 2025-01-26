import React from 'react'
import '../styles/AcademicsSection.css'
import BCAimage from '../assets/images/BCA.webp'
import BCOMimage from '../assets/images/BCOM.webp'
import BBAimage from '../assets/images/BBA.webp'

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
                        <p>
                            An undergraduate degree covering accounting, finance,
                            business law, economics, and marketing principles.
                        </p>
                        <a href="#">B.Com Course &rsaquo;</a>
                    </div>
                    <div class="card">
                        <img src={BCAimage} alt="BCA Course" />
                        <h3>Bachelor of Computer Applications (BCA)</h3>
                        <p>
                            A program focused on software development, programming
                            languages, computer networks, and IT systems management.
                        </p>
                        <a href="#">BCA Course &rsaquo;</a>
                    </div>
                    <div class="card">
                        <img src={BBAimage} alt="Driving Impact" />
                        <h3>Bachelor of Business Administration (BBA)</h3>
                        <p>
                            A course designed to develop managerial skills, leadership,
                            marketing, economics, and business strategy knowledge.
                        </p>
                        <a href="#">BBA Course &rsaquo;</a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AcademicsSection
