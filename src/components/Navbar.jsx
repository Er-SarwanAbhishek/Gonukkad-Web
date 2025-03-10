import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png"; 
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

  
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#">Business Calculator</a></li>
          <li><a href="#">Retail Business Solutions</a></li>
          <li><a href="#">Ecommerce Growth Engine</a></li>
          <li><a href="#">Contact</a></li>
          <li><button className="btn-primary">Pay Now</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
