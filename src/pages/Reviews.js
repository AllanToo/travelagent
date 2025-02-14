  import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";



const reviews = [
  {
    name: "Customer Name 1",
    job: "Job title here",
    text: "Booking our stay through this hotel website was a breeze! We found the perfect room at a great price, and the whole process was seamless. Our vacation was amazing, thanks to the fantastic accommodations we discovered here. We'll definitely be using this website for all our future travels!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Customer Name 2",
    job: "Job title here",
    text: "Great experience! The service was top-notch, and I highly recommend it to others.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Customer Name 3",
    job: "Job title here",
    text: "A wonderful experience from start to finish. Highly professional and courteous!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center text-center p-16">
      <h2 className="text-3xl font-bold text-blue-900">Customer Reviews</h2>
      <p className="text-lg text-gray-500 mb-8">Believe not what we say, believe what our customers say</p>
      <div className="relative w-full max-w-2xl">
        <div className="flex justify-center">
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
        </div>
        <p className="italic text-lg text-gray-700 mt-6">{reviews[currentIndex].text}</p>
        <h3 className="font-bold text-xl text-blue-900 mt-3">{reviews[currentIndex].name}</h3>
        <p className="text-lg text-gray-500">{reviews[currentIndex].job}</p>
      </div>
      <div className="flex items-center mt-8 space-x-6">
        <button onClick={prevReview} className="text-blue-500 hover:text-blue-700">
          <ChevronLeft size={40} />
        </button>
        <div className="flex space-x-3">
          {reviews.map((review, index) => (
            <img
              key={index}
              src={review.image}
              alt={review.name}
              className={`w-16 h-16 rounded-full cursor-pointer border-2 ${
                index === currentIndex ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <button onClick={nextReview} className="text-blue-500 hover:text-blue-700">
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
