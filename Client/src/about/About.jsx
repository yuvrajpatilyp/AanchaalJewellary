import React from "react";
import { useState, useEffect } from "react";
import { TbTruckDelivery, TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";


// Reusable Circle Icon
const CircleIcon = ({ icon }) => (
  <div className=" flex justify-center items-center bg-gray-300 p-3 rounded-full">
    <div
      className="bg-black p-4 rounded-full text-white text-3xl transition-all duration-300
                 hover:bg-white hover:text-black hover:scale-110"
    >
      {React.createElement(icon)}
    </div>
  </div>
);

// Cards Data 
const cardsData = [
  { id: 1, icon: TbTruckDelivery, number: "10.5k", text: "Sallers active our site" },
  { id: 2, icon:  FaPhoneAlt, number: "33k", text: "Support 9am to 6pm IST" },
  { id: 3, icon: TbUsers, number: "45.5k", text: "Customer active in our site" },
  { id: 4, icon: FaSackDollar, number: "25k", text: "Anual gross sale in our site" },
];


export default function AboutPage() {
    const aboutImages = [
  "src/assets/image/img1.webp",
  "src/assets/image/img2.webp",
  "src/assets/image/img3.jpg",
  "src/assets/image/img4.jpg",
];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % aboutImages.length);
  }, 3000); 

  return () => clearInterval(interval);
}, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
{/* Left Side : two images */}
<div className="md:col-span-1 w-full flex items-start justify-center md:justify-start md:-ml-20">

  <div className="flex gap-6 items-start">

    {/* Left image */}
    <img
      src="src/assets/image/about1.jpg"
      alt="img-1"
      className="w-[150px] md:w-[332px] rounded-sm shadow-lg border border-gray-200"
    />

    {/* Right image  */}
    <img
      src="src/assets/image/about2.jpg"
      alt="img-2"
      className="w-[150px] md:w-[332px] rounded-sm shadow-lg border border-gray-200 translate-y-12"
    />
      </div>
       </div>

        {/* Right Side - content */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 md:ml-64 text-center md:text-left">
                       About Us</h2>
            <div className="flex-1 border-b border-amber-400/80"></div>
          </div>

          <div className="mt-6 md:ml-64 text-gray-900 leading-relaxed space-y-3 text-sm md:text-base text-center md:text-left px-2">

            <p>
              Started in 2002, Brado Jewellery is India's leading jewellery brand with a robust online
              presence and an expansive network of stores across India. Brado Jewellery has succeeded by
              delivering premium quality, flawlessly crafted jewellery at affordable prices — a value
              that remains unmatched in an increasingly busy marketplace.
            </p>
            <p>
             We take pride in our commitment to rare and traditional art, crafts
            and narratives, creating contemporary accessories for its discerning patrons.
            Handcrafted masterpieces, affordable luxury, unique artistic jewellery from some
            of the finest designers in the country are now at your fingertips with 
            Aanchal Jewellery.
            </p>
            <p>
              The only brand with a versatile line of jewellery, perfect sartorial companions to 
              every woman and man. Created by a team of exceptional designers, crafts
            people and connoisseurs of style, Aanchal Jewellery features jewellery for those
            who know their style from fashion fads and are willing to spark a trend rather
            than just follow it. 
            </p>          
          </div>
        </div>      
</div>


{/* New Section Below About */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 items-center ">

  {/* Left Side Text */}
  <div className="space-y-4 text-gray-800">
    <h1 className="text-2xl md:text-2xl font-semibold ">Our Vision</h1>
   <p className="text-sm md:text-base leading-relaxed">
      We strive to give you the best fashion jewellery products which are
       strictly copper alloy based so that you can use them for years.
       We strive to provide the best jewellery buying experience 
       for you be it online or offline.
    </p> 
  </div>

  {/* Right Side Image */}
  <div className="flex-1 flex justify-center md:justify-end">
    
  <img
    src={aboutImages[currentImage]}
    alt="About us"
    className="shadow-xl w-[320px] h-[250px] md:w-[450px] md:h-[450px] object-cover rounded-sm transition-transform duration-500 hover:scale-105 md:translate-x-[-14px]"
/>
  </div>
</div>

{/*  Stats Cards Section  */}
      <section className="mb-20 mt-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {cardsData.map(({ id, icon, number, text, link }) => (
            <Link
              key={id}
              to={link}
              className="bg-white border border-gray-200  shadow-md hover:shadow-xl
                         w-[230px] h-[230px] flex flex-col justify-center items-center text-center 
                         transition-all duration-300 hover:bg-pink-500 hover:text-white group"
            >
              <div className="mb-4">
                 <CircleIcon icon={icon} /> 
              </div>
              <div className="text-2xl font-bold">{number}</div>
              <div className="text-sm mt-1">{text}</div>
            </Link>
          ))}
        </div>
      </section>

      {/*  jwellery and Instagram  section */} 
        <div className="mt-10">
  
  <h4 className="text-xl font-semibold text-gray-800 mb-6 justify-center text-center -mt-15">Follow us on Instagram <br/> @Anchal jewellery</h4>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { id: 1, img: "src/assets/image/earing.webp", link: "https://instagram.com" },
      { id: 2, img: "src/assets/image/necklase.jpg", link: "https://instagram.com" },
      { id: 3, img: "src/assets/image/bengles.webp", link: "https://instagram.com" },
      { id: 4, img: "src/assets/image/pendant.jpg", link: "https://instagram.com" },
      { id: 5, img: "src/assets/image/bindi.jpg", link: "https://instagram.com" },
      { id: 6, img: "src/assets/image/necklese2.webp", link: "https://instagram.com" },
      { id: 7, img: "src/assets/image/leg.webp", link: "https://instagram.com" },
      { id: 8, img: "src/assets/image/magtika.webp", link: "https://instagram.com" },
    ].map((card) => (
      <div
        key={card.id}
        className="relative group overflow-hidden cursor-pointer rounded-md"
      >
        {/* Image */}
        <img
          src={card.img}
          alt="gallery"
          className="w-full h-64 object-cover rounded-md"
        />

        {/* Hover Instagram */}
<a
  href={card.link}
  target="_blank"
  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
             flex items-center justify-center transition-all duration-500"
>
  <FaInstagram
    className="text-white text-4xl transform translate-y-10 group-hover:translate-y-0 transition-all duration-700"
  />
</a>

    </div>
    ))}
  </div>
</div>
</section>
  );
}
