import React, { Component } from "react";
import "./ImageText.css";
import Typed from "react-typed";
import "aos/dist/aos.css";
import AOS from "aos";


const lines = [
  "Web development",
  "Software Development",
  "Ecommerce development",
  "Digital Marketing",
];

export default class ImageText extends Component {
  componentDidMount() {
    AOS.init({
      delay: 100,
      easing: "ease-in",
    });
    AOS.refresh();
  }
  render() {
    return (
      <div className="container">
        <div className="image-text-container">
          <div data-aos="fade-up" className="text-area">
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
          <div data-aos="fade-up" className="image-area">
            <img style={{ width: "75%" }} src="images/developer-2.svg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
