import React from "react";
import { Link } from "react-router-dom";

const orders = [
  {
    id: "ORD123456",
    date: "2025-01-10",
    status: "Delivered",
    total: "₹15,999",
    items: [
      {
        name: "Gold Pendant",
        qty: 1,
        price: "₹8,999",
        image:
          "https://tse2.mm.bing.net/th/id/OIP.jDZij31OQx80OR1Bor713wHaG5?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        name: "Silver Bracelet",
        qty: 1,
        price: "₹7,000",
        image:
          "https://www.womenfitness.net/wp/wp-content/uploads/2020/02/Silver_Bracelets.jpg",
      },
    ],
  },
  {
    id: "ORD789012",
    date: "2025-01-25",
    status: "Shipped",
    total: "₹29,499",
    items: [
      {
        name: "Diamond Earrings",
        qty: 1,
        price: "₹29,499",
        image:
          "https://tse1.mm.bing.net/th/id/OIP.QMR0YSs7l-GtK2p6t9LC4AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
    ],
  },
  {
    id: "ORD345678",
    date: "2024-12-05",
    status: "Processing",
    total: "₹5,999",
    items: [
      {
        name: "Pearl Ring",
        qty: 1,
        price: "₹5,999",
        image:
          "https://tse4.mm.bing.net/th/id/OIP.0Mwen4ZL66xDVNzvCddayAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
    ],
  },
];

function OrderHistory() {

  return (
    <div className="max-w-6xl min-h-screen p-6 px-20 mt-10 bg-gray-50">
      {/* Breadcrumb */}
      <div className="text-sm text-black mb-6">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/orders" className="hover:underline">My Order History</Link>
      </div>

      <h1 className="text-3xl  text-center font-bold text-[#f1466b] mb-6">
        My Order History
      </h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg text-[#fd4c72] font-bold">Order ID: {order.id}</h2>
                <p className="text-sm text-[#f27892]">Date: {order.date}</p>
              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Shipped"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {order.status}
              </span>
            </div>

            {/* Items */}
            <div className="mt-4 border-t pt-4 space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 rounded-lg border object-cover transform transition duration-300 hover:scale-105 hover:shadow-lg"
                  />

                  <div className="flex-1">
                    <p className="font-medium text-[#f1597a]">{item.name}</p>
                    <p className="text-sm text-[#f85e80]">Qty: {item.qty}</p>
                  </div>

                  <p className="font-semibold">{item.price}</p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-4 flex justify-between border-t pt-4">
              <span className="font-semibold text-[#f96081]">Total:</span>
              <span className="font-bold">{order.total}</span>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-4 flex-wrap">
              <button className="px-4 py-2 bg-[#f86787] text-white rounded-lg">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory