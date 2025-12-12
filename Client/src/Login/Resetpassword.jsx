import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Resetpassword() {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,12}$/;

  const handleReset = () => {
    if (!passwordRegex.test(pass)) {
      setError(
        "Password must contain 1 uppercase, 1 lowercase, 1 number, 1 special symbol and be 8–12 characters long."
      );
      return;
    }

    if (pass !== confirm) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    alert("Password Reset Successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100">

      
      <style>{`
        input[type="password"]::-webkit-textfield-decoration-container { display: none !important; }
        input[type="password"]::-ms-reveal,
        input[type="password"]::-ms-clear { display: none !important; }
        input::-webkit-credentials-auto-fill-button { display: none !important; }
      `}</style>

      
      <div className="bg-gray-200 w-full max-w-md p-8 rounded-2xl shadow-md">

        <h1 className="text-3xl font-serif font-bold mb-6 text-center">
          Create New Password
        </h1>

        
        <div className="relative w-full mb-4">
          <input
            type={showPass ? "text" : "password"}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="New Password"
            className="border w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
          />

          <span
            onClick={() => setShowPass(!showPass)}
            className="absolute right-4 top-3.5 cursor-pointer text-xl text-gray-600"
          >
            {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        
        <div className="relative w-full mb-2">
          <input
            type={showConfirm ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm Password"
            className="border w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
          />

          <span
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-3.5 cursor-pointer text-xl text-gray-600"
          >
            {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <button
          onClick={handleReset}
          className="bg-pink-700 text-white px-6 py-3 rounded-lg w-full cursor-pointer"
        >
          Submit
        </button>

      </div>
    </div>
  );
}
