import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SortDropdown from '../Reusable/SortDropdown';
import Card from '../Reusable/Card';

function Tradditional() {
  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  const productsData = [
    {
      title: "Classy  Earring ",
      newprice: "1,55,999",
      oldprice: "1,56,999",
      image: "src/assets/tradditionalwear/tradditionalwear1.webp",
      hoverImage: "src/assets/Tradditionalwear/tradditionalwear2.webp",
      Bestseller: "Bestseller",
    },
    {
      title: "Pyramid Harmony Gold Mangalsutra",
      newprice: "60,499",
      oldprice: "61,299",
      image: "src/assets/tradditionalwear/tradditionalwear3.webp",
      hoverImage: "src/assets/Tradditionalwear/tradditionalwear4.webp",
      Bestseller: false,
    },
    {
      title: "earrings",
      newprice: "1,15,699",
      oldprice: "1,16,999",
      image: "src/assets/tradditionalwear/tradditionalwear5.webp",
      hoverImage: "src/assets/Tradditionalwear/tradditionalwear6.webp",
      Bestseller: true,
    },
    {
      title: "gold neacklace",
      newprice: "1,01,299",
      oldprice: "1,02,999",
      image: "src/assets/tradditionalwear/tradditionalwear7.webp",
      hoverImage: "src/assets/Tradditionalwear/tradditionalwear8.webp",
      Bestseller: true,
    },
    {
      title: "gold rounded neacklace",
      newprice: "69,299",
      oldprice: "7,999",
      image: "src/assets/tradditionalwear/tradditionalwear9.jpg",
      hoverImage: "src/assets/Tradditionalwear/tradditionalwear10.jpg",
      Bestseller: false,
    },
    {
      title: "neacklace and ring",
      newprice: "1,55,999",
      oldprice: "1,56,999",
      image: "src/assets/tradditionalwear/tradditionalwear11.webp",
      hoverImage: "src/assets/Traditionalwear/traditionalwear12.webp",
      Bestseller: "Bestseller",
    },
    {
      title: "Pyramid Harmony Gold Mangalsutra",
      newprice: "60,499",
      oldprice: "61,299",
      image: "src/assets/tradditionalwear/tradditionalwear13.webp",
      hoverImage: "src/assets/Traditionalwear/traditionalwear14.webp",
      Bestseller: false,
    },
    {
      title: "tredditional neacklace",
      newprice: "1,15,699",
      oldprice: "1,16,999",
      image: "src/assets/traditionalwear/traditionalwear15.jpg",
      hoverImage: "src/assets/Traditionalwear/traditionalwear16.webp",
      Bestseller: true,
    },
    {
      title: "gold earrings",
      newprice: "1,01,299",
      oldprice: "1,02,999",
      image: "src/assets/traditionalwear/traditionalwear17.jpg",
      hoverImage: "src/assets/Traditionalwear/traditionalwear18.webp",
      Bestseller: true,
    },
  ];

  const [products, setProducts] = useState(productsData);

  return (
    <div className="w-full">

      {/* Navigation + Sort */}
      <div className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 md:px-8">

        {/* breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <span>{">"}</span>
          <span className="font-semibold text-black">Tradditional wear</span>
        </div>

        {/* Heading + Sort */}
        <div className="flex flex-col md:flex-row justify-between mt-5 items-start md:items-center gap-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Tradditional Jewellery
          </h1>

          <SortDropdown
            productsData={productsData}
            onSort={(updatedList) => setProducts(updatedList)}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          gap-4 sm:gap-6 px-3 sm:px-4 md:px-6 lg:px-8py-10">
        {products.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            newprice={`₹${item.newprice}`}
            oldprice={`₹${item.oldprice}`}
            image={item.image}
            hoverImage={item.hoverImage}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

    </div>
  );
};

export default Tradditional;
