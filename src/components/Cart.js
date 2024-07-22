import React from 'react'
import CartMenu from './FoodItemCard'
import { useDispatch, useSelector } from 'react-redux'
import FoodItemCard from './FoodItemCard'
import { clearCart } from '../utils/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()

  const HandleClear = () => {
    dispatch(clearCart())
  }


  return (
    <div>
      <div className='p-2 m-2 flex items-center flex-col'>
        <h1 className='font-bold text-2xl my-8'>Cart Items</h1>
        {cartItems.length > 0 ?
        (<div>
        <buttton className="bg-green-300 rounded-lg p-2 mx-5 cursor-pointer" onClick={() => HandleClear()} >Clear cart</buttton>
        <Link to="/">
          <buttton className="bg-green-300 rounded-lg p-2 mx-5 cursor-pointer">Continue Shopping</buttton>
        </Link>

            <div className='flex flex-wrap flex-col items-center justify-center'>
          {cartItems.map(item => 
              <FoodItemCard {...item} key={item?.id}/>
          )}: 
          </div>
            </div>)
            : 
          (<div> <h1 className='font-bold text-3xl my-12'>OOPS...! YOUR CART IS EMPTY</h1>
            <Link to="/">
            <buttton className="bg-green-300 rounded-lg p-2 mx-5 cursor-pointer" >Continue Shopping</buttton>
          </Link>
          </div>)
        }
      </div>



    </div>
  )
}

export default Cart