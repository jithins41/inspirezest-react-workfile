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
                src="images/iz_png_logo.png"
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
                    <a href="https://www.facebook.com/inspirezesttechnologies"> <i class="fa-brands fa-facebook"></i></a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.linkedin.com/company/inspirezest"><i class="fa-brands fa-linkedin"></i></a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.instagram.com/inspirezesttechnologies"><i class="fa-brands fa-instagram"></i></a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://api.whatsapp.com/send/?phone=+919567333266&text=Hello"> <i class="fa-brands fa-whatsapp"></i></a>
                  </li>
                </ul>
              </div>
              <div className="footer-links"></div>
            </div>
            <div className="ins-col-3">
              <h1 className="footer-work">Work Hours</h1>
              <ul className="work-hours">
                <li>Mon &nbsp;: 09:00AM - 06:00PM</li>
                <li>Tue &nbsp;&nbsp;: 09:00AM - 06:00PM</li>
                <li>Wed &nbsp;: 09:00AM - 06:00PM</li>
                <li>Thu &nbsp;&nbsp;: 09:00AM - 06:00PM</li>
                <li>Fri &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 09:00AM - 06:00PM</li>
                <li>Sat &nbsp;&nbsp;&nbsp;: Closed</li>
                <li>Sun &nbsp;&nbsp;: Closed</li>
              </ul>
            </div>
            <div className="ins-col-3">
              <a href="https://google.com/maps/place/InspireZest+Technologies+Pvt+Ltd/@8.8802302,76.6043145,15z/data=!4m5!3m4!1s0x0:0xbff685223bfa38ea!8m2!3d8.8802302!4d76.6043145">
                <img
                  src="images/map.png"
                  className="image-fit footer-map"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
