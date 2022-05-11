import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="footer-container">
          <div className="ins-row">
            <div className="ins-col-3">
              <img
                src="images/LP1.png"
                className="image-fit footer-logo"
                alt=""
              />
              <div className="footer-address">
                IInd floor, Velayudham Mansion, SN College Junction, Kollam,
                Kerala, India
              </div>
              <div className="footer-email">
                <i class="fa-solid fa-envelope"></i>:
                info@inspirezesttechnologies.com
              </div>
              <div className="footer-phone">
                <i class="fa-solid fa-phone"></i> +91 9567333266
              </div>
              <div className="footer-socialmedia">
                <ul>
                  <li>
                    {" "}
                    <i class="fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    {" "}
                    <i class="fa-brands fa-linkedin"></i>
                  </li>
                  <li>
                    {" "}
                    <i class="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    {" "}
                    <i class="fa-brands fa-youtube"></i>
                  </li>
                </ul>
              </div>
              <div className="footer-links"></div>
            </div>
            <div className="ins-col-3">
              <h1 className="footer-work">Work Hours</h1>
              <ul className="work-hours">
                <li>Mon: 09:00AM - 06:00PM</li>
                <li>Tue: 09:00AM - 06:00PM</li>
                <li>Wed: 09:00AM - 06:00PM</li>
                <li>Thu: 09:00AM - 06:00PM</li>
                <li>Fri: 09:00AM - 06:00PM</li>
                <li>Sat: Closed</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
            <div className="ins-col-3">
              <img
                src="images/location.png"
                className="image-fit footer-map"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
