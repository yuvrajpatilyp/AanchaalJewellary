import React, { useState } from "react";
import { FaUser, FaLock, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
  
    //localStorage.removeItem("token"); 
    localStorage.removeItem("user");
    setOpen(false);

    // Show alert
    alert("You have been logged out successfully!");

    // Redirect to login page
    navigate("/login"); 
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <header className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Aanchal Jewellery...!</h1>

        {/* User Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex items-center justify-center border rounded-md"
        >
          <FaUser className="text-xl" />
        </button>
      </header>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-6 mt-3 w-72 bg-white rounded-xl shadow-xl">
          {/* Header Section */}
          <div className="bg-linear-to-r from-[#fda5b8] to-[#f63d65] text-white rounded-t-xl px-5 py-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FaUser /> Vaishnavi Nagavkar
            </h2>
          </div>

          {/* Menu List */}
          <ul className="px-5 py-4 space-y-4 text-[#f76181] font-medium">
            <Link to="/orders" className="flex items-center gap-3 cursor-pointer hover:text-[#f82c58]">
              <FaLock /> My Order History
            </Link>

            <Link to="/cancellation" className="flex items-center gap-3 cursor-pointer hover:text-[#f82c58]">
              <FaTimesCircle /> My Cancellation
            </Link>

            <Link to="/reviews" className="flex items-center gap-3 cursor-pointer hover:text-[#f82c58]">
              <FaStar /> My Reviews
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 cursor-pointer hover:text-[#f82c58] w-full text-left"
            >
              <FaSignOutAlt /> Log Out
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

