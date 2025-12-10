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
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-serif font-bold mb-4">Forgot Password</h1>

      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter Email or Mobile Number"
        className="border w-full max-w-md px-4 py-3 rounded-lg mb-2"
      />

      {error && (
        <p className="text-red-600 text-sm mb-2">{error}</p>
      )}

      <button
        onClick={handleSendOtp}
        disabled={!!error || input === ""}
        className={`px-6 py-3 rounded-lg w-full max-w-md text-white
          ${error || input === "" ? "bg-pink-400" : "bg-pink-700 cursor-pointer"}`}>
        Send OTP
      </button>

      <Link to="/" className="text-blue-600 underline mt-4">
        Back to Login
      </Link>
    </div>
  );
}
