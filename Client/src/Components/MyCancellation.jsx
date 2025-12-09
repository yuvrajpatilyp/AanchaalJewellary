import React, { useState } from "react";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function MyCancellation() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      productName: "Gold Necklace Set",
      date: "2025-10-18",
      productImage:
        "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7144ee02/images/hi-res/5137192DT1BAP1_1.jpg",
    },
    {
      id: 2,
      productName: "Diamond Earrings",
      date: "2025-10-25",
      productImage:
        "https://th.bing.com/th/id/OIP.f76yPq-ruVOad1pAiPWMTQHaHa?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      productName: "Bridal Jewellery Set",
      date: "2025-09-15",
      productImage:
        "https://i.etsystatic.com/37187055/r/il/9bed00/4247048735/il_1080xN.4247048735_7khg.jpg",
    },
  ]);

  const handleDelete = (id) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.productName} Added to Cart`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-14 px-6">

      {/* Navigation path */}
      <div className="text-sm mb-6">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <span className="font-semibold">My Cancellations</span>
      </div>

      <h2 className="text-4xl font-bold text-[#f1466b] mb-10 text-center">
        My Cancellations
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">
          You have no cancelled orders.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {orders.map((item) => (
            <div key={item.id} className="bg-white  p-5 shadow rounded-lg flex flex-col">
              <img src={item.productImage} alt="" className="h-52 w-full object-contain" />

              <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs mt-2 w-fit">
                Cancelled
              </span>

              <h3 className="text-lg font-semibold mt-4">{item.productName}</h3>
              <p className="text-sm text-gray-500 mb-4">
                Cancelled on {item.date}
              </p>

              <div className="flex gap-2 mt-auto">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#f58fa5]  text-white py-2 rounded hover:bg-[#f1466b]"
                >
                  <FaShoppingCart /> Add To Cart
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCancellation;