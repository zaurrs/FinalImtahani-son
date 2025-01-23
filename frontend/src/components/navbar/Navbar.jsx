import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import "./Navbar.scss"
import { CiMenuBurger } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const { basket } = useSelector((state) => state.basket)
    const total = basket.reduce((acc, item) => acc +  item.count, 0)
  
  
    return (
        <div>
            <div className="nav">
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-1-96x96.png" alt="" />
                            <h2> NATURAL COSMETIC</h2>
                        </div>
                        <ul className="list">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li><FaFacebookF /></li>
                            <li><CiTwitter /></li>
                            <li><CiInstagram /></li>
                        </ul>
                        <ul className="wrapper">

                            <li><Link to='/basket'><FaShoppingBasket /></Link>
                            <sup>{total}</sup></li>
                            <li><Link to='/admin'><MdDashboard /></Link></li>
                            <div className="burger">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                      <CiMenuBurger />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/about">About</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/shop">Shop</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar