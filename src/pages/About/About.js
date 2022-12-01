import React from 'react'
import HeroImage from '../../components/HeroImage/HeroImage';
import bgImage from '../../assests/aboutMagnific.jpg';
import AboutInfo from './AboutInfo/AboutInfo';
import Gallery from './Gallery/Gallery';

const About = () => {
  return (
    <div>
          <HeroImage 
    bgImage={bgImage}
    heading={[ 'Despre noi' ,<span className='ampersand'> & galerie foto </span>, ]}
    text=' O scurta prezentare  '
    />  
    <AboutInfo />
    <Gallery />
    </div>
  )
}

export default About