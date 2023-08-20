import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg"
import "../styles/Home.css"

import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
               
},[])

  return (
    <div className='home'  style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer' >
      <h1 data-aos="fade-up">Sam's Pizzaria</h1>
      <p>PIZZAS TO FIT ANY TASTE</p>
      <Link to="/Menu">
      <button>ORDER NOW</button>
      </Link>
      </div>
      </div>
   
  )
}

export default Home

