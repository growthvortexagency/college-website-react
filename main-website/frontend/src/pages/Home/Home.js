import React from 'react'
import EventCards from '../../section/EventCards'
import VideoSection from '../../section/VideoSection'
import AcademicsSection from '../../section/AcademicsSection'
import UpcomingEvents from '../../section/UpcomingEvents'
import StudentsLife from '../../section/StudentsLife'
import ApplyNow from '../../section/ApplyNow'

const Home = () => {
  return (
    <div className="home-container">
      <VideoSection/>
      <AcademicsSection/>
      <StudentsLife/>
      <EventCards/>
      <UpcomingEvents/>
      <ApplyNow/>
    </div>
  )
}

export default Home