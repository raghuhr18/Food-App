import { useEffect, useState } from "react";
import { FETCH_MENU_URL, restaurantList } from "../../constants";
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { searchClicked } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body = () => {

    const [searchText, setsearchText] = useState("")
    const [allRestaurants , setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const isOnline = useOnline();

    useEffect(() => {
        getRestaurants();
    }, [])
    
    async function getRestaurants() {
        const data = await fetch(FETCH_MENU_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
 
    if(!isOnline) {return(<h1>Please check your internet connetion</h1>)}
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