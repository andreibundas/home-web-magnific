import React, {useState} from 'react'
import './AmazingMeal.css'
import ciorba from '../../../assests/ciorba.jpg';
import scoici from '../../../assests/scoici.jpg';
import platou from '../../../assests/platou.jpg';
import pui from '../../../assests/pui.jpg';
import costitaVarza from '../../../assests/costitaVarza.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsFillStarFill} from 'react-icons/bs'

const AmazingMeal = () => {

    const [items, setItems] = useState([
        {id:1, url: ciorba},
        {id:2, url: scoici},
        {id:3, url: platou},
        {id:4, url: pui},
        {id:5, url: costitaVarza},

    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };

  return (
    <div className='section'>
        <div className='container'>
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
                        Amazing meals <span className='ampersand'> &#38;</span>
                        <br />
                        <span> 
                            Great <br /> entertainment 
                        </span>
                    </h2>
                    <h4>Hope to see you soon</h4>

                    <p> text de umplutura

                        <br />
                        <br />

                        texttttt
                    </p>

                    <blockquote>
                        citatttttttttttttt
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
                        the best <span>ingredients</span></h3>
                    </div>

                    <p> Teest 1 </p>
                    </div>                   
                </div>

                <div className='amazing-card amazing-card-right'>
                    <img src={platou} alt='platou' className='amazing-card-image'/>

                    <div className='amazing-card-content'>
                    <div className='amazing-card-title'>
                        <BsFillStarFill color='#c3512f'/>
                        <h3 className='heading-tertiary'> Reeservations <span>ingredients</span></h3>
                    </div>

                    <p> Teest 2</p>
                    </div>                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default AmazingMeal