import React from 'react';
import '../src/css/tools.css';

import django from './django.png'
import php from './php1.png'
import python from './python.png'
import react from './react.png'
import wordpress from './word.png'

import postgres from './postgres.png'

function Tools() {
    return (
        <div className="toolcontainer">
             <div className="toolTitle">
                 <h4>Tools We Use</h4>
                 <div className="imageToolContainer">
                 <div className="toolImage">
                     <div className="divImage1">
                     <img src={django} className="imageTool" alt="django"/>
                     </div>
                     <div className="divImage1">
                 <img src={php}  className="imageTool" alt="php"/>
                 </div>
                 <div className="divImage1">
                 <img src={python} className="imageTool" alt="python"/>
                 </div>
             </div>
             <div className="toolImage2">
             <div className="divImage2">
                 <img src={react}  className="imageTool" alt="react"/>
                 </div>
                 <div className="divImage2">
                 <img src={wordpress}  className="imageTool" alt="wordpress"/>
                 </div>
                 <div className="divImage2">
                 <img src={postgres}  className="imageTool" alt="postgres"/>
                 </div>
             </div>
                 </div>
             
             </div>
            

        </div>
      
           
       
            
              

          
            
      
    );
}

export default Tools;