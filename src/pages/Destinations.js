import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Images from '../images/Images.jpg';
import Korea from '../images/Korea.jpg';
import AsiaTravel from '../images/AsiaTravel.jpg';
import VietNam from '../images/VietNam.jpg';
import Mex from '../images/Mex.jpg';

import { useTranslation } from 'react-i18next';

const travelDestinations = [
  { image: Images, },
  { image: Korea,  },
  { image: Mex, },
  { image: AsiaTravel},
];

const Destinations = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white py-16 px-6">
      {/* Title & Description */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        {t('Your Destinations')}
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        {t("We are your personal experts for your travel")}
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {travelDestinations.map((destination, index) => (
          <div
            key={index}
            className="relative w-64 max-sm:w-[90%] lg:w-64 h-80 mx-auto rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{destination.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Description */}
      <div className="mt-12 max-w-3xl text-center text-gray-700 text-lg leading-relaxed">
        <p>{t("Whether it’s our own travel project or additions to your existing programmes, the creative possibilities are endless.")}</p>
        <p className="mt-4">{t("We specialise in group travel, theme trips, individual travel and on land segment for river cruises.")}</p>
        <p className="mt-4">{t("We offer you innovative and comprehensive ideas for your travel routes.")}</p>
        <p className="mt-4">{t("We provide personal and professional support on-site so that you can sit back and relax.")}</p>
        <p className="mt-4 font-medium">{t("We guarantee outstanding service and reliability at all times.")}</p>
      </div>
    </div>
  );
};

export default Destinations;
