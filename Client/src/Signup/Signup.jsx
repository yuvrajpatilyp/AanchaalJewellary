import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};

        // NAME VALIDATION
        if (!form.name.trim()) {
            tempErrors.name = "Name is required";
        } else if (!/^[A-Za-z]+$/.test(form.name)) {
            tempErrors.name =
                "Name must contain only alphabets (no spaces or numbers).";
        }

        // EMAIL VALIDATION
        if (!form.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            tempErrors.email = "Enter a valid email address.";
        }

        // PHONE VALIDATION
        if (!form.phone.trim()) {
            tempErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(form.phone)) {
            tempErrors.phone = "Enter a valid 10-digit phone number.";
        }

        // PASSWORD VALIDATION
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

        if (!form.password.trim()) {
            tempErrors.password = "Password is required";
        } else if (!passwordRegex.test(form.password)) {
            tempErrors.password =
                "Password must be 8-12 chars, include uppercase, lowercase, number, and special symbol.";
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

            {/* LEFT SIDE */}
            <div className="w-full md:w-1/2 flex justify-center items-center p-10">
                <div className="w-full max-w-md">

                    {/* BRANDING */}
                    <h1 className="text-4xl font-extrabold text-black mb-10 tracking-wide">
                        Aanchaal Jewellery
                    </h1>

                    {/* FANCY TITLE */}
                    <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-2 tracking-wide">
                        Create your account
                    </h2>
                    <p className="text-gray-500 mb-6">Please enter your details</p>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* NAME */}
                        <div>
                            <label className="block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Enter your name"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* PHONE */}
                        <div>
                            <label className="block mb-1 font-medium">Phone Number</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Enter your phone number"
                                value={form.phone}
                                onChange={(e) =>
                                    setForm({ ...form, phone: e.target.value })
                                }
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="block mb-1 font-medium">Password</label>
                            <input
                                type="password"
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Enter your password"
                                value={form.password}
                                onChange={(e) =>
                                    setForm({ ...form, password: e.target.value })
                                }
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition cursor-pointer"
                        >
                            <Link to="/Login">Sign Up</Link>
                        </button>
                    </form>
                    


                    <div className="flex items-center my-6">
                        <hr className="grow border-gray-300" />
                        <span className="text-gray-500 mx-2">OR</span>
                        <hr className="grow border-gray-300" />
                    </div>

                    <p className="text-center mt-6 text-gray-600">
                        Already have an account?
                        <a href="/login" className="text-black font-semibold ml-1">
                            Log in
                        </a>
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="w-1/2 hidden md:flex justify-center items-center bg-gray-50">
                <img
                    src="src/assets/Side image of Signup and Login Page.png"
                    alt="signup"
                    className="w-3/4 object-contain transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
            </div>

        </div>
    );
}


