import { IMG_CDN_URL } from "../../constants"

const RestaurantCard = (
    {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines
    }) => {
    return(
    <div className="w-72 m-5">
      <img src= {IMG_CDN_URL + cloudinaryImageId} className="w-full min-h-72 max-h-72 object-cover rounded-sm"/>
      <div className="grid items-end">
        <h3 className="text-black font-bold py-2 text-xl">{name}</h3>
        <p><span className="text-green-600 font-bold">{avgRating} </span>ratings</p>
        <p>{cuisines.join(", ")}</p>
      </div>
    </div>
    )
  }
  export default RestaurantCard