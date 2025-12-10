// import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { Link } from 'react-router-dom';

// function Categories() {
//       const slides = [
//   {
//   img: "src/assets/slide-img2.jpg",
//   positionX: " sm:right-6 md:right-10",
//   positionY: "bottom-2 sm:bottom-8 md:bottom-14 lg:bottom-16"
//   },

//   {
//   img: "src/assets/slide-img5.jpg",
//   positionX: "sm:left-4 md:left-8",
//   positionY: "bottom-2 sm:bottom-4 md:bottom-10 lg:bottom-14"
//   },
   
//   {
//   img: "src/assets/slide-img3.jpg",
//   positionX: " sm:left-6 md:left-10",
//   positionY: "bottom-2 sm:bottom-8 md:bottom-14 lg:bottom-16"
//   },

//   {
//   img: "src/assets/slide-img4.jpg",
//   positionX: " sm:left-6 md:left-10",
//   positionY: "bottom-2 sm:bottom-8 md:bottom-14 lg:bottom-16"
//   },

//   {
//   img: "src/assets/slide-img8.jpg",
//   positionX: "left-2 sm:left-6 md:left-10",
//   positionY: "bottom-2 sm:bottom-8 md:bottom-14 lg:bottom-16"
//   }

//   ];
//   return (
//     <>
//       <div className="w-full py-5">
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 1000 }}
//         loop={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         spaceBetween={20}
//         className="w-full"
//       >
//         {slides.map((slide, i) => (
//           <SwiperSlide
//             key={i}
//             className="w-[85%]! sm:w-[80%]! md:w-[70%]! lg:w-[80%]! relative"
//           >
      
//             <img
//               src={slide.img}
//               alt=""
//               className="w-full h-[180px] sm:h-60 md:h-[350px] lg:h-[550px] object-cover rounded-xl shadow-xl"
//             />

//           <div
//             className={`absolute ${slide.positionX} ${slide.positionY} space-y-2 max-w-[260px] sm:max-w-[350px]`}
//             >
//           </div>
        
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//     </>
//   )
// }

// export default Categories