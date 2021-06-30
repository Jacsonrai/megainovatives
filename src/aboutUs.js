import React from 'react';
import '../src/css/about.css'
import laptop from './laptop.png'

function aboutUs() {
    return (
        <div className="aboutContainer" id="aboutus">
          
            <img src={laptop} alt="laptop"/>
            <div className="aboutTitle">Who we are?</div>
            <div className="aboutContent">
            software to Every big idea starts with a small step forward and 
            we are here for helping you take that small step ,
            let us solve your business problems by developing and integrating software to suit your needs.
            we build and manage diversified portfolios, by keeping charges low and clearly show where you’re invested. 
             Our teams come together every day to move our mission forward – making simple, elegant tools to help you be productive without the stress
            Start your journey with mega innovative today
           </div>
           
            
        </div>
        
    );
}

export default aboutUs;