import React from "react";
import "../styles/EventCards.css";
import img1 from '../assets/images/_DSC6174.JPG'
import img2 from '../assets/images/DSC_1703.JPG'
import img3 from '../assets/images/DSC00138.JPG'

const events = [
  {
    date: "14",
    monthandyear: "SEP 2024",
    title: "Onam Celebration",
    description:
      "The Onam celebration was vibrant, featuring a beautiful Pookalam, a colorful rangoli competition, and a delicious traditional Onasadya, fostering unity and joy among all.",
    image: img1,
  },
  {
    date: "01",
    monthandyear: "OCT 2024",
    title: "Blood donation",
    description: "Blood donation drive was impactful, promoting awareness, saving lives and fostering a sense of responsibility and unity among all.",
    image: img3,
  },
  {
  date: "22",
  monthandyear: "OCT 2024",
  title: "Web Designing",
  description:
    "The college's Web Designing competition was vibrant, showcasing creative designs, innovative ideas and excellent technical skills, fostering learning and enthusiasm among all.",
  image: img2,
  },
];

const EventCards = () => {
  return (
    <div className="upcoming-events">
      <h2 className="section-title">News and Events</h2>
      <p className='section-description'>
        Stay informed with the latest updates, announcements, and events happening on campus.
      </p>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="event-info">
              <div className="event-date">
                <span className="event-day">
                  {event.date}
                </span>
                <span className="event-month-year">
                  {event.monthandyear}
                </span>
              </div>
              <h3 className="event-title">{event.title}</h3>
              {event.description && (
                <p className="event-description">{event.description}</p>
              )}
            </div>
            <button className="learn-more">Read More</button>
          </div>
        ))}
      </div>
      <button className="see-all-events">See All Events</button>
    </div>
  );
};

export default EventCards;
