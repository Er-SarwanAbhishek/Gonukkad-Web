

import React from "react";
import "../styles/VideoSection.css";
import video1 from "../assets/images/video1.mp4";
import video2 from "../assets/images/video2.mp4";
import video3 from "../assets/images/video3.mp4";
import video4 from "../assets/images/video4.mp4";

const videoData = [
  { id: 1, src: video1 },
  { id: 2, src: video2},
  { id: 3, src: video3},
  { id: 4, src: video4 }
];


const statsData = [
  { id: 1, value: "60k", label: "Merchant Base" },
  { id: 2, value: "85%", label: "YoY Growth" },
  { id: 3, value: "90%", label: "Renewal Rate" },
  { id: 4, value: "95%", label: "Happy Customers" }
];

const VideoSection=()=> {
  return (
    <section className="video-section">
      <div className="video-container">
        {videoData.map((video) => (
          <div key={video.id} className="video-card">
            
            <video controls>
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>

      <div className="stats">
        {statsData.map((stat) => (
          <div key={stat.id} className="stats-info">
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoSection;
