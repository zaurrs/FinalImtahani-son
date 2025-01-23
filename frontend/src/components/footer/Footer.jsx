import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-2-96x96.png" alt="" />
                    </div>
                    <div className="col-lg-3">
                        <ul className='aboutfooter'>
                            <li>ABOUT</li>
                            <li>FAQ</li>
                            <li>PRODUCTS</li>
                            <li>TERMS</li>
                            <li>POLICY</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <ul className="contactFooter">
                            <li>INSTAGRAM</li>
                            <li>TWITTER</li>
                            <li>FACEBOOK</li>
                            <li>PINTEREST</li>
                            <li>BLOG</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h5>SUBSCRIBE TO OUR</h5>
                        <h5>NEWSLETTER</h5>

                        <div className="email" style={{display:"flex"}}>
                            <input type="email" placeholder='Your Email' />
                            <button type='submit'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer