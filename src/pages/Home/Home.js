import React from 'react'
import BunVenit from './BunVenit/BunVenit'
import Hero from './Hero/Hero'
import HotelIntro from './HotelIntro/HotelIntro'
import Option from './Option/Option'
// import AmazingMeal from '../Restaurant/AmazingMeal/AmazingMeal'
import OurChef from './OurChef/OurChef'
import RestaurantIntro from './RestaurantIntro/RestaurantIntro'


const Home = () => {
  return (
    <div>
      <Hero />

      {/* <Option /> */}
      <BunVenit />
      < RestaurantIntro />
      < HotelIntro />
      {/* <OurChef /> */}
    </div>
  )
}

export default Home