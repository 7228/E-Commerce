import React, { useContext, useState } from 'react'
import "./ItemDetail.css"
import { useParams } from 'react-router'
import { AppContext } from '../../Context/AppContext';
import star_icon from "../Images/star_icon.png";
import star_icon_dull from "../Images/star_dull_icon.png";

export const ItemDetail = () => {
    const { id } = useParams();
    const { products, addToCart } = useContext(AppContext);
    const [size, setSize] = useState("m");
    
    const product = products.find((item) => {
      return item.id === Number(id);
    })

    const productRating = Math.round(product.rating.rate);

    const selectSize = (size) => {
      setSize(size)
    }


    const rating = (value)  => {
      if(value <= productRating) {
        return star_icon;
      } else {
        return star_icon_dull;
      }
    }

    let displaySizes;
    if(product.category === "men's clothing" || product.category === "women's clothing") {
      displaySizes = true;
    }

    
    return (
        <div className='item-detail'>
          <div className="display-left">
            <div className="more-images">
              <img src={product.image} alt="" className='side-img'/>
              <img src={product.image} alt="" className='side-img'/>
              <img src={product.image} alt="" className='side-img'/>
              <img src={product.image} alt="" className='side-img'/>
            </div>
            <img src={product.image} alt="" className='main-img'/>
          </div>
          <div className="display-right">
            <h1>{product.title}</h1>
            <div className="reviews">
              <h3>{product.rating.rate}</h3>
              <h3>({product.rating.count})</h3>
            </div>
            <div className="rating">
              <img src={rating(1)} alt="" className='star'/>
              <img src={rating(2)} alt="" className='star'/>
              <img src={rating(3)} alt="" className='star'/>
              <img src={rating(4)} alt="" className='star'/>
              <img src={rating(5)} alt="" className='star'/>
            </div>
            <h2 className='product-price'>{product.price}$</h2>
            <p className='product-description'>{product.description}</p>
            {displaySizes ? <p className="size">Select Size</p> : <></>}
            {displaySizes ? <div className="size-btns">
              <button onClick={() => {selectSize("s")}} className={size === "s" ? "size-btn-selected" : "size-btn"}>S</button>
              <button onClick={() => {selectSize("m")}} className={size === "m" ? "size-btn-selected" : "size-btn"}>M</button>
              <button onClick={() => {selectSize("l")}} className={size === "l" ? "size-btn-selected" : "size-btn"}>L</button>
              <button onClick={() => {selectSize("xl")}} className={size === "xl" ? "size-btn-selected" : "size-btn"}>XL</button>
              <button onClick={() => {selectSize("xxl")}} className={size === "xxl" ? "size-btn-selected" : "size-btn"}>XXL</button>
            </div>
            : <></>}
            <button className='add-to-cart' onClick={() => addToCart(product.id, size)}>ADD TO CART</button>
          </div>
        </div>
      )
}
