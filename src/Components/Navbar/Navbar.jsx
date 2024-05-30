import React, { useState } from 'react'
import "./Navbar.css"
import { useContext } from 'react'; 
import { AppContext } from '../../Context/AppContext';
import { Link } from 'react-router-dom';
import shop_app from "../Images/shop_app.png"
import shopping_cart from "../Images/shopping_cart.png"

export const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("home");
  
  const {products} = useContext(AppContext);
  

  const changeTab = (id) => {
    setCurrentTab(id);
  }

  return (
    <div className="navbar">
      <ul className="navbar-items">
        <li><img src={shop_app} alt="" className='shop-logo'/></li>
        <Link to="/" className='navbar-link'>
          <li onClick={() => {changeTab("home")}}>
          Home{currentTab === "home" ? <hr/> : <></>}
        </li>
        </Link>
        <Link to="/men" className='navbar-link'>
          <li onClick={() => {changeTab("men")}}>
            Men{currentTab === "men" ? <hr/> : <></>}
          </li>
        </Link>
        <Link to="/women" className='navbar-link'>
          <li onClick={() => {changeTab("women")}}>
            Women{currentTab === "women" ? <hr/> : <></>}
          </li>
        </Link>
        <Link to="/jewelery" className='navbar-link'>
          <li onClick={() => {changeTab("jewelery")}}>
            Jewelery{currentTab === "jewelery" ? <hr/> : <></>}
          </li>
        </Link>
        <Link to="/electronics" className='navbar-link'>
          <li onClick={() => {changeTab("electronics")}}>
            Electronics{currentTab === "electronics" ? <hr/> : <></>}
          </li>
        </Link>
        <Link to="/login" className='navbar-link' id='login'>
          <li onClick={() => {changeTab("login")}}>
            Login{currentTab === "login" ? <hr/> : <></>}
          </li>
        </Link>
        <Link to="/cart" className='navbar-link' id='cart'>
          <li>
            <img src={shopping_cart} alt="" className='shopping-cart'/>
          </li>
        </Link>
      </ul>
    </div>
  )
}
