import React, { useState } from "react";
import { FaMapMarkedAlt, FaUsers, FaStar, FaGlobe, FaFacebook, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
const Aboutus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const phoneNumber = "403-604-9794"; // Your contact number
  const contactEmail = "klynn@landvtravel.com"; // Your contact email
  
  const { t } = useTranslation();
  // Handle the change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message, // Message content
    };

    emailjs
      .send(
        "service_4biuxzr",   // Replace with your EmailJS service ID
        "template_4rhcb6x",
        templateParams,       // Replace with your EmailJS template ID
        "8xsBRcAMM1CUEbrR4"    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Thank you! We've got your message and we'll be in touch shortly");
          setForm({ name: "", email: "", message: "" }); // Clear form after submission
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">{t('Our Story')}</h2>
        <p className="mt-4 text-lg text-gray-600">
        {t("about.description1")}
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">{t("Why Choose Us?")}</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cards with icons */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md rounded-lg">
              <FaMapMarkedAlt className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold">{t("Expert Guidance")}</h3>
              <p className="text-gray-600 mt-2">{t("We provide curated travel experiences tailored to your preferences.")}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md rounded-lg">
              <FaUsers className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold">{t("Personalized Service")}</h3>
              <p className="text-gray-600 mt-2">{t("We treat every traveler like family, ensuring your trip is stress-free.")}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md rounded-lg">
              <FaStar className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold">{t("Top-Rated Destinations")}</h3>
              <p className="text-gray-600 mt-2">{t("We partner with the best hotels and tour operators worldwide.")}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md rounded-lg">
              <FaGlobe className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold">{t("Global Reach")}</h3>
              <p className="text-gray-600 mt-2">{t("We help you explore destinations across every continent.")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="text-center flex flex-col items-center lg:w-2/3">
          <h2 className="text-4xl font-bold">{t("Ready to Start Your Next Adventure?")}</h2>
          <p className="mt-4 text-lg">{t("Let us plan your dream vacation today.")}</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61572706170214" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-white" />
            </a>
            <a href="https://www.instagram.com/landv_travel/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-white" />
            </a>
          </div>
          {/* Contact Email */}
          <p className="mt-4 text-lg"> <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a></p>
          <button 
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          onClick={() => setIsOpen(true)}
        >
         {t("Contact us at 403-604-9794")} 
        </button>
        </div>
      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4 text-blue-600">{t("Call 403-604-9794?")}</h2>
            
            {/* Call & Close Buttons */}
            <div className="flex justify-center gap-4">
              <a 
                href={`tel:${phoneNumber}`} 
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                {t("Call")}
              </a>
              <button 
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {t("Cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow-md rounded-lg w-full lg:w-1/3 mt-6 lg:mt-0"
          autoComplete="on"
        >
          <input
            type="text"
            name="name"
            placeholder={t("Your Name")}
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder={t("Your Email")}
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
            autoComplete="email"
          />
          <textarea
            name="message"
            placeholder={t("Your Message")}
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
            autoComplete="off"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
          {t("Send")}
          </button>
        </form>
      </div>
    </div>
  );
};
//allamn

export default Aboutus;
