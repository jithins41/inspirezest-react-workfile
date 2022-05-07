import React from "react";
import "../Services/Services.css";

function ServiceMain() {
  return (
    <div className="container">
      <h1 className="service-tite" style={{marginTop:'3rem'}}>Our Services</h1>
      <div className="service-container">
        <div className="service-card">
            <img src="images/developer-1.svg"  alt="" />
          <h3>Web development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quaerat perferendis ut consequuntur illum aperiam!
          </p>
        </div>
        <div className="service-card">
        <img src="images/developer-2.svg"  alt="" />
          <h3>Software Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quaerat perferendis ut consequuntur illum aperiam!
          </p>
        </div>
        <div className="service-card">
        <img src="images/ecommerce.svg"  alt="" />
          <h3>ERP and Ecommerce</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quaerat perferendis ut consequuntur illum aperiam!
          </p>
        </div>
        <div className="service-card">
        <img src="images/mobile-app.svg"  alt="" />
          <h3>Mobile App Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quaerat perferendis ut consequuntur illum aperiam!
          </p>
        </div>
        <div className="service-card">
        <img src="images/training.svg"  alt="" />
          <h3>Training Solution</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quaerat perferendis ut consequuntur illum aperiam!
          </p>
        </div>
        <div className="service-card">
        <img src="images/dm.svg"  alt="" />
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

export default ServiceMain;
