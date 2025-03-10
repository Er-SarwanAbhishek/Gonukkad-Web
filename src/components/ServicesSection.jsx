import React from "react";
import "../styles/ServicesSection.css";
import analyticsImg from "../assets/images/asset5.png";
import supportImg from "../assets/images/asset7.png";
import servicesImg from "../assets/images/asset9.png";

const servicesData = [
  {
    id: 1,
    imgSrc: analyticsImg,
    title: "Business Analytics",
    description:
      "Transform data into actionable insights for informed decision-making and strategic planning.",
  },
  {
    id: 2,
    imgSrc: supportImg,
    title: "Premium Support",
    description:
      "Enhance customer service with personalized assistance and rapid, dedicated support.",
  },
  {
    id: 3,
    imgSrc: servicesImg,
    title: "Exclusive Offerings/Services",
    description:
      "Enjoy personalized attention and tailored solutions designed to exceed expectations.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Everything in One Place</h2>
      <p className="subtitle">Unified Customer Engagement Platform</p>

      <div className="services-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.imgSrc} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
