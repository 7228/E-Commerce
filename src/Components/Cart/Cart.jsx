import React, { useContext } from 'react'
import "./Cart.css"
import { AppContext } from '../../Context/AppContext'
import remove_icon from "../Images/cart_cross_icon.png";

export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(AppContext);
  console.log("cart:", cartItems);
  
  return (
    <div className='cart'>
      <div className="cart-item">
        <p>Product</p>
        <p>Name</p>
        <p>Size</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartItems ? cartItems.map((item) => {
        return (
          <div>
            <div className='cart-item product'>
              <img src={item.product.image} alt="" className='product-img'/>
              <p>{item.product.title}</p>
              <p>{item.size.toUpperCase()}</p>
              <p>{item.product.price}$</p>
              <img src={remove_icon} alt="" className='remove-icon' onClick={() => removeFromCart(item.product.id)}/>
            </div>
            <hr />
          </div>
        ) 
      }) : <></>}
    </div>
  )
}
