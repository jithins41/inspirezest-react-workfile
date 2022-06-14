import React from "react";
import AnimationObjects from "../AnimationObjects/AnimationObjects";
import "../Services/Services.css";

function ServiceMain() {
  return (
    <div className="container">
      <AnimationObjects/>
      <h1 className="service-tite" style={{ marginTop: '3rem' }}>Our Services</h1>
      <div className="service-container">
        <div className="service-card">
          <img src="images/developer-1.svg" alt="" />
          <h3>Web development</h3>
          <p>
            We establish creative functional websites that are salient to you and easy to work with. If your provisions are a systematically updated website, we come up with the apt software. Business Intelligence enhances User experience with new age design.
          </p>
        </div>
        <div className="service-card">
          <img src="images/ecommerce.svg" alt="" />
          <h3>ERP Development</h3>
          <p>
            Enterprise development enhances centralized framework covering all data and processes of an organization. It consolidates all domains of a business from planning to inventory control, sales, marketing, finance  customer service and human resources. We provide ERP solutions which are cost effective and customizable.
          </p>
        </div>
        <div className="service-card">
          <img src="images/dm.svg" alt="" />
          <h3>Branding</h3>
          <p>
            Branding is a basic desirability of the Digital Era. Every Business will be popularized in the way they are presented before a crowd.
            Is your honey still attractive to your bees?
            Branding is a field where reviews are taken constantly and improved accordingly.
            We are excited to play this game !
            Celebrate your Brand Success with us !

          </p>
        </div>
        <div className="service-card">
          <img src="images/developer-2.svg" alt="" />
          <h3>Software Development</h3>
          <p>
            In order to keep up with the rapidly changing Business world, it is obligatory to transfigure and redefine the existing applications and systems by leveraging newer technologies. Each  Client’s  requirements vary accordingly whereas no single software design can meet each Client’s specific needs. The Software we innovate for you should be beneficial to your Business. We customize in designing  software or web enabled applications in exacting the needs of the Clients.
          </p>
        </div>
     
       
        <div className="service-card">
          <img src="images/mobile-app.svg" alt="" />
          <h3>Mobile App Development</h3>
          <p>
            When we consider, an off the shelf software package which are generalized and would not guarantee your specific needs which will eventually inhibit your future growth whereas our expert team takes care of all your future and immediate business requirements initializing from the development stage. A tailor made package is  exclusively made to cater your specific requirements and we provide highly customized solutions for your business.
            We design agile products which improves business value. Our services extend from cloud, mobile and web providing business with extra mileage to reach wider audience across different touchprints.

          </p>
        </div>
        {/* <div className="service-card">
          <img src="images/training.svg" alt="" />
          <h3>Training Solution</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quaerat perferendis ut consequuntur illum aperiam!
          </p>
        </div>
        <div className="service-card">
          <img src="images/dm.svg" alt="" />
          <h3>Digital Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quaerat perferendis ut consequuntur illum aperiam!
          </p>
        </div> */}
        
      </div>
    </div>
  );
}

export default ServiceMain;
