import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import Solutions from "./components/Solutions";
import CustomerStrategy from "./components/CustomerStrategy";
import ServicesSection from "./components/ServicesSection";
import BusinessSection from "./components/BusinessSection";
import WhyUs from "./components/WhyUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <Solutions />
      <CustomerStrategy />
      <ServicesSection />
      <BusinessSection />
      <WhyUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
