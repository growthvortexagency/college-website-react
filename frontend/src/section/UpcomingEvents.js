import React from "react";
import "../styles/UpcomingEvents.css";
import img1 from '../assets/images/commencement.webp'
import img2 from '../assets/images/industrialvisit.jpeg'
import img3 from '../assets/images/inter.jpg'

const events = [
  {
    date: "12",
    monthandyear: "FEB 2025",
    title: "Commencement of classes of II, IV & VI semesters of UG Courses",
    description:
      "Classes for II, IV, and VI semesters of UG courses begin, ensuring continuity in academic excellence and learning.",
    image: img1,
  },
  {
    date: "17",
    monthandyear: "FEB 2025",
    title: "Industrial Trip to Nissan - Chennai",
    description: "Experience an industrial visit to NISSAN, Chennai (February 15-19, 2025). Explore advanced automotive technologies, engage with experts, and enhance industry knowledge through hands-on learning at this renowned manufacturing facility.",
    image: img2,
  },
  {
  date: "25",
  monthandyear: "FEB 2025",
  title: "Inter Collegeiate Cultural Fest",
  description:
    "Celebrate creativity and talent at the Inter-Collegiate Cultural Fest, showcasing vibrant performances, competitions, and unforgettable moments.",
  image: img3,
  },
];

const UpcomingEvents = () => {
  return (
    <div className="Uupcoming-events">
      <h2 className="Usection-title">Upcoming Events</h2>
      <p className='Usection-description'>
      Unleashing the best of innovation and engagement through our featured upcoming events!
      </p>
      <div className="Uevents-container">
        {events.map((event, index) => (
          <div key={index} className="Uevent-card">
            <div className="Uevent-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="Uevent-info">
              <div className="Uevent-date">
                <span className="Uevent-day">
                  {event.date}
                </span>
                <span className="Uevent-month-year">
                  {event.monthandyear}
                </span>
              </div>
              <h3 className="Uevent-title">{event.title}</h3>
              {event.description && (
                <p className="Uevent-description">{event.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="Usee-all-events">See All Upcoming Events</button>
    </div>
  );
};

export default UpcomingEvents;
