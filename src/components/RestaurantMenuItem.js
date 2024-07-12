import React from 'react'
import { IMG_CDN_URL } from '../../constants'

const RestaurantMenuItem = (
    {
        name,
        price,
        category,
        imageId,
        description,

    }
) => {
  return (
    <div className='menu-card'>
        <div>
            <h1>{name}</h1>
            <p>{price/100 + " rupees"} </p>
            <p>{"category - " + category} </p>
            <p>{description}</p>
        </div>
        <div className='menu-card-img'>
            <img src={IMG_CDN_URL + imageId } />
        </div>
        <p></p>
    </div>
  )
}

export default RestaurantMenuItem