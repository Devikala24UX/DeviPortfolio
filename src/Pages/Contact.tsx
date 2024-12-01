import React from "react";
import "./Contact.css";
 
function Contact() {
  return (
    <div className="contact-page">
      <div className="header-container">
        {/* <img
          src="DeviPortfolio/src/assets/contact/contact page image.webp" // Replace with your image URL
          alt="Creative Background"
          className="header-image"
        /> */}
        <div className="header-overlay">
          <div className="info-box">
          <h1>Contact Devikala</h1>
          <p>Let’s create something amazing together. Get in touch!</p>
          </div>
          
        </div>
      </div>
      <div className="content-container">
        <div className="info-section">
          <div className="info-box">
            <h2>Email</h2>
            <p>Devikala2473@gmail.com</p>
          </div>
          <div className="info-box">
            <h2>Mobile Number</h2>
            <p>+353 0000000000</p>
          </div>
        </div>
        <div className="form-section">
          <h2>Send a Message</h2>
          <form>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              rows={5}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;