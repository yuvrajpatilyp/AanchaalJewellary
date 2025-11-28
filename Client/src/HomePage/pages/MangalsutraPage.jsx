import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Reusable/Card";
import SortDropdown from "../../Reusable/SortDropdown";

const MangalsutraPage = () => {
  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  const productsData = [
    {
      title: "Classy Ring Mangalsutra",
      newprice: "1,55,999",
      oldprice: "1,56,999",
      image: "src/assets/product6.jpg",
      hoverImage: "src/assets/product6.jpg",
      Bestseller: "Bestseller",
    },
    {
      title: "Pyramid Harmony Gold Mangalsutra",
      newprice: "60,499",
      oldprice: "61,299",
      image: "src/assets/product7.webp",
      hoverImage: "src/assets/product7.webp",
      Bestseller: false,
    },
    {
      title: "Hexa Charm Diamond Mangalsutra",
      newprice: "1,15,699",
      oldprice: "1,16,999",
      image: "src/assets/product8.webp",
      hoverImage: "src/assets/product8.webp",
      Bestseller: true,
    },
    {
      title: "Floral Spark Diamond Mangalsutra",
      newprice: "1,01,299",
      oldprice: "1,02,999",
      image: "src/assets/product9.webp",
      hoverImage: "src/assets/product9.webp",
      Bestseller: true,
    },
    {
      title: "Sparkling Simplicity Diamond Mangalsutra",
      newprice: "69,299",
      oldprice: "7,999",
      image: "src/assets/product10.webp",
      hoverImage: "src/assets/product10.webp",
      Bestseller: false,
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
                <span className="font-semibold text-black"> Silver Idols</span>
              </div>
      
              <div className="flex flex-col md:flex-row justify-between mt-5 items-center">
                <h1 className="text-2xl md:text-3xl font-bold">
                Silver Idols <span className="text-gray-500">({products.length} Results)</span>
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

export default MangalsutraPage;
