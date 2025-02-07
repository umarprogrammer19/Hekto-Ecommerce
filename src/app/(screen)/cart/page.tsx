'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartContext } from "@/components/contextApi/AddToaCart";

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCartContext();
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 text-[#1D3178]">Your Cart</h2>
                {cart.length > 0 ? (
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex lg:items-center justify-between bg-white p-4 rounded-lg shadow-md flex-col lg:flex-row gap-4 lg:gap-0"
                            >
                                <div className="flex lg:items-center space-x-4 flex-col lg:flex-row gap-3 lg:gap-0">
                                    <Image
                                        src={item.image} 
                                        alt={item.name}
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />
                                    <div className="lg:px-4 ">
                                        <p className="font-semibold text-[#1D3178] line-clamp-1 ">{item.name}</p>
                                        <p className="text-sm text-gray-500">
                                            Quantity: {item.quantity}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex lg:items-center gap-2 lg:gap-0 space-x-6 flex-col lg:flex-row">
                                    <p className="text-[#1D3178] ml-4 lg:ml-0">${item.price}</p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="px-2 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                    <p className="font-bold text-[#1D3178]">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-[#1D3178] text-center mt-6">
                        Your cart is empty. Add some products!
                    </p>
                )}

                {/* Action Buttons */}
                {cart.length > 0 && (
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={clearCart}
                            className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>

            {/* Cart Totals Section */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 h-[300px] sticky top-4 right-0">
                <h2 className="text-xl font-bold mb-4 text-[#1D3178]">Cart Totals</h2>
                <p className="flex justify-between text-[#1D3178]">
                    <span>Subtotal:</span> <span>${calculateTotal().toFixed(2)}</span>
                </p>
                <p className="flex justify-between mb-4 text-[#1D3178]">
                    <span>Shipping:</span> <span>$15.00</span>
                </p>
                <p className="flex justify-between font-bold text-lg text-[#1D3178]">
                    <span>Total:</span>{" "}
                    <span>${(calculateTotal() + 15).toFixed(2)}</span>
                </p>
                {cart.length > 0 && (
                    <Link href="/checkout">
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600 mt-4"
                        >
                            Proceed To Checkout
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Cart;
