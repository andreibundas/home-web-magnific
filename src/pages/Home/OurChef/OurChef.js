import React from 'react'
import './OurChef.css'


const OurChef = () => {
  return (

    <section>
        <div className='container contianer-color'>


                <div className='amazing-chefs'>
                <h2 className='heading-tertiary'> 
                        Vi-i prezentam pe  <span>Chefii nostri </span> </h2>

                </div>


        <div className='chef-img'>
            <div className='container'>
                {/* <div className='chef-content'>
                    <h1 className='heading-primary'>
                        Our <span>chef</span>
                    </h1>

                    <p className='text-white'>
                    Calificari si Diplome
                    </p>
                </div> */}
            </div>
        </div>
        {/* { chef info} */}

        <div className='container'>
            <div className='grid-container py-md'>
                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Marcus <span> Cole</span>
                    </h3>
                    <h4>grill chef</h4>

                    <p> descriere 1 chef  </p>
                </div>

                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Lisa <span> Cole</span>
                    </h3>
                    <h4>executive chef</h4>

                    <p> descriere 2 chef</p>
                </div>

                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Lara <span> Lang</span>
                    </h3>
                    <h4>chef de cuisine </h4>

                    <p> descriere 3 cheef  </p>
                </div>



                {/* <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Alex <span> Deer</span>
                    </h3>
                    <h4>sous chef</h4>

                    <p> descriere 4 chef  </p>
                </div> */}

            </div>


        </div>
     </div>
    </section>
  )
}

export default OurChef