import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const [showPass, setShowPass] = useState({ password: false });

    const toggleShow = (key) => {
        setShowPass((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const validate = () => {
        let tempErrors = {};

        if (!form.name.trim()) {
            tempErrors.name = "Name is required";
        } else if (!/^[A-Za-z]+$/.test(form.name)) {
            tempErrors.name = "Name must contain only alphabets.";
        }

        if (!form.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            tempErrors.email = "Enter a valid email.";
        }

        if (!form.phone.trim()) {
            tempErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(form.phone)) {
            tempErrors.phone = "Enter a valid 10-digit number.";
        }

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,12}$/;

        if (!form.password.trim()) {
            tempErrors.password = "Password is required";
        } else if (!passwordRegex.test(form.password)) {
            tempErrors.password =
                "Password must be 8-12 chars with upper, lower, number & symbol.";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        alert("✅ Signup Successful!");
    };

    return (
        <div className="min-h-screen flex bg-white">

            <style>{`
                /* Chrome / Edge */
                input[type="password"]::-webkit-textfield-decoration-container { display: none !important; }

                /* Old MS Browsers */
                input[type="password"]::-ms-reveal { display: none !important; }
                input[type="password"]::-ms-clear { display: none !important; }

                /* Remove password autofill decoration (Chrome) */
                input::-webkit-credentials-auto-fill-button { display: none !important; }
            `}</style>

            <div className="w-full md:w-1/2 flex justify-center items-center p-10">
                <div className="w-full max-w-md">

                    <h1 className="text-4xl font-serif font-bold mb-8 tracking-wide bg-linear-to-r from-[#C6A24F] via-[#F1D999] to-[#af984f] text-transparent bg-clip-text underline">
                        Aanchaal Jewellery
                    </h1>

                    <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-2 tracking-wide">
                        Create your account
                    </h2>
                    <p className="text-gray-500 mb-6 underline">Please enter your details</p>

                    <form onSubmit={handleSubmit} className="space-y-5">


                        <div>
                            <label className="block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Enter your name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>


                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>


                        <div>
                            <label className="block mb-1 font-medium">Phone Number</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Enter your phone number"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>


                        <div>
                            <label className="block mb-1 font-medium">Password</label>

                            <div className="relative">
                                <input
                                    type={showPass["password"] ? "text" : "password"}
                                    className="w-full border rounded-lg px-4 py-2"
                                    placeholder="Enter your password"
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                />


                                <button
                                    type="button"
                                    onClick={() => toggleShow("password")}
                                    className="absolute right-4 top-2.5 text-[#0c0502]"
                                >
                                    {showPass["password"] ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-600 transition cursor-pointer"
                        >
                            Signup
                        </button>
                    </form>

                    <div className="flex items-center my-6">
                        <hr className="grow border-gray-300" />
                        <span className="text-gray-500 mx-2">OR</span>
                        <hr className="grow border-gray-300" />
                    </div>

                    <p className="text-center mt-6 text-gray-600">
                        Already have an account?
                        <a href="/login" className="text-blue-600 font-semibold ml-1 underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>

            <div className="w-2/3 hidden md:flex justify-center items-center bg-white">
                <img
                    src="src/assets/Signup and Login 3.jpg"
                    alt="signup"
                    className="w-3/4 object-contain transition-transform duration-500 hover:scale-105 cursor-pointer rounded-lg"
                />
            </div>
        </div>
    );
}