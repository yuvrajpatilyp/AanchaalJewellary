import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

function SlideBanner() {
  const slides = [
  {
  img: "src/assets/BannerImg/slide-img2.jpg",
  title: "Elegance in Every Pearl",
  desc: "Wear the beauty that never fades",
  btn: "Shop Now",
  link: "/pearl",
  titleStyle:
    "text-lg sm:text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent tracking-wide drop-shadow-xl",
  descStyle:
    "text-[10px] sm:text-sm md:text-lg text-white drop-shadow-lg",
  btnStyle:
    "border border-white text-white px-3 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 font-semibold text-[10px] sm:text-sm md:text-base hover:bg-white hover:text-black transition cursor-pointer",
  positionX: "right-2 sm:right-6 md:right-10",
  positionY: "bottom-2 sm:bottom-8 md:bottom-14 lg:bottom-16"
  },

  {
  img: "src/assets/BannerImg/slide-img5.jpg",
  title: "Sparkle That Moves With You",
  btn: "Explore Now",
  link: "/earrings",
  titleStyle:
  "text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif italic text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]",
  descStyle:
  "text-[10px] sm:text-xs md:text-sm lg:text-lg text-yellow-300 tracking-wider drop-shadow-lg",
  btnStyle:
    "bg-yellow-200 text-black px-3 sm:px-5 md:px-7 py-1 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base font-bold shadow-xl hover:bg-yellow-400 transition cursor-pointer",
  positionX: "left-2 sm:left-4 md:left-8",
  positionY: "bottom-2 sm:bottom-4 md:bottom-10 lg:bottom-14"
  },
   
  {
  img: "src/assets/BannerImg/slide-img3.jpg",
  title: "A Promise for a Lifetime",
  btn: "Shop Now",
  link: "/ring",
  titleStyle:
    "uppercase tracking-[3px] sm:tracking-[6px] text-xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-red-500 bg-clip-text text-transparent drop-shadow-xl",
  descStyle:
    "text-xs sm:text-sm md:text-base text-gray-200",
  btnStyle:
    "border border-white text-white px-3 sm:px-6 md:px-8 py-1 sm:py-2 font-semibold text-xs sm:text-sm md:text-base hover:bg-white hover:text-black transition cursor-pointer",
  positionX: "left-2 sm:left-6 md:left-10",
  positionY: "bottom-2 sm:bottom-8 md:bottom-14 lg:bottom-16"
  },

  {
  img: "src/assets/BannerImg/slide-img4.jpg",
  title: "Feel the Luxury of Gold",
  desc: "Celebrate moments that matter",
  btn: "Explore Now",
  link: "/gold",
  titleStyle:
    "text-xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-200 to-red-500 bg-clip-text text-transparent drop-shadow-xl",
  descStyle:
    "text-xs sm:text-sm md:text-lg text-white",
  btnStyle:
    "bg-yellow-500 text-white px-3 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 font-semibold text-xs sm:text-sm md:text-base hover:bg-yellow-600 transition cursor-pointer",
  positionX: "left-2 sm:left-6 md:left-10",
  positionY: "bottom-2 sm:bottom-8 md:bottom-14 lg:bottom-16"
  },

  {
  img: "src/assets/BannerImg/slide-img8.jpg",
  title: "Shine Like Never Before",
  desc: "Discover breathtaking diamond necklaces",
  btn: "Explore Now",
  link: "/necklace",
  titleStyle:
    "text-xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent drop-shadow-xl",
  descStyle:
    "text-xs sm:text-sm md:text-lg text-white",
  btnStyle:
    "border border-white text-white px-3 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 font-semibold text-xs sm:text-sm md:text-base hover:bg-white hover:text-black transition cursor-pointer",
  positionX: "left-2 sm:left-6 md:left-10",
  positionY: "bottom-2 sm:bottom-8 md:bottom-14 lg:bottom-16"
  }

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
            className="w-[85%]! sm:w-[80%]! md:w-[70%]! lg:w-[80%]! relative"
          >
        <Link to={slide.link}>
            <img
              src={slide.img}
              alt=""
              className="w-full h-[180px] sm:h-60 md:h-[350px] lg:h-[550px] object-cover rounded-xl shadow-xl"
            />

          <div
            className={`absolute ${slide.positionX} ${slide.positionY} space-y-2 max-w-[260px] sm:max-w-[350px]`}
            >
            <h2 className={slide.titleStyle}>{slide.title}</h2>
            <p className={slide.descStyle}>{slide.desc}</p>
            <button className={slide.btnStyle}>{slide.btn}</button>
          </div>
        </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideBanner;
