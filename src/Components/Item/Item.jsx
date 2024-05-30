import React, { useContext } from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

export const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/item/${props.id}`}><img className="item-img" src={props.image} alt="" /></Link>
            <div className="item-description">
                <h3 className='item-title'>{props.title}</h3>
                <h3 className='item-price'>{props.price}$</h3>
            </div>
        </div>
    )
}
