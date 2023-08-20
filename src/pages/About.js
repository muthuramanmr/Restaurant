import React,{useEffect} from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg"
import "../styles/About.css"

import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(()=>{
    Aos.init({duration:2000})
               
},[])
  return (
    <div className='about'>
       <div className='aboutTop' data-aos="fade-down" style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
       <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>Pizzas come in different sizes, shapes, flavours and appearances.
           While a few were born out of experimentation, a handful has a riveting history. 
           One variant is so enormous that one has to fold the slices to eat it. Similarly, a tiny type can confuse you 
           about whether to consider it a pizza or a pie. Likewise, if you fail to make round pizzas, you can have rectangular ones.
           Your love for pizza is going to surge as you read this story. If you have been feasting only thin crust and woodfired pizza, 
           then it's time to add some new variants. It might be news for many that the world of pizza buzzes with a mind-boggling range of this dish.
            Are you aware that in America alone, there are half a dozen of pizzas? The same applies to Canada. Italy is out of one's ability even to 
            guess the varieties of these culinary fares. According to the last updated record, there are 687 types of pizza available in the world. 
            It will take you two years to try them all. Chicago pizzas are ideal for folks who enjoy deep-pan pizzas. Around 1900, it first emerged in
             Chicago. These variations vary significantly from classic Italian styles. They are far too small and hence frequently appear as a pie. The 
             cheese is placed on the dough first, followed by the pizza sauce, and finally, the toppings, unique to Chicago pizzas. Ground beef, pepperoni, 
             sausage, mushrooms, green peppers, and onion are the most popular toppings. </p>
       </div>
    </div>
  )
}

export default About
