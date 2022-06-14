import React from "react";
import "./GetInTouch.css";
import AnimationObjects from "../AnimationObjects/AnimationObjects";

function GetInTouch() {
  return (
    <div className="container">
    
      <div className="address-form-container">
        <div className="lhs">
            <div className="address-container">
            <h1>Contact us</h1>
            <p><i class="fa-solid fa-phone"></i> &nbsp; +91 9567333266</p>
            <p><i class="fa-regular fa-envelope"></i> &nbsp; info@inspirezesttechnologies.com</p>
            <p><i class="fa-solid fa-location-pin"></i> &nbsp; IInd floor, Velayudham Mansion, SN College Junction, Kollam,
                Kerala, India</p>
            </div>
        </div>
        <div className="rhs">
          <div className="form-container">
            <h1 className="form-heading">Get In Touch</h1>
            <form action="">
              <div className="form-contents">
                <label>Your full name</label>
                <input
                  className="form-text"
                  type="text"
                  name="fullname"
                  id="fullname"
                />
                <label>Email</label>
                <input className="form-text" type="text" name="email" id="email" />
                <label>Mobile</label>
                <input
                  className="form-text"
                  type="text"
                  name="mobile"
                  id="mobile"
                />
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-text"
                  name="message"
                  id="message"
                  rows="4"
                ></textarea>
                <button className="common-button submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
