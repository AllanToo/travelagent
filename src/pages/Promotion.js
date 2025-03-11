import React from "react";
import Images from '../images/footer.webp'; // Ensure correct image path

const Promotion = () => {
  return (
    <div className="relative h-[75vh] flex items-center justify-center text-white">
    <img src={Images} alt="Promotion" className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative z-10 text-center p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">Exclusive Deals to Southeast Asia</h1>
      <p className="text-lg mb-6">
        We have special fares with <span className="font-semibold">Korean Air</span>, <span className="font-semibold">China Airlines</span>, <span className="font-semibold">EVA Air</span>, and <span className="font-semibold">Cathay Pacific</span>.
      </p>
    </div>
  </div>
  );
};

export default Promotion;
