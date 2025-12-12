import React from "react";
import { Link } from "react-router-dom";

const NewArrivalsPage = () => {
  return (
    <div className="w-full pb-10">
      {/* Hero banner */}
      <div className="relative w-full h-[380px] md:h-[480px] lg:h-[420px]">
        <img
          src="src\assets\BannerImg\slide-img9.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-[22%] left-[10%] space-y-4 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-brown-700">
            New Arrivals
          </h1>

          <p className="text-lg md:text-xl text-brown-700 leading-relaxed">
            New Arrivals Dropping Daily, Monday through Friday. <br />
            Explore the Latest Launches Now!
          </p>

          <div className="bg-white px-8 py-3 rounded-full inline-flex items-center gap-2 font-semibold shadow-md">
            500+ New Items
          </div>
        </div>
      </div>

      {/* Cards */}
      <div
        className="max-w-7xl mx-auto -mt-20 md:-mt-24 lg:-mt-28 flex flex-col md:flex-row gap-6 px-4">
        {/* Card 1 */}
        <Link
          to="/silver-idols"
          className="relative w-full md:w-1/2 rounded-xl overflow-hidden border-8 border-white shadow-xl cursor-pointer hover:scale-[1.02] transition"
        >
          <img
            src="src\assets\NewarrivalImg\newarrival1.jpg"
            alt="Silver Idols"
            className="w-full h-[300px] md:h-[350px] object-cover"
          />
          <p className="absolute bottom-4 left-6 text-black text-2xl font-semibold drop-shadow-xl">
            Silver Idols
          </p>
        </Link>

        {/* Card 2 */}
        <Link
          to="/mangalsutra"
          className="relative w-full md:w-1/2 rounded-xl overflow-hidden border-8 border-white shadow-xl cursor-pointer hover:scale-[1.02] transition"
        >
          <img
            src="src\assets\NewarrivalImg\newarrival2.webp"
            alt="Mangalsutra"
            className="w-full h-[300px] md:h-[350px] object-cover"
          />
          <p className="absolute bottom-4 left-6 text-black text-2xl font-semibold drop-shadow-xl">
            Mangalsutra
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NewArrivalsPage;

