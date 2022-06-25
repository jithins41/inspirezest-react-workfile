import React from "react";
import "./GetInTouch.css";
import AnimationObjects from "../AnimationObjects/AnimationObjects";
import axios from "../../axios/axios";

class GetInTouch extends React.Component {



  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      mobile: '',
      message: '',
      successMessage: '',
    }
  }
  render() {
    return (
      <div className="container">

        <div className="address-form-container">
          <div className="lhs">
            <div className="address-container">
              <h1>Contact us</h1>
              <p><i class="fa-solid fa-location-pin"></i> &nbsp; IInd floor, Velayudha Mansion, <br />
                &nbsp;&nbsp;&nbsp;&nbsp; SN College Junction, Kollam,
                <br /> &nbsp;&nbsp;&nbsp;&nbsp; Kerala, India - 691001</p>
              <p><i class="fa-regular fa-envelope"></i> &nbsp; info@inspirezesttechnologies.com</p>
              <p><i class="fa-solid fa-phone"></i> &nbsp; +91 9567333266 (Customer Care) </p>
              <p><i class="fa-solid fa-mobile"></i>&nbsp; +91 9567535617, +91 9496739617</p>




            </div>
          </div>
          <div className="rhs">
            <div className="form-container">
              <h1 className="form-heading">Get In Touch</h1>
              {this.state.successMessage && <label style={this.state.success} htmlFor="">{this.state.successMessage}</label>}

              <form style={{ marginTop: '2rem' }} onSubmit={(e) => {
                e.preventDefault();
                axios.post('/get-in-touch', { ...this.state }).then((response) => {
                  if (response.data.status) {
                    this.setState({
                      success: {
                        color: 'green'
                      },
                      successMessage: response.data.message,
                      fullname: '',
                      email: '',
                      mobile: '',
                      message: '',

                    });
                  }
                })
              }}>
                <div className="form-contents">
                  <label>Your full name</label>
                  <input required={true}
                    value={this.state.fullname}
                    onChange={(e) => { this.setState({ fullname: e.target.value }) }}
                    className="form-text"
                    type="text"
                    name="fullname"
                    id="fullname"
                  />
                  <label>Email</label>
                  <input required={true}
                    value={this.state.email}
                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                    className="form-text"
                    type="text"
                    name="email"
                    id="email" />
                  <label>Mobile</label>
                  <input required={true}
                    value={this.state.mobile}
                    onChange={(e) => { this.setState({ mobile: e.target.value }) }}
                    className="form-text"
                    type="text"
                    name="mobile"
                    id="mobile"
                  />
                  <label htmlFor="message">Message</label>
                  <textarea required={true}
                    onChange={(e) => { this.setState({ message: e.target.value }) }}
                    className="form-text"
                    name="message"
                    id="message"
                    rows="4"
                  >{this.state.message}</textarea>
                  <button style={{ textAlign: 'center' }} className="common-button submit-button">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetInTouch;
