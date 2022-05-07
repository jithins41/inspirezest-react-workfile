import React, { Component } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import FloatingText from "../FloatingText/FloatingText";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to='/' className="logo"><img src="images/logo.png" alt="InspireZest Logo" /></Link>
                <input type="checkbox" name="" id="toggler" />
                <label for="toggler">
                <i class="fa-solid fa-bars menu-btn"></i>
                </label>
                <div className="menu">
                    <ul class="list">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link> </li>
                        <li><Link to='/services'>Services</Link> </li>
                        <li><Link to='/contact'>Contact</Link> </li>
                        
                    </ul>
                </div>
            </nav>
        )
    }
}