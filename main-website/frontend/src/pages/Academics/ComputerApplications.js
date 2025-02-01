import React from 'react'
import computerapplications from '../../assets/images/computerapplications.webp'

const ComputerApplications = () => {
  return (
    <div className='management-container'>
      <div className='management-headline'>
        Bachelor of Computer Applications
      </div>
      <div className='about-management'>
        <h1>About the department.</h1>
        <div className='management-content-container'>
          <img src={computerapplications} alt='management-image' />
          <p>
            The Bachelor of Computer Applications (BCA) department was established in 2015 and
            has since been committed to providing quality education in computer science. The department
            offers a comprehensive 3-year degree program designed to equip students with the skills
            necessary to excel in the IT industry. With a well-equipped computer laboratory, students
            gain hands-on experience in practical sessions. Additionally, the department utilizes ICT-based
            classrooms to enhance teaching and learning, ensuring an interactive and effective learning environment
            for all students.
          </p>
          <p>
            The BCA program at our institution focuses on both theoretical knowledge and practical application, preparing
            students for various roles in the technology sector. The curriculum is regularly updated to include the latest
            advancements in software development, programming, networking, and database management. Along with core computer
            science subjects, students also have the opportunity to explore emerging fields like artificial intelligence,
            cybersecurity, and data analytics. Our experienced faculty members provide personalized guidance, fostering critical
            thinking, problem-solving skills, and innovative approaches to real-world challenges.
          </p>
        </div>
      </div>
      <div className='vision-management'>
        <h2>Our Vision</h2>
        <p>
          To create a learning environment for the students that will provide best opportunities to develop as competent
          professionals to serve the software industry and contribute our nation socio-economic.
        </p>
      </div>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <div className='mission-points'>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>01</p>
            </div>
            <p>To educate students in the fundamental and advanced concepts of computing discipline.</p>
          </div>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>02</p>
            </div>
            <p>To foster practical skills in our students with an emphasis on ethics, interpersonal development and professional competency.</p>
          </div>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>03</p>
            </div>
            <p>To prepare them to pursue exemplaryf careers in industries, academics and research.</p>
          </div>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>04</p>
            </div>
            <p>To impart the ability to use the expertise in computing to meet the ever growing demands.</p>
          </div>
        </div>
      </div>
      <div className='commerce-objectives'>
        <h1 class="obj-title">Our Objectives</h1>
        <div class="obj-container">
          <div class="obj-card">
            <div class="obj-number">1</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Enhancing Programming Skills</h2>
              <p class="obj-card-text">We aim to deliver high-quality education that strengthens students’ logical reasoning, 
                programming abilities, and technical expertise, enabling them to develop sophisticated software solutions and 
                tackle complex computing challenges.</p>
            </div>
          </div>
          <div class="obj-card">
            <div class="obj-number">2</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Fostering Innovation</h2>
              <p class="obj-card-text">Our goal is to cultivate a spirit of innovation and creativity, encouraging students to 
                explore new technologies, think outside the box, and strive for excellence in the field of computer applications.</p>
            </div>
          </div>
          <div class="obj-card">
            <div class="obj-number">3</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Industry-Relevant Knowledge</h2>
              <p class="obj-card-text">We ensure that students acquire up-to-date, industry-relevant knowledge by incorporating 
                the latest trends and technologies, empowering them to contribute effectively in rapidly evolving tech environments.</p>
            </div>
          </div>
          <div class="obj-card">
            <div class="obj-number">4</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Career Readiness</h2>
              <p class="obj-card-text">We focus on equipping students with the practical skills, problem-solving capabilities, and 
                professional knowledge necessary for them to succeed in the competitive IT job market and beyond.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComputerApplications