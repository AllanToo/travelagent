import React from 'react'
import '../css/Services.css'
import HomeImage from "../images/home.jpg"
import { FaPalette, FaTruck, FaHeadset, FaLaptop, FaLightbulb, FaShieldAlt } from "react-icons/fa"; // Import more icons
const servicesData = [
    {
      id: 1,
      icon: <FaPalette />, // Quality Design Icon
      title: "Book Air Tickets",
      description: "International and Domestic Flights at the best price.",
    },
    {
      id: 2,
      icon: <FaTruck />, // Fast Delivery Icon
      title: "Package ",
      description: "Mexico, Cuba, USA, Bahamas, Caribbean",
    },
    {
      id: 3,
      icon: <FaHeadset />, // 24/7 Support Icon
      title: "Hotels & Cars",
      description: "Best deals on hotels and car rentals.",
    },
    {
      id: 4,
      icon: <FaLaptop />, // Tech Expertise Icon
      title: "Travel Insurance",
      description: "Protect your trip with travel insurance.",
    },
    {
      id: 5,
      icon: <FaLightbulb />, // Creative Ideas Icon
      title: "Renew Documents",
      description: "PR Card & Apply for Canadian Citizenship & Apply USA Visa",
    },
    {
      id: 6,
      icon: <FaShieldAlt />, // Security Icon
      title: "Legalization",
      description: "Vietnamese Visa Application, Visa Exemption, Vietnamese Passport, Power of Atttorney",
    },
  ];
  
  const Services = () => {
    return (
      <section className="services">
        <h2>Services</h2>
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
