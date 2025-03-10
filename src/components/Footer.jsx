import React from "react";
import "../styles/Footer.css"; // Import CSS for styling
import logo from "../assets/images/logo.png"; // Update the path to your logo
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6"; // Using react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-logo">
          <img src={logo} alt="Gonukkad Logo" />
        </div>

      
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>

      
        <div className="footer-links">
          <a href="#">Who we are</a>
          <a href="#">Blogs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Service</a>
        </div>
      </div>

    
      <div className="footer-bottom">
        <p>© 2025 By continuing past this page, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, www.gonukkad.com all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
