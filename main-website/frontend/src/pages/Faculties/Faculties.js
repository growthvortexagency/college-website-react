import React from 'react'
import '../../styles/pages/Faculties.css'
import johnalwyn from '../../assets/images/faculties/John Alwyn-min.jpg'
import anthony from '../../assets/images/faculties/anthony-min.jpg'
import arockyadoss from '../../assets/images/faculties/arockyadoss-min.jpg'
import balkhis from '../../assets/images/faculties/Balkhis-min.jpg'
import bharathi from '../../assets/images/faculties/Bharathi P-min.jpg'
import chaithra from '../../assets/images/faculties/Chaithra-min.jpg'
import chandrika from '../../assets/images/faculties/Chandrika-min.jpg'
import divakar from '../../assets/images/faculties/divakar-min.jpg'
import divyashreebl from '../../assets/images/faculties/DivyaShree B L-min.jpg'
import divyashreenk from '../../assets/images/faculties/Divyashree N K-min.jpg'
import indrani from '../../assets/images/faculties/Indrani-min.jpg'
import jayanthi from '../../assets/images/faculties/Jayanthi-min.jpg'
import joy from '../../assets/images/faculties/Joy-min.jpg'
import ladia from '../../assets/images/faculties/Ladia-min.jpg'
import leelavathi from '../../assets/images/faculties/Leelavathi-min.jpg'
import madhavi from '../../assets/images/faculties/Madhavi-min.jpg'
import mahalakshmi from '../../assets/images/faculties/Mahalakshmi-min.jpg'
import manjula from '../../assets/images/faculties/Manjula B-min.jpg'
import molly from '../../assets/images/faculties/Molly-min.jpg'
import renuka from '../../assets/images/faculties/Renuka-min.jpg'
import robin from '../../assets/images/faculties/Robin-min.jpg'
import santosha from '../../assets/images/faculties/Santosha-min.jpg'
import shaziya from '../../assets/images/faculties/Shaziya-min.jpg'
import shwetha from '../../assets/images/faculties/Shwetha-min.jpg'
import sneha from '../../assets/images/faculties/Sneha R-min.jpg'
import tazeer from '../../assets/images/faculties/Tazeer-min.jpg'
import vijesh from '../../assets/images/faculties/vijesh-min.jpg'
import wilma from '../../assets/images/faculties/Wilma-min.jpg'

const departments = [
  {
    departmentName: "Administrative Team",
    members: [
      {
        name: "Rev. Dr. Fr. John Alwyn Dias",
        qualifications: "M.Th, M.S (Religion) Ph.D, France, Belgium",
        role: "President, CFSS",
        image: johnalwyn,
      },
      {
        name: "Rev. Fr. Victor D'Souza",
        qualifications: "M.Ph, (France)",
        role: "Executive Secretary, Capuchin Education Board",
        image: robin,
      },
      {
        name: "Rev. Fr. Joy D'Souza",
        qualifications: "M.Com, MBA, KSET",
        role: "Principal, St. Anthony's Institutions",
        image: joy,
      },
    ],
  },
  {
    departmentName: "Department of Commerce",
    members: [
      {
        name: "Prof. Mohammed Tazeer",
        qualifications: "M.Com, MBA",
        role: "HOD, Commerce",
        image: tazeer,
      },
      {
        name: "Prof. T Antony",
        qualifications: "M.Com, MBA, NET, (Ph.D)",
        role: "Commerce",
        image: anthony,
      },
      {
        name: "Prof. Molly D'Souza",
        qualifications: "M.Com, MBA",
        role: "Commerce",
        image: molly,
      },
      {
        name: "Prof. Renuka C",
        qualifications: "M.Com, MBA, PGDHRM, (Ph.D)",
        role: "Commerce",
        image: renuka,
      },
      {
        name: "Prof. Madhavi Srinivas",
        qualifications: "M.Com, M.Phil",
        role: "Commerce",
        image: madhavi,
      },
      {
        name: "Prof. Leelavathi P Chivate",
        qualifications: "B.Ed, M.Com, MBA",
        role: "Commerce",
        image: leelavathi,
      },
    ],
  },
  {
    departmentName: "Department of Computer Application",
    members: [
      {
        name: "Prof. Balkhis",
        qualifications: "M.Sc, KSET",
        role: "HOD, Computer Application",
        image: balkhis,
      },
      {
        name: "Prof. Divyashree B L",
        qualifications: "MCA",
        role: "Computer Application",
        image: divyashreebl,
      },
      {
        name: "Prof. Divyashree N K",
        qualifications: "BE, M.Tech",
        role: "Computer Application",
        image: divyashreenk,
      },
      {
        name: "Prof. Sneha R",
        qualifications: "BE, M.Tech",
        role: "Computer Application",
        image: sneha,
      },
      {
        name: "Prof. Arockyadoss M",
        qualifications: "MCA",
        role: "Computer Application",
        image: arockyadoss,
      },
    ],
  },
  {
    departmentName: "Department of Management",
    members: [
      {
        name: "Prof. Chandrika",
        qualifications: "MBA, M.Com, PGDMM",
        role: "HOD, Management",
        image: chandrika,
      },
      {
        name: "Fr. Vijesh Loyed Menezes",
        qualifications: "B.Ed, MBA",
        role: "Management",
        image: vijesh,
      },
      {
        name: "Prof. D Mahalakshmi",
        qualifications: "M.Com, NET",
        role: "Management",
        image: mahalakshmi,
      },
      {
        name: "Prof. Laadia Lizbeth",
        qualifications: "M.Com, PGDBA, B.Ed",
        role: "Management",
        image: ladia,
      },
    ],
  },
  {
    departmentName: "Department of Languages",
    members: [
      {
        name: "Dr. Manjula B",
        qualifications: "B.Ed, M.A, Ph.D, NET",
        role: "HOD, Kannada",
        image: manjula,
      },
      {
        name: "Prof. Indrani S V",
        qualifications: "MA",
        role: "Kannada",
        image: indrani,
      },
      {
        name: "Dr. Bharathi P",
        qualifications: "B.Ed, M.A, M.Phil, KSET, Ph.D",
        role: "HOD, Hindi",
        image: bharathi,
      },
      {
        name: "Prof. Divakar S",
        qualifications: "MA, B.Ph",
        role: "HOD, English",
        image: divakar,
      },
      {
        name: "Prof. Shaziya",
        qualifications: "MA",
        role: "English",
        image: shaziya,
      },
    ],
  },
  {
    departmentName: "Department of Physical Education",
    members: [
      {
        name: "Dr. M.S. Santhosha",
        qualifications: "M.P.Ed, M.Sc, KSET, NET, Ph.D",
        role: "Physical Education Director",
        image: santosha,
      },
    ],
  },
  {
    departmentName: "Department of Library",
    members: [
      {
        name: "Prof. Shwetha M K",
        qualifications: "M.Lib",
        role: "Librarian",
        image: shwetha,
      },
    ],
  },
  {
    departmentName: "Administrative Staff",
    members: [
      {
        name: "Ms. Wilma Menezes",
        qualifications: "MA",
        role: "Office Coordinator",
        image: wilma,
      },
      {
        name: "Mrs. Chaithra Rani R",
        qualifications: "M.Com",
        role: "Office Coordinator",
        image: chaithra,
      },
      {
        name: "Ms. Jayanthi",
        qualifications: "BA",
        role: "Office Coordinator",
        image: jayanthi,
      },
    ],
  },
];

const Faculties = () => {
  return (
    <div>
      {departments.map((department, index) => (
        <div key={index} className="responsive-container-block fac-container">
          <p className="text-blk team-head-text">{department.departmentName}</p>
          <div className="responsive-container-block">
            {department.members.map((member, memberIndex) => (
              <div key={memberIndex} className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                <div className="fac-card">
                  <div className="team-image-wrapper">
                    <img className="team-member-image" src={member.image} alt={member.name} />
                  </div>
                  <p className="text-blk name">{member.name}</p>
                  <p className="text-blk position">{member.qualifications}</p>
                  <p className="text-blk feature-text">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Faculties