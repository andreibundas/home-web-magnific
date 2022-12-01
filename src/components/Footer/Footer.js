// import React from 'react'
// import './Footer.css'
// import {Link} from 'react-router-dom'


import React, {useState} from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { MdOutlineMail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { FiFacebook } from 'react-icons/fi'
import './Footer.css'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Footer = () => {
  return (

 
  <div className='section '>
         <div className='footer contianer-footer'>



          <div className='amazing-card-container-footer'>
              <div className='amazing-card amazing-card-left'>
                  {/* <img src={restaurant} alt='restaurant' className='amazing-card-image'/> */}

                  <div className='amazing-card-content'>
                  <div className='amazing-card-title'>
                      <p className='heading-tertiary'> 
                      Adresa
                      <br />
                      < MdOutlineLocationOn />Calea Borșului 157  Borș 410608
                      <br />
                    < MdOutlineMail /> email@email.com
                      <br />
                      < FiPhone />  +40 771 620 703         
                      <br />
                      <br />

                      </p>
                  </div>

                  {/* <p> Detalii </p> */}
                  </div>                   
              </div>

              <div className='amazing-card amazing-card-right'>

                  <div className='amazing-card-content'>
                  <div className='amazing-card-title'>
                      <p className='heading-tertiary'> 
                      Social Media</p>
                  </div>

                  <p> 
                    Urmariti-ne pe < FiFacebook /> 
                    <br />
                    <br />
                    <br />
                    <br />

                    </p>
                  </div>      
                          
              </div>
          </div>
      </div>
  </div>

  )
}

export default Footer