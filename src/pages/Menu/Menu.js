import React from 'react'
import HeroImage from '../../components/HeroImage/HeroImage';
import bgImage from '../../assests/pasta.jpg';
import MenuOfTheDay from './MenuOfTheDay/MenuOfTheDay';
import Breakfast from './Breakfast/Breakfast';
import LunchTime from './LunchTime/LunchTime';


const Menu = () => {
  return (
    <div>
    <HeroImage 
    bgImage={bgImage}
    heading={[ <span>Meniul</span>, ' nostru']}
    text=' Tot ce e mai bun ! '
    />    
    <MenuOfTheDay />  
    <Breakfast />  
    <LunchTime />
    </div>

    
  )
}
export default Menu