import React from 'react'
import '../css/Services.css'
import HomeImage from "../images/home.jpg"
import { FaPalette, FaTruck, FaHeadset, FaLaptop, FaLightbulb, FaShieldAlt } from "react-icons/fa"; // Import more icons
const servicesData = [
    {
      id: 1,
      icon: <FaPalette />, // Quality Design Icon
      title: "Quality Design",
      description: "Professional and modern designs tailored to your needs.",
    },
    {
      id: 2,
      icon: <FaTruck />, // Fast Delivery Icon
      title: "Fast Delivery",
      description: "Quick turnaround time without compromising on quality.",
    },
    {
      id: 3,
      icon: <FaHeadset />, // 24/7 Support Icon
      title: "24/7 Support",
      description: "We are here to assist you anytime, anywhere.",
    },
    {
      id: 4,
      icon: <FaLaptop />, // Tech Expertise Icon
      title: "Tech Expertise",
      description: "Innovative solutions powered by cutting-edge technology.",
    },
    {
      id: 5,
      icon: <FaLightbulb />, // Creative Ideas Icon
      title: "Creative Ideas",
      description: "Unique and out-of-the-box solutions for your needs.",
    },
    {
      id: 6,
      icon: <FaShieldAlt />, // Security Icon
      title: "Security",
      description: "Ensuring the safety and security of your information.",
    },
  ];
  
  const Services = () => {
    return (
      <section className="services">
        <h2>Why Choose Us?</h2>
        <div className="service-list">
          {servicesData.map((service) => (
            <div key={service.id} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
export default Services
