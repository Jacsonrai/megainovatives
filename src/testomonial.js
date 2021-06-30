import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import {useState,useEffect} from 'react'
import axios from 'axios'
import './css/testimonial.css'
import SwiperCore, {Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"




SwiperCore.use([Pagination]);



function Testimonial(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get( "/testomonial/")
        .then(res=>{
          console.log(res)
          setData(res.data)
        })
        .catch(err=>{
          console.log(err)
        })

    })
   return (
    
   
   
   <Swiper style={{height:"23rem",maxWidth:"100%"}} slidesPerView={2.5} spaceBetween={20}>
    {data.map(data=>(
      
        <SwiperSlide>
          <div className="swiperImage">
          <img src={data.image} alt="swiperImage"/>
         
          </div>
          <h3 className="swiperContent">{data.message}</h3>
         
         
        </SwiperSlide>
      
    
    ))}

    </Swiper>  
  
    

 
      
    )
       
   
}

export default Testimonial;