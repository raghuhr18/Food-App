import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantMenuItem from './RestaurantMenuItem';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurent';

const RestaurantMenu = () => {
    const { id } = useParams();
    // const [restaurantItem, setRestaurantItem] = useState(null)

    const restaurantItem = useRestaurant(id);

    if(!restaurantItem ) return <Shimmer />;
    return (
        
        <div>               
            {restaurantItem.map((item) => (
                <div className='menuCard' key={item?.id}>
                    <div>
                        <h2 className="restaurant-title" >{item?.name}</h2>

                        <p>{"Category : " + item?.category}</p>
                        
                        {item?.description && <p>{"Description: " + item?.description}</p>}

                        {(item?.price) ? 
                            <p>{JSON.stringify(item?.price / 100) + " rupees"}</p> :
                            <p>{JSON.stringify(item?.defaultPrice / 100) + " rupees"}</p> 
                        }
                        
                        {item?.ratings?.aggregatedRating?.rating && <h3>{item?.ratings?.aggregatedRating?.rating + " ratings"}</h3>}
                    </div>
                    <div>
                        {(item?.imageId) ? 
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item?.imageId}  alt='Item Image'/> :
    
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/xckb305lhkjz9qjixjg4"  alt='Item Image'/>
                        }   
                    </div>
                    
                </div>
                

            ))}

        </div>
    )
}

export default RestaurantMenu