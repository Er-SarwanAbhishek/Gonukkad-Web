import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/images/landing-page-1.webp"; 

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Get Everything You Need to Manage
          and Grow Your Business
        </h1>
        <p>
          Stay updated with industry trends and be willing to adapt your
          strategies accordingly. Innovation can help you stay ahead of the
          curve and attract new customers.
        </p>
        <button className="get-started">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Business Growth" />
      </div>
    </section>
  );
}

export default HeroSection;
