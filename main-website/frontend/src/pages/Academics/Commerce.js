import '../../styles/pages/Commerce.css'
import commerce from '../../assets/images/commerce.webp'

const Commerce = () => {

  return (
    <div className='commerce-container'>
      <div className='commerce-headline'>
        Bachelor of Commerce
      </div>
      <div className='about-commerce'>
        <h1>About the department.</h1>
        <div className='commerce-content-container'>
          <img src={commerce} alt='commerce-image' />
          <p>
            St. Anthony's College, a prominent institution in Bangalore, has been offering a
            Bachelor of Commerce (B.Com) program since 2010. The program is designed to provide
            students with a solid foundation in commerce and business principles. It aims to equip
            students with the knowledge, skills, and competencies required to excel in the dynamic
            fields of commerce and finance.
          </p>
          <p>
            With a comprehensive curriculum, experienced faculty, and state-of-the-art facilities,
            St. Anthony's College ensures that its students are well-prepared to tackle the challenges
            of the business world and achieve their professional aspirations. The college is affiliated
            with Bangalore University, and as of the academic year 2021–2022, the department offers both
            NEP and SEP syllabus.
          </p>
        </div>
      </div>
      <div className='vision-commerce'>
        <h2>Our Vision</h2>
        <p>
          To Inculcate knowledge, skills and abilities of commerce students in building
          sustainable local and global business operations.
        </p>
      </div>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <div className='mission-points'>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>01</p>
            </div>
            <p>By fostering critical thinking, innovation, and ethical values in decision making.</p>
          </div>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>02</p>
            </div>
            <p>By providing experiential learning opportunities through internships and industry partnerships.</p>
          </div>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>03</p>
            </div>
            <p>By collaborating with industries for academic and professional growth.</p>
          </div>
          <div className='mission-item'>
            <div className='circle'>
              <p className='number'>04</p>
            </div>
            <p>By developing a safe and inclusive learning ecosystem to meet academic, industry standards and expectations.</p>
          </div>
        </div>
      </div>
      <div className='commerce-objectives'>
        <h1 class="obj-title">Our Objectives</h1>
        <div class="obj-container">
          <div class="obj-card">
            <div class="obj-number">1</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Commerce Insight</h2>
              <p class="obj-card-text">To demonstrate comprehensive knowledge and understanding of contemporary 
                commerce trends, practices, and innovations, showcasing awareness of global market dynamics, 
                competitive strategies, and emerging business opportunities.</p>
            </div>
          </div>
          <div class="obj-card">
            <div class="obj-number">2</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Skill Development</h2>
              <p class="obj-card-text">To foster and enhance proficiency across various disciplines, including 
                accounting, marketing, research, sales, finance, banking, and insurance, enabling versatile expertise 
                and adaptability in today's dynamic business environment.</p>
            </div>
          </div>
          <div class="obj-card">
            <div class="obj-number">3</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Analytical Thinking</h2>
              <p class="obj-card-text">To develop and strengthen the ability to think critically and analytically, 
                enabling individuals to assess situations, identify patterns, solve problems, and make well-informed 
                decisions based on logical reasoning.</p>
            </div>
          </div>
          <div class="obj-card">
            <div class="obj-number">4</div>
            <div className='obj-wrapper'>
              <h2 class="obj-card-title">Higher Education Awareness</h2>
              <p class="obj-card-text">To educate students about diverse opportunities in higher studies, including M.Com, 
                CA, CMA, CS, Ph.D., and other advanced programs, guiding them toward informed academic and professional pursuits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commerce