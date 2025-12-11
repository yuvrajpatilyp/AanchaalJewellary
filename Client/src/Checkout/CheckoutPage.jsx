import React from "react";

const CheckoutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT — Billing Details */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

          <form className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="border p-3 rounded-lg w-full" />

              <input type="text" placeholder="Phone Number" className="border p-3 rounded-lg w-full" />
            </div>

            <input type="email" placeholder="Email Address" className="border p-3 rounded-lg w-full" />

            <input type="text" placeholder="Full Address" className="border p-3 rounded-lg w-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <input type="text" placeholder="City" className="border p-3 rounded-lg w-full" />

              <input type="text" placeholder="State" className="border p-3 rounded-lg w-full" />

              <input type="text" placeholder="Pincode" className="border p-3 rounded-lg w-full" />

            </div>
            

            <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-medium hover:bg-yellow-600 ">Continue to Payment</button>
          </form>


{/* PAYMENT METHOD SECTION */}
          <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>

            <div className="space-y-4">
              
              {/* Cash On Delivery */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span className="text-gray-700">Cash On Delivery</span>
              </label>

              {/* UPI */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span className="text-gray-700">UPI (Google Pay, PhonePe, Paytm)</span>
              </label>

              {/* Card */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span className="text-gray-700">Credit / Debit Card</span>
              </label>

              {/* Net Banking */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span className="text-gray-700">Net Banking</span>
              </label>

            </div>
          </div>

        </div>
        
        {/* RIGHT — Order Summary */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md h-fit">

          
           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {/* product image */}
          <div className="w-full flex justify-center mb-4">
            <img 
              src="src/assets/jewellery.jpg" 
              alt="Gold Jewellery"
              className="w-3xl h-42 object-cover rounded-lg"
            />
          </div>

         

          <div className="space-y-3">
            <div className="flex justify-between">
              <p>22K Gold Bracelets (15 gm)</p>
              <p>₹92,500</p>
            </div>
            <div className="flex justify-between">
              <p>Making Charges</p>
              <p>₹10,000</p>
            </div>
            <div className="flex justify-between">
              <p>GST</p>
              <p>₹5000</p>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-bold">
            <p>Total Amount</p>
            <p>₹107,500</p>
          </div>

          <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 ">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;


