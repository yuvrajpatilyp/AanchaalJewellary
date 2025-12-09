import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample jewellery reviews data
const initialReviews = [
  {
    id: 1,
    productName: "Gold Diamond Necklace",
    productImage: "https://th.bing.com/th/id/OIP.A5rzgOFjS2comjb0JAGP2AHaHa?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 5,
    text: "Absolutely stunning! The diamonds sparkle beautifully."
  },
  {
    id: 2,
    productName: "Silver Earrings Set",
    productImage: "https://5.imimg.com/data5/SELLER/Default/2025/1/480588471/PV/WW/BR/21388540/silver-earring-sets-1000x1000.jpg",
    rating: 4.5,
    text: "Elegant and perfect for daily wear."
  },
  {
    id: 3,
    productName: "Platinum Ring",
    productImage: "https://cdn.caratlane.com/media/catalog/product/J/R/JR02668-PTP900_1_lar.jpg",
    rating: 4,
    text: "High quality and fits perfectly. Very classy!"
  },
  {
    id: 4,
    productName: "Pearl Bracelet",
    productImage: "https://cdn.shopify.com/s/files/1/0228/9131/products/7D5E6B25-BA17-4918-8D46-C19DF52D84F6_1024x1024@2x.jpg?v=1613600919",
    rating: 4.8,
    text: "Beautiful pearls, smooth and comfortable to wear."
  },
  {
    id: 5,
    productName: "Emerald Pendant",
    productImage: "https://i.etsystatic.com/18911101/r/il/18cee8/2578272601/il_fullxfull.2578272601_gfi2.jpg",
    rating: 5,
    text: "The emerald is vibrant and looks amazing. Highly recommended!"
  },
];

function MyReviews() {
  const [reviews, setReviews] = useState(initialReviews);

  // Function to render stars interactively
  const renderStars = (rating, reviewId) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => {
      const starValue = index + 1;
      const isFull = rating >= starValue;
      const isHalf = rating >= starValue - 0.5 && rating < starValue;

      const handleClick = () => {
        // Update the rating when a star is clicked
        setReviews(prev =>
          prev.map(r =>
            r.id === reviewId ? { ...r, rating: starValue } : r
          )
        );
      };

      return isFull ? (
        <FaStar
          key={index}
          className="text-yellow-400 cursor-pointer"
          onClick={handleClick}
        />
      ) : isHalf ? (
        <FaStarHalfAlt
          key={index}
          className="text-yellow-400 cursor-pointer"
          onClick={handleClick}
        />
      ) : (
        <FaRegStar
          key={index}
          className="text-yellow-400 cursor-pointer"
          onClick={handleClick}
        />
      );
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-black mb-6">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/orders" className="hover:underline">My Order History</Link>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center text-[#f1466b]">My Reviews</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            {/* Product Info */}
            <div className="flex flex-col items-center mb-4">
              <img
                className="w-32 h-32 rounded-lg mb-2 object-cover"
                src={review.productImage}
                alt={review.productName}
              />
              <h2 className="text-lg font-semibold text-center text-gray-800">{review.productName}</h2>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center mb-4">
              {renderStars(review.rating, review.id)}
              <span className="text-gray-600 ml-2">({review.rating}/5)</span>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-center italic">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyReviews;
