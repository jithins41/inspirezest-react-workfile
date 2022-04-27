import React, { Component } from 'react'
import './ImageText.css'
import Button from '../Button/Button'

export default class ImageText extends Component {
  render() {
    return (
      <div className='container'>
        <div className="image-text-container">
          <img className='image' src="images/inspire.jpg" alt="" />
          <div className="overlay-content">
          <h4 className="overlay-text">Your idea <br /> matters!</h4>
          <Button type='primary-button' text='Contact us'/>
          </div>
        </div>
      </div>
    )
  }
} 
