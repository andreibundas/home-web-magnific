import React from 'react'
import './MenuOfTheDay.css'
import ListItem from '../../../components/ListItem/ListItem'
import ciorba from '../../../assests/ciorba.jpg'
import pui from '../../../assests/pui.jpg'

const menuData = [
    {
        title: 'Ciorba de Burta',
        description: 'descriere ciorba',
        price: '7.50',
        img: ciorba,
    },
    {
        title: 'Pui cu cartofi piure',
        description: 'descriere meniu',
        price: '9.50',
        img: pui,
    },
];

const MenuOfTheDay = () => {
  return (
    <div className='section'>
        <div className='container menu-of-the-day'>
            <h1 className='heading-secondary'>
                <span>meniul </span>zilei
            </h1>
            {menuData.map((data, i) => (
                <ListItem 
                title={data.title} 
                description={data.description}
                price={data.price} 
                itemImage={data.img} 
                />
            ))}
        </div>
    </div>
  )
}

export default MenuOfTheDay