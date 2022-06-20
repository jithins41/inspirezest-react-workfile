import React from "react";
import "./WhoWeAre.css";
import { Link } from "react-router-dom";
import AnimationObjects from "../AnimationObjects/AnimationObjects";
function WhoWeAre() {
  return (
    <div className="container">

      <AnimationObjects />
      <div className="who-container">
        <div className="who-back">
          <h1 className="about-title ins-gradient-text">Who we are</h1>
        </div>
        <div className="who-image-text">
          <div className="who-image">
            <img src="images/about-dev.svg" alt="" />
          </div>
          <div className="who-text">
            <h1>
              As a camera shutter captures every living memory, our digital world retrieves every idea and enhances our technology timely.
            </h1>
            <p >
              At Inspire Zest , We believe there is a better way to do software Development, Web Development,
              ERP Development ,Mobile App Development ,E-Commerce Development ,Training Solutions ,
              Digital Marketing ,Branding ,Logo Designing.
              We provide best in class services and least transparent aspects of great Digital marketing .
            </p>
            <p >
              In Inspire Zest, we value your ideas and patience and we can work cordially to create and design interactive solutions of your choice which will elevate your company standards and work accordingly.
            </p>
            <Link
              className="common-button"
              to="/services"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="small-card-container">
          <div className="small-card">
            <h5>Our Mission</h5>
            <p>
              To ensure client’s interest is our top most priority .  To provide cost effective software development ,web development and Digital Marketing and Achieve mutual growth for our clients ,Employees ,vendors and the organization at large .
            </p>
          </div>
          <div className="small-card">
            <h5>Our Vision</h5>
            <p>
              To continuously grow as a professional IT Development company and be Business partners to our Domestic clients as well as global clients in international Market  </p>
          </div>
        </div>

        <div className="bottom-text">
          Our Digital Team aim in balance between creativity and functionality. Our team will ensure in building your ideas and making your dream a reality and enhance your journey with our company on every step.
          We assure you that we are a honest team striving to make your ideas into exquisite perfection from luxury travel to self storage, we provide sevices across a vast variety of industries. We treat our projects with utmost care and prioritize quality and professionalism above everything.

        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
