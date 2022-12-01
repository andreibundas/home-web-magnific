import React from 'react'
import './Breakfast.css'
import ListItem from '../../../components/ListItem/ListItem'

const menuDataLeft = [
    {
        title: 'Omleta',
        description: 'descriere omleta',
        price: '17',
    },
    {
        title: 'Oua ochiuri',
        description: 'descriere oua ochiuri',
        price: '16',
    },
    {
        title: 'platou branzeturi',
        description: 'descriere platou branzeturi',
        price: '16',
    },
];

const menuDataRight = [
    {
        title: 'Salata cruditati',
        description: 'descriere salata cruditati',
        price: '17',
    },
    {
        title: 'Salata ton',
        description: 'descriere salata ton',
        price: '16',
    },
    {
        title: 'platou taranesc',
        description: 'descriere platou taranesc',
        price: '20',
    },
];

const Breakfast = () => {
  return (
    <div className='container breakfast'>
        <h1 className='heading-secondary'>
        mic <span>dejun</span>
        </h1>

        <div className='grid-container'>
            <div>
                {menuDataLeft.map((data, i) => (
                    <ListItem
                    title={data.title} 
                    description={data.description}
                    price={data.price}
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

export default Breakfast