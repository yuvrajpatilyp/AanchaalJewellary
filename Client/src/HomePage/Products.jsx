import React from "react";
import Card from "./Card";

function Products() {
  function handleAddToCart(product) {
    console.log("Added to Cart:", product);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Trending Jewellery</h1>

      {/* GRID LAYOUT FOR CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card
          title="Diamond Ring"
          newprice="₹25,000"
          oldprice="₹30,000"
          image="src\assets\Bangles5.webp"
          hoverImage="src\assets\bangles6.webp"
          Bestseller="Bestseller"
          onAddToCart={handleAddToCart}
        />

        <Card
          title="Gold Necklace"
          newprice="₹55,000"
          oldprice="₹68,000"
       image="src\assets\Bangles5.webp"
          hoverImage="src\assets\bangles6.webp"
          discount="-18%"
          onAddToCart={handleAddToCart}
        />

        <Card
          title="Stone Bracelet"
          newprice="₹12,500"
          oldprice="₹15,000"
        image="src\assets\Bangles5.webp"
          hoverImage="src\assets\bangles6.webp"
          discount="-22%"
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default Products;
