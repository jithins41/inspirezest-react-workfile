import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#" class="logo"><h1>InspireZest</h1></a>
                <input type="checkbox" name="" id="toggler" />
                <label for="toggler"><i className="ri-meu-line">
                    <FontAwesomeIcon color="red" icon='anchor' />
                </i></label>
                <div className="menu">
                    <ul class="list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}