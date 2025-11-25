import React from "react";
import { Link } from "react-router-dom";

const PearlBanner = () => {
  return (
    <div className="w-full  px-4 sm:px-8 md:px-20 lg:px-30 py-8">
      <div className="relative w-full rounded-3xl overflow-hidden flex items-end shadow-xl min-h-[220px] 
      sm:min-h-[300px] md:min-h-[380px] lg:min-h-[460px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('src/assets/slide-img10.jpg')" }}
      >

      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>
       <div className=" relative text-white px-4 sm:px-10 md:px-16 pb-4 sm:pb-10 md:pb-14 lg:pb-16 
       flex flex-col gap-2 sm:gap-4 max-w-[450px]">
           <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold">
           Best Sellers
           </h2>

          <p className="text-[11px] sm:text-sm md:text-lg opacity-80">
           Check what’s trending @AANCHAL
          </p>
          <Link to="/shop" className=" bg-red-500 hover:bg-red-600 transition-all duration-300 w-fit 
          flex items-center gap-2 text-white font-medium text-[10px] sm:text-sm md:text-lg
            px-3 sm:px-5 md:px-6 py-1 sm:py-2 md:py-3 rounded-full" >
            Shop Now
          </Link>
       </div>
     </div>

    </div>
  );
};

export default PearlBanner;
