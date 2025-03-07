import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import Images from "../images/logoo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-10 py-1 border-b bg-white md:px-14">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <img src={Images} alt="Logo" className="w-[150px] h-[150px] object-contain" />
      </div>

      {/* Middle - Social Media Icons (Bigger) */}
      <div className="flex items-center gap-5 text-blue-600">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition duration-300">
          <FaFacebookF className="text-3xl md:text-4xl" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition duration-300">
          <FaTwitter className="text-3xl md:text-4xl" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition duration-300">
          <FaLinkedin className="text-3xl md:text-4xl" />
        </a>
      </div>

      {/* Divider */}
      <div className="h-8 w-[1px] bg-gray-300 hidden md:block"></div>

      {/* Right Side - Bigger Phone Number */}
      <a href="tel:8552295934" className="text-blue-800 font-bold text-2xl md:text-3xl">
        403-604-9794
      </a>
    </div>
  );
};

export default Header;
