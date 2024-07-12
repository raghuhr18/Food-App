import { IMG_CDN_URL } from "../../constants"

const RestaurantCard = (
    {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines
    }) => {
    return(
    <div className="card">
      <img src= {IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{avgRating} ratings</p>
      <p>{cuisines.join(",")}</p>
    </div>
    )
  }
  export default RestaurantCard