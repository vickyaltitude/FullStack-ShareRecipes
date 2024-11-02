import React from 'react';
import { GiCampCookingPot } from "react-icons/gi";
import './styles/footer.css'

const Footer = () => {

    const dateTime = new Date()
  return (
    <div className='footer'>
        <GiCampCookingPot />
      <h3>Share-recipe&copy;{dateTime.getFullYear()}</h3>
        
        </div>
  )
}

export default Footer