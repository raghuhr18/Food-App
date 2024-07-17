export function searchClicked(allRestaurants, searchText) {
    console.log(searchText)
    const filterData = allRestaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    )
    return filterData;
 } 
