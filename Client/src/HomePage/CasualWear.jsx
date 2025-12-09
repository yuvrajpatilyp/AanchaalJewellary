import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SortDropdown from '../Reusable/SortDropdown';
import Card from '../Reusable/Card';

function CasualWear() {
   const handleAddToCart = () => {
              console.log("Added to cart");
            };
          
            const productsData = [
              {
                title: "simple neacklace",
                newprice: "1,55,999",
                oldprice: "1,56,999",
                image: "src/assets/casualNeacklace/casualwear1.webp",
                hoverImage: "src/assets/CasualNeacklace/casualwear2.webp",
                Bestseller: "Bestseller",
              },
              {
                title: " daimond  Mangalsutra",
                newprice: "60,499",
                oldprice: "61,299",
                image: "src/assets/casualNeacklace/casualwear3.webp",
                hoverImage: "src/assets/CasualNeacklace/casualwear4.webp",
                Bestseller: false,
              },
              {
                title: "Hexa Charm Diamond Mangalsutra",
                newprice: "1,15,699",
                oldprice: "1,16,999",
                image: "src/assets/casualNeacklace/casualwear5.webp",
                hoverImage: "src/assets/CasualNeacklace/casualwear6.webp",
                Bestseller: true,
              },
              {
                title: " Spark Diamond band",
                newprice: "1,01,299",
                oldprice: "1,02,999",
                image: "src/assets/casualNeacklace/casualwear7.webp",
                hoverImage: "src/assets/CasualNeacklace/casualwear8.webp",
                Bestseller: true,
              },
              {
                title: "Sparkling Simplicity Diamond band",
                newprice: "69,299",
                oldprice: "7,999",
                image: "src/assets/casualNeacklace/casualwear9.webp",
                hoverImage: "src/assets/CasualNeacklace/casualwear10.jpg",
                Bestseller: false,
              },
                    {
                title: "Classy Ring ",
                newprice: "1,55,999",
                oldprice: "1,56,999",
                image: "src/assets/casualNeacklace/casualwear11.webp",
                hoverImage: "src/assets/CasualNeacklace/casualwear12.webp",
                Bestseller: "Bestseller",
              },
              {
                title: "Pyramid Harmony Gold Mangalsutra",
                newprice: "60,499",
                oldprice: "61,299",
                image: "src/assets/casualNeacklace/casualwear13.webp",
                hoverImage: "src/assets/CasualNeacklace/casualwear14.webp",
                Bestseller: false,
              },
              {
                title: "Hexa Charm Diamond Mangalsutra",
                newprice: "1,15,699",
                oldprice: "1,16,999",
                image: "src/assets/casualNeacklace/casualwear15.webp",
                hoverImage: "src/assets/CasualNeacklace/casualwear16.webp",
                Bestseller: true,
              },
              {
                title: "Floral Spark Diamond Mangalsutra",
                newprice: "1,01,299",
                oldprice: "1,02,999",
                image: "src/assets/casualNeacklace/casualwear17.webp",
                hoverImage: "src/assets/CasualNeacklace/casualwear18sssssss.webp",
                Bestseller: true,
              },
               ];
          
            const [products, setProducts] = useState(productsData);

  return (
 <div className="w-full">
      {/* Navigation + Sort */}
        <div className="max-w-6xl mx-auto mt-6 px-3 md:px-0">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Link to="/" className="hover:underline">Home</Link>
                <span>{">"}</span>
                <span className="font-semibold text-black">casual neacklaces</span>
              </div>
      
              <div className="flex flex-col md:flex-row justify-between mt-5 items-center">
                <h1 className="text-2xl md:text-3xl font-bold">
                 casual wear  <span className="text-gray-500"></span>
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


export default CasualWear