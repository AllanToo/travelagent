import React, { useState } from "react";
import { FaMapMarkedAlt, FaUsers, FaStar, FaGlobe } from "react-icons/fa";

const Aboutus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "403-604-9794"; // Your contact number

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}

      {/* Our Story Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
        <p className="mt-4 text-lg text-gray-600">
          With 18 years of experience in the travel industry, we proudly help thousands of travelers create unforgettable experiences across the globe. Our mission is to make every journey seamless, enjoyable, and truly life-changing.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md rounded-lg">
              <FaMapMarkedAlt className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold">Expert Guidance</h3>
              <p className="text-gray-600 mt-2">We provide curated travel experiences tailored to your preferences.</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md rounded-lg">
              <FaUsers className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold">Personalized Service</h3>
              <p className="text-gray-600 mt-2">We treat every traveler like family, ensuring your trip is stress-free.</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md rounded-lg">
              <FaStar className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold">Top-Rated Destinations</h3>
              <p className="text-gray-600 mt-2">We partner with the best hotels and tour operators worldwide.</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md rounded-lg">
              <FaGlobe className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold">Global Reach</h3>
              <p className="text-gray-600 mt-2">We help you explore destinations across every continent.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold">Ready to Start Your Next Adventure?</h2>
        <p className="mt-4 text-lg">Let us plan your dream vacation today.</p>
        <button 
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          onClick={() => setIsOpen(true)}
        >
          Contact us at {phoneNumber}
        </button>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Call {phoneNumber}?</h2>
            
            {/* Call & Close Buttons */}
            <div className="flex justify-center gap-4">
              <a 
                href={`tel:${phoneNumber}`} 
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Call
              </a>
              <button 
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aboutus;
