import { useEffect, useState } from "react";
import { restaurantList } from "../../constants";
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

function searchClicked(allRestaurants, searchText) {
    console.log(searchText)
    const filterData = allRestaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    )
    return filterData;
 } 


const Body = () => {

    const [searchText, setsearchText] = useState("")
    const [allRestaurants , setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])


    useEffect(() => {
        getRestaurants();
    }, [])
    
    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
 

    if(!filteredRestaurants) return null;
    return (allRestaurants?.length === 0) ? (<Shimmer /> ): (
    <>
        <div>
            <input type="Search" placeholder="Search Item" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
            <button onClick={() => {
                const data = searchClicked(allRestaurants, searchText)
                setFilteredRestaurants(data)
                }}>Search
            </button>
        </div>
        {(filteredRestaurants.length > 0) ? 
        <div className="restaurant-list">
            
            {filteredRestaurants.map((restaurant) => 
            <Link to={"/restaurentMenu/" + restaurant.info.id} key={restaurant.info.id}>
                <RestaurantCard {...restaurant.info} />
             </Link>
            )}
            
        </div>
        : <h1>No restaurants Found</h1>}
    </>
  )

}
export default Body;