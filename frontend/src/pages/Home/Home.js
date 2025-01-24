import React from 'react'
import EventCards from '../../components/EventCards'
import VideoSection from '../../components/VideoSection'
import AcademicsSection from '../../components/AcademicsSection'
import UpcomingEvents from '../../components/UpcomingEvents'

const Home = () => {
  return (
    <div className="home-container">
      <VideoSection/>
      <AcademicsSection/>
      <EventCards/>
      <UpcomingEvents/>
    </div>

  )
}

export default Home