import React from "react";
import "../styles/WhyUs.css";

const whyUss = [
  {
    title: "Ecommerce Ad Solutions",
    description: "Our advertising services improve efficiency by 90%, optimizing ads for better performance, higher rankings, and increased sales.",
  },
  {
    title: "Ecommerce Ready Package",
    description: "Our expert achieves a 95% success rate in packaging, labeling, compliance, and shipment for various destinations.",
  },
  {
    title: "Ecommerce Ready Package",
    description: "Our expert achieves a 95% success rate in packaging, labeling, compliance, and shipment for various destinations.",
  },
  {
    title: "Brand Integrity Shield",
    description: "We manage your seller account with a 95% success rate, covering brand registry, optimization, ads, and orders.",
  },
  {
    title: "Activate Seller Central",
    description: "Our experts have a 95% success rate in helping thousands of merchants carve their niche with store handling and setup lifecycle.",
  },
  {
    title: "Display Your Catalog",
    description: "With a 90% success rate, our specialists excel in marketplace guidelines, creating engaging listings that attract buyers and boost sales..",
  },
];

const WhyUs = () => {
  return (
    <section className="whyUss">
      <h2>Why You Need Our Ecommerce Services</h2>
      <p>Because Your Great Product Deserves the Spotlight
      Let Our Marketplace Experts Put Your Product at the Top of E-Commerce Searches</p>
      <div className="whyUs-cards">
        {whyUss.map((item, index) => (
          <div key={index} className="whyUs-card">
            <div className="whyUs-card-icon">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon"
                width='40px'
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                ></path>
              </svg>
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
