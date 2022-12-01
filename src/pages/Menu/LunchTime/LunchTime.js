import React from 'react'
import "./LunchTime.css"
import ListItem from '../../../components/ListItem/ListItem'
import ciorba from '../../../assests/ciorba.jpg'


const menuDataLeft = [
    {
        title: 'Cotlet porc',
        description: 'descriere cotlet   Descriere     Descriere    Descriere     Descriere     Descriere   Descriere    Descriere   Descriere  ',
        price: '17 Lei',
        img: ciorba,
    },
    {
        title: 'Friptura pui',
        description: 'descriere friptura pui',
        price: '16 Lei',
        img: ciorba,
    },
    {
        title: 'peste',
        description: 'descriere pest',
        price: '16 lei',
        img: ciorba,
    },
];

const menuDataRight = [
    {
        title: 'Salata Cezar',
        description: 'descriere salata cezar',
        price: '17',
    },
    {
        title: 'Antricot vita',
        description: 'descriere antricot vita',
        price: '16',
    },
    {
        title: 'Lasagna',
        description: 'descriere Lasagna',
        price: '20',
    },
];


const LunchTime = () => {
  return (
    <div className='container lunchtime'>
        <h1 className='heading-secondary'>
         <span>pranz</span>
        </h1>

        <div className='grid-container'>
            <div>
                {menuDataLeft.map((data, i) => (
                    <ListItem
                    title={data.title} 
                    description={data.description}
                    price={data.price}
                    itemImage={data.img} 
                    />
                ))}
            </div>

            <div>
                {menuDataRight.map((data, i) => (
                    <ListItem
                    title={data.title} 
                    description={data.description}
                    price={data.price}
                    />
                ))}
            </div>

        </div>
    </div>
  )
}

export default LunchTime