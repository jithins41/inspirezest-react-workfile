import React, { Component } from "react";
import AnimationObjects from "../AnimationObjects/AnimationObjects";
import "./Services.css";

export default class Services extends Component {
  render() {
    return (
      <div className="container">
        <AnimationObjects />
        <h1 className="service-tite">Our Services</h1>
        <p className="service-sub">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="service-container">
          <div className="service-card">
            <i class="fa-brands fa-chrome"></i>
            <h3>Web development</h3>
            <p>
              We establish creative functional websites that are salient to you and easy to work with.
              If your provisions are a systematically updated website, we come up with the apt software.
              Business Intelligence enhances User experience with new age design
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-computer"></i>
            <h3>Software Development</h3>
            <p>
              In order to keep up with the rapidly changing Business world,
              it is obligatory to transfigure and redefine the existing applications and systems by
              leveraging newer technologies. Each  Client’s
              requirements vary accordingly whereas no single software design can meet each Client’s specific needs
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-users"></i>
            <h3>ERP Development</h3>
            <p>
              Enterprise development enhances centralized framework covering all
              data and processes of an organization. It consolidates all domains of a business from planning to inventory control, sales, marketing, finance
              customer service and human resources.
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-mobile"></i>
            <h3>Mobile App Development</h3>
            <p>
              When we consider, an off the shelf software package which
              are generalized and would not guarantee your specific needs which will eventually inhibit
              your future growth whereas our expert team takes care of all
              your future and immediate business requirements initializing from the development stage
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-shopping-cart"></i>
            <h3>Ecommerce Development</h3>
            <p>
              Ecommerce web development is the process of building and designing an
              e commerce website where consumers can purchase online. Because e commerce websites are
              so popular with consumers, developing an
              ecommerce website can help you generate more conversions and revenue for your business
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-person-chalkboard"></i>
            <h3>Training Solution</h3>
            <p>
              A custom-built training solution is an application built “from scratch
              “using your own in-house developers
              or contractors who deliver a product designed especially for your organizations needs
            </p>
          </div>
          <div className="service-card">
            <i class="fa-solid fa-square-poll-vertical"></i>
            <h3>Digital Marketing</h3>
            <p>
              Any marketing that uses electronic devices and can be used by marketing
              speecialists to convey promotional messaging and measures its impact
              through your customer journey .in practice ,digital marketing typically refers
              to marketing campaigns that appear on a computer ,phone ,tablet or other device.
            </p>
          </div>
          <div className="service-card">
          <i class="fa-solid fa-copyright"></i>
            <h3>Branding</h3>
            <p>
              Branding is a basic desirability of the Digital Era. Every Business will be popularized in the way they are presented before a crowd.
              Is your honey still attractive to your bees?
              Branding is a field where reviews are taken constantly and improved accordingly.

            </p>
          </div>
          <div className="service-card">
          <i class="fa-solid fa-pen-ruler"></i>
            <h3>Logo Designing</h3>
            <p>
              Logo design  is a branding and marketing tool that can be used
              to signify a business .put simply your logo represents your business brand.it’s
              something simple that as you build brand loyality .your customers come to trust and recognise.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
