// import axios from 'axios';
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
            skills: ''
        }
    }
    render() {
        return (
            <div className='container'>
                <h1 className='career-heading'>Join with us</h1>
                <div className="career-container">
                    <div className="left">
                        <img className='career-image' src="images/career.jpg" alt="" />
                    </div>
                    <div className="right">
                        <div className="form-container">
                            <h1 className="form-heading">Apply Now</h1>
                            <div>
                                <div className="career-form-contents">
                                    <label>Your full name</label>
                                    <input
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                        className="form-text"
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                    />
                                    <label>Email</label>
                                    <input onChange={(e) => this.setState({ email: e.target.value })} className="form-text" type="text" name="email" id="email" />
                                    <label>Mobile</label>
                                    <input
                                        onChange={(e) => this.setState({ mobile: e.target.value })}
                                        className="form-text"
                                        type="text"
                                        name="mobile"
                                        id="mobile"
                                    />
                                    <label>Qualification</label>
                                    <input
                                        onChange={(e) => this.setState({ qualifications: e.target.value })}
                                        className="form-text"
                                        type="text"
                                        name="qualification"
                                        id="qualification"
                                    />
                                    <label>Skills</label>
                                    <input
                                        onChange={(e) => this.setState({ skills: e.target.value })}
                                        className="form-text"
                                        type="text"
                                        name="skills"
                                        id="skills"
                                    />

                                    <button onClick={() => {
                                        // axios.post('http://localhost:3001/api/apply-online', { ...this.state })
                                    }} className="common-button submit-button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
