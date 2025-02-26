import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-10 py-6 border-b md:px-14">
      {/* Left Side - Book Online */}
      <a href="#" className="text-blue-600 font-bold text-3xl">
        <span className="text-5xl">B</span>ook<span className="font-normal">online</span>
      </a>

      {/* Middle - Social Media Icons */}
      <div className="flex items-center gap-8 text-blue-600 text-3xl md:gap-10">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition duration-300">
          <FaFacebookF className="text-4xl" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition duration-300">
          <FaTwitter className="text-4xl" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition duration-300">
          <FaLinkedin className="text-4xl" />
        </a>
      </div>

      {/* Divider */}
      <div className="h-8 w-[1px] bg-gray-300 hidden md:block"></div>

      {/* Right Side - Phone Number */}
      <a href="tel:8552295934" className="text-blue-800 font-bold text-3xl">
        855-229-5934
      </a>
    </div>
  );
};

export default Header;
