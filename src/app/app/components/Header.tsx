'use client';

import Link from "next/link";
import { useState } from "react";
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  HeartIcon, 
  Bars3Icon, 
  XMarkIcon 
} from "@heroicons/react/24/outline";
import TopBar from "./TopBar";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Main Header */}
      <div className="w-full h-[80px] flex justify-center items-center border-b-2">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-10">
          {/* Left Section: Logo and Search Bar */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <h1 className="text-3xl font-bold">Hekto</h1>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-60 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="hidden sm:flex items-center gap-x-8">
            <ul className="flex gap-x-8 items-center">
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  className="hover:text-[#FB2E86] transition-colors"
                  onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)} // Toggle the Pages menu
                >
                  Pages
                </button>
                {isPagesDropdownOpen && (
                  <ul className="absolute top-full mt-2 bg-white shadow-md rounded-md text-black text-sm">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/cart">Cart</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/checkout">Billing Details</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/ordercompleted">Order Completed</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/account">My Account</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/creatorpage">About Creator</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/faq">FAQ</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/shoplist">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/contact-us">
                Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Icons */}
          <div className="hidden sm:flex items-center gap-x-6">
            <Link href="/cart" className="hover:text-[#FB2E86] transition-colors flex items-center gap-1">
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link href="/wishlist" className="hover:text-[#FB2E86] transition-colors flex items-center gap-1">
              <HeartIcon className="w-5 h-5" />
              <span>Wishlist</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-black" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col items-center px-4 py-2 border-t">
          {/* Mobile Pages Dropdown */}
          <button
            className="hover:text-[#FB2E86] transition-colors"
            onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
          >
            Pages
          </button>
          {isPagesDropdownOpen && (
            <ul className="w-full text-center bg-white shadow-md rounded-md text-black text-sm">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/cart">Cart</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/checkout">Billing Details</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/ordercompleted">Order Completed</Link>
                    </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about">About Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/account">My Account</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/forgetpassword">Forget Password</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/creatorpage">About Creator</Link>
                    </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          )}

          {/* Mobile Navigation Links */}
          <ul className="w-full text-center">
            <li>
              <Link className="block py-2 hover:text-[#FB2E86]" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="block py-2 hover:text-[#FB2E86]" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="block py-2 hover:text-[#FB2E86]" href="/shoplist">
                Shop
              </Link>
            </li>
            <li>
              <Link className="block py-2 hover:text-[#FB2E86]" href="/account">
                My Account
              </Link>
            </li>
          </ul>

          {/* Mobile Search Bar */}
          <div className="flex items-center border rounded-md overflow-hidden bg-gray-100 px-4 py-2 mx-4 mt-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 text-sm outline-none bg-transparent"
            />
            <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Cart and Wishlist */}
          <div className="flex justify-around px-4 py-2 border-t">
            <Link href="/cart" className="flex items-center gap-1 text-sm hover:text-[#FB2E86]">
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link href="#" className="flex items-center gap-1 text-sm hover:text-[#FB2E86]">
              <HeartIcon className="w-5 h-5" />
              <span>Wishlist</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
