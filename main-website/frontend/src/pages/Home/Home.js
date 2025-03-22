import React, { useRef } from "react";
import EventCards from '../../section/EventCards'
import VideoSection from '../../section/VideoSection'
import AcademicsSection from '../../section/AcademicsSection'
import UpcomingEvents from '../../section/UpcomingEvents'
import StudentsLife from '../../section/StudentsLife'

const Home = () => {

    const applyNowRef = useRef(null);
  
    const scrollToApplyNow = () => {
      if (applyNowRef.current) {
        applyNowRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <div className="home-container">
      <VideoSection scrollToApplyNow={scrollToApplyNow}/>
      <AcademicsSection/>
      <StudentsLife/>
      <EventCards/>
      <UpcomingEvents/>
    </div>
  )
}

export default Home