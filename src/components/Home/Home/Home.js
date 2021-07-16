import React from 'react'
import Nav from '../Nav/Nav'
import Slider from '../Slider/Slider'
import Footer from '../../Footer/Footer';
import Contact from '../Contact/Contact';
import Promise from '../Promise/Promise';

function Home() {
    return (
        <div className="">
           <Nav></Nav> 
           <Slider></Slider>
           <Promise></Promise>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    )
}

export default Home
