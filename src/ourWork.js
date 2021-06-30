import React from 'react';
import '../src/css/ourWork.css';
import {  FaFacebook,FaInstagram} from "react-icons/fa";
import {IoEarth} from "react-icons/io5";


import { useEffect, useState } from 'react'
import axios from 'axios'



 




function OurWork() {
    const[post,setPost]=useState([])

    useEffect(()=>{
      axios.get( "/ourwork/")
      .then(res=>{
        console.log(res)
        setPost(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    })
    return (
        <div className="ourWorksContainer" id="ourWork">
            <h1>Work Dispatched</h1>
            {/*   */}
            <div className="imageContainer">
            {post.map(post=>( 
            <div className="hovereffectWork">
         <img src={post.image} className="image1" alt=""/>
        <div className="overlayWork">
        <a href={post.facebook} style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaFacebook/></a>
        <a href={post.instagram}style={{color:"#833AB4",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaInstagram/></a>
        <a href={post.website} style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><IoEarth/></a>
        </div>
        </div> ))}
         </div> 
        
                    {/* <div className="hovereffectWork">
                <img src={logo2} className="image1"/>
               <div className="overlayWork">
               <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaFacebook/></a>
                   <a href="#" style={{color:"#833AB4",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaInstagram/></a>
                   <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><IoEarth></IoEarth></a>
                    </div>
                    </div>
                    <div className="hovereffectWork">
                <img src={logo3} className="image1"/>
               <div className="overlayWork">
               <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaFacebook/></a>
                   <a href="#" style={{color:"#833AB4",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaInstagram/></a>
                   <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><IoEarth></IoEarth></a>
                    </div>
                    </div> */}
                    {/* </div> */}
{/* 
                    <div className="imageContainer2">
                       <div className="hovereffectWork">
                <img src={logo4} className="image1"/>
               <div className="overlayWork">
               <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaFacebook/></a>
                   <a href="#" style={{color:"#833AB4",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaInstagram/></a>
                   <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><IoEarth></IoEarth></a>
                    </div>
                    </div>
                    <div className="hovereffectWork">
                <img src={logo5} className="image1"/>
               <div className="overlayWork">
               <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaFacebook/></a>
                   <a href="#" style={{color:"#833AB4",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaInstagram/></a>
                   <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><IoEarth/></a>
                    </div>
                    </div>
                    <div className="hovereffectWork">
                <img src={logo6} className="image1"/>
               <div className="overlayWork">
               <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaFacebook/></a>
                   <a href="#" style={{color:"#833AB4",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaInstagram/></a>
                   <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><IoEarth/></a>
                    </div>
                    </div>
                    </div>
                    <div className="imageContainer3">
              <div className="hovereffectWork">
                <img src={logo7} className="image1"/>
               <div className="overlayWork">
               <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaFacebook/></a>
                   <a href="#" style={{color:"#833AB4",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaInstagram/></a>
                   <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><IoEarth/></a>
                    </div>
                    </div>
                    <div className="hovereffectWork">
                <img src={logo8} className="image1"/>
               <div className="overlayWork">
               <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaFacebook/></a>
                   <a href="#" style={{color:"#833AB4",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaInstagram/></a>
                   <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><IoEarth/></a>
                    </div>
                    </div>
                    <div className="hovereffectWork">
                <img src={logo9} className="image1"/>
               <div className="overlayWork">
               <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaFacebook/></a>
                   <a href="#" style={{color:"#833AB4",fontSize:'10rerm',paddingTop:"0.5rem"}}><FaInstagram/></a>
                   <a href="#" style={{color:"#43609C",fontSize:'10rerm',paddingTop:"0.5rem"}}><IoEarth/></a>
                    </div>
                    </div>
                    </div> */}
        </div>
    );
}

export default OurWork;