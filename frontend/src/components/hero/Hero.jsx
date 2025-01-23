import React from 'react'
import "./Hero.scss"
const Hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="container">
                <div className="row heros">
                    <div className="col-lg-6 col-sm-12 heros1">
                        <div className="text">
                        <h1>THE VIEW ON</h1>
                        <h1>REFRESHING</h1>
                        </div>
                        <p>Phosfluorescently maintain impactful process.</p>
                        <button>Read More</button>
                    </div>
                    <div className="col-lg-6 col-sm-12 heros2">
                        <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero