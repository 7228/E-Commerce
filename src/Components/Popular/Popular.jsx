import React, { useContext, useEffect, useState } from 'react'
import "./Popular.css"
import { AppContext } from '../../Context/AppContext'
import { Item } from '../Item/Item'
import discount_img from "../Images/discount.jpg"

export const Popular = () => {
    const { products } = useContext(AppContext);
    let womenProducts;
    let menProducts;

    if(products) {
      womenProducts = products.filter((item) => {
        return item.category === "women's clothing"
      }).map((item,i) => {
          return <Item key={i} id={item.id} image={item.image} title={item.title} price={item.price}></Item>
      })
      menProducts = products.filter((item) => {
        return item.category === "men's clothing"
      }).map((item,i) => {
        return <Item key={i} id={item.id} image={item.image} title={item.title} price={item.price}></Item>
      })
    }


  return (
    <div className='popular'>
        <h1>POPULAR WOMEN'S WEAR</h1>
        <hr />
        <div className="men-women-popular">
            {womenProducts && womenProducts.slice(1,4)}
        </div>
        <div className="sale">
          <img src={discount_img} alt="" />
          <small><a href="http://www.freepik.com" className='license'>Designed by Freepik</a></small>
        </div>
        <h1>POPULAR MEN'S WEAR</h1>
        <hr />
        <div className="men-women-popular">
          {menProducts && menProducts.slice(1,4)}
        </div>
    </div>
  )
}
