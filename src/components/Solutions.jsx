import React from "react";
import "../styles/Solutions.css";

const solutions = [
  {
    title: "Maximize Your Influence",
    description: "Boost visibility by 80% with local searches. Get listed on Google Maps to enhance your reach and improve rankings for increased traffic.",
  },
  {
    title: "Strengthen Your Brand",
    description: "Boost accuracy by 85% with detailed creativity to enhance engagement by showcasing your business identity without makeovers.",
  },
  {
    title: "Expand Customer Reach",
    description: "Utilize strategies to enrich your listing with promotions and offers to drive 85% more interaction and build customer trust.",
  },
  {
    title: "Enrich Customer Relations",
    description: "Improve user experience by 90% with mobile-friendly listings updates with easy navigation, calling controls, statistics.",
  },
  {
    title: "Drive Higher Conversions",
    description: "Boost effectiveness by 90% with analytics, a verified profile, optimized listing, local SEO, added activities, and growth reports.",
  },
  {
    title: "Surpass Your Competitors",
    description: "Gain 90% competitive edge with an optimized Google listing with advanced SEO to boost visibility and attention.",
  },
];

const Solutions = () => {
  return (
    <section className="solutions">
      <h2>Solutions That Drives Success</h2>
      <div className="solution-cards">
        {solutions.map((item, index) => (
          <div key={index} className="solution-card">
            <div className="solution-card-icon">
          
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

export default Solutions;
