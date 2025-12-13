import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Verifyotp() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const otpRegex = /^[0-9]{6}$/;

  const handleChange = (e) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value)) {
      setOtp(value);
      setError(""); 
    }
  };

  const handleVerify = () => {
    if (!otpRegex.test(otp)) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    navigate("/reset-password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100">

      
      <div className="bg-gray-200 w-full max-w-md p-8 rounded-2xl shadow-md">
        
        <h1 className="text-3xl font-serif font-bold mb-6 text-center">
          Verify OTP
        </h1>

        <input
          type="text"
          value={otp}
          onChange={handleChange}
          maxLength={6}
          placeholder="Enter 6-digit OTP"
          className="border w-full px-4 py-3 rounded-lg mb-2 focus:ring-2 focus:ring-pink-400 outline-none"
        />

        {error && (
          <p className="text-red-600 text-sm mb-2">{error}</p>
        )}

        <button
          onClick={handleVerify}
          disabled={!!error || otp.length !== 6}
          className={`px-6 py-3 rounded-lg w-full text-white font-medium
            ${error || otp.length !== 6 ? "bg-pink-400" : "bg-pink-700 cursor-pointer"}`}
        >
          Submit OTP
        </button>

      </div>
    </div>
  );
}
