import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
function MyAccount() {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const [selected, setSelected] = useState("My Profile");
  const [showPass, setShowPass] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [passwords, setPasswords] = useState({
    old: "",
    new: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleInput = (e) =>
    setInfo({ ...info, [e.target.name]: e.target.value });

  const handlePasswordChange = (e) =>
    setPasswords({ ...passwords, [e.target.name]: e.target.value });

  const toggleShow = (field) =>
    setShowPass((prev) => ({ ...prev, [field]: !prev[field] }));

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!emailRegex.test(info.email)) {
      newErrors.email = "Enter a valid email.";
      valid = false;
    }

    if (!passwordRegex.test(passwords.new)) {
      newErrors.password =
        "Password must include upper, lower, number & special char.";
      valid = false;
    }

    if (passwords.new !== passwords.confirm) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setMessage("Profile Updated Successfully!");
      setTimeout(() => setMessage(""), 2500);
    }
  };

  const handleCancel = () => {
    const ok = window.confirm("Are you sure you want to cancel?");
    if (!ok) return;

    setInfo({ firstName: "", lastName: "", email: "", address: "" });
    setPasswords({ old: "", new: "", confirm: "" });
    setErrors({ email: "", password: "", confirmPassword: "" });

    setMessage("Changes have been cleared!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] px-4 py-10 font-inter flex justify-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">

        
        <div className="w-full lg:w-1/4 bg-[#F5E6D6] border border-[#E5D2C3] rounded-2xl p-6
          shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">

          <h2 className="text-[#8A5A44] text-2xl font-playfair font-bold mb-4 tracking-wide drop-shadow-md">
            Manage My Account
          </h2>

          <ul className="space-y-2 text-[#6B3F2B] font-medium">
            {["My Profile", "Address Book", "My Payment Options"].map((tab) => (
              <li
                key={tab}
                onClick={() => setSelected(tab)}
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 
                hover:scale-[1.02] hover:font-semibold
                ${
                  selected === tab
                    ? "bg-[#8A5A44] text-white shadow-md"
                    : "hover:bg-[#EBD8C9] hover:text-[#8A5A44]"
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>

          <h2 className="text-[#8A5A44] text-xl font-playfair mt-6 mb-3 font-bold drop-shadow-sm">
            My Orders
          </h2>

          <ul className="space-y-2 text-[#6B3F2B] font-medium">
            {["My Returns", "My Cancellations"].map((tab) => (
              <li
                key={tab}
                onClick={() => setSelected(tab)}
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 
                hover:scale-[1.02] hover:font-semibold
                ${
                  selected === tab
                    ? "bg-[#8A5A44] text-white shadow-md"
                    : "hover:bg-[#EBD8C9] hover:text-[#8A5A44]"
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>

          <h2 className="text-[#8A5A44] text-xl font-playfair mt-6 mb-3 font-bold drop-shadow-sm">
            Wishlist
          </h2>

          <ul>
            <li
              onClick={() => setSelected("Wishlist")}
              className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 
              hover:scale-[1.02] hover:font-semibold
              ${
                selected === "Wishlist"
                  ? "bg-[#8A5A44] text-white shadow-md"
                  : "hover:bg-[#EBD8C9] hover:text-[#8A5A44]"
              }`}
            >
          
            </li>
          </ul>
        </div>

       
        <div className="w-full lg:w-3/4 bg-white border border-[#E5D2C3] rounded-2xl p-10 shadow-xl">

          {message && (
            <p className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg shadow font-medium">
              {message}
            </p>
          )}

          {selected === "My Profile" ? (
            <>
              <h3 className="text-[#8A5A44] text-3xl font-playfair font-bold mb-6 tracking-wide drop-shadow-md">
                Edit Your Profile
              </h3>

              <form onSubmit={submitForm} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {[
                    { label: "First Name", name: "firstName" },
                    { label: "Last Name", name: "lastName" },
                    { label: "Email", name: "email" },
                    { label: "Address", name: "address" },
                  ].map(({ label, name }) => (
                    <div key={name}>
                      <label className="text-[#6B3F2B] font-medium text-sm mb-1 block">
                        {label}
                      </label>

                      <input
                        name={name}
                        value={info[name]}
                        onChange={handleInput}
                        type={name === "email" ? "email" : "text"}
                        className={`w-full border rounded-lg px-4 py-2 bg-[#FFF8F0] outline-none
                        shadow-inner hover:shadow-sm hover:scale-[1.01]
                        focus:ring-2 focus:ring-[#C9A38D] transition-all duration-200
                        ${
                          errors.email && name === "email"
                            ? "border-red-400"
                            : "border-[#D9C4B8]"
                        }`}
                      />

                      {errors.email && name === "email" && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  ))}

                </div>
                <div>
                  <h4 className="text-[#8A5A44] font-semibold mb-3">
                    Password Changes
                  </h4>

                  {[
                    { key: "old", label: "Current Password" },
                    { key: "new", label: "New Password" },
                    { key: "confirm", label: "Confirm New Password" },
                  ].map(({ key, label }) => (
                    <div className="relative mb-4" key={key}>
                      <input
                        type={showPass[key] ? "text" : "password"}
                        name={key}
                        value={passwords[key]}
                        onChange={handlePasswordChange}
                        placeholder={label}
                        className={`w-full border rounded-lg px-4 py-2 bg-[#FFF8F0] outline-none
                        shadow-inner hover:shadow-sm hover:scale-[1.01]
                        focus:ring-2 focus:ring-[#C9A38D] transition-all duration-200
                        ${
                          (errors.password && key === "new") ||
                          (errors.confirmPassword && key === "confirm")
                            ? "border-red-400"
                            : "border-[#D9C4B8]"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() => toggleShow(key)}
                        className="absolute right-4 top-2.5 text-[#8A5A44]"
                      >
                        {showPass[key] ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>

                      {errors.password && key === "new" && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.password}
                        </p>
                      )}

                      {errors.confirmPassword && key === "confirm" && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-5 py-2 border border-[#C9A38D] text-[#6B3F2B] rounded-lg
                    hover:bg-[#F5E6D6] hover:scale-[1.02] transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#8A5A44] text-white rounded-lg shadow-xl
                    hover:bg-[#6B3F2B] hover:scale-[1.03] transition-all duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center text-[#8A5A44] py-14">
              <h3 className="text-2xl font-playfair font-bold">{selected}</h3>
              <p className="text-sm text-[#A78979] mt-2">
                Content for "{selected}" will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default MyAccount;
