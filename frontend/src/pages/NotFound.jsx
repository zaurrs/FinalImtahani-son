import React from 'react'
import { Link } from 'react-router-dom'
import "./Not.scss"

const NotFound = () => {
    return (
        <div className='container'>
            <div className="cards">
                <h1>NOT FOUND PAGE</h1>
                <Link to='/'><button>Go Gome</button></Link>
            </div>
        </div>
    )
}

export default NotFound