import React, { useContext } from 'react'
import { Item } from '../../Components/Item/Item'
import { AppContext } from '../../Context/AppContext'
import "./Category.css"
import men_banner from "../../Components/Images/banner_men.png"
import women_banner from "../../Components/Images/banner_women.png";

export const Category = (props) => {
    const { products } = useContext(AppContext);
    let banner;

    const categoryProducts = products.map((item,i) => {
        if(item.category === props.type) {
            return(
                <Item key={i} id = {item.id} image={item.image} title={item.title} price={item.price}></Item>
            )
        }
    })

    if(props.type === "men's clothing" || props.type === "electronics") {
        banner = men_banner;
    } else if(props.type === "women's clothing" || props.type === "jewelery") {
        banner = women_banner
    }

    return(
        <div>
            <div className="category">
               <img src={banner} alt="" className='category-banner'/>
            </div>
            <div className='category-products'>{categoryProducts}</div> 
        </div>
    )
}
