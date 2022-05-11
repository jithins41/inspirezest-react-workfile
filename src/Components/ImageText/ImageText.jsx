import React, { Component } from "react";
import "./ImageText.css";
import Typed from "react-typed";
import AminatedImageOne from "../AnimatedImageOne/AminatedImageOne";

const lines = [
  "Web development",
  "Software Development",
  "Ecommerce development",
  "Digital Marketing",
];

export default class ImageText extends Component {
 
  render() {
    return (
      <div className="container">
        <div className="image-text-container">
          <div className="text-area wow slideInLeft">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            debitis repellendus, consequuntur consequatur modi nesciunt deserunt
            reprehenderit eveniet, aspernatur quo blanditiis in quia nam libero
            illum expedita placeat dolorum ratione.
            <h4 className="overlay-text">
              Your idea <br />
              <Typed
                style={{ color: "#0074D7" }}
                strings={lines}
                typeSpeed={150}
                loop={true}
              ></Typed>{" "}
            </h4>
          </div>
          <div className="anim-image-area">
            <div>
              <AminatedImageOne />
            </div>
          </div>
          <div className="static-image-area">
            <img src="images/developer-1.svg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
