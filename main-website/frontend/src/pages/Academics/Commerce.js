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
      <div className='vandm-commerce'>
        <div className="vision-mission-container">
          <div className="icon">🌟</div>
          <h2>Our Vision</h2>
          <p>
            To nurture and develop competent, ethical, and innovative commerce professionals with a strong foundation in
            business principles, leadership skills, and a global perspective, empowering them to thrive in the ever-evolving
            world of commerce and finance.
          </p>
        </div>
        <div className="vision-mission-container">
          <div className="icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            To provide quality education in commerce, foster critical thinking and ethical practices, and equip students
            with advanced skills, practical knowledge, and innovative approaches to excel in an ever-changing and dynamic
            global business environment.
          </p>
        </div>
      </div>
      <div className="placement-section">
        <div className="placement-header">
          <h2>Placement Excellence</h2>
        </div>
        <p className="placement-paragraph">
          A total of <strong>174 students</strong> have been successfully placed in renowned companies such as
          <strong> Infosys, Wipro, Piramal, Spectrum Management, and Axis Bank.</strong> This accomplishment reflects the
          strong foundation andindustry-relevant skills our students possess, showcasing the effectiveness of our
          comprehensive
          academic programs and commitment to preparing them for global career opportunities.
        </p>
      </div>
      <div className="career">
        <div className="career-section">
          <h1>Career Opportunities</h1>
          <p>Explore the benefits of joining our team. We offer a range of career opportunities with great features and
            benefits.</p>
          <div className="benefits">
            <div className="benefit-item">
              <div className="check-icon">✔</div>
              <h3>Accounting and Finance</h3>
              <p>Bookkeeping, budgeting, auditing, taxation, investment, assets, liabilities, profit, revenue, cash flow.
              </p>
            </div>
            <div className="benefit-item">
              <div className="check-icon">✔</div>
              <h3>Banking and Insurance</h3>
              <p>Loans, deposits, interest, credit, risk management, premiums, claims, underwriting, savings, policies.</p>
            </div>
            <div className="benefit-item">
              <div className="check-icon">✔</div>
              <h3>Corporate Sector</h3>
              <p>Business, management, strategy, operations, growth, leadership, innovation, mergers, profits, stakeholders.
              </p>
            </div>
            <div className="benefit-item">
              <div className="check-icon">✔</div>
              <h3>Entrepreneurship</h3>
              <p>Startups, innovation, risk-taking, leadership, vision, investment, growth, creativity, scalability,
                resilience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commerce