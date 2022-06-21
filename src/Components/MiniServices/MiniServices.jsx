import React, { Component } from "react";
import "./MiniServices.css";
import AnimationObjects from "../AnimationObjects/AnimationObjects";
export default class MiniServices extends Component {
  render() {
    return (
      <div className="container">.
      <AnimationObjects/>
        <div className="small-card-container">
          <div className="small-card">
            <i class="fa-solid fa-store"></i>
            <h5>Digital Marketing</h5>
            <p>
            Make your strong presence on Social Media by making a well-optimized page and updating it regularly. Create paid marketing campaign on digital platforms
            </p>
          </div>
          <div className="small-card">
            <i class="fa-solid fa-cart-shopping"></i>
            <h5> E-Commerce </h5>
            <p>
            Easy to get caught up in your day-to-day business dealings — even to the point where other vital things fall by the wayside
            </p>
          </div>
          <div className="small-card">
            <i class="fa-solid fa-mobile"></i>
            <h5>Mobile Apps</h5>
            <p>
            Developing a new mobile app for Android or iOS? Anticipate the challenges of mobile application development and tap into the cloud to enhance the user experience
            </p>
          </div>
          <div className="small-card">
            <i class="fa-brands fa-chrome"></i>
            <h5>Web Apps</h5>
            <p>
            Web application development is the technique of merging client-side and server-side computing to create an application that is accessible via a web browser
            </p>
          </div>
        </div>
      </div>
    );
  }
}
