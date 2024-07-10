import { useState } from "react";
import { restaurantList } from "../../constants";
import RestaurantCard from "./RestaurantCard"

function searchClicked(filteredRestaurants, searchItem) {
    const filterData = filteredRestaurants.filter((restaurant) =>
        restaurant?.info?.name?.includes(searchItem)
    )
    return filterData;
 } 


const Body = () => {

    const [searchItem, setSearchItem] = useState("")
    const [filteredRestaurants , setFilteredRestaurants] = useState(restaurantList)

    return (
    <>
        <div>
            <input type="Search" placeholder="Search Item" value={searchItem} onChange={(e)=>{setSearchItem(e.target.value)}}/>
            <button onClick={() => {
                const data = searchClicked(restaurantList, searchItem)
                setFilteredRestaurants(data)
                }}>Search</button>
        </div>
        <div className="restaurant-list">
            {filteredRestaurants.map((restaurant) => 
            <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
            )}
        </div>
    </>
  )
}
export default Body;