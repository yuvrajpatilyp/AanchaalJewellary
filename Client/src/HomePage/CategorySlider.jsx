import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

const categories = [
  { title: "NEWARRIVAL", image: "src/assets/newarrival3.jpg" },
  { title: "BANGLES", image: "src/assets/bangles1.webp" },
  { title: "EARRINGS", image: "src/assets/earrings1.webp" },
  { title: "BRACELETS", image: "src/assets/pearl11hover.webp" },
  { title: "RINGS", image: "src/assets/ring1.webp" },
  { title: "NECKLACES", image: "src/assets/necklace1.jpg" },
  { title: "NOSE RING", image: "src/assets/nosepin.webp" },
  
];

function CategorySlider() {
  return (
    <div className="w-full py-15">
    {/* swiper */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 1500 }}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          480: { slidesPerView: 3 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 5 },
        }}
        className="px-4"
      >
        {categories.map((item, i) => (
          <SwiperSlide key={i}>
            <Link to={`/${item.title.toLowerCase()}`} className="flex flex-col items-center">

              {/* Img card */}
              <div
                className=" w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-xl overflow-hidden shadow-md
                border-3 border-pink-200  transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white ">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                />
              </div>

              {/* Title */}
             <p className="mt-3 text-xs sm:text-sm md:text-base tracking-[3px] font-semibold uppercase 
                    hover:underline underline-offset-4 cursor-pointer">
                 {item.title}
             </p>

            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySlider;
