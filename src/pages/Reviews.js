  import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";



const reviews = [
  {
    name: "Sophia Carter",
    job: "Registered Nurse",
    text: "Personalized service that beats any online booking site—responsive, insightful, and truly cares about their clients.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Ian Simpson",
    job: "Software Developer",
    text: "Highly professional and detail-oriented—our itinerary was flawless, thanks to their deep knowledge and connections.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Charlotte  Hamilton",
    job: "Financial Analyst",
    text: "A true travel expert! They handled everything from flights to accommodations, making our trip stress-free and enjoyable.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    name: "Bruce Knight",
    job: "Truck Driver",
    text: " Every recommendation was spot-on, from hidden gems to luxury stays.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Fernando Evans",
    job: "Marketing Manager",
    text: "Great experience! The service was top-notch, and I highly recommend it to others.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Olivia Anderson",
    job: "Teacher",
    text: "A wonderful experience from start to finish. Highly professional and courteous!",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    name: "Emma Thompson",
    job: "Accountant",
    text: "Trustworthy and knowledgeable—our best travel experiences have been with their expert planning.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    name: "Chester Craig",
    job: "Electriciane",
    text: "Customer service is exceptional! Always available, quick to respond, and ensures every detail is perfect.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    name: "Avery Mitchell",
    job: "Real Estate Agent",
    text: "An absolute pleasure to work with—whether it’s a family trip or a luxury getaway, they exceed expectations every time.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
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
