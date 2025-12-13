import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Reusable/Card";
import SortDropdown from "../../Reusable/SortDropdown";

const SilverIdolsPage = () => {
  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  const productsData = [
    {
      title: "Shri Ganesh Silver Idol",
      newprice: "9,999",
      oldprice: "10,999",
      image: "src/assets/NewarrivalImg/product1.jpg",
      hoverImage: "",
      Bestseller: "bestseller",
    },
    {
      title: "Shri Lakshmi Silver Idol",
      newprice: "10,499",
      oldprice: "11,299",
      image: "src/assets/NewarrivalImg/product2.jpg",
      hoverImage: "",
      Bestseller: false,
    },
    {
      title: "Auspicious Ganesha and Lakshmi Silver Idol",
      newprice: "15,699",
      oldprice: "16,999",
      image: "src/assets/NewarrivalImg/product3.jpg",
      hoverImage: "",
      Bestseller: true,
    },
    {
      title: "Divine Ganesh Silver Idol",
      newprice: "11,299",
      oldprice: "12,999",
      image: "src/assets/NewarrivalImg/product4.webp",
      hoverImage: "",
      Bestseller: false,
    },
    {
      title: "Divine Lakshmi Silver Idol",
      newprice: "6,299",
      oldprice: "7,999",
      image: "src/assets/NewarrivalImg/product5.webp",
      hoverImage: "",
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

export default SilverIdolsPage;
