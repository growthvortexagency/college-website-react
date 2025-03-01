import React from 'react'
import '../../styles/pages/Committees.css'
import ncc_image from '../../assets/images/NCC.webp'

const committees = [
  {
   name: "IQAC",
   image: "",
   alt: "IQAC Image",
   description: "The Internal Quality Assurance Cell (IQAC) ensures continuous academic and administrative improvements in educational institutions. It promotes quality enhancement, monitors performance, and fosters innovation through systematic planning and evaluation, aligning with accreditation standards for overall institutional excellence and student development.",
  },
  {
   name: "NSS",
   image: "",
   alt: "NSS Image",
   description: "The National Service Scheme (NSS) is a government-sponsored initiative promoting social service and community engagement among students. It fosters leadership, teamwork, and civic responsibility through activities like cleanliness drives, health camps, and rural development programs, shaping socially responsible citizens.",
  },
  {
   name: "NCC",
   image: ncc_image,
   alt: "NCC Image",
   description: "The National Cadet Corps (NCC) is a youth organization in India that trains students in leadership, discipline, and patriotism. It aims to develop character, physical fitness, and social responsibility through military-style training and community service.",
  },
  {
   name: "Red Cross",
   image: "",
   alt: "Red Cross Image",
   description: "The Red Cross Committee promotes humanitarian values, health awareness, and emergency response in institutions. It organizes blood donation camps, first-aid training, and disaster relief activities, fostering a spirit of volunteerism and compassion among students for community welfare and resilience.",
  },
  {
   name: "Women's & Anti-human trafficking cell",
   image: "",
   alt: "Women's & Anti-human trafficking cell image",
   description: "The Women's & Anti-Human Trafficking Cell ensures women's safety, empowerment, and awareness against exploitation. It conducts workshops, counseling sessions, and legal awareness programs, fostering gender equality and preventing human trafficking through education, vigilance, and support systems for a secure and just society.",
  },
  {
   name: "Placement Cell",
   image: "",
   alt: "Placement Cell image",
   description: "The Placement Cell bridges the gap between students and employers by facilitating job opportunities, internships, and career guidance. It organizes recruitment drives, skill development programs, and industry interactions, ensuring students are well-prepared for professional success and career growth.",
  },
  {
   name: "Counselling Cell",
   image: "",
   alt: "Counselling Cell image",
   description: "The Counselling Cell provides emotional, academic, and career guidance to students, fostering mental well-being and personal growth. It offers confidential support, workshops, and one-on-one sessions to help students manage stress, make informed decisions, and achieve a balanced, fulfilling life.",
  },
  {
   name: "Anti-Ragging Cell",
   image: "",
   alt: "Anti-Ragging Cell image",
   description: "The Anti-Ragging Cell ensures a safe and respectful campus environment by preventing and addressing ragging incidents. It conducts awareness programs, enforces strict regulations, and provides support to victims, promoting a culture of discipline, dignity, and mutual respect among students.",
  },
  {
   name: "Grievance Cell",
   image: "",
   alt: "Grievance Cell image",
   description: "The Grievance Cell addresses student and staff concerns by providing a platform for fair and transparent resolution. It ensures a supportive environment through prompt redressal of complaints, promoting justice, trust, and a positive institutional atmosphere for all stakeholders.",
  },
  {
   name: "Entrepreneurship and fine arts Cell",
   image: "",
   alt: "Entrepreneurship and fine arts Cell image",
   description: "The Entrepreneurship and Fine Arts Cell nurtures creativity, innovation, and business acumen among students. It organizes workshops, competitions, and mentorship programs, fostering entrepreneurial skills and artistic talents, encouraging self-reliance, and promoting a culture of innovation and expression.",
  },
  {
   name: "Hasiru Eco-Club",
   image: "",
   alt: "Hasiru Eco-Club image",
   description: "The Hasiru Eco-Club promotes environmental awareness and sustainability through eco-friendly initiatives. It organizes tree plantations, cleanliness drives, and awareness campaigns, encouraging students to adopt green practices and contribute to environmental conservation for a healthier and sustainable future.",
  },
  {
   name: "Abhyuday Cultural Committee",
   image: "",
   alt: "Abhyuday Cultural Committee image",
   description: "The Abhyuday Cultural Committee fosters artistic expression and cultural heritage through various events and activities. It organizes festivals, competitions, and performances, providing a platform for students to showcase their talents while promoting unity, creativity, and a vibrant campus atmosphere.",
  },
  {
   name: "BU Examination Committee",
   image: "",
   alt: "BU Examination Committee image",
   description: "The BU Examination Committee ensures the smooth and fair conduct of examinations by adhering to university guidelines. It oversees exam schedules, evaluation processes, and grievance redressal, maintaining transparency, integrity, and efficiency in the assessment system for academic excellence.",
  },
  {
   name: "Internal Examination Committee",
   image: "",
   alt: "Internal Examination Committee image",
   description: "The Internal Examination Committee manages the planning and execution of internal assessments, ensuring fairness and transparency. It oversees exam schedules, evaluation processes, and result analysis, helping students improve academically while maintaining the institution's assessment standards.",
  },
  {
   name: "Drama & Theatrics Committee",
   image: "",
   alt: "Drama & Theatrics Committee image",
   description: "The Drama & Theatrics Committee nurtures creativity and storytelling through stage performances, scriptwriting, and acting workshops. It provides a platform for students to express emotions, address social issues, and enhance their theatrical skills, fostering artistic growth and cultural engagement.",
  },
  {
   name: "Babasaheb Ambedkar Committee",
   image: "",
   alt: "Babasaheb Ambedkar Committee image",
   description: "The Babasaheb Ambedkar Committee promotes the values of equality, justice, and social reform inspired by Dr. B.R. Ambedkar. It conducts seminars, awareness programs, and community initiatives to foster inclusivity, constitutional awareness, and empowerment among students and society.",
  },
  {
   name: "Mahatma Gandhi Committee",
   image: "",
   alt: "Mahatma Gandhi Committee image",
   description: "The Mahatma Gandhi Committee upholds Gandhian principles of peace, non-violence, and social service. It organizes awareness programs, community outreach, and ethical leadership initiatives, inspiring students to practice truth, simplicity, and self-discipline for societal harmony and nation-building.",
  },
  {
   name: "Vidwan-Academic Council Committee",
   image: "",
   alt: "Vidwan-Academic Council Committee image",
   description: "The Vidwan-Academic Council Committee fosters academic excellence through curriculum development, research promotion, and faculty-student engagement. It ensures quality education, organizes seminars, and enhances learning methodologies, creating a dynamic academic environment for intellectual growth and innovation.",
  },
  {
   name: "Ekalavya Sports Committee",
   image: "",
   alt: "Ekalavya Sports Committee image",
   description: "The Ekalavya Sports Committee promotes physical fitness, teamwork, and sportsmanship through various athletic events and training programs. It organizes tournaments, encourages student participation in sports, and fosters a competitive spirit, ensuring holistic development and a healthy campus environment.",
  },
  {
   name: "Student Welfare & Discipline Committee",
   image: "",
   alt: "Student Welfare & Discipline Committee image",
   description: "The Student Welfare & Discipline Committee ensures a supportive and disciplined campus environment. It addresses student concerns, promotes well-being, enforces ethical conduct, and organizes welfare programs, fostering personal growth, responsibility, and a positive academic atmosphere.",
  },
  {
   name: "Alumni Association",
   image: "",
   alt: "Alumni Association image",
   description: "The Alumni Association connects former students with their alma mater, fostering lifelong relationships and professional networking. It organizes reunions, mentorship programs, and career guidance sessions, contributing to institutional growth while supporting current students through experience sharing and collaborations.",
  },
  {
   name: "Value Added Program",
   image: "",
   alt: "Value Added Program image",
   description: "The Value Added Program enhances students' skills beyond the regular curriculum through specialized courses, workshops, and training sessions. It equips students with industry-relevant knowledge, improving employability, personal development, and overall academic excellence.",
  },
  {
   name: "The Anthonian Chronicle",
   image: "",
   alt: "The Anthonian Chronicle image",
   description: "The Anthonian Chronicle is the official publication that showcases the institution’s achievements, events, and student contributions. It fosters creativity, journalism, and intellectual engagement by highlighting academic, cultural, and social initiatives, keeping the campus community informed and inspired.",
  },
  {
   name: "College Website",
   image: "",
   alt: "College Website image",
   description: "The College Website Committee manages and updates the institution’s official website, ensuring accurate and timely information. It maintains a user-friendly interface, enhances digital communication, and showcases academic, cultural, and administrative activities, providing seamless access to important resources.",
  },
  {
   name: "Music & college Choir",
   image: "",
   alt: "Music & college Choir image",
   description: "The Music & College Choir Committee nurtures musical talent and passion through performances, training sessions, and cultural events. It promotes harmony, creativity, and teamwork, enhancing the campus atmosphere with soulful music and fostering artistic expression among students.",
  },
];

const Committees = () => {

  return (
    <div className='committees-container'>
      <h1>Committees</h1>
      <div className='committees-cards'>
        {committees.map((committee, index) => (
        <div key={index} className='single-cards'>
          <img src={committee.image} alt={committee.alt}></img>
          <h2>{committee.name}</h2>
          <p>{committee.description}</p>
            <button>Read More</button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Committees