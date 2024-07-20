import React from 'react'
import "./Hero.css"
import women_wear from "../Images/women_wear.png"

export const Hero = () => {
  return (
    <div className='banner'>
        <div className='banner-description'>
          <h1>BEST COLLECTIONS <br></br>OF 2024</h1>
          <button className='banner-btn'>CHECK NOW</button>
        </div>
        <img src={women_wear} alt="" className="banner-img" />
    </div>
  )
}
