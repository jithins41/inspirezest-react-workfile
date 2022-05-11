import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ImageText from '../Components/ImageText/ImageText'
import MiniServices from '../Components/MiniServices/MiniServices'
import IndexBody from '../Components/IndexBody/IndexBody'
import Services from '../Components/Services/Services'
import Footer from '../Components/Footer/Footer'
import Loader from '../Components/Loader/Loader'
import 'react-whatsapp-chat-widget/index.css'

export default class Index extends Component {
    render() {
        return (
            <div>
                <Loader/>
                <Navbar />
                <ImageText />
                <MiniServices />
                <IndexBody />
                <Services />
                <Footer />
              
            </div>
        )
    }
}
