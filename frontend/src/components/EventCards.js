// EventCards.js
import React from "react";
import "../styles/EventCards.css";

const events = [
  {
    id: 1,
    title: "Web Development Program",
    month: "SEP",
    date: "22",
    location: "Computer Lab",
    image: "conference.jpg",
  },
  {
    id: 2,
    title: "React Website Workshop",
    month: "OCT",
    date: "08",
    location: "Computer Lab",
    image: "dream.jpg",
  },
  {
    id: 3,
    title: "Freshers' Day",
    month: "OCT",
    date: "26",
    location: "St. Anthony's College Auditorium",
    image: "fireworks.jpg",
  },
  {
    id: 4,
    title: "Karnataka Rajyotsava",
    month: "NOV",
    date: "01",
    location: "St. Anthony's College Auditorium",
    image: "design.jpg",
  },
  {
    id: 5,
    title: "Christmas Celebration",
    month: "DEC",
    date: "25",
    location: "St. Anthony's College Auditorium",
    image: "president.jpg",
  },
  {
    id: 6,
    title: "NAAC Visit",
    month: "DEC",
    date: "30",
    location: "St. Anthony's College",
    image: "uiux.jpg",
  },
];

const EventCards = () => {
  return (
    <div className="event-container">
      <h1>News & Events</h1>
      <div className="card-scroll">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div
              className="event-image"
              style={{
                // backgroundImage: `url(${require(`./images/${event.image}`)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="event-details">
              <p className="event-date">{event.month} {event.date}</p>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-location">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCards;
