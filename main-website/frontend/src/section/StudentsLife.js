import React from 'react'
import '../styles/StudentsLife.css'
import library from '../assets/images/library.webp'
import campuslife from '../assets/images/campuslife.webp'
import sports from '../assets/images/sports.webp'
import NCC from '../assets/images/NCC.webp'

const StudentsLife = () => {
    return (
        <div className='slcontainer'>
            <h2 className="Usection-title">Students Life in Campus</h2>
            <p className='Usection-description'>
                Growing together in a supportive and lively environment.
            </p>
            <div class="studentslife-container">
                <div class="studentslife-card">
                    <div class="card-header">
                        <img src={campuslife} alt="city" />
                    </div>
                    <div class="card-body">
                        <h4>
                            Campus Life
                        </h4>
                        <p>
                            Experience a vibrant campus life filled with learning, cultural events and social interactions. It's a perfect blend
                            of academics, fun and personal growth.
                        </p>
                    </div>
                </div>
                <div class="studentslife-card">
                    <div class="card-header">
                        <img src={library} alt="rover" />
                    </div>
                    <div class="card-body">
                        <h4>
                            Library
                        </h4>
                        <p>
                            Our library is a peaceful space with a vast collection of books, journals and digital resources. It's the perfect 
                            spot for study, research and intellectual growth, fostering academic excellence and curiosity.
                        </p>
                    </div>
                </div>
                <div class="studentslife-card">
                    <div class="card-header">
                        <img src={sports} alt="ballons" />
                    </div>
                    <div class="card-body">
                        <h4>
                            Sports & Games
                        </h4>
                        <p>
                            Our campus offers excellent facilities for sports and games, promoting physical fitness and teamwork. From indoor to
                            outdoor activities, it's the perfect place to refresh, compete and build camaraderie.
                        </p>
                    </div>
                </div>
                <div class="studentslife-card">
                    <div class="card-header">
                        <img src={NCC} alt="city" />
                    </div>
                    <div class="card-body">
                        <h4>
                            NCC
                        </h4>
                        <p>
                            The NCC nurtures discipline, leadership, and patriotism through training and activities. It's a platform for students
                            to develop life skills and serve the nation with pride.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentsLife
