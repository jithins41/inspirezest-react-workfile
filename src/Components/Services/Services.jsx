import React, { Component } from "react";
import AnimationObjects from "../AnimationObjects/AnimationObjects";
import "./Services.css";

export default class Services extends Component {
  render() {
    return (
      <div className="container">
        <AnimationObjects/>
        <h1 className="service-tite">Our Services</h1>
        <p className="service-sub">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="service-container">
          <div className="service-card">
            <i class="fa-brands fa-chrome"></i>
            <h3>Web development</h3>
            <p>
              Create and maintain websites. we are also responsible for the
              site's technical aspects, such as its performance and capacity,
              which are measures of a website's speed and how much traffic the
              site can handle,create content for the site
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-computer"></i>
            <h3>Software Development</h3>
            <p>
              We design, and build computer programs.Develop new applications
              for mobile or desktop use, We are identify user needs, build
              programs, test out new software, and make improvements
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-cart-shopping"></i>
            <h3>ERP and Ecommerce</h3>
            <p>
              software and systems used to plan and manage all the core supply
              chain, manufacturing, services, financial and other processes of
              an organization, and develop application for activity of
              electronically buying or selling of products on online services or
              over the Internet
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
