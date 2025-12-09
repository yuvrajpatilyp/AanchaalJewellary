import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SortDropdown from '../Reusable/SortDropdown';
import Card from '../Reusable/Card';
function Womenscollection() {
    const handleAddToCart = () => {
      console.log("Added to cart");
    };
  
    const productsData = [
      {
        title: "Classy Ring Mangalsutra",
        newprice: "1,55,999",
        oldprice: "1,56,999",
        image: "src/assets/Womenscollection/womenscoll1.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll2.webp",
        Bestseller: "Bestseller",
      },
      {
        title: "Pyramid Harmony Gold Mangalsutra",
        newprice: "60,499",
        oldprice: "61,299",
        image: "src/assets/Womenscollection/womenscoll3.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll4.webp",
        Bestseller: false,
      },
      {
        title: "Hexa Charm Diamond Mangalsutra",
        newprice: "1,15,699",
        oldprice: "1,16,999",
               image: "src/assets/Womenscollection/womenscoll5.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll6.webp",
        Bestseller: true,
      },
      {
        title: "Floral Spark Diamond Mangalsutra",
        newprice: "1,01,299",
        oldprice: "1,02,999",
        image: "src/assets/Womenscollection/womenscoll7.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll8.webp",
        Bestseller: true,
      },
      {
        title: "Sparkling Simplicity Diamond Mangalsutra",
        newprice: "69,299",
        oldprice: "7,999",
        image: "src/assets/Womenscollection/womenscoll9.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll10.webp",
        Bestseller: false,
      },
            {
        title: "Classy Ring Mangalsutra",
        newprice: "1,55,999",
        oldprice: "1,56,999",
        image: "src/assets/Womenscollection/womenscoll11.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll12.webp",
        Bestseller: "Bestseller",
      },
      {
        title: "Pyramid Harmony Gold Mangalsutra",
        newprice: "60,499",
        oldprice: "61,299",
        image: "src/assets/Womenscollection/womenscoll13.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll14.webp",
        Bestseller: false,
      },
      {
        title: "Hexa Charm Diamond Mangalsutra",
        newprice: "1,15,699",
        oldprice: "1,16,999",
        image: "src/assets/Womenscollection/womenscoll15.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll16.webp",
        Bestseller: true,
      },
      {
        title: "Floral Spark Diamond Mangalsutra",
        newprice: "1,01,299",
        oldprice: "1,02,999",
        image: "src/assets/Womenscollection/womenscoll17.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll18.webp",
        Bestseller: true,
      },
      {
        title: "Sparkling Simplicity Diamond Mangalsutra",
        newprice: "69,299",
        oldprice: "7,999",
        image: "src/assets/Womenscollection/womenscoll19.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll20.webp",
        Bestseller: false,
      },
            {
        title: "Floral Spark Diamond Mangalsutra",
        newprice: "1,01,299",
        oldprice: "1,02,999",
        image: "src/assets/Womenscollection/womenscoll21.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll22.webp",
        Bestseller: true,
      },
      {
        title: "Sparkling Simplicity Diamond Mangalsutra",
        newprice: "69,299",
        oldprice: "7,999",
        image: "src/assets/Womenscollection/womenscoll23.webp",
        hoverImage: "src/assets/Womenscollection/womenscoll24.webp",
        Bestseller: false,
      }
    ];
  
    const [products, setProducts] = useState(productsData);
  return (
  <div className="w-full">
      {/* Navigation + Sort */}
        <div className="max-w-6xl mx-auto mt-6 px-3 md:px-0">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Link to="/" className="hover:underline">Home</Link>
                <span>{">"}</span>
                <span className="font-semibold text-black">womens collection</span>
              </div>
      
              <div className="flex flex-col md:flex-row justify-between mt-5 items-center">
                <h1 className="text-2xl md:text-3xl font-bold">
                Womens speacial <span className="text-gray-500">({products.length} Results)</span>
                </h1>
                 <SortDropdown
                     productsData={productsData}
                     onSort={(updatedList) => setProducts(updatedList)}
                  />
                
              </div>
            </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 py-10">
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
  


export default Womenscollection