import React from "react";
import "./WhoWeAre.css";

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
            <h1 style={{ marginTop: "0rem" }}>
              Our Spirit Of Innovation And Pass That What We Have Undertaken
            </h1>
            <p style={{ marginTop: "0rem" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              beatae mollitia magni deserunt unde delectus blanditiis
              accusantium. Esse facere natus adipisci ipsa ipsam veniam impedit
              officiis labore, minima, quas eius?
            </p>
            <a style={{ marginTop: "0rem" }} className="common-button" href="#">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
