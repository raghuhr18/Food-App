import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantMenuItem from './RestaurantMenuItem';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurent';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
    const { id } = useParams();
    // const [restaurantItem, setRestaurantItem] = useState(null)

    const restaurantItem = useRestaurant(id);
    const dispatch = useDispatch();

    const HandleAddItem = (item) => {
        dispatch(addItem(item));
    }
    if(!restaurantItem ) return <Shimmer />;
    return (
        
        <div className='flex flex-col items-center justify-center'>               
            {restaurantItem.map((item) => (
                <div className='border-blue-500 w-[60%] flex flex-row justify-between m-5 bg-lime-100 p-6 items-center rounded-2xl' key={item?.id}>
                    <div>
                        <h2 className="text-2xl font-bold py-2" >{item?.name}</h2>

                        <p>{"Category : " + item?.category}</p>
                        
                        {item?.description && <p>{"Description: " + item?.description}</p>}

                        {(item?.price) ? 
                            <p>{JSON.stringify(item?.price / 100) + " rupees"}</p> :
                            <p>{JSON.stringify(item?.defaultPrice / 100) + " rupees"}</p> 
                        }
                        
                        {item?.ratings?.aggregatedRating?.rating && <h3>{item?.ratings?.aggregatedRating?.rating + " ratings"}</h3>}
                    </div>
                    <div className='p-2 flex flex-col'>
                        {(item?.imageId) ? 
                        <img className="float-right rounded-lg w-60 min-w-60 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item?.imageId}  alt='Item Image'/> :
    
                        <img className="float-right rounded-lg w-60 min-w-60 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/xckb305lhkjz9qjixjg4"  alt='Item Image'/>
                        }
                        <button className='py-2 my-2 bg-green-200 rounded-lg' onClick={() => HandleAddItem(item)}>add to cart</button>   
                    </div>
                    
                </div>
                

            ))}

        </div>
    )
}

export default RestaurantMenu