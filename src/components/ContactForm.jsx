import React from "react";
import actNowImage from "../assets/images/contact.jpg"; 
import "../styles/ContactForm.css"; 

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="contact-section">
        <div className="contact-container">
          {/* Left Side*/}
          <div className="contact-left">
            <h1 className="contact-heading">Act now and seize your success !!</h1>
            <p className="contact-subtext">
              Enter your Email ID to get strategic insights, action Plan & Pricing options.
            </p>
            <div className="contact-image-container">
              <img src={actNowImage} alt="Act Now" className="contact-image" />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-right">
            <form className="contact-form">
              <input type="text" placeholder="Business Type" className="form-input" />
              <input type="text" placeholder="Full Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
              <input type="tel" placeholder="Mobile Number" className="form-input" />
              <textarea placeholder="Message" className="form-textarea"></textarea>
              <button type="submit" className="form-button">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
