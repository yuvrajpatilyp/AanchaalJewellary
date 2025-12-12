import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Forgotpassword() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (emailRegex.test(value) || mobileRegex.test(value)) {
      setError("");
    } else {
      setError("Enter a valid email or 10-digit mobile number");
    }
  };

  const handleSendOtp = () => {
    if (!emailRegex.test(input) && !mobileRegex.test(input)) {
      setError("Please enter a valid email or 10-digit mobile number");
      return;
    }
    navigate("/verify-otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100">

      
      <div className="bg-gray-200 w-full max-w-md p-8 rounded-2xl shadow-md">

        <h1 className="text-3xl font-serif font-bold mb-6 text-center">
          Forgot Password
        </h1>

        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter Email or Mobile Number"
          className="border w-full px-4 py-3 rounded-lg mb-2 focus:ring-2 focus:ring-pink-400 outline-none"
        />

        {error && (
          <p className="text-red-600 text-sm mb-2">{error}</p>
        )}

        <button
          onClick={handleSendOtp}
          disabled={!!error || input === ""}
          className={`px-6 py-3 rounded-lg w-full text-white font-medium
            ${error || input === "" ? "bg-pink-400" : "bg-pink-700 cursor-pointer"}`}
        >
          Send OTP
        </button>

        <Link
          to="/"
          className="text-blue-600 underline mt-4 block text-center"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
