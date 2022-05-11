import React, { Component } from "react";
import "./IndexBody.css";
import { Link } from "react-router-dom";
import "./7747.css";

export default class IndexBody extends Component {
  render() {
    return (
      <div className="container">
        <div className="body-container">
          <div className="office-image">
            <div className="st0"></div>
            <div className="st1"></div>
            <div className="st2"></div>
            <div className="st3"></div>
            <div className="st4"></div>
            <img className="image" src="images/office_room/image.png" alt="" />
            <img
              className="image1"
              src="images/office_room/image1.png"
              alt=""
            />
            <img
              className="image2"
              src="images/office_room/image2.png"
              alt=""
            />
            <img
              className="image3"
              src="images/office_room/image3.png"
              alt=""
            />
            <img
              className="image4"
              src="images/office_room/image4.png"
              alt=""
            />
            <img
              className="image5"
              src="images/office_room/image5.png"
              alt=""
            />
            <img
              className="image6"
              src="images/office_room/image6.png"
              alt=""
            />
            <img
              className="image7"
              src="images/office_room/image7.png"
              alt=""
            />
            <img
              className="image8"
              src="images/office_room/image8.png"
              alt=""
            />
            <img
              className="image9"
              src="images/office_room/image9.png"
              alt=""
            />
            <img
              className="image10"
              src="images/office_room/image10.png"
              alt=""
            />
            <img
              className="image11"
              src="images/office_room/image11.png"
              alt=""
            />
            <img
              className="image12"
              src="images/office_room/image12.png"
              alt=""
            />
            <img
              className="image13"
              src="images/office_room/image13.png"
              alt=""
            />
            <img
              className="image14"
              src="images/office_room/image14.png"
              alt=""
            />
            <img
              className="image15"
              src="images/office_room/image15.png"
              alt=""
            />
            <img
              className="image16"
              src="images/office_room/image16.png"
              alt=""
            />
            <img
              className="image17"
              src="images/office_room/image17.png"
              alt=""
            />
            <img
              className="image18"
              src="images/office_room/image18.png"
              alt=""
            />
          </div>
          <div className="static-image-area">
            <img className="area-image" src="images/office-1.svg" alt="" />
          </div>
          <div className="text-area">
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
        <div className="body-container flex-reverse">
          <div className="text-area">
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
          <div className="static-image-area">
            <img className="area-image" src="images/office-3.svg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
