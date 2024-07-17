import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantMenuItem from './RestaurantMenuItem';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurantItem, setRestaurantItem] = useState(null)


    useEffect(() => {
        getRestaurentMenu()
    },[])

    async function getRestaurentMenu() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&catalog_qa=undefined&submitAction=ENTER&restaurantId="+ id);
        const json = await data.json();


        const data1 = json?.data?.cards.find(x=> x.groupedCard)?.
        groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x => x.card?.card)?.
        filter(x=> x['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")?.map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];

        console.log(data1);

        const uniqueMenuItems = [];
        data1.forEach((item) => {
          if (!uniqueMenuItems.find(x => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        })
        setRestaurantItem(uniqueMenuItems);
        // setRestaurantItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info)
    }
    if(!restaurantItem ) return <Shimmer />;
    return (
        
        <div>

                {/* { restaurantItem.map((restaurant) => 
                   <RestaurantMenuItem {...restaurant} key={restaurant?.id}/>
                )} */}
                
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