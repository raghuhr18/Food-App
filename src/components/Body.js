import { restaurantList } from "../../constants";
import RestaurantCard from "./RestaurantCard"


const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => 
          <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
        )}
    </div>
  )
}
export default Body;