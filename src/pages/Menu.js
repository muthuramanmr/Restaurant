import React,{useEffect} from 'react'
import {MenuList} from "../helpers/MenuList"
import MenuItem from "../components/MenuItem"
import "../styles/Menu.css"

import Aos from 'aos'
import 'aos/dist/aos.css'

function Menu() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])                                  
  return (
    <div className='menu'>
      <h1 className='menuTitle' data-aos="fade-up">Our Menu</h1>
      <div className='menuList'>{MenuList.map((menuItem,key)=><div data-aos="fade-up"><MenuItem key={key}
      image={menuItem.image} name={menuItem.name} price={menuItem.price} /></div>)}</div>
    </div>
  )
}

export default Menu
