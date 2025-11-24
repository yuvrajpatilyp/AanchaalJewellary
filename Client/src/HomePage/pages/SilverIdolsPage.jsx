import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Resuable/Card";

const SilverIdolsPage = () => {
  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  const productsData = [
    {
      title: "Shri Ganesh Silver Idol",
      newprice: "9,999",
      oldprice: "10,999",
      image: "src/assets/product1.jpg",
      hoverImage: "",
      Bestseller: true,
    },
    {
      title: "Shri Lakshmi Silver Idol",
      newprice: "10,499",
      oldprice: "11,299",
      image: "src/assets/product2.jpg",
      hoverImage: "",
      Bestseller: false,
    },
    {
      title: "Auspicious Ganesha and Lakshmi Silver Idol",
      newprice: "15,699",
      oldprice: "16,999",
      image: "src/assets/product3.jpg",
      hoverImage: "",
      Bestseller: true,
    },
    {
      title: "Divine Ganesh Silver Idol",
      newprice: "11,299",
      oldprice: "12,999",
      image: "src/assets/product4.webp",
      hoverImage: "",
      Bestseller: false,
    },
    {
      title: "Divine Lakshmi Silver Idol",
      newprice: "6,299",
      oldprice: "7,999",
      image: "src/assets/product5.webp",
      hoverImage: "",
      Bestseller: false,
    },
  ];

  const [products, setProducts] = useState(productsData);

  const handleSort = (e) => {
    const value = e.target.value;
    const parse = (p) => Number(p.replace(/,/g, ""));
    if (value === "low-high") setProducts([...products].sort((a, b) => parse(a.newprice) - parse(b.newprice)));
    if (value === "high-low") setProducts([...products].sort((a, b) => parse(b.newprice) - parse(a.newprice)));
    if (value === "new") setProducts([...productsData]);
    if (value === "bestseller") setProducts(productsData.filter((item) => item.Bestseller));
  };

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
      
                <div className="flex gap-4 mt-2 md:mt-0">
      
                  <select
                    onChange={handleSort}
                    className="border px-4 py-2 rounded-md shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <option>Sort By: Best Matches</option>
                    <option value="low-high">Low to High</option>
                    <option value="high-low">High to Low</option>
                    <option value="new">New Arrivals</option>
                    <option value="bestseller">Bestseller</option>
                  </select>
                </div>
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
