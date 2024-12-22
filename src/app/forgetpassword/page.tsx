'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setAlertMessage(
      'Password reset instructions have been sent to your email. 📩'
    );
    setEmail('');
    setTimeout(() => setAlertMessage(''), 5000); // Hide alert after 5 seconds
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-[#f9f9f9] py-12">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-[#1D3178] mb-4">
            Forgot Password?
          </h1>
          <p className="text-sm text-center text-gray-500 mb-6">
            Enter your email address to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#1D3178] mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                id="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                placeholder="muqaddasfatima576@gmail.com"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-[#FB2E86] text-white font-semibold rounded-md hover:bg-[#e02675] focus:ring-2 focus:ring-offset-2 focus:ring-[#FB2E86] text-sm"
              >
                Send Reset Link
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

export default ForgotPassword;
