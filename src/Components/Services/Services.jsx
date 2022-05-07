import React, { Component } from "react";
import "./Services.css";

export default class Services extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="service-tite">Our Services</h1>
        <p className="service-sub">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="service-container">
          <div className="service-card">
            <i class="fa-brands fa-chrome"></i>
            <h3>Web development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quaerat perferendis ut consequuntur illum aperiam!
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-computer"></i>
            <h3>Software Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quaerat perferendis ut consequuntur illum aperiam!
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-cart-shopping"></i>
            <h3>ERP and Ecommerce</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quaerat perferendis ut consequuntur illum aperiam!
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-mobile"></i>
            <h3>Mobile App Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quaerat perferendis ut consequuntur illum aperiam!
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-person-chalkboard"></i>
            <h3>Training Solution</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quaerat perferendis ut consequuntur illum aperiam!
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-square-poll-vertical"></i>
            <h3>Digital Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quaerat perferendis ut consequuntur illum aperiam!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
