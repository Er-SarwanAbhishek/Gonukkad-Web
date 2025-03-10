import React, { useState, useRef } from "react";
import "../styles/CustomerStrategy.css";
import videoPlay from '../assets/images/video1.mp4'

const CustomerStrategy = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="customers">
        <div className="customer-strategy">
      <h2>Create a Customer-First Marketing Strategy</h2>
      <p>
        Place your customers at the heart of your business to inspire trust and
        loyalty. A strategy tailored to their needs elevates your brand and
        fuels lasting success.
      </p>
      <div className="strategy-content">
       
         
        <div className="strategy-video">
            {!isPlaying ? (
              <div className="video-thumbnail" onClick={handlePlayVideo}>
                <img
                  src="https://img.youtube.com/vi/vr8P22z1enY/maxresdefault.jpg"
                  alt="Video Thumbnail"
                />
                <button className="play-button">▶</button>
              </div>
            ) : (
              <iframe
                width="350"
                height="315"
                src="https://www.youtube.com/embed/vr8P22z1enY?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>
        
      </div>
      </div>
    </section>
  );
};

export default CustomerStrategy;
