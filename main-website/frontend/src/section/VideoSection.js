import React from 'react'
import '../styles/VideoSection.css'
import Video from '../assets/video/DSC_0547.mp4'

const VideoSection = ({ scrollToApplyNow }) => {
    return (
        <section className="main-banner" id="top" data-section="section1">
            <video autoPlay muted loop id="bg-video">
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1>GET READY</h1>
                <p>For an Unforgettable Journey of Learning and Growth.</p>
                <button onClick={scrollToApplyNow} className="apply-scroll-button">
                    Apply Now
                </button>
            </div>
        </section>
    )
}

export default VideoSection
