import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "../styles/Footer.css"
import { blue } from '@mui/material/colors'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
     <a href="https://www.instagram.com/"><InstagramIcon className='icong'/></a>   
     <a href="https://twitter.com/i/flow/signup"><TwitterIcon className='icont'/></a>
     <a href="https://www.facebook.com/"><FacebookIcon className='iconf'/></a>
     <a href="https://www.linkedin.com/feed/"><LinkedInIcon className='iconi'/></a> 
      </div>
      <p>&copy; 2023 samspizzaria.com</p>
    </div>
  )
}

export default Footer


