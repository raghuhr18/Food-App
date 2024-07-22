import { useDispatch, useSelector } from "react-redux"
import { IMG_CDN_URL } from "../../constants"
import { removeItem } from "../utils/cartSlice";
import store from "../utils/store";

const FoodItemCard = (
    {
      imageId,
      id,
      name,
      defaultPrice,
      price
    }) => {

    return(
        <div className="my-5">
                <div className="flex flex-col items-center">
                    <div className="flex bg-yellow-100 items-center justify-center">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId} className="w-[100px] object-cover rounded-sm p-2 m-2"/>
                
                        <h3 className="text-black font-bold py-2 text-xl min-w-[28rem] max-w-[30rem] text-wrap p-2 m-2">{name}</h3>
                        <p className="p-2 m-2">{ defaultPrice ? defaultPrice/100 : price/100} rupees</p>
                        {/* <button className='py-2 my-2 bg-green-200 rounded-lg' onClick={() => RemoveItem(cartItem)}>Remove</button>  */}
                    </div>
                </div>
        </div>
    )
  }
  export default FoodItemCard