import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Resuable/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Earringsbanner() {
  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  const sliderData = [
    { img: "src/assets/earrings4.webp", title: "Artiful simplicity of HOOPS for the modern you!" },
    { img: "src/assets/earrings2.webp", title: "The future wears JHUMKAS with the modern spirit!"},
    { img: "src/assets/earrings3.webp", title: "Call to cocktails, DROPS for everyday and beyond!"},
    { img: "src/assets/earrings1.webp", title: "Elevate the everyday with, STUDS that crray grace!"},
];

  const [currentIndex, setCurrentIndex] = useState(0);

  const productsData = [
    {
      title: "Radiant Aura Gold Stud Earrings",
      newprice: "42,699",
      oldprice: "45,999",
      image: "src/assets/earrings5.webp",
      hoverImage: "",
      Bestseller: true,
      onAddToCart: handleAddToCart,
    },
    {
      title: "Twirl Glint Diamond Drop Earrings",
      newprice: "44,699",
      oldprice: "47,999",
      image: "src/assets/earrings6.webp",
      hoverImage: "",
      Bestseller: false,
      onAddToCart: handleAddToCart,
    },
    {
      title: "Silver Pretty Bow Kids Stud Earrings",
      newprice: "16,699",
      oldprice: "17,999",
      image: "src/assets/earrings7.webp",
      hoverImage: "",
      Bestseller: false,
      onAddToCart: handleAddToCart,
    },
    {
      title: "Silver Zircon Drizzle Drop Earrings",
      newprice: "2,699",
      oldprice: "5,999",
      image: "src/assets/earrings8.webp",
      hoverImage: "",
      Bestseller: true,
      onAddToCart: handleAddToCart,
    },
    {
      title: "Golden Petal Gold Drop Earrings",
      newprice: "66,699",
      oldprice: "67,999",
      image: "src/assets/earrings9.webp",
      hoverImage: "",
      Bestseller: false,
      onAddToCart: handleAddToCart,
    },
     {
      title: "Splendid Gold Jhumka Earrings",
      newprice: "63,699",
      oldprice: "67,999",
      image: "src/assets/earrings10.webp",
      hoverImage: "",
      Bestseller: false,
      onAddToCart: handleAddToCart,
    },
     {
      title: "Lotus Bloom Gold Jhumka Earrings",
      newprice: "73,699",
      oldprice: "77,999",
      image: "src/assets/earrings11.webp",
      hoverImage: "",
      Bestseller: false,
      onAddToCart: handleAddToCart,
    },
  ];

  const [products, setProducts] = useState(productsData);

  const handleSort = (e) => {
    const value = e.target.value;
    const parsePrice = (price) => Number(price.replace(/,/g, ""));

    if (value === "low-high")
      setProducts([...products].sort((a, b) => parsePrice(a.newprice) - parsePrice(b.newprice)));
    if (value === "high-low")
      setProducts([...products].sort((a, b) => parsePrice(b.newprice) - parsePrice(a.newprice)));
    if (value === "new") setProducts([...productsData]);
    if (value === "bestseller") setProducts(productsData.filter((item) => item.Bestseller));
  };

  // SCROLL FUNCTION
  const handleScrollToProducts = () => {
    document.getElementById("products-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">

      {/* Banner - full clickable */}
      <div
        onClick={handleScrollToProducts}
        className="relative w-full h-[260px] sm:h-[350px] md:h-[450px] lg:h-[520px] overflow-hidden cursor-pointer"
      >
        <img
          src="src\assets\slide-img9.jpg"
          className="w-full h-full object-cover"
          alt="Pearl Banner"
        />

        <div className="absolute inset-0 flex justify-between items-center px-6 md:px-12">
          <div className="text-[#8B4513] max-w-[55%] space-y-4 transition-all duration-500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-xl">
              {sliderData[currentIndex].title}
            </h1>
          </div>

          <div className="relative -left-10 sm:-left-14 md:-left-20 lg:-left-28 
           w-[100px] sm:w-60 md:w-[300px] lg:w-[380px] 
            h-[100px] sm:h-[300px] md:h-[300px] lg:h-[380px] 
            rounded overflow-hidden shadow-xl">

            <Swiper
              direction="vertical"
              autoplay={{ delay: 2000 }}
              loop={true}
              modules={[Autoplay]}
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              className="w-full h-full"
            >
              {sliderData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <img src={item.img} className="w-full h-full object-contain" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Sort Section */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <span>{">"}</span>
          <span className="font-semibold text-black">Dailywear Earrings</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-5 items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            Dailywear Earrings <span className="text-gray-500">({products.length} results)</span>
          </h1>

          <select
            onChange={handleSort}
            className="border px-4 py-2 rounded-md shadow-sm cursor-pointer mt-3 md:mt-0"
          >
            <option>Sort By: Best Matches</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
            <option value="new">New Arrivals</option>
            <option value="bestseller">Bestseller</option>
          </select>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div
        id="products-section"
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 py-10"
      >
        {products.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            newprice={`₹${item.newprice}`}
            oldprice={`₹${item.oldprice}`}
            image={item.image}
            hoverImage={item.hoverImage}
            onAddToCart={item.onAddToCart}
          />
        ))}
      </div>

    </div>
  );
}

export default Earringsbanner;
