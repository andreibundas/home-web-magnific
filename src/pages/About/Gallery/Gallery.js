import React from 'react'
import './Gallery.css'

import magnificHero from '../../../assests/magnificHero.jpg'
import aboutMagnific from '../../../assests/aboutMagnific.jpg'
import sala1 from '../../../assests/sala1.jpg'
import logoMagnific from '../../../assests/LogoMagnific.jpg'
import sala2 from '../../../assests/sala2.jpg'
import scoici from '../../../assests/scoici.jpg'
import platou from '../../../assests/platou.jpg'
import camera1 from '../../../assests/camera_1.1.png'
import chef2 from '../../../assests/chef2.jpg'
import meniu from '../../../assests/meniu.jpg'


const Gallery = () => {
  return (
    <div className='gallery'>
        <figure className='gallery__item gallery__item-1'>
            <img  src={magnificHero} alt=' Gallery image aout Magnific Hotel' className='gallery__img'/>
        </figure>
        
        <figure className='gallery__item gallery__item-2'>
            <img  src={aboutMagnific} alt=' Gallery image Magnific Hotel' className='gallery__img'/>
        </figure>

        <figure className='gallery__item gallery__item-3'>
            <img  src={sala1} alt=' Gallery image Magnific Hotel' className='gallery__img'/>
        </figure>

        <figure className='gallery__item gallery__item-4'>
            <img  src={logoMagnific} alt=' Gallery image Magnific Hotel' className='gallery__img'/>
        </figure>

        <figure className='gallery__item gallery__item-5'>
            <img  src={sala2} alt=' Gallery image Magnific Hotel' className='gallery__img'/>
        </figure>

        <figure className='gallery__item gallery__item-6'>
            <img  src={scoici} alt=' Gallery image Magnific Hotel' className='gallery__img'/>
        </figure>

        <figure className='gallery__item gallery__item-7'>
            <img  src={platou} alt=' Gallery image Magnific Hotel' className='gallery__img'/>
        </figure>

        <figure className='gallery__item gallery__item-8'>
            <img  src={camera1} alt=' Gallery image Magnific Hotel' className='gallery__img'/>
        </figure>

        <figure className='gallery__item gallery__item-9'>
            <img  src={chef2} alt=' Gallery image Magnific Hotel' className='gallery__img'/>
        </figure>

        <figure className='gallery__item gallery__item-10'>
            <img  src={meniu} alt=' Gallery image Magnific Hotel' className='gallery__img'/>
        </figure>

    </div>
  )
}

export default Gallery