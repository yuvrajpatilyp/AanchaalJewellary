import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Reusable/Card";

const ShopBestseller = () => {
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
     Bestseller:"Bestseller",
     onAddToCart: handleAddToCart,
    },
    {
      title:"Silver Black Pearl Necklace",
     newprice:"6,699",
     oldprice:"7,999",
     image:"src/assets/pearl8.webp",
     hoverImage:"src/assets/pearl8hover.webp",
     Bestseller:"BestSeller",
     onAddToCart: handleAddToCart,
    },
    {
      title: "Radiant Aura Gold Stud Earrings",
      newprice: "42,699",
      oldprice: "45,999",
      image:"src/assets/earrings5.webp",
      hoverImage:"",
      Bestseller:"BestSeller",
      onAddToCart: handleAddToCart,
    },
    {
      title: "Hexa Charm Diamond Mangalsutra",
      newprice: "1,15,699",
      oldprice: "1,16,999",
      image: "src/assets/product8.webp",
      hoverImage: "",
      Bestseller:"BestSeller",
      onAddToCart: handleAddToCart,
    },
    {
     title:"Silver White Pearl Moon Necklace",
     newprice:"6,699",
     oldprice:"7,999",
     image:"src/assets/pearl2.jpg",
     hoverImage:"src/assets/pearl2hover.webp",
     Bestseller:"BestSeller",
     onAddToCart: handleAddToCart,
    },
    {
      title: "Golden Petal Gold Drop Earrings",
      newprice: "66,699",
      oldprice: "67,999",
      image: "src/assets/earrings9.webp",
      hoverImage: "",
      Bestseller:"Bestseller",
      onAddToCart: handleAddToCart,
    }
  ];

  const [products, setProducts] = useState(productsData);

  const handleSort = (e) => {
    const value = e.target.value;
    if (value === "low-high") setProducts([...products].sort((a, b) => parse(a.newprice) - parse(b.newprice)));
    if (value === "high-low") setProducts([...products].sort((a, b) => parse(b.newprice) - parse(a.newprice)));
    if (value === "new") setProducts([...productsData]);
  };

  return (
    <div className="w-full">
      {/* Sort by */}
        <div className="max-w-6xl mx-auto mt-6 px-3 md:px-0">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Link to="/" className="hover:underline">Home</Link>
                <span>{">"}</span>
                <span className="font-semibold text-black">BestSeller</span>
              </div>
      
              <div className="flex flex-col md:flex-row justify-between mt-5 items-center">
                <h1 className="text-2xl md:text-3xl font-bold">
                BestSeller <span className="text-gray-500">({products.length} Results)</span>
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

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 py-10">
        {products.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            newprice={`₹${item.newprice}`}
            oldprice={`₹${item.oldprice}`}
            image={item.image}
            hoverImage={item.hoverImage}
            Bestseller={item.Bestseller}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopBestseller;
