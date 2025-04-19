import React from "react";
import { FaPlay } from "react-icons/fa";
import Korea from '../images/Korea.jpg';
import AsiaTravel from '../images/AsiaTravel.jpg';
import VietNam from '../images/VN.jpg';
import VietNam2 from '../images/Mex.jpg';
import Image from '../images/Images.jpg';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen bg-gray-100 p-10">
      {/* Left Text Section */}
      <div className="max-w-lg text-center lg:text-left">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          {t("Visit The Most")}{" "}
          <span className="text-blue-500">{t("Beautiful Places")}</span>{" "}
          {t("In The World")}
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          {t("Plan and book your perfect trip with expert advice, travel tips, destination information, and inspiration from us")}
        </p>

        {/* Bottom - User Reviews Section */}
        <div className="mt-8 flex items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{t("200+")}</h3>
            <p className="text-gray-500 text-sm">{t("Happy Travelers")}</p>
          </div>
        </div>
      </div>

      {/* Right Image Collage */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr gap-1 mt-10 lg:mt-0 lg:ml-8 w-full max-w-[550px] h-auto">
        <div className="md:col-span-2 md:row-span-2 rounded-tl-[50px] overflow-hidden shadow-lg">
          <img src={Image} alt="Destination 1" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-tr-[50px] overflow-hidden shadow-lg">
          <img src={VietNam2} alt="Destination 2" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-bl-[50px] overflow-hidden shadow-lg">
          <img src={VietNam} alt="Destination 3" className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-2 rounded-br-[50px] overflow-hidden shadow-lg">
          <img src={Korea} alt="Destination 4" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
