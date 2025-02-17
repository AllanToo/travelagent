import React from 'react'
import Images from '../images/Images.jpg'
import Korea from '../images/Korea.jpg'
import AsiaTravel from '../images/AsiaTravel.jpg'
import VietNam from '../images/VietNam.jpg'
import VietNam2 from '../images/VietNam2.jpg'
const destinations = [
    { name: "", image: Images},
    { name: "", image: Korea },
    { name: "", image: AsiaTravel},
    { name: "", image:VietNam },
    { name: "", image: VietNam2 },
  ];

  
  const Destinations = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`relative bg-cover bg-center text-white p-6 rounded-lg shadow-lg ${
              destination.main ? "col-span-2 md:col-span-3 h-96" : "h-80"
            }`}
            style={{ backgroundImage: `url(${destination.image})` }}
          >
            <h2 className="text-2xl font-bold">{destination.name}</h2>
            {destination.searchOptions && (
              <div className="mt-4">
                {destination.searchOptions.map((option, i) => (
                  <button key={i} className="mr-2 bg-white text-black px-3 py-1 rounded-md text-sm">
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
};

  

export default Destinations
