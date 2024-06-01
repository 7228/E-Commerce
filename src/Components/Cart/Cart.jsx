import React, { useContext } from 'react'
import "./Cart.css"
import { AppContext } from '../../Context/AppContext'
import remove_icon from "../Images/cart_cross_icon.png";

export const Cart = () => {
  const { cartItems, removeFromCart, getTotalAmount } = useContext(AppContext);
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
      <div className="order">
        <p className='summary'>Order Summary</p>
          <div className="order-details">
            <p>Subtotal</p>
            <p>{getTotalAmount()}$</p>
          </div>
          <hr />
          <div className='order-details'>
            <p>Estimated Shipping</p>
            <p>0$</p>
          </div>
          <hr />
          <div className="order-details total">
            <p>Total</p>
            <p>{getTotalAmount()}$</p>
          </div>
        </div>
        <button className="checkout">Proceed To Checkout</button>
    </div>
  )
}
