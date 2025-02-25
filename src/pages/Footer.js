import React from 'react';
import imge from '../images/footer2.jpg';

function Footer() {
  return (
    <div
      className="relative w-full min-h-[25vh] flex flex-col items-center justify-center text-center bg-gray-100"
      style={{
        backgroundImage: `url(${imge})`,
        backgroundSize: "100% auto", // ✅ Full width, maintains aspect ratio
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <h1 className="text-gray-800 text-3xl font-semibold">
        THE VALUE FOR EXPERIENCE
      </h1>
      <p className="text-gray-600 mt-2">Relax... You’re with us! We make it simple.</p>
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
        START PLANNING
      </button>
    </div>
  );
}

export default Footer;
