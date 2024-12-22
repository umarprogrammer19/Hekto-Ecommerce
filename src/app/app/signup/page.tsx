'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
  });
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertMessage('Account created successfully! 🎉');
    setFormData({
      name: '',
      emailOrPhone: '',
      password: '',
    });
    setTimeout(() => setAlertMessage(''), 3000); // Hide alert after 3 seconds
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Left Section (Image) */}
      <div className="w-full sm:w-1/2 flex justify-center items-center p-4">
        <Image
          src="/images/cart.png"
          alt="Cart"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>

      {/* Right Section (Form) */}
      <div className="w-full sm:w-1/2 flex justify-center items-center bg-white p-6 sm:p-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Create an Account</h1>
          <p className="text-base sm:text-lg text-center text-gray-600 mb-6">
            Enter your details below
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                id="name"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            {/* Email or Phone Field */}
            <div>
              <label
                htmlFor="emailOrPhone"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Email or Phone Number
              </label>
              <input
                type="text"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                id="emailOrPhone"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
            >
              Create an Account
            </button>

            {/* Google Sign Up Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center px-6 py-2 border-2 border-gray-300 text-gray-600 font-semibold rounded-md mt-4 hover:bg-gray-100"
            >
              <Image
                src="/images/google.png"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign Up with Google
            </button>
          </form>

          {alertMessage && (
            <div className="mt-4 text-center text-black">
              <p>{alertMessage}</p>
            </div>
          )}

          {/* Already have an account? Log in */}
          <div className="text-center mt-4">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/login" className="text-blue-500 underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
