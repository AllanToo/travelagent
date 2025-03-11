import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import Images from "../images/Logo.jpg";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-5 py-3 border-b bg-white md:px-10">
      {/* Logo */}
      <img src={Images} alt="Logo" className="w-[120px] md:w-[150px] h-auto object-contain" />

      {/* Social Icons */}
      <div className="flex gap-x-6 md:gap-x-10 text-blue-600 text-2xl md:text-3xl">
        <a href="https://www.facebook.com/lynn.le.359" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition duration-300">
          <FaFacebookF />
        </a>
        
      </div>

      {/* Phone Number */}
      <a href="tel:8552295934" className="text-blue-800 font-bold text-xl md:text-2xl whitespace-nowrap">
        403-604-9794
      </a>
    </div>
  );
};

export default Header;
