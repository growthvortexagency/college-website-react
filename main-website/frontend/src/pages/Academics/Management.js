import React from 'react'
import management from '../../assets/images/management.webp'
import '../../styles/pages/Management.css'

const Management = () => {
  return (
    <div className='management-container'>
      <div className='management-headline'>
        Bachelor of Management
      </div>
      <div className='about-management'>
        <h1>About the department.</h1>
        <div className='management-content-container'>
          <img src={management} alt='management-image' />
          <p>
            St. Anthony's College offers a Bachelor of Business Administration course,
            which was launched in 2009 and is affiliated with Bangalore University. This
            undergraduate degree prepares students for careers in business management. The
            course is designed to provide students with a strong foundation in business and
            management principles while equipping them with the skills and knowledge necessary
            to succeed in the business world.
          </p>
        </div>
      </div>
      <div className='vision-management'>
        <h2>Our Vision</h2>
        <p>
          To empower every student to become a skilled and responsible professional, equipped
          with the knowledge and abilities to excel in their field, paving the way for a brighter,
          more conscientious future.
        </p>
      </div>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <div className='mission-points'>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>01</p>
            </div>
            <p>We provide a well-rounded management education that blends essential concepts with hands-on skills for real-world success.</p>
          </div>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>02</p>
            </div>
            <p>Our programs are designed to equip students with the tools and knowledge needed to thrive in any industry.</p>
          </div>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>03</p>
            </div>
            <p>Our programs are designed to equip students with the tools and knowledge needed to thrive in any industry.</p>
          </div>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>04</p>
            </div>
            <p>Beyond academics, we focus on leadership, ethical decision-making, and communication skills to shape future industry leaders.</p>
          </div>
        </div>
      </div>
      <div className='commerce-objectives'>
        <h1 class="obj-title">Our Objectives</h1>
        <div class="obj-container">
          <div class="obj-card">
            <div class="obj-number">1</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Corporate Readiness</h2>
              <p class="obj-card-text">To equip students with the knowledge and skills required to handle comprehensive 
                marketing and human resource functions, fostering effective leadership and strategic decision-making 
                capabilities in dynamic business environments.</p>
            </div>
          </div>
          <div class="obj-card">
            <div class="obj-number">2</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Versatile Managers</h2>
              <p class="obj-card-text">To cultivate managers with interdisciplinary knowledge, enabling them to integrate 
                insights from various fields and make informed, strategic decisions in complex and evolving business environments.</p>
            </div>
          </div>
          <div class="obj-card">
            <div class="obj-number">3</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Advanced Education</h2>
              <p class="obj-card-text">To prepare students for higher education, empowering them to become skilled researchers 
                and consultants with strong core competencies and specialized expertise.</p>
            </div>
          </div>
          <div class="obj-card">
            <div class="obj-number">4</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Future Leaders</h2>
              <p class="obj-card-text">Equip students with the leadership and problem-solving skills necessary to make impactful
                contributions to their field and drive positive change in the professional world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Management