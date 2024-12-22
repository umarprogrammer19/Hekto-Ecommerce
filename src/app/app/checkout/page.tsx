'use client';
import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "creditCard",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 lg:p-12">
          <h1 className="text-3xl font-bold text-center text-[#1D3178] mb-8">Billing Information</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your address"
                required
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your city"
                required
              />
            </div>

            {/* Postal Code */}
            <div>
              <label htmlFor="postalCode" className="block text-sm font-semibold text-gray-700">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your postal code"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-semibold text-gray-700">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your country"
                required
              />
            </div>

            {/* Payment Method */}
            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-semibold text-gray-700">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                id="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                required
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash on Delivery</option>
              </select>
            </div>

            {/* Submit Button */}
           
            <li>
                <Link href="/ordercompleted">
            <button
              type="submit"
              className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600"
            >
              Place Order
            </button>
            </Link>
            </li>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
