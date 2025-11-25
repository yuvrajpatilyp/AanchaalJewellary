import React from "react";
import { FaTruck, FaSyncAlt, FaCertificate, FaHandshake, FaUndoAlt } from "react-icons/fa";

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
    title: "Lifetime Product Service",
    desc: "Keep your jewellery in top shape",
  },
  {
    icon: <FaUndoAlt />,
    title: "14 Days Return",
    desc: "14 Days Hassle-Free Returns",
  },
];

const FeaturesSection = () => {
  return (
    <div className="w-full bg-[#f4d9ec] py-10">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
        {features.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center gap-1 px-4">
              <div className="text-4xl text-pink-500">{item.icon}</div>
              <h3 className="font-semibold text-[17px]">{item.title}</h3>
              <p className="text-[13px] opacity-80">{item.desc}</p>
            </div>

            {/* Vertical Divider */}
            {index !== features.length - 1 && (
              <div className="w-px h-16 bg-pink-400"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
