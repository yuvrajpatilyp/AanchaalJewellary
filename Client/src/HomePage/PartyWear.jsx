import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SortDropdown from '../Reusable/SortDropdown';
import Card from '../Reusable/Card';

function PartyWear() {
  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  const productsData = [
    {
      title: "Classy Ring Mangalsutra",
      newprice: "1,55,999",
      oldprice: "1,56,999",
      image: "src/assets/partywear/partywear1.webp",
      hoverImage: "src/assets/partywear/partywear2.webp",
      Bestseller: "Bestseller",
    },
    {
      title: "Pyramid Harmony Gold Mangalsutra",
      newprice: "60,499",
      oldprice: "61,299",
      image: "src/assets/partywear/partywear3.webp",
      hoverImage: "src/assets/partywear/partywear4.webp",
      Bestseller: false,
    },
    {
      title: "Hexa Charm Diamond Mangalsutra",
      newprice: "1,15,699",
      oldprice: "1,16,999",
      image: "src/assets/partywear/partywear5.webp",
      hoverImage: "src/assets/partywear/partywear6.webp",
      Bestseller: true,
    },
    {
      title: "Floral Spark Diamond Mangalsutra",
      newprice: "1,01,299",
      oldprice: "1,02,999",
      image: "src/assets/partywear/partywear7.webp",
      hoverImage: "src/assets/partywear/partywear8.webp",
      Bestseller: true,
    },
    {
      title: "Sparkling Simplicity Diamond Mangalsutra",
      newprice: "69,299",
      oldprice: "7,999",
      image: "src/assets/partywear/partywear9.webp",
      hoverImage: "src/assets/partywear/partywear10.jpg",
      Bestseller: false,
    },
    {
      title: "Classy Ring Mangalsutra",
      newprice: "1,55,999",
      oldprice: "1,56,999",
      image: "src/assets/partywear/partywear11.webp",
      hoverImage: "src/assets/partywear/partywear12.webp",
      Bestseller: "Bestseller",
    },
    {
      title: "Pyramid Harmony Gold Mangalsutra",
      newprice: "60,499",
      oldprice: "61,299",
      image: "src/assets/partywear/partywear13.webp",
      hoverImage: "src/assets/partywear/partywear14.webp",
      Bestseller: false,
    },
    {
      title: "Hexa Charm Diamond Mangalsutra",
      newprice: "1,15,699",
      oldprice: "1,16,999",
      image: "src/assets/partywear/partywear15.webp",
      hoverImage: "src/assets/partywear/partywear16.jpg",
      Bestseller: true,
    },
    {
      title: "Floral Spark Diamond Mangalsutra",
      newprice: "1,01,299",
      oldprice: "1,02,999",
      image: "src/assets/partywear/partywear17.webp",
      hoverImage: "src/assets/partywear/partywear18.webp",
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
          <span className="font-semibold text-black">Party Wear</span>
        </div>

        {/* Heading + Sort */}
        <div className="flex flex-col md:flex-row justify-between mt-5 items-start md:items-center gap-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            party wear collections
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

export default PartyWear;
