import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import './Option.css'

import restaurant from '../../../assests/RestaurantSalaModif.jpg';
import hotel from '../../../assests/magnific_HotelModif.jpg';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BsFillStarFill} from 'react-icons/bs'

const Option = () => {


  return (
    <div className='section '>
        <div className='container contianer-color'>
 

            <div className='amazing-card-container'>
                <div className='amazing-card amazing-card-left'>

                <Link to="/hotel">
                <img src={hotel} alt={hotel} className='amazing-card-image'/>     
               </Link>

 
                </div>

                <div className='amazing-card amazing-card-right'>

                <a href="#top">
                <Link to="/menu">
                <img src={restaurant} alt='restaurant' className='amazing-card-image'/>
               </Link>
               </a>


                </div>
            </div>
        </div>
    </div>
  )
}


export default Option