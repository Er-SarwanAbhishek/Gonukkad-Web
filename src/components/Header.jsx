import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
