import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="login">
            <form className="login-form">
                <h1>Log in</h1>
                <input type="email" placeholder="Your Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/register" className="register-btn">Register</Link> now</p>
            </form>
        </div>
    )
}