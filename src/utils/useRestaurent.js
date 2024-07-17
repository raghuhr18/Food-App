import { useEffect, useState } from "react"

const useRestaurant = (id) => {
     const [restaurantItem, setRestaurantItem] = useState(null)

    useEffect(() => {
        getRestaurentMenu()
    },[])

    async function getRestaurentMenu() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&catalog_qa=undefined&submitAction=ENTER&restaurantId=" + id);
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
return restaurantItem
}
export default useRestaurant