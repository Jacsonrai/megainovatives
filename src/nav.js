
import React,{ useState}from 'react';
import '../src/css/nav.css'
import logo from './logo.png'
import {Link} from "react-scroll" ;
import {FaBars } from "react-icons/fa";


function Nav() {
  const[showLinks,setShowLinks]= useState(false);
  const[navbar,setNavbar]=useState(false);

  const changeBackground=()=>{
 if(window.scrollY>=45){
   setNavbar(true)
 }else{
   setNavbar(false)
 }
  };
  window.addEventListener('scroll',changeBackground)
    return (
      
    
        
        <div className={navbar ? "navContainer active":"navContainer"}>
            <a href='/home'>
              <img src={logo} className='navLogo'alt='logo'></img></a> 
             <div className="links" id={showLinks ? "hidden" : ""}>
             <Link   
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
           duration={200}
           className="underline">
         Home
          </Link>
      
          <Link   
          activeClass="active"
          to="aboutus"
          spy={true}
          smooth={true}
          duration={200}
          className="underline">
          About Us
          </Link>
          <Link   
          activeClass="active"
          to="service"
          spy={true}
          smooth={true}
           duration={200}
           className="underline">
          Service
          </Link>
          <Link   
          activeClass="active"
          to="ourWork"
          spy={true}
          smooth={true}
           duration={200}
           className="underline">
         Our Work
          </Link>
          <Link   
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
           duration={200}
           className="underline">
       Contact
          </Link>
    
     
          
        
         
           
             </div>
        <FaBars  style={{fontSize:"30px",color:"silver"}}onClick={()=>setShowLinks(!showLinks)} className='navMenu'/>
            </div>
           
            );
}

export default Nav;