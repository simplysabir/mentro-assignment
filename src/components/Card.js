import React from "react";
import '../styles/Card.css'
import circle from '../assets/circle.png'
import stars from '../assets/stars.png'
import downarrow from '../assets/downarrow.png'

// import dottedline from '../assets/dottedline.png'

function Card() {
  return (
    <div className="card">
    <div className="card-container">
    <div className="text-container">
      <h1 className="text-rating">4.9</h1>
      <div className="star-container">
        <img src={stars} alt="rating" width={"100px"} className="stars"/>
      </div>
      <div className="text-name">
        <h2 className="name">Prakhar Gupta</h2>
        <h3 className="profession">SDE @Amazon</h3>
      </div>
      <div className="text-description">
        <p className="description">
        I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.
        </p>
        <div className="downarrow-container">
        <img src={downarrow} alt="down arrow" width={"50px"} className="downarrow"/>
        </div>
      </div>
      <div className="text-button">
        <a href="#" className="button">Book a session</a>
      </div>
    </div>
    <div className="image-container">
      <img src={circle} alt="Circle" width={"1000px"} height={"400px"} className="circle-image"/>
      {/* <img src={dottedline} alt="dotted line" className="dottedline-image"/> */}
    </div>
    </div>
    </div>
  )
}

export default Card