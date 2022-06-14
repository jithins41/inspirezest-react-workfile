import React, { Component } from "react";
import "./IndexBody.css";
import { Link } from "react-router-dom";
import "./7747.css";
import './Working.css'
import AnimationObjects from "../AnimationObjects/AnimationObjects";

export default class IndexBody extends Component {
  render() {
    return (
      <div className="container">
        <AnimationObjects />
        <div className="ib-body-container">
          <div className="ib-animated-image animated-left">
            <img className="image" src="images/office_room/image.png" alt="" />
            <img
              className="image1 wow slideInDown"
              src="images/office_room/image1.png"
              alt=""
            />
            <img
              className="image2 wow slideInDown"
              src="images/office_room/image2.png"
              alt=""
            />
            <img
              className="image3 wow slideInDown"
              src="images/office_room/image3.png"
              alt=""
            />
            <img
              className="image4 wow slideInDown"
              src="images/office_room/image4.png"
              alt=""
            />
            <img
              className="image5 wow slideInDown"
              src="images/office_room/image5.png"
              alt=""
            />
            <img
              className="image6 wow slideInLeft"
              src="images/office_room/image6.png"
              alt=""
            />
            <img
              className="image7 wow slideInDown"
              src="images/office_room/image7.png"
              alt=""
            />
            <img
              className="image8 wow slideInDown"
              src="images/office_room/image8.png"
              alt=""
            />
            <img
              className="image9 wow slideInLeft"
              src="images/office_room/image9.png"
              alt=""
            />
            <img
              className="image10 wow slideInRight"
              src="images/office_room/image10.png"
              alt=""
            />
            <img
              className="image11 wow slideInDown"
              src="images/office_room/image11.png"
              alt=""
            />
            <img
              className="image12 wow slideInDown"
              src="images/office_room/image12.png"
              alt=""
            />
            <img
              className="image13 wow slideInRight"
              src="images/office_room/image13.png"
              alt=""
            />
            <img
              className="image14 wow slideInLeft"
              src="images/office_room/image14.png"
              alt=""
            />
            <img
              className="image15 wow slideInDown"
              src="images/office_room/image15.png"
              alt=""
            />
            <img
              className="image16 wow slideInRight"
              src="images/office_room/image16.png"
              alt=""
            />
            <img
              className="image17 wow slideInLeft"
              src="images/office_room/image17.png"
              alt=""
            />
            <img
              className="image18 wow slideInLeft"
              src="images/office_room/image18.png"
              alt=""
            />
          </div>
          <div className="ib-static-image-area">
            <img className="ib-area-image" src="images/office-1.svg" alt="" />
          </div>
          <div className="ib-text-area">
            <h6>About us</h6>
            <h3>We help teams build the business of their dreams</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur dicta molestiae, dolor natus autem soluta veniam, rem
              nostrum sapiente esse repudiandae quia a, cum quidem similique
              iure odio temporibus veritatis?
            </p>
            <div className="button-area">
              <Link to="/about" className="common-button">
                Know more
              </Link>
            </div>
          </div>
        </div>
        <div className="ib-body-container">
          <div className="ib-text-area">
            <h6>Why choose us ?</h6>
            <h3>We dedicated your success with all our resources</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur dicta molestiae, dolor natus autem soluta veniam, rem
              nostrum sapiente esse repudiandae quia a, cum quidem similique
              iure odio temporibus veritatis?
            </p>
            <div className="button-area">
              <Link to="/about" className="common-button">
                Know more
              </Link>
            </div>
          </div>
          <div className="ib-static-image-area">
            <img className="ib-area-image" src="images/office-3.svg" alt="" />
          </div>
          <div className="ib-animated-image animated-right">
            <img
              className="Wimage5 wow slideInTop"
              src="images/Working/image5.png"
              alt=""
            />
             <img
              className="Wimage3 wow slideInDown"
              src="images/Working/image3.png"
              alt=""
            />
            <img
              className="Wimage6 wow slideInLeft"
              src="images/Working/image6.png"
              alt=""
            />
            <img className="Wimage wow slideInDown" src="images/Working/image.png" alt="" />
            <img
              className="Wimage1 wow slideInLeft"
              src="images/Working/image1.png"
              alt=""
            />
            <img
              className="Wimage2 wow slideInRight"
              src="images/Working/image2.png"
              alt=""
            />
           
            <img
              className="Wimage4 wow slideInDown"
              src="images/Working/image4.png"
              alt=""
            />
            <img
              className="Wimage7 wow slideInDown"
              src="images/Working/image7.png"
              alt=""
            />

          </div>
        </div>
      </div>
    );
  }
}
