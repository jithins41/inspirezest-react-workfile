import { React, Component } from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from '../Components/Footer/Footer'
import Career from '../Components/Career/Career';

export default class ApplyOnline extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Career/>
                <Footer />
            </div>
        )
    }
}
