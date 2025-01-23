import React from 'react'
import "./Beuty.scss"
const Beuty = () => {
  return (
    <div>
        <div className="container">
          <div className="beuty">
          <div className="row">
                <div className="col-lg-6 col-sm-12 beutyimg">
                    <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image1.jpg" alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 beutyText">
                    <div className="textBeuty">
                        <h1>DEVOTED TO</h1>
                        <h1>WONDERFUL</h1>
                        <h1>BEAUTY</h1>
                    </div>
                    <span>With 30-minute premium treat</span>
                    <p>Phasellus faucibus vehicula rutrum in ante ligula vel arcu quis lacinia posuere metus eget ligula ipsum maximus lobortis nec imperdiet.</p>
                    <button>Read More</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Beuty