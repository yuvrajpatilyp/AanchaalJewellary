import React from "react";
import {
  FaTruck,
  FaSyncAlt,
  FaCertificate,
  FaHandshake,
  FaUndoAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTruck />,
    title: "Free Shipping",
    desc: "Get 100% Free Shipping",
  },
  {
    icon: <FaSyncAlt />,
    title: "Easy Exchange",
    desc: "Exchange your old designs anytime",
  },
  {
    icon: <FaCertificate />,
    title: "Certified Jewellery",
    desc: "100% Certified Jewellery",
  },
  {
    icon: <FaHandshake />,
    title: "Lifetime Service",
    desc: "Keep your jewellery in top shape",
  },
  {
    icon: <FaUndoAlt />,
    title: "14 Days Return",
    desc: "Hassle-Free Returns",
  },
];

const FeaturesSection = () => {
  return (
    <div className="w-full bg-[#f7edf4] py-10 mb-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center relative">

        {features.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center gap-1 px-4"
          >
            <div className="text-3xl sm:text-4xl text-black">{item.icon}</div>
            <h3 className="font-semibold text-[14px] sm:text-[16px]">
              {item.title}
            </h3>
            <p className="text-[11px] sm:text-[13px] opacity-80">
              {item.desc}
            </p>

            {/* Divider (Only for lg screens) */}
            {index !== features.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-14 bg-pink-400"></div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default FeaturesSection;
