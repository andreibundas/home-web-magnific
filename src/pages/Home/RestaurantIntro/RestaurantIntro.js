import React, {useState} from 'react'
import './RestaurantIntro.css'

import ciorba from '../../../assests/ciorba.jpg';
import scoici from '../../../assests/scoici.jpg';
import platou from '../../../assests/platou.jpg';
import restaurant from '../../../assests/restaurantHK.jpg';
import receptie from '../../../assests/receptie.jpg';

import hotel from '../../../assests/magnific_Hotel.png';
import sala1 from '../../../assests/sala1.jpg';
import sala2 from '../../../assests/RestaurantSalaModif.jpg';
import terasa from '../../../assests/TerasaModif.jpg';


import costitaVarza from '../../../assests/costitaVarza.jpg';

import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BsFillStarFill} from 'react-icons/bs'

const RestaurantIntro = () => {

    const [items, setItems] = useState([
        {id:1, url: sala1},
        {id:2, url: sala2},
        {id:3, url: terasa},
        {id:4, url: receptie},
        {id:5, url: hotel},

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
        <div className='container contianer-color2'>
 
                <div className='amazing-text'>

                    {/* <h1> <span color='black'> Bun venit la </span> Hotel & Restaurant Magnific ! </h1>
                    <br />

                    <p> Ultimul dumneavoastra popas la iesirea din tara
                    <br />

                        <br />

                        Sau prima oprire la intoarcere dupa un drum lung si obositor


                    </p>
                    <br />


                    <h3>Misiunea noastra este sa oferim un popas linistit celor care tranziteaza judetul Bihor inspre occident, oferindu-le bucatele si ospitalitatea specifice zonei noastre  </h3>

                    <h4> De asemenea prin pozitia privilegiata, in proximitatea zonei industriale Bors II, oferim </h4>
                    <br /> */}

 
                    <h1 className='=heading-secondary' >
                        Restaurant Magnific       

                    </h1>
                    <br />


                </div>

           
            <div className='amazing-container'>
                <div className='amazing-carousal-rest'>
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


            <div className='amazing-card-container-rest'>
                <div className='amazing-card amazing-card-left'>
                    <img src={sala2} alt='restaurant' className='amazing-card-image'/>

                    <div className='amazing-card-content'>
                    <div className='amazing-card-title'>
                        {/* <BsFillStarFill color='#c3512f'/> */}
                        <p className='heading-tertiary'> 
                        prezentare .. </p>
                    </div>

                    <p> Detalii </p>
                    </div>                   
                </div>

                <div className='amazing-card amazing-card-right'>
                    <img src={receptie} alt='sala restaurant' className='amazing-card-image'/>

                    <div className='amazing-card-content'>
                    <div className='amazing-card-title'>
                        {/* <BsFillStarFill color='#c3512f'/> */}
                        <p className='heading-tertiary'> 
                        Descriere </p>
                    </div>

                    <p> Detalii </p>
                    </div>      
                            
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantIntro