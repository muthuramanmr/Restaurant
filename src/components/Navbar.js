import React,{useState} from 'react'
import Logo from "../assets/pizzaLogo.png"
import {Link} from "react-router-dom"  //important
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';     //npm install @mui/material @emotion/react @emotion/styled

function Navbar() {

const [openLinks, setOpenLinks] = useState();
const toggleNavbar = () =>{
                setOpenLinks(!openLinks);
}

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks? "open":"close"}>
        <img src={Logo}></img>
        <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        </div>
        </div>
      <div className="rightSide" >
        <Link to="/" id="home-color">Home</Link>
        <Link to="/Menu" id="menu-color">Menu</Link>
        <Link to="/About" id="about-color">About</Link>
        <Link to="/Contact" id="contact-color">Contact</Link>
        <button onClick={toggleNavbar}>   
        <ReorderIcon/>  
        </button>
      </div>
    </div>
  )
}

export default Navbar




