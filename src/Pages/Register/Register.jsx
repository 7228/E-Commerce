import React from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className="register">
            <form className="register-form">
                <h1>Register</h1>
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Your Email Adress"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Register</button>
                <p>Already have an account? <Link to="/login" className="login-btn">Login</Link></p>
            </form>
    </div>
  )
}
