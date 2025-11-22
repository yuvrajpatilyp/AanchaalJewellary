import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function SlideBanner() {
  const slides = [
    {
      img: "src/assets/slide-img2.jpg",
      title: "Elegance in Every Pearl",
      desc: "Wear the beauty that never fades",
      btn: "Shop Now",
      titleStyle:
        "text-xl sm:text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent tracking-wide drop-shadow-xl",
      descStyle: "text-xs sm:text-sm md:text-lg text-white drop-shadow-lg",
      btnStyle:
        "border border-white text-white px-6 sm:px-8 py-2 font-semibold hover:bg-white hover:text-black transition cursor-pointer",
      positionX: "right-3 sm:right-6 md:right-10",
      positionY: "top-3/4",
    },

    {
      img: "src/assets/slide-img5.jpg",
      title: "Sparkle That Moves With You",
      btn: "Explore Now",
      titleStyle:
        "text-2xl sm:text-4xl md:text-5xl font-serif italic text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]",
      descStyle: "text-xs sm:text-sm md:text-lg text-yellow-300 tracking-wider drop-shadow-lg",
      btnStyle:
        "bg-yellow-200 text-black px-6 sm:px-8 py-2 sm:py-3 font-bold shadow-xl hover:bg-yellow-400 transition cursor-pointer",
      positionX: "right-3 sm:right-6 md:right-10",
      positionY: "top-3/4",
    },

    {
      img: "src/assets/slide-img3.jpg",
      title: "A Promise for a Lifetime",
      btn: "Shop Now",
      titleStyle:
        "uppercase tracking-[6px]  sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-red-500 bg-clip-text text-transparent drop-shadow-xl",
      descStyle: "text-sm sm:text-base text-gray-200",
      btnStyle:
        "border border-white text-black px-6 sm:px-8 py-2 font-semibold hover:bg-white hover:text-black transition cursor-pointer",
      positionX: "left-3 sm:left-6 md:left-10",
      positionY: "top-3/4",
    },

    {
      img: "src/assets/slide-img4.jpg",
      title: "Feel the Luxury of Gold",
      desc: "Celebrate moments that matter",
      btn: "Explore Now",
      titleStyle:
        "text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-200 to-red-500 bg-clip-text text-transparent drop-shadow-xl",
      descStyle: "text-sm sm:text-lg text-white",
      btnStyle:
        "bg-yellow-500 text-white px-6 py-2  font-semibold hover:bg-yellow-600 transition cursor-pointer",
      positionX: "left-3 sm:left-6 md:left-10",
      positionY: "top-3/4",
    },

     {
      img: "src/assets/slide-img8.jpg",
      title: "Shine Like Never Before",
      desc: "Discover breathtaking diamond necklaces",
      btn: "Explore Now",
      titleStyle:
        "text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent drop-shadow-xl",
      descStyle: "text-sm sm:text-lg text-white",
      btnStyle:
        "border border-white text-white px-6 sm:px-8 py-2 font-semibold hover:bg-white hover:text-black transition cursor-pointer",
      positionX: "left-3 sm:left-6 md:left-10",
      positionY: "top-3/4",
    },
    
  ];

  return (
    <div className="w-full py-5">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            className="!w-[85%] sm:!w-[80%] md:!w-[70%] lg:!w-[80%] relative"
          >
            <img
              src={slide.img}
              alt=""
              className="w-full h-[180px] sm:h-[240px] md:h-[350px] lg:h-[550px] object-cover rounded-xl shadow-xl"
            />

            {/* TEXT OVERLAY */}
            <div
              className={`absolute ${slide.positionX} ${slide.positionY} -translate-y-1/2 space-y-2 max-w-[260px] sm:max-w-[350px]`}
            >
              <h2 className={slide.titleStyle}>{slide.title}</h2>
              <p className={slide.descStyle}>{slide.desc}</p>
              <button className={slide.btnStyle}>{slide.btn}</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideBanner;
