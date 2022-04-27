import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ImageText from '../Components/ImageText/ImageText'
import MiniServices from '../Components/MiniServices/MiniServices'
import IndexBody from '../Components/IndexBody/IndexBody'

export default class Index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ImageText />
                <MiniServices/>
                <IndexBody/>
            </div>
        )
    }
}
