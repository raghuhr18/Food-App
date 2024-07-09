


const RestaurantCard = (
    {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines
    }) => {
    return(
    <div className="card">
      <img src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{avgRating} ratings</p>
      <p>{cuisines.join(",")}</p>
    </div>
    )
  }
  export default RestaurantCard