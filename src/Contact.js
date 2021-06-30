import React, { useState } from 'react';

import {FaUserAlt,FaPhoneAlt} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import '../src/css/contact.css';
import Axios from 'axios';
import {VscLocation} from "react-icons/vsc";
import { BiMailSend} from "react-icons/bi";







const accessToken='FtKXlXjmPJJ9ZtweLVrKRqlt9ApZ9OudLor4cry9AaSQmsVtDhjXlo4WLWEZ2k2t'
const apiUrl="http://localhost:8000";
const authAxios=Axios.create({
  baseURL:apiUrl,
  headers:{
    Authorization:`Bearer ${accessToken}`
  }
})
function Contact() {


  
  const[data,setData]=useState({
    email:"",
    name:"",
    phone:"",
    message:""
  })
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)

  }
  function submit(e){
    e.preventDefault()
    
    
      authAxios.post( '/contact/',{
       
      
        name:data.name,
        phone:data.number,
        message:data.message,
        email:data.email ,
        

      })
      .then(res=>{
        console.log(res.data)
      })
    
  }

 
    return (
        <div className="Contactcontainer" id="contact">
        
           
            <div className='contactContent'>
            <h4 className="contactTitle">Want to Work with Us?</h4>
            <div className="Detail">
            <VscLocation  className="Location"/>
              <p  className="Plocation">AnamNagar,kathmandu Nepal</p>
              <FaPhoneAlt className="phone"/>
               <p className="Pphone">9813051660,9844749338</p>

               <BiMailSend  className="Mail"/>
               <p  className="Pmail">info@megainnovative.com</p>
            </div>
            
           
             <form onSubmit={(e)=>submit(e)}  className="contactForm">
         
               
             
                <FaUserAlt style={{color:"white",textAlign:"center",minWidth:"50px",minHeight:"15px",padding:"1px",marginLeft:"1rem"}}/>
                <input onChange={(e)=>handle(e)}   type="text" value={data.name} id="name"  placeholder="Enter your Name.." className="inputField" />
                
               <FiMail style={{color:"white",textAlign:"center",minWidth:"50px",minHeight:"25px",padding:"2px",marginLeft:"1rem"}}/>
                <input onChange={(e)=>handle(e)}    type="text" value={data.email} id="email"  placeholder="Enter your Email.." className="inputField" />

               <FaPhoneAlt style={{ color:"white",textAlign:"center",minWidth:"50px",minHeight:"15px",padding:"5px",marginLeft:"1rem"}}/>
                <input onChange={(e)=>handle(e)}    type="number" value={data.phone} id="phone"  placeholder="Enter your Phone Number.." className="inputField" />

               <textarea onChange={(e)=>handle(e)}    value={data.message} id="message"  placeholder="Write your Queries.." type="text"></textarea>
              
               <button type="submit"  className='submit'>Submit</button>

            </form>
            

            </div>
        
       

   </div>
 
      
  
    );
}

export default Contact;