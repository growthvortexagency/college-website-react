import React from 'react'
import EventCards from '../../components/EventCards'
import VideoSection from '../../components/VideoSection'
import AcademicsSection from '../../components/AcademicsSection'
import UpcomingEvents from '../../components/UpcomingEvents'
import StudentsLife from '../../components/StudentsLife'
import ApplyNow from '../../components/ApplyNow'

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