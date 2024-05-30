import React from "react";
import "./Footer.css";
import shop_logo from "../Images/shop_app.png"
import insta_icon from "../Images/instagram_icon.png"
import wa_icon from "../Images/whatsapp_icon.png"
import pinterest_icon from "../Images/pintester_icon.png"

export const Footer = () => {
    return (
        <div className="footer">
            <img src={shop_logo} alt="" className="logo"/>
            <ul className="info">
                <li>Company</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
            <div className="icons">
                <img src={insta_icon} alt="" className="icon"/>
                <img src={wa_icon} alt="" className="icon"/>
                <img src={pinterest_icon} alt="" className="icon"/>
            </div>
            <hr />
            <h2>Copyright @ 2024 All Rights Reserved.</h2>
        </div>
    )
}