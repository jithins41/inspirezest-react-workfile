import React, { Component } from "react";
import './StartCareer.css'
import { Link } from "react-router-dom";

export default class StartCareer extends Component {
    render() {
        return (
            <div className="container">
                <div className="start-career-container">
                    <div className="start-career-box">
                        <div className="left">
                            <h1 className="career-heading">Interested to Join with us</h1>
                        </div>
                        <div className="right">
                            <Link className="btn common-button" to='/career'> Apply Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}