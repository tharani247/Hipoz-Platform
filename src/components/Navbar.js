import React from 'react'
import logo from '../images/logoo.png'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__text">
                <div className="logo">
                    <a href="/"><img src={logo} className="logoimg" alt="logo"/></a>
                </div>
                <ul className="nav_ul">
                    <li><a href="/signin">Sign in</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
