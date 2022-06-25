import axios from '../../axios/axios';
import React, { Component } from 'react'
import './Career.css'


export default class Career extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            qualification: '',
            skills: '',
            experience: '',
            successMessage: '',
        }
    }
    render() {
        return (
            <div className='container'>
                <h1 className='career-heading'>Apply Now</h1>
                <div className="career-container">
                    <div className="left">
                        <img className='career-image' src="images/career.jpg" alt="" />
                    </div>
                    <div className="right">
                        <div className="form-container">
                            <div>

                                <form onSubmit={() => {
                                    axios.post('/apply-now', { ...this.state }).then((response) => {
                                        this.setState({
                                            name: '',
                                            email: '',
                                            phone: '',
                                            qualification: '',
                                            skills: '',
                                            experience: '',
                                            successMessage: response.data.message,

                                        })
                                    })
                                }}>
                                    <div className="career-form-contents">
                                        <label>Your full name</label>
                                        <input
                                            required
                                            value={this.state.name}
                                            onChange={(e) => this.setState({ name: e.target.value })}
                                            className="form-text"
                                            type="text"
                                            name="fullname"
                                            id="fullname"
                                        />
                                        <label>Email</label>
                                        <input

                                            value={this.state.email}
                                            onChange={(e) => this.setState({ email: e.target.value })}
                                            className="form-text"
                                            type="Email"
                                            name="email"
                                            id="email" />
                                        <label>Mobile</label>
                                        <input
                                            required
                                            value={this.state.phone}
                                            onChange={(e) => this.setState({ phone: e.target.value })}
                                            className="form-text"
                                            type="text"
                                            name="mobile"
                                            id="mobile"
                                        />
                                        <label>Qualification</label>
                                        <input
                                            required
                                            value={this.state.qualification}
                                            onChange={(e) => this.setState({ qualification: e.target.value })}
                                            className="form-text"
                                            type="text"
                                            name="qualification"
                                            id="qualification"
                                        />
                                        <label>Skills</label>
                                        <input
                                            value={this.state.skills}
                                            onChange={(e) => this.setState({ skills: e.target.value })}
                                            className="form-text"
                                            type="text"
                                            name="skills"
                                            id="skills"
                                        />
                                        <label>Experience</label>
                                        <input
                                            value={this.state.experience}
                                            onChange={(e) => this.setState({ experience: e.target.value })}
                                            className="form-text"
                                            type="text"
                                            name="skills"
                                            id="skills"
                                        />
                                        {/* <label>Resume</label>
                                    <input
                                        onChange={(e) => this.setState({ skills: e.target.value })}
                                        className="form-text"
                                        type="file"
                                        name="skills"
                                        id="skills"
                                    /> */}
                                        {this.state.successMessage && <label style={this.state.success} htmlFor="">{this.state.successMessage}</label>}

                                        <button className="common-button submit-button">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
