import React, { useState } from "react";

export default function CheckoutPage() {
  const [showCoupon, setShowCoupon] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");
  const [country, setCountry] = useState("IN");

  // Country flags
  const countryFlags = {
    IN: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1075ce53/images/flags/in.svg",
    AE: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0abcfe60/images/flags/ae.svg",
    DE: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0a8d2663/images/flags/de.svg",
    SA: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw7e922005/images/flags/sa.svg",
    NL: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwad6b7631/images/flags/nl.svg",
  };

  return (
    <div className="min-h-screen bg-[#faf7f5] p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* Delivery Details */}
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-lg font-medium mb-4">Delivery Details</h3>

            <div className="flex flex-col md:flex-row items-center gap-4">

              {/* Country */}
              <div className="flex items-center gap-3 border rounded-xl p-3 w-full md:w-56">
                <img
                  src={countryFlags[country]}
                  alt={country}
                  className="w-6 h-6 rounded-full"
                />
                <select
                  className="w-full bg-transparent focus:outline-none text-sm"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="IN">IN</option>
                  <option value="AE">AE</option>
                  <option value="SA">SA</option>
                  <option value="DE">DE</option>
                  <option value="NL">NL</option>
                </select>
              </div>

              {/* Pincode */}
              <div className="flex items-center gap-3 border rounded-xl p-3 flex-1">
                <img
                  src="https://www.tanishq.co.in/on/demandware.static/Sites-Tanishq-Site/-/default/dw5000f682/images/pdp/pincode-location.svg"
                  alt="pin"
                  className="w-5 h-5"
                />
                <input
                  placeholder="Enter Pincode"
                  className="w-full focus:outline-none text-sm"
                />
              </div>

              <button className="text-[#8b2f2f] font-medium">Check</button>
            </div>
          </div>

          {/* Product Card */}
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex items-center gap-5">
              <img
                src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6a6a9e4c/images/hi-res/512218PAFAAB00_1.jpg"
                alt="product"
                className="w-20 h-20 object-contain"
              />
              <div className="flex-1">
                <p className="text-lg font-semibold">₹ 46813</p>
                <p className="text-gray-600">
                  Contemporary Teardrop Gold Pendant
                </p>
                <p className="text-xs text-gray-400 mt-1">Weight : 3.042 g</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Qty:</div>
                <div className="font-semibold">1</div>
              </div>
            </div>

            <div className="mt-4 border-t pt-3 flex justify-end">
              <div className="flex items-center gap-2 text-[#7a2d2d] text-sm cursor-pointer">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="#7a2d2d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Add A Gift Message</span>
              </div>
            </div>
          </div>

          {/* Gift Message */}
          <div className="bg-white rounded-2xl shadow p-5">
            <h4 className="font-medium mb-3">Add A Gift Message</h4>
            <textarea
              rows={3}
              maxLength={200}
              value={giftMessage}
              onChange={(e) => setGiftMessage(e.target.value)}
              placeholder="Write your gift message..."
              className="w-full rounded-xl p-3 border bg-gray-50 focus:outline-none text-sm"
            />
            <div className="text-right text-xs text-gray-500 mt-2">
              {giftMessage.length}/200 characters
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow h-48 md:h-56">
            <img
              src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw726fb118/images/cart/cart-neu-coin-banner.png"
              alt="banner"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>

            <div className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-xl p-4 w-56 shadow-md">
              <p className="text-[#7a2d2d] font-semibold text-sm underline cursor-pointer mb-1">
                Login/Sign Up
              </p>
              <p className="text-[11px] text-gray-600 mb-2 leading-tight">
                To Unlock Exclusive Rewards With
              </p>

              <div className="flex items-center gap-2">
                <img
                  src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc73e4362/images/cart/encircle-points.svg"
                  className="w-4 h-4"
                />
                <span className="text-[11px] text-gray-700">Encircle Points &</span>
                <img
                  src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw412b687a/images/cart/neucoins.png"
                  className="w-5 h-5"
                />
                <span className="text-[11px] text-gray-700">Neucoins</span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <button
              onClick={() => setShowCoupon(!showCoupon)}
              className="w-full flex justify-between items-center border rounded-xl p-3 text-left"
            >
              <span className="text-sm">Apply Coupon code / Promo Code</span>
              <span className="text-gray-500">⌄</span>
            </button>

            {showCoupon && (
              <div className="mt-3">
                <input
                  placeholder="Enter coupon code"
                  className="w-full border rounded-xl p-3 mb-2"
                />
                <p className="text-gray-500 text-sm mb-2">welcome500</p>
                <p className="text-red-500 text-xs mb-3">
                  Not applicable on Coins, Idols and Gift Cards*
                </p>
                <button className="w-full bg-[#7a2d2d] text-white rounded-xl py-2">
                  Apply
                </button>
              </div>
            )}

            <div className="mt-6 space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>₹ 46813</span>
              </div>
              <div className="flex justify-between">
                <span>Product Discount</span>
                <span>- ₹ 0</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-3">
                <span>TOTAL (Incl of all Taxes.)</span>
                <span>₹ 46813</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-[#7a2d2d] text-white rounded-full py-3 font-semibold">
                Proceed to Checkout
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}