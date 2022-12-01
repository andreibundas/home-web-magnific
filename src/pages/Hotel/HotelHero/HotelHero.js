import React from 'react'
import './HotelHero.css'
import hotelHeroImg from '../../../assests/magnific_Hotel2.png'

const HotelHero = () => {
  return (
    <div>
      <div className='hotel-hero'>
        
        <img className='hotel-hero-img' src={hotelHeroImg}>
        </img>

      </div>
    </div>
  )
}

export default HotelHero