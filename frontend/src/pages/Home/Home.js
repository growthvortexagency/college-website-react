import React from 'react'
import EventCards from '../../components/EventCards'
import VideoSection from '../../components/VideoSection'
import AcademicsSection from '../../components/AcademicsSection'

const Home = () => {
  return (
    <div className="home-container">
      <VideoSection/>
      <AcademicsSection/>
      <EventCards/>
    </div>

  )
}

export default Home