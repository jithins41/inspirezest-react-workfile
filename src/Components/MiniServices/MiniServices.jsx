import React, { Component } from "react";
import "./MiniServices.css";

export default class MiniServices extends Component {
  render() {
    return (
      <div className="container">
        <div className="small-card-container">
          <div className="small-card">
            <i class="fa-solid fa-store"></i>
            <h5>Digital Marketing</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores hic tempore est, vero veniam veritatis facere
              architecto eaque quo explicabo.
            </p>
          </div>
          <div className="small-card">
            <i class="fa-solid fa-cart-shopping"></i>
            <h5> E-Commerce </h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores hic tempore est, vero veniam veritatis facere
              architecto eaque quo explicabo.
            </p>
          </div>
          <div className="small-card">
            <i class="fa-solid fa-mobile"></i>
            <h5>Mobile Apps</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores hic tempore est, vero veniam veritatis facere
              architecto eaque quo explicabo.
            </p>
          </div>
          <div className="small-card">
            <i class="fa-brands fa-chrome"></i>
            <h5>Web Apps</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores hic tempore est, vero veniam veritatis facere
              architecto eaque quo explicabo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
