import React from 'react'
import '../styles/StudentsAchievement.css'

const StudentsAchievement = () => {
    return (
        <div className='sacontainer'>
            <h2 className="Usection-title">Students Achievement</h2>
            <p className='Usection-description'>
                Celebrating students' success in academics, sports and extracurriculars, showcasing their talent and hard work.
            </p>
            <div class="card-list">
                <a href="#" class="card-item">
                    <img src="images/developer.jpg" alt="Card Image" />
                    <span class="developer">Developer</span>
                    <h3>A "developer" codes software and websites.</h3>
                    <div class="arrow">
                        <i class="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
                <a href="#" class="card-item">
                    <img src="images/designer.jpg" alt="Card Image" />
                    <span class="designer">Designer</span>
                    <h3>A "designer" is a design expert.</h3>
                    <div class="arrow">
                        <i class="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
                <a href="#" class="card-item">
                    <img src="images/editor.jpg" alt="Card Image" />
                    <span class="editor">Editor</span>
                    <h3>An "editor" ensures content quality and accuracy.</h3>
                    <div class="arrow">
                        <i class="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default StudentsAchievement
