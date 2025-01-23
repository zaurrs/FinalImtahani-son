import React from 'react'
import "./About.scss"
import { CiHeart } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { FaRegSun } from "react-icons/fa";
const About = () => {
    return (
        <div>
            <div className="container">
                <div className="title">
                    <h1>ABOUT US</h1>
                </div>
                <div className="aboutCard">
                    <div className="row cardsa">
                        <div className="col-lg-3 col-sm-12 cardAbout">
                            <span><CiHeart /></span>
                            <h4>MADE WITH LOVE</h4>
                            <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
                        </div>
                        <div className="col-lg-3 col-sm-12 cardAbout">
                            <span><CiFaceSmile /></span>
                            <h4>FOR YOUR HAPPINESS</h4>
                            <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
                        </div>
                        <div className="col-lg-3 col-sm-12 cardAbout">
                            <span><FaRegSun /></span>
                            <h4>NATURAL CARE</h4>
                            <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About