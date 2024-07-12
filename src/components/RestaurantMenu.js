import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantMenuItem from './RestaurantMenuItem';

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurantItem, setRestaurantItem] = useState([])

    useEffect(() => {
        getRestaurentMenu()
    },[])

    async function getRestaurentMenu() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&catalog_qa=undefined&submitAction=ENTER&restaurantId="+ id);
        const json = await data.json();
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info);
        setRestaurantItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info)
    }
    if(!restaurantItem ) return null;
    return (
        
        <div>
            <h1>
                {/* { restaurantItem.map((restaurant) => 
                   <RestaurantMenuItem {...restaurant} key={restaurant?.id}/>
                )} */}
                {/* {restaurantItem?.itemCards.map((itemcard) =>itemcard?.card?.info)} */}

                <RestaurantMenuItem {...restaurantItem}
                // name={restaurantItem.name} 
                // imageId={restaurantItem.imageId} 
                // price={restaurantItem?.price} 
                // description={restaurantItem?.description} 
                // category={restaurantItem?.category}
                />
            </h1>
        </div>
    )
}

export default RestaurantMenu