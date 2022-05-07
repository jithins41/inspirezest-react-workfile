import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import WhoWeAre from "../Components/WhoWeAre/WhoWeAre";
import Footer from '../Components/Footer/Footer'

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <WhoWeAre />
        <Footer/>
      </div>
    );
  }
}
