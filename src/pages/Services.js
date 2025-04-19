import React from 'react';
import '../css/Services.css';

import { MdFlightTakeoff } from "react-icons/md";
import { IoCarSportSharp, IoDocumentsSharp } from "react-icons/io5";
import { FaPassport } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";

import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      id: 1,
      icon: <MdFlightTakeoff />,
      title: t("Book Air Tickets"),
      description: t("International and Domestic Flights at the best price"),
    },
    {
      id: 2,
      icon: <MdOutlineTravelExplore />,
      title: t("Package"),
      description: t("Mexico, Cuba, USA, Bahamas, Caribbean"),
    },
    {
      id: 3,
      icon: <IoCarSportSharp />,
      title: t("Hotels & Cars"),
      description: t("Best deals on hotels and car rentals"),
    },
    {
      id: 4,
      icon: <FaLaptop />,
      title: t("Travel Insurance"),
      description: t("Protect your trip with travel insurance"),
    },
    {
      id: 5,
      icon: <IoDocumentsSharp />,
      title: t("Renew Documents"),
      description: t("PR Card & Apply for Canadian Citizenship & Apply USA Visa"),
    },
    {
      id: 6,
      icon: <FaPassport />,
      title: t("Legalization"),
      description: t("Vietnamese Visa Application, Visa Exemption, Vietnamese Passport, Power of Atttorney"),
    },
  ];

  return (
    <section className="services">
      <h2>{t("Services")}</h2>
      <div className="service-list">
        {servicesData.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
