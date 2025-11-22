import React from "react";
import { Heart } from "lucide-react";

function Card({ title, newprice, oldprice, image, hoverImage,Bestseller, onAddToCart }) {

  function handleAddToCart() {
    onAddToCart({ title, newprice, oldprice, image, Bestseller, qty: 1 });
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative bg-white  overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">

        {/* Image  */}
        <div className="relative w-full h-80 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />

          <img
            src={hoverImage}
            alt="hover"
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0
            group-hover:opacity-100 transition-opacity duration-500"
          />

         {Bestseller && (
            <span
            className="absolute top-2 left-[-6px] bg-pink-600 text-white text-1xl 
            font-semibold px-3 py-1 rounded-tr-lg rounded-br-lg shadow-md">
            {Bestseller}
            </span>
         )}

          {/* Heart */}
          <button className="absolute top-3 right-3 bg-white p-2 rounded-full 
            shadow opacity-0 group-hover:opacity-100 transition">
            <Heart size={18} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Text / button */}
      <div className="px-4 py-3">
        
        {/* Underline */}
        <h2
          className="text-lg font-semibold text-gray-800 text-left relative 
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 
          group-hover:after:w-full after:bg-gray-400 after:transition-all after:duration-300 "
        >
          {title}
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2 ">
          <p className="text-black font-bold">{newprice}</p>
          <p className="text-gray-400 line-through">{oldprice}</p>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full bg-gradient-to-r from-pink-300 via-pink-500 to-pink-700 text-white py-2 rounded-md font-semibold transition-all 
          hover:bg-pink-800 hover:scale-105 hover:from-pink-600 hover:via-pink-700 hover:to-pink-900 ">
          Add To Cart
        </button>

      </div>
    </div>
  );
}

export default Card;
