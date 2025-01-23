import React from 'react'
import "./Contact.scss"
const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 contactText">
                        <h2>CONTACT US</h2>
                        <span>To get special offers to your email</span>
                        <p>Amsterdam CA 90291
                            email@site.com</p>
                        <p>+1 (234) 56-78</p>
                        <p>@natural.cosmetic</p>
                    </div>
                    <div className="col-lg-7 formContact">
                        <form action="" className='formm'>
                            <div className="row">
                                <div className="col-6 naem">
                                    <input type="text" placeholder='Name*' />

                                </div>
                                <div className="col-6 naem"> <input type="text" typeof='Email' placeholder='Email*' /></div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <textarea placeholder='Message' name="" id=""></textarea>
                                </div>
                            </div>

                            <button type='submit'>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact