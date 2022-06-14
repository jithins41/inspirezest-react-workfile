import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import GetInTouch from "../Components/GetInTouch/GetInTouch";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <GetInTouch />
        <Footer />
      </div>
    );
  }
}
