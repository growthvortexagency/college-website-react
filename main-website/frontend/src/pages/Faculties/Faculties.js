import React from 'react'
import '../../styles/pages/Faculties.css'

const departments = [
  {
    departmentName: "Computer Science Department",
    members: [
      {
        name: "Dr. John Doe",
        qualifications: "PhD in Computer Science",
        role: "HOD, Computer Science",
        image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
      },
      {
        name: "Prof. Jane Smith",
        qualifications: "M.Sc in Artificial Intelligence",
        role: "Senior Lecturer",
        image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
      },
    ],
  },
  {
    departmentName: "Mathematics Department",
    members: [
      {
        name: "Dr. Alice Johnson",
        qualifications: "PhD in Pure Mathematics",
        role: "HOD, Mathematics",
        image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
      },
      {
        name: "Prof. Robert White",
        qualifications: "M.Sc in Applied Mathematics",
        role: "Senior Lecturer",
        image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
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