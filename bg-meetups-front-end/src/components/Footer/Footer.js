import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer text-center">
            <div className="d-inline">
                <a href='/copyright.txt' target="_blank">Copyright</a>
            </div>
            <div className="d-inline mx-3">
                <Link to='/contact'>Contact</Link>
            </div>
            <div className="d-inline">
                <Link to='/about'>About</Link>
            </div>
        </div>
    )
}

export default Footer
