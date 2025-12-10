import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Resetpassword() {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
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
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-serif font-bold mb-4">Create New Password</h1>

      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="New Password"
        className="border w-full max-w-md px-4 py-3 rounded-lg mb-2"
      />

      <input
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        placeholder="Confirm Password"
        className="border w-full max-w-md px-4 py-3 rounded-lg mb-2"
      />

      {error && (
        <p className="text-red-600 text-sm -mt-2 mb-4 text-center max-w-md">
          {error}
        </p>
      )}

      <button
        onClick={handleReset}
        className="bg-pink-700 text-white px-6 py-3 rounded-lg w-full max-w-md cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
}
