import React, { Component } from "react";
import "./ImageText.css";
import Typed from "react-typed";
import AminatedImageOne from "../AnimatedImageOne/AminatedImageOne";
import AnimationObjects from "../AnimationObjects/AnimationObjects";

const lines = [
  'Web Development',
  'Software Development',
  'ERP Development',
  'Mobile Development',
  'E- Commerce Development',
  'Training Solutions',
  'Digital Marketing',

];

export default class ImageText extends Component {

  render() {
    return (
      <div className="container">
        <AnimationObjects />
        <div className="image-text-container">
        <div className="anim-image-area">
              <AminatedImageOne />
          </div>
          <div className="text-area wow slideInLeft">
            <p className="all-about-text">
              In Inspire Zest, we value your ideas and patience and we can work cordially to create and design interactive solutions of your choice which will elevate your company standards and work accordingly.
            </p>
            <h4 className="overlay-text">
              Areas of our expertise  <br />
              <Typed
                style={{ color: "#0074D7", fontSize: "2rem" }}
                strings={lines}
                typeSpeed={150}
                loop={true}
              ></Typed>{" "}
            </h4>
          </div>
         
          <div className="static-image-area">
            <img className="static-image wow slideInDown" src="images/system.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
