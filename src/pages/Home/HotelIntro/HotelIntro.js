import React, {useState} from 'react'
import { FaGithub } from 'react-icons/fa';
import { MdOutlineKingBed, MdSingleBed } from 'react-icons/md'
import { IoMdPerson } from 'react-icons/io';
import { TbDimensions } from 'react-icons/tb'
import { HiWifi } from 'react-icons/hi'


import './HotelIntro.css'

import camera_albastra from '../../../assests/camera_albastra.jpg';
import scoici from '../../../assests/scoici.jpg';
import platou from '../../../assests/platou.jpg';
import restaurant from '../../../assests/restaurantHK.jpg';
import receptie from '../../../assests/receptie.jpg';

import hotel from '../../../assests/magnific_Hotel.png';
import sala2 from '../../../assests/RestaurantSalaModif.jpg';
import terasa from '../../../assests/TerasaModif.jpg';
import camera_roz from '../../../assests/camera_roz.jpg';
import baieP1 from '../../../assests/baieP1.jpg';



import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BsFillStarFill} from 'react-icons/bs'

const HotelIntro = () => {

    const [items, setItems] = useState([
        {id:1, url: camera_albastra},
        {id:2, url: camera_roz},
        {id:3, url: baieP1},
        {id:4, url: receptie},
        {id:5, url: terasa},

    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };

  return (
    <div className='section '>
        <div className='container contianer-color'>
 
                <div className='amazing-text'>
                    <h1 className='=heading-secondary' >
                        Hotel Magnific                             
                    </h1>
                    <br />

                    <h4>Descriere  <FaGithub /></h4>

                    <p> Descriere

                        <br />

                        text Desriere
                    </p>

                    {/* <blockquote>
                        citatttttttttttttt
                    </blockquote> */}
                </div>

           
            <div className='amazing-container'>
                <div className='amazing-carousal-hotel'>
                    <div>
                        <Slider {...settings}>
                    {items.map(item => (
                        <div key={item.id}>
                            <img src={item.url} alt='carousal pic' />

                        </div>
                    ))}

                        </Slider>
                    </div>
                </div>

                <div className='amazing-content'>
                    <h2 className='=heading-secondary'>
                        Descriere   <span className='ampersand'> &#38;</span>
                        <br />
                        <span> 
                            Great <br /> entertainment 
                        </span>
                    </h2>
                    <h4> Descriere </h4>

                    <p> Descriere 

                        <br />
                        <br />

                        {/* texttttt */}
                    </p>

                    {/* <blockquote>
                        citatttttttttttttt
                    </blockquote> */}
                </div>
            </div>


            <div className='amazing-card-container-hotel-rg'>
                <div className='amazing-card amazing-card-left'>
                    <img src={sala2} alt='restaurant' className='amazing-card-image'/>

                    <div className='amazing-card-content'>
                    <div className='amazing-card-title'>
                        {/* <BsFillStarFill color='#c3512f'/> */}
                        {/* <p className='heading-tertiary'> 
                        prezentare .. </p> */}
                    </div>

                    {/* <p> Detalii </p> */}
                    </div>                   
                </div>

                <div className='amazing-card amazing-card-right'>
                    {/* <img src={receptie} alt='sala restaurant' className='amazing-card-image'/> */}

                    <div className='amazing-card-content'>
                    <div className='amazing-card-title'>
                        <p className='heading-tertiary'> 
                        Camra Dubla </p>
                    </div>

                    {/* <p> < IoMdPerson />   2 </p> */}
                    <p> < MdOutlineKingBed />   1,60 m x 1 </p>
                    <p> < TbDimensions />   22 mp </p>
                    <p>  < HiWifi /> </p>




                    {/* <p>
                    <FontAwesomeIcon icon={solid('user-secret')} />
                    <FontAwesomeIcon icon={regular('coffee')} />
                    <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
                    <FontAwesomeIcon icon={brands('twitter')} />
                    </p> */}
        
                    </div>      
                            
                </div>
            </div>


            <div className='amazing-card-container-hotel-lft'>
                <div className='amazing-card amazing-card-left'>
                    {/* <img src={sala2} alt='restaurant' className='amazing-card-image'/> */}

                    <div className='amazing-card-content'>
                    <div className='amazing-card-title'>
                        {/* <BsFillStarFill color='#c3512f'/> */}
                        <p className='heading-tertiary'> 
                        Camera Dubla </p>
                    </div>

                    <p> < MdSingleBed />   1,20 m x 2 </p>
                    <p> < TbDimensions />   22 mp </p>
                    <p>  < HiWifi /> </p>
                    <p> Detalii </p>
                


                    </div>                   
                </div>


                <div className='amazing-card amazing-card-right'>
                    <img src={receptie} alt='sala restaurant' className='amazing-card-image'/>

                    <div className='amazing-card-content'>
                    <div className='amazing-card-title'>
                        {/* <BsFillStarFill color='#c3512f'/> */}
                        {/* <p className='heading-tertiary'> 
                        Descriere </p> */}
                    </div>

                    {/* <p> Detalii </p> */}
                    </div>      
                            
                </div>
            </div>



        </div>
    </div>
  )
}

export default HotelIntro