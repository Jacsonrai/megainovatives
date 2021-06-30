import React from 'react';
import '../src/css/Footer.css'
import {  FaFacebook,FaInstagram} from "react-icons/fa";

import Map from './map'

function Footer() {
    return (
        <div className="footerContainer">
            <div className="leftFooter">
                <h5>Call Us</h5>
                <p>Phone: 9813051660,9844749338</p>
                <h5>MON-Friday</h5>
                <p>10am to 5 pm only</p>
         
            </div>
            <div className="centerFooter">
                <h5>Visit Us</h5>
                <h5>Office</h5>
                <p>AnamNagar,kathmandu nepal</p>
                <br></br>
                <br></br>
              
               <p>@2021 MEGA INNOVATIVE.All right reserved|</p> 
               
            </div>
            <div className="rightFooter">
                <h5>Map</h5>
                <Map/>
                <a href="https://www.facebook.com/MegaInnovationNepal" style={{color:"#2665d1",fontSize:'10rerm',paddingTop:"0.5rem",margin:'0.5rem'}}><FaFacebook/></a>
                   <a href="https://www.facebook.com/MegaInnovationNepal" style={{color:"#a549e3",fontSize:'10rerm',paddingTop:"0.5rem",margin:'0.5rem'}}><FaInstagram/></a>
                  
            </div>
            
        </div>
    );
}

export default Footer;