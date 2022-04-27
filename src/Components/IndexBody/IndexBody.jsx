import React, { Component } from 'react'
import './IndexBody.css'
import Button from '../Button/Button'

export default class IndexBody extends Component {
    render() {
        return (
            <div className='container'>
                <div className="body-container">
                    <div className="image-area">
                        <img src="images/about.jpg" alt="" />
                    </div>
                    <div className="text-area">
                        <h6>About us</h6>
                        <h3>We help teams build the business of their dreams</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dicta molestiae, dolor natus autem soluta veniam, rem nostrum sapiente esse repudiandae quia a, cum quidem similique iure odio temporibus veritatis?</p>
                        <div className="button-area">
                        <Button type='primary-button' text='Know more'/>
                        </div>
                    </div>
                </div>
                <div className="body-container flex-reverse">
                    <div className="text-area">
                        <h6>Why choose us ?</h6>
                        <h3>We dedicated your success with all our resources</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dicta molestiae, dolor natus autem soluta veniam, rem nostrum sapiente esse repudiandae quia a, cum quidem similique iure odio temporibus veritatis?</p>
                        <div className="button-area">
                        <Button type='primary-button' text='Know more'/>
                        </div>
                    </div>
                    <div className="image-area">
                        <img src="images/office.jpg" alt="" />
                    </div>
                </div>


            </div>
        )
    }
}
