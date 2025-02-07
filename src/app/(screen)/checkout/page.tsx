/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { z } from 'zod';

const CheckoutPage = () => {
    const [formData, setFormData] = useState<any>({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const schema = z.object({
        fullName: z.string().min(1, 'Full name is required'),
        email: z.string().email('Invalid email address'),
        phone: z.string().min(10, 'Invalid phone number'),
        address: z.string().min(1, 'Address is required'),
        city: z.string().min(1, 'City is required'),
        postalCode: z.string().min(5, 'Invalid postal code'),
        country: z.string().min(1, 'Country is required'),
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        try {
            schema.parse(formData);
        } catch (err: any) {
            alert(err.errors[0].message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 lg:p-12">
                <h1 className="text-3xl font-bold text-center text-[#1D3178] mb-8">
                    Billing Information
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {Object.keys(formData).map((key) => (
                        <div key={key}>
                            <label htmlFor={key} className="block text-sm font-semibold text-gray-700">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </label>
                            <input
                                type="text"
                                name={key}
                                id={key}
                                value={formData[key]}
                                onChange={handleInputChange}
                                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                                required
                            />
                        </div>
                    ))}
                    <Link href='/ordercompleted'>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600"
                        >
                            Submit
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
