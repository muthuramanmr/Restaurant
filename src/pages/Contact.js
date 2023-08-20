import React,{useEffect} from 'react'
import PizzaLeft  from "../assets/pizzaLeft.jpg"
import "../styles/Contact.css"

import Aos from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]) 


  return (
    <div className="contact">
     <div className='leftSide' data-aos="fade-right" style={{backgroundImage: `url(${PizzaLeft})`}}></div>
     <div className='rightSide'>
      <h1>Contact Us</h1>
      <form id="contact-from" method="POST">
        <label htmlFor="name">Full Name </label>
        <input type ="text" name="name" placeholder="Enter Your Fullname"></input>

        <label htmlFor="email">Email </label>
        <input type ="email" name="email" placeholder="Enter Your Email"></input>

        <label htmlFor="message">Full Name </label>
        <textarea name="message" rows="6" placeholder='Enter Message' required ></textarea>

        <button type="submit">Send Message</button>
      </form>
     </div>
    </div>
  )
}

export default Contact
