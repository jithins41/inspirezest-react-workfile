import React from "react";
import "./WhoWeAre.css";
import { Link } from "react-router-dom";
function WhoWeAre() {
  return (
    <div className="container">
      <div className="who-container">
        <div className="who-back">
          <h1 className="about-title ins-gradient-text">About InspireZest</h1>
        </div>
        <div className="who-image-text">
          <div className="who-image">
            <img src="images/about-dev.svg" alt="" />
          </div>
          <div className="who-text">
            <h1>
              Our Spirit Of Innovation And Pass That What We Have Undertaken
            </h1>
            <p >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              beatae mollitia magni deserunt unde delectus blanditiis
              accusantium. Esse facere natus adipisci ipsa ipsam veniam impedit
              officiis labore, minima, quas eius?
            </p>
            <Link
              className="common-button"
              to="/services"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
