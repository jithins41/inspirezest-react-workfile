import React, { Component } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="logo">
          <img className="logo" src="images/iz_png_logo.png" alt="InspireZest Logo" />
        </Link>
        <input type="checkbox" name="" id="toggler" />
        <label for="toggler">
          <i class="fa-solid fa-bars menu-btn"></i>
        </label>
        <div className="menu">
          <ul class="list">
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { color: "#81007F", fontWeight: "bold" }
                    : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { color: "#81007F", fontWeight: "bold" }
                    : undefined
                }
                to="/about"
              >
                About
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { color: "#81007F", fontWeight: "bold" }
                    : undefined
                }
                to="/services"
              >
                Services
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { color: "#81007F", fontWeight: "bold" }
                    : undefined
                }
                to="/contact"
              >
                Contact
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                className="common-button"
                to="/career"
                style={{color:'#fff'}}
              >
                Join us
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
