import React, {useState} from 'react'
import './SuperFood.css'
import ciorba from '../../../assests/ciorba.jpg';
import scoici from '../../../assests/scoici.jpg';
import platou from '../../../assests/platou.jpg';
import sala1 from '../../../assests/sala1.png';
import sala2 from '../../../assests/sala2.jpg';
import aboutMagnific from '../../../assests/aboutMagnific.jpg';


import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BsFillStarFill} from 'react-icons/bs'

const SuperFood = () => {

    const [items, setItems] = useState([
        {id:1, url: sala1},
        {id:2, url: sala2},
        {id:3, url: aboutMagnific},
        {id:4, url: platou},
        {id:5, url: scoici},

    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };

  return (
    <section className='section'>
        <div className='containerNew'>
            <div className='amazing-container'>
                <div className='amazing-carousal'>
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
                        Restaurantul Hotelului Magnific <br />
                        <br />
                        Va asteptam cu un meniu select <br />
                        <span className='ampersand'> &#38;</span>
                        <br />
                        <span> 
                           si o sala ideala pentru organizarea evenimentelor importante din viata dumneavoastra  <br /> 
                        </span>
                    </h2>
                    <h4>..</h4>

                    <p> ....

                        <br />
                        <br />

                         
                    </p>

                    <blockquote>
                        ..
                    </blockquote>
                </div>
            </div>

            <div className='amazing-card-container'>
                <div className='amazing-card amazing-card-left'>
                    <img src={ciorba} alt='ciorba' className='amazing-card-image'/>

                    <div className='amazing-card-content'>
                    <div className='amazing-card-title'>
                        <BsFillStarFill color='#c3512f'/>
                        <h3 className='heading-tertiary'> 
                        Folosim <span>ingrediente</span> mereu proaspete</h3>
                    </div>

                    <p> ... </p>
                    </div>                   
                </div>

                <div className='amazing-card amazing-card-right'>
                    <img src={platou} alt='platou' className='amazing-card-image'/>

                    <div className='amazing-card-content'>
                    <div className='amazing-card-title'>
                        <BsFillStarFill color='#c3512f'/>
                        <h3 className='heading-tertiary'> Pregatim si livram platouri  <span>..</span></h3>
                    </div>

                    <p> .. </p>
                    </div>                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default SuperFood