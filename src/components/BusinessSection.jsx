
import React from "react";
import '../styles/BusinessSection.css'
import gmbService from "../assets/images/asset11.png";
import ecommerceService from "../assets/images/asset12.png";
import digitalMarketing from "../assets/images/img-12.png";
import digitalService from "../assets/images/hero-1-img.png";


const BusinessSection = () => {
    const sections = [
      {
        id: 1,
        title: "Maximize Local Visibility with Gonukkad's GMB Management Services",
        description:
          "In today's fast-paced digital landscape, having a Google My Business (GMB) profile is not only useful but essential. Statistics reveal that businesses with an active GMB profile are 80% more likely to attract prospective customers. As an experienced Digital Marketing agency, we recognize its significance and advocate for professional Google My Business services.",
        image: gmbService, 
        imageOnRight: false,
      },
      {
        id: 2,
        title: "Boost Your Business with Our Advanced E-commerce Solutions",
        description:
          "Our advanced e-commerce solutions help you streamline online sales, optimize user experience, and maximize revenue. We offer seamless integration with payment gateways, advanced analytics, and AI-driven customer insights.",
          image: digitalMarketing, 
        imageOnRight: true, 
      },
      {
        id: 3,
        title: "Grow Your Brand with Our Digital Marketing Expertise",
        description:
          "Our digital marketing experts use data-driven strategies to enhance your brand visibility, increase engagement, and drive conversions. We specialize in SEO, social media marketing, and paid advertising to ensure your business thrives online.",
          image: ecommerceService, 
        imageOnRight: false, 
      },
      {
        id: 4,
        title: "Does Your Online Business Need A Boost?",
        description:
          "Boost your business with our E-commerce Seller Account anagement Services! We don’t just manage your store—we enhance it to attract high-quality leads. Our team uses advanced analytics and innovative strategies to optimize listings, increase visibility.",
          image: digitalService, 
        imageOnRight: true, 
      },
    ];
  
    return (
      <div className="service-sections">
        {sections.map((section) => (
          <div key={section.id} className={`service-container ${section.imageOnRight ? "reverse" : ""}`}>
            <div className="service-image">
              <img src={section.image} alt="Service" />
            </div>
            <div className="service-content">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default BusinessSection;
  