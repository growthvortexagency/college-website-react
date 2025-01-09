import React from 'react'
import '../styles/VideoSection.css'
import Video from '../assets/video/DSC_0547.mp4'

const VideoSection = () => {
    return (
        <section class="main-banner" id="top" data-section="section1">
            <video autoplay="" muted="" loop="" id="bg-video">
                <source src={Video} type="video/mp4" />
            </video>
        </section >
    )
}

export default VideoSection
