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

    console.log(filteredRestaurants)
    const isOnline = useOnline();

    useEffect(() => {
        getRestaurants();
    }, [])
    
    async function getRestaurants() {
        const data = await fetch(FETCH_MENU_URL);
        const json = await data.json();


        // initialize checkJsonData() function to check Swiggy Restaurant data
        const checkJsonData = (jsonData) => {
            // function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            // initialize checkData for Swiggy Restaurant data
            let checkData =
                json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

            // if checkData is not undefined then return it
            if (checkData !== undefined) {
                return checkData;
            }
            }
        }
        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = checkJsonData(json);

        setAllRestaurants(resData);
        setFilteredRestaurants(resData)
    }
 
    if(!isOnline) {return(<h1>Please check your internet connetion</h1>)}
    if(!filteredRestaurants) return null;
    return (allRestaurants?.length === 0) ? (<Shimmer /> ): (
    <>
        <div className="bg-slate-200 h-12 flex place-content-center my-1 shadow-lg">
            <input type="Search" className="p-2 rounded-xl m-1 w-80" required placeholder="Search Item" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
            <button className="bg-gray-300 p-2 rounded-xl m-1" onClick={() => {
                const data = searchClicked(allRestaurants, searchText)
                setFilteredRestaurants(data)
                }}>Search
            </button>
        </div>

        {(filteredRestaurants.length > 0) ? 
        <div className="flex flex-wrap m-auto items-center justify-center">
            
            {filteredRestaurants.map((restaurant) => 
            <Link className="shadow-lg m-5 min-h-[480px] hover:shadow-2xl" to={"/restaurentMenu/" + restaurant.info.id} key={restaurant.info.id}>
                <RestaurantCard {...restaurant.info} />
             </Link>
            )}
            
        </div>
        : <h1>No restaurants Found</h1>}
    </>
  )

}
export default Body;