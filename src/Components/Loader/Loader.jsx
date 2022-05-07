import React, { Component } from 'react'
import './Loader.css'

export default class loader extends Component {
  render() {
    return (
      <div className='loader-back'>
          <div className='spinner'></div>
      </div>
    )
  }
}
