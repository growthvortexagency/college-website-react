import React from 'react'
import EventCards from '../../components/EventCards'
import VideoSection from '../../components/VideoSection'

const Home = () => {
  return (
    <div className="home-container">
      <VideoSection/>
      <EventCards/>
    </div>

  )
}

export default Home