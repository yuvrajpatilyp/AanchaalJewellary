
 import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Reusable/Card";

function PearlPage() {
  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  const productsData = [
       {
     title:"Silver Pearl Grace Drop Necklace",
     newprice:"2,699",
     oldprice:"5,999",
     image:"src/assets/pearl1.webp",
     hoverImage:"src/assets/pearl1hover.webp",
     Bestseller:"bestseller",
     onAddToCart: handleAddToCart,
    },
    {
     title:"Silver Pearl Glance Bracelet",
     newprice:"4,699",
     oldprice:"5,999",
     image:"src/assets/pearl11.webp",
     hoverImage:"src/assets/pearl11hover.webp",
     
     onAddToCart: handleAddToCart,
    },
    {
     title:"Silver Pearls Make Me Happy Set",
     newprice:"6,699",
     oldprice:"7,999",
     image:"src/assets/pearl10.webp",
     hoverImage:"src/assets/pearl10hover.webp",
     
     onAddToCart: handleAddToCart,
    },
    {
     title:"Silver Pearl Drop Earrings",
     newprice:"2,699",
     oldprice:"5,999",
     image:"src/assets/pearl9.webp",
     hoverImage:"src/assets/pearl9hover.webp",
     
     onAddToCart: handleAddToCart,
    },
     {
     title:"Silver Black Pearl Necklace",
     newprice:"6,699",
     oldprice:"7,999",
     image:"src/assets/pearl8.webp",
     hoverImage:"src/assets/pearl8hover.webp",
     
     onAddToCart: handleAddToCart,
    },
    {
     title:"Silver Pearl Pendant with Link Chain",
     newprice:"3,699",
     oldprice:"5,999",
     image:"src/assets/pearl7.webp",
     hoverImage:"src/assets/pearl7hover.webp",
    
     onAddToCart: handleAddToCart,
    },
    {
     title:"Silver Pearl Connected Bracelet ",
     newprice:"3,699",
     oldprice:"5,999",
     image:"src/assets/pearl5.webp",
     hoverImage:"src/assets/pearl5hover.webp",
     
     onAddToCart: handleAddToCart,
    },
    {
     title:"Charming Pearl Set with Link Chain",
     newprice:"6,699",
     oldprice:"7,999",
     image:"src/assets/pearl4.webp",
     hoverImage:"src/assets/pearl4hover.webp",
     
     onAddToCart: handleAddToCart,
    },
    {
     title:"Silver Vibing Pearl Earrings",
     newprice:"6,699",
     oldprice:"7,999",
     image:"src/assets/pearl6.webp",
     hoverImage:"src/assets/pearl6hover.webp",
     
     onAddToCart: handleAddToCart,
    },
    {
     title:"Moonlight Pearl Set",
     newprice:"6,699",
     oldprice:"7,999",
     image:"src/assets/pearl3.webp",
     hoverImage:"src/assets/pearl3hover.webp",
     
     onAddToCart: handleAddToCart,
    },
    {
     title:"Silver White Pearl Moon Necklace",
     newprice:"6,699",
     oldprice:"7,999",
     image:"src/assets/pearl2.jpg",
     hoverImage:"src/assets/pearl2hover.webp",
     
     onAddToCart: handleAddToCart,
    },
  ];
  
const [products, setProducts] = useState(productsData);

const parsePrice = (price) => {
  return Number(price.replace(/,/g, ""));
};

const handleSort = (e) => {
  const value = e.target.value;

  if (value === "low-high") {
    setProducts(
      [...products].sort((a, b) => parsePrice(a.newprice) - parsePrice(b.newprice))
    );
  }

  if (value === "high-low") {
    setProducts(
      [...products].sort((a, b) => parsePrice(b.newprice) - parsePrice(a.newprice))
    );
  }

  if (value === "new") {
    setProducts([...productsData]);
  }
};

  return (
    <div className="w-full">
      <div className="relative w-full h-[260px] sm:h-[350px] md:h-[450px] lg:h-[520px] overflow-hidden shadow-xl">
        <img
          src="src/assets/slide-img6.jpg"
          className="w-full h-full object-cover"
          alt="Pearl Banner"
        />

       <div
         className="
         absolute right-2 sm:right-6 md:right-10 bottom-2 sm:bottom-8 md:bottom-14 lg:bottom-16 text-black space-y-2 sm:space-y-3  drop-shadow-xl" >
       <h1
        className=" text-xl sm:text-3xl md:text-5xl font-bold " >
        Elegance in Every Pearl
       </h1>

       <p className=" text-[10px] sm:text-sm md:text-lg max-w-[260px] sm:max-w-[320px] " >
         Experience luxury crafted for forever moments.
       </p>

       <button className=" border border-black text-black px-3 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 text-[10px] sm:text-sm md:text-base font-semibold hover:bg-white hover:text-blacktransition cursor-pointer">
        Shop Now
       </button>
     </div>
    </div>

      {/*Sort By*/}
         <div className="max-w-6xl mx-auto mt-6 px-3 md:px-0">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <span>{">"}</span>
          <span className="font-semibold text-black">Pearl Jewellery</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-5 items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            Pearl Jewellery <span className="text-gray-500">({products.length} Results)</span>
          </h1>

          <div className="flex gap-4 mt-2 md:mt-0">

            <select
              onChange={handleSort}
              className="border px-4 py-2 rounded-md shadow-sm hover:shadow-md cursor-pointer"
            >
              <option>Sort By: Best Matches</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
              <option value="new">New Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      {/* product card list */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 py-10">
        {products.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            newprice={`₹${item.newprice}`}
            oldprice={`₹${item.oldprice}`}
            image={item.image}
            hoverImage={item.hoverImage}
            Bestseller={item.Bestseller}
            onAddToCart={item.onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default PearlPage;
