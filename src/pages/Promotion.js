import React from "react";
import Images from '../images/4.png'; // Ensure correct image path

const Promotion = () => {
  return (
    <div className="relative min-h-[60vh] xl:min-h-[70vh] 2xl:min-h-[60vh] flex items-center justify-center text-[#ADD8E6]">
      {/* Background Image */}
      <img src={Images} alt="Promotion" className="absolute inset-0 w-full h-full object-cover" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-12 md:px-16 lg:px-24 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 whitespace-normal drop-shadow-lg">
          Exclusive Deals to Southeast Asia
        </h1>
        <p className="text-base sm:text-xl md:text-2xl xl:text-3xl font-medium drop-shadow-lg whitespace-normal">
          We have special fares with <span className="font-semibold">Korean Air</span>, 
          <span className="font-semibold"> China Airlines</span>, <span className="font-semibold">EVA Air</span>, 
          and <span className="font-semibold">Cathay Pacific</span>.
        </p>
      </div>
    </div>
  );
};

export default Promotion;
