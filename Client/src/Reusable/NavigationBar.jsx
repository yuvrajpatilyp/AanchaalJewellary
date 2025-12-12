import React from 'react'
import { FaRegHeart, FaRegUser } from "react-icons/fa";

function NavigationBar() {
  return (
    <nav className="flex flex-wrap justify-between items-center px-6 md:px-10 py-4 border-b border-gray-200">

      <div className="flex gap-4 md:gap-8 text-xs md:text-sm tracking-wide font-medium text-black w-full md:w-auto justify-center md:justify-start py-2 md:py-0">
        <ul className="hover:text-black duration-200 flex space-x-6" >
          <li>CONTACT US</li>
          <li>SERVICES</li>
        </ul>
      </div>

      <h1 className=" md:text-3xl font-serif font-semibold tracking-widest bg-linear-to-r from-[#C6A24F] via-[#F1D999]  to-[#af984f] text-transparent 
                    bg-clip-text w-full md:w-auto text-center py-1 md:py-0 "> Aanchal Jewellery
      </h1>

      <div className="flex gap-4 md:gap-6 text-lg md:text-xl text-gray-700 w-full md:w-auto justify-center md:justify-end py-2 md:py-0">
        <FaRegHeart className="hover:text-black cursor-pointer duration-200" />
        <FaRegUser className="hover:text-black cursor-pointer duration-200" />
      </div>

    </nav>
  );
};

export default NavigationBar;
