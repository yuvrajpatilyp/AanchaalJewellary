import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

  const handleInputChange = (e) => {
    let value = e.target.value;
    if (/^\d*$/.test(value)) value = value.slice(0, 10);
    setInput(value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!input) newErrors.input = "Email or Mobile Number is required";
    else if (/^\d+$/.test(input) && input.length !== 10)
      newErrors.input = "Mobile number must be 10 digits";
    else if (!/^\d+$/.test(input) && !emailRegex.test(input))
      newErrors.input = "Enter a valid email address";

    if (!password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(password))
      newErrors.password =
        "Password must be 8-12 chars, include uppercase, lowercase, number & symbol";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) navigate("/Homepage");
  };

  return (
    <div className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 bg-white gap-6">

      <style>{`
                /* Chrome / Edge */
                input[type="password"]::-webkit-textfield-decoration-container { display: none !important; }

                /* Old MS Browsers */
                input[type="password"]::-ms-reveal { display: none !important; }
                input[type="password"]::-ms-clear { display: none !important; }

                /* Remove password autofill decoration (Chrome) */
                input::-webkit-credentials-auto-fill-button { display: none !important; }
            `}</style>

      <div className="flex flex-col justify-center px-10 lg:px-24">

        <h1
          className="text-4xl font-serif font-bold mb-8
                     bg-linear-to-r from-[#C6A24F] via-[#F1D999] to-[#AF984F]
                     bg-clip-text text-transparent">
          Aanchal Jewellery
        </h1>

        <h2 className="text-2xl font-serif font-semibold">
          Log in to your account
        </h2>
        <p className="text-gray-500 mb-6">Please enter your details</p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">Email or Phone Number</label>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter email or 10-digit phone"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
            {errors.input && (
              <p className="text-red-500 text-sm">{errors.input}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500"
              />

              <span
                className="absolute right-3 top-2.5 cursor-pointer text-xl text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-30 h-10 bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-700 cursor-pointer"
            >
              Log in
            </button>

            <Link
              to="/forgot-password"
              className="text-blue-600 underline text-sm"
            >
              Forgot password
            </Link>
          </div>

        </form>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <img
          src="src/assets/Side image.jpg"
          alt="Login visual"
          className="object-contain max-h-[525px] max-w-[465px] rounded-lg shadow-lg
                     transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}



