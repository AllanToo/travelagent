import React from "react";
import Korea from '../images/Korea.jpg';
import AsiaTravel from '../images/AsiaTravel.jpg';
import VietNam from '../images/VN.jpg';
import VietNam2 from '../images/Mex.jpg';
import Image from '../images/Images.jpg';

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen bg-gray-100 p-10">
      {/* Left Text Section */}
      <div className="max-w-lg text-center lg:text-left">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Visit The Most{" "}
          <span className="text-blue-500">Beautiful Places</span> In The World
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Plan and book your perfect trip with expert advice, travel tips, 
          destination information, and inspiration from us.
        </p>
      </div>

      {/* Right Image Collage - Adjusted for Closer & Bigger Layout */}
      <div className="relative grid grid-cols-3 grid-rows-3 gap-1 mt-10 lg:mt-0 lg:ml-8 w-[550px] h-[500px]">
        {/* Large Top Left Image */}
        <div className="col-span-2 row-span-2 rounded-tl-[50px] overflow-hidden shadow-lg">
          <img src={Image} alt="Destination 1" className="w-full h-full object-cover" />
        </div>

        {/* Top Right Image */}
        <div className="rounded-tr-[50px] overflow-hidden shadow-lg">
          <img src={VietNam2} alt="Destination 2" className="w-full h-full object-cover" />
        </div>

        {/* Middle Left Image */}
        <div className="rounded-bl-[50px] overflow-hidden shadow-lg">
          <img src={VietNam} alt="Destination 3" className="w-full h-full object-cover" />
        </div>

        {/* Large Middle Right Image */}
        <div className="col-span-2 rounded-br-[50px] overflow-hidden shadow-lg">
          <img src={Korea} alt="Destination 4" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
