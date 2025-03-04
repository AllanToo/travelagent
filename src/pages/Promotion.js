import React from "react";
import Images from '../images/Images.jpg'
const Promotion = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white" 
         style={{ backgroundImage:`url(${Images})` }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Exclusive Deals to Southeast Asia</h1>
        <p className="text-lg mb-6">
          We have special fares with <span className="font-semibold">Korean Air</span>, <span className="font-semibold">China Airlines</span>, <span className="font-semibold">EVA Air</span>, and <span className="font-semibold">Cathay Pacific</span>.
        </p>
        
        {/* Call to Action */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Promotion;
