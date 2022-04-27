import React, { Component } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to='/' className="logo"><h1>InspireZest</h1></Link>
                <input type="checkbox" name="" id="toggler" />
                <label for="toggler"><i className="ri-meu-line">
                   Menu
                </i></label>
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