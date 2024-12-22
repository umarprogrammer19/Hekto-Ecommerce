'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Define types for Cart Item
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
};

// Mock cartproducts data
const initialCartProducts: CartItem[] = [
  {
    id: 1,
    name: "Ut diam",
    price: 30,
    quantity: 2,
    color: "Red",
    size: "M",
    image: "/images/cart1.png",
  },
  {
    id: 2,
    name: "faucibus posuere",
    price: 45,
    quantity: 1,
    color: "Blue",
    size: "L",
    image: "/images/cart2.png",
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    price: 60,
    quantity: 1,
    color: "Green",
    size: "S",
    image: "/images/cart3.png",
  },
  {
    id: 4,
    name: "Elit massa dia",
    price: 50,
    quantity: 2,
    color: "Yellow",
    size: "M",
    image: "/images/cart4.png",
  },
  {
    id: 5,
    name: "Proin pharetra",
    price: 35,
    quantity: 3,
    color: "Black",
    size: "L",
    image: "/images/cart5.png",
  },

];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartProducts);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const resetCart = () => {
    setCartItems(initialCartProducts);
  };

  return (
    <>
      <Header />
      <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-[#1D3178]">Your Cart</h2>
          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#1D3178]">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Color: {item.color}, Size: {item.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <p className="text-[#1D3178]">${item.price.toFixed(2)}</p>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      className="w-12 px-2 py-1 border rounded-md text-center"
                      min="1"
                    />
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
          <div className="flex justify-between mt-6">
            <button
              onClick={resetCart}
              className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
            >
              Update Cart
            </button>
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="bg-white p-6 rounded-lg shadow-md">
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
          <li>
                <Link href="/checkout">
            <button
              type="submit"
              className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600"
            >
              Proceed To Checkout
            </button>
            </Link>
            </li>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
