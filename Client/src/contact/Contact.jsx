import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";


function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Validation
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "name" && !nameRegex.test(value)) {
      setErrors((p) => ({ ...p, name: "Name must contain only alphabets" }));
    } else if (name === "email" && !emailRegex.test(value)) {
      setErrors((p) => ({
        ...p,
        email: "Enter a valid email address (e.g., abc23@gmail.com)",
      }));
    } else if (name === "phone" && !phoneRegex.test(value)) {
      setErrors((p) => ({
        ...p,
        phone: "Phone number must be 10 digits only",
      }));
    } else {
      setErrors((p) => ({ ...p, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!nameRegex.test(form.name))
      newErrors.name = "Name must contain only alphabets";
    if (!emailRegex.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!phoneRegex.test(form.phone))
      newErrors.phone = "Phone number must be 10 digits only";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Please correct the highlighted errors before submitting.");
      return;
    }

    alert("Your message has been sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <div className="w-full overflow-x-hidden px-4 md:px-6 max-w-6xl mx-auto py-8">

      

      <section className="grid gap-6 md:grid-cols-3">

        {/* LEFT BOX */}
        <div className="bg-white shadow-md rounded-lg p-5 space-y-6 w-full">

          {/* Call to us */}
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-pink-400 p-2 rounded-full">
                <Phone className="text-white w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Call To Us</h2>
            </div>
            <p className="text-gray-600 mt-3">We are available 24/7.</p>
            <p className="text-gray-600 mt-1">Phone: +8801611112222</p>
          </div>

          <hr className="border-gray-200" />

          {/* Write To Us */}
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-pink-400 p-2 rounded-full">
                <Mail className="text-white w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Write To Us</h2>
            </div>
            <p className="text-gray-600 mt-3">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-600 mt-1">Email: customer@exclusive.com</p>
            <p className="text-gray-600 mt-1">Email: support@exclusive.com</p>
          </div>
            {/* Email To Us */}
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-pink-400 p-2 rounded-full">
                <Mail className="text-white w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Email To Us</h2>
            </div>
            <p className="text-gray-600 mt-3">
              Meet us our store
            </p>
            <p className="text-gray-600 mt-1">301, 3rd Floor Ganesh Bhuvan Apartment, Near Ganesh Collony, Opp Arihant Jewelrs, Main Road Varachha, Surat - 395006, Gujarat, India</p>
            
          </div>

        </div>
{/* RIGHT BOX */}
<div className="md:col-span-2 bg-white shadow-md rounded-lg p-6 w-full">

  <h2 className="text-xl font-semibold text-gray-800 mb-1">
    Have Something in mind?
  </h2>
  <p className="text-gray-600 mb-6">
    Send us a message and we will get back to you as soon as possible!
  </p>

  <form onSubmit={handleSubmit} className="space-y-6">

    {/* Name */}
    <div className="relative">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        className={`peer w-full border border-gray-300 rounded px-3 py-3 focus:outline-none
          focus:border-yellow-700 placeholder-transparent ${
            errors.name ? "border-red-500" : ""
          }`}
        placeholder="Name"
        required
      />

      <label
        className="absolute left-3 top-3 text-gray-500 bg-white px-1 transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-yellow-700"
      >
        Name
      </label>

      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
    </div>

    {/* Email */}
    <div className="relative">
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className={`peer w-full border border-gray-300 rounded px-3 py-3 focus:outline-none
          focus:border-yellow-700 placeholder-transparent ${
            errors.email ? "border-red-500" : ""
          }`}
        placeholder="Email"
        required
      />

      <label
        className="absolute left-3 top-3 text-gray-500 bg-white px-1 transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-yellow-700"
      >
        Email
      </label>

      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
    </div>

    {/* Phone */}
    <div className="relative">
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        className={`peer w-full border border-gray-300 rounded px-3 py-3 focus:outline-none
          focus:border-yellow-700 placeholder-transparent ${
            errors.phone ? "border-red-500" : ""
          }`}
        placeholder="Contact Number"
        required
      />

      <label
        className="absolute left-3 top-3 text-gray-500 bg-white px-1 transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-yellow-700"
      >
        Contact Number
      </label>

      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
    </div>

    {/* Message */}
    <div className="relative">
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows="4"
        placeholder="Message"
        className="peer w-full border border-gray-300 rounded px-3 py-3 
        focus:outline-none focus:border-yellow-700 placeholder-transparent"
      ></textarea>

      <label
        className="absolute left-3 top-3 text-gray-500 bg-white px-1 transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-yellow-700"
      >
        Message
      </label>
    </div>

    {/* Button */}
    <div className="flex justify-end">
      <button
        type="submit"
        className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-800 transition"
      >
        Send
      </button>
    </div>

  </form>
</div>

      </section>
    </div>
  );
}

export default Contact;