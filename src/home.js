
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Homeimage from './home.jpg'
import {Link} from "react-scroll" ;



import '../src/css/home.css'


function Home() {
    return (
        <div id="home" className="HomeContainer">
          <img src={Homeimage} alt="homeImage"/>
            <div className="HomeImageContainer">
                <h1 className="HomeContent">Mega Innovative</h1>
                <p className="HomeContext"> "Providing the Simplest Solution for the most Complex Problem"</p>
                <Link   
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
           duration={200}
           className="underline">
            <button className="HomeButtom">Get In Touch</button>
          </Link>
     
                </div>
           
        </div>
    );
}

export default Home;