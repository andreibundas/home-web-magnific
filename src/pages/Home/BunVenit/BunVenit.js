import React, {useState} from 'react'
import './BunVenit.css'

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

const BunVenit = () => {


  return (
    <div className='section '>
        <div className='container contianer-color'>
 
                <div className='amazing-text'>

                   
                    <h1> <span color='black'> Bun venit la </span> Hotel & Restaurant Magnific ! </h1>
                    <br />


                    <h3> Hotelul nostru este alegerea ideala pentru un popas atunci cand calatoriti. 
                    <br />
                        Te asteptam la cativa pasi de poarta de intrare in tara, Vama Bors I. 
                    <br />
                    <br />

                        Alege odihna si relaxarea inainte de a trece granita sau atunci cand revii acasa !
                    <br />

                    In Restaurantul nostru veti gasi bucatele si ospitalitatea specifice zonei noastre.
                      </h3>
                    <br />

                    <h4> Prin pozitia privilegiata, in vecinatatea parcului industrial Bors I, oferim companiilor oportunitatea de a-si caza oaspetii si delegatii in proximitate. 
                    <br />
                        Organizam cine, petreceri si evenimente corporate.
                        
                         </h4>
                    
                
                </div>



        </div>
    </div>
  )
}

export default BunVenit