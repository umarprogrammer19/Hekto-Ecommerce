'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CreateAccount() {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: '',
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

    if (formData.password !== formData.confirmPassword) {
      setAlertMessage('Passwords do not match. Please try again.');
      setTimeout(() => setAlertMessage(''), 3000); // Hide alert after 3 seconds
      return;
    }

    setAlertMessage('Account created successfully! 🎉');
    setFormData({
      name: '',
      emailOrPhone: '',
      password: '',
      confirmPassword: '',
    });
    setTimeout(() => setAlertMessage(''), 3000); // Hide alert after 3 seconds
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-[#f9f9f9] py-12">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-[#1D3178] mb-4">
            Create Your Account
          </h1>
          <p className="text-sm text-center text-gray-500 mb-6">
            Fill in the details below to register.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#1D3178] mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                id="name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="emailOrPhone"
                className="block text-sm font-medium text-[#1D3178] mb-1"
              >
                Email or Phone Number
              </label>
              <input
                type="text"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                id="emailOrPhone"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#1D3178] mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#1D3178] mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                id="confirmPassword"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-[#FB2E86] text-white font-semibold rounded-md hover:bg-[#e02675] focus:ring-2 focus:ring-offset-2 focus:ring-[#FB2E86] text-sm"
              >
                Create Account
              </button>
            </div>
          </form>

          {alertMessage && (
            <div className="mt-4 text-center text-[#1D3178] font-semibold">
              <p>{alertMessage}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateAccount;
