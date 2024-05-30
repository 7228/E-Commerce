import React from 'react'
import "./Newsletter.css"
import emailjs from "@emailjs/browser"

export const Newsletter = () => {
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_OPTIONS);
    alert("Congratulations! You have been subscribed to our newsletter.")
  }

  return (
    <div className="exclusive-offers">
        <h1>Get Exclusive Offers On Your Email</h1>
        <h3>Subscribe to our newsletter and stay updated</h3>
        <form className='newsletter-email' onSubmit={sendEmail}>
            <input type="text" placeholder='Your Name' name='to_name'/>
            <input type="email" placeholder='Your Email Adress' name='newsletter_email'/>
            <button>Subscribe</button>
        </form> 
    </div>
  )
}
