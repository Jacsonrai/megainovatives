import React from 'react';
import '../src/css/ourService.css';
import digital from './digital.png';
import domain from './domain.png';
import mobile from './mobile.png';
import photoshop from './photoshop.png'
import webdesign from './webdesign.png'
import networking from './networking.png'

function ourService() {
    return (
        <div className="serviceContainer" id="service">
            <h1>Our Services</h1>
            <div className="imageContainer1">
                  <div className="hovereffect">
                <img src={digital} className="image" alt="digital"/>
               <div className="overlay">
                   <h2>Digital Marketing</h2>
                    </div>
                    </div>
                    <div className="hovereffect">
                <img src={domain} className="image" alt="domain"/>
               <div className="overlay">
                   <h2>Domain and hosting</h2>
                    </div>
                    </div>
                    <div className="hovereffect">
                <img src={mobile} className="image" alt="mobile"/>
               <div className="overlay">
                   <h2>Mobile Application</h2>
                    </div>
                    </div>
                    </div>

                    <div className="imageContainer2">
                       <div className="hovereffect">
                <img src={photoshop} className="image" alt="photoshop"/>
               <div className="overlay">
                   <h2>graphics Designing</h2>
                    </div>
                    </div>
                    <div className="hovereffect">
                <img src={webdesign} className="image" alt ="webdesign"/>
               <div className="overlay">
                   <h2>Web Designing</h2>
                    </div>
                    </div>
                    <div className="hovereffect">
                <img src={networking} className="image" alt="networking"/>
               <div className="overlay">
                   <h2>Networking</h2>
                    </div>
                    </div>
               
                    </div>
             
            
             
            
            
               
        
                
            
        </div>
    );
}

export default ourService;