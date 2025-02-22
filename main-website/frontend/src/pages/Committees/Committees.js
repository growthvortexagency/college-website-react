import React from 'react'
import '../../styles/pages/Committees.css'
import NCC from '../../assets/images/NCC.webp'

const Committees = () => {
  return (
    <div className='committees-container'>
      <h1>Committees</h1>
      <div className='committees-cards'>
        <div className='single-cards'>
          <img src={NCC} alt='ncc-image'></img>
          <h2>NCC</h2>
          <p>The National Cadet Corps (NCC) is a youth organization in India 
            that trains students in leadership, discipline, and patriotism. 
            It aims to develop character, physical fitness, and social responsibility 
            through military-style training and community service.</p>
            <button>Read More</button>
        </div>
        <div className='single-cards'>

        </div>
        <div className='single-cards'>

        </div>
        <div className='single-cards'>

        </div>
      </div>
    </div>
  )
}

export default Committees