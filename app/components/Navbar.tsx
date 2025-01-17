// import { ArrowDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

// const navLinks = [
//   {
//     id: 1,
//     label: "Home",
//     url: "/",
//   },
//   {
//     id: 2,
//     label: "Pages",
//     url: "/",
//   },
//   {
//     id: 3,
//     label: "Products",
//     url: "/",
//   },
//   {
//     id: 4,
//     label: "Blog",
//     url: "/",
//   },
//   {
//     id: 5,
//     label: "Shop",
//     url: "/",
//   },
//   {
//     id: 6,
//     label: "Contact",
//     url: "/",
//   },
// ];

function Navbar() {
  return (
    <div className="max-w-[1177px] my-5 mx-auto h-[40px] flex justify-around gap-x-[90px] items-center">
      <div>
        <h1 className="font-[700] text-[34px] leading-[34px]">Hekto</h1>
      </div>
      <div className="set_lato flex justify-center  items-center">
        <ul className="flex items-center gap-x-7">
          <li className="flex items-center ">
            <Link href={""}>Home</Link>
            <IoIosArrowDown />
          </li>
          <li>
            <Link href={""}>Pages</Link>
          </li>
          <li>
            <Link href={""}>Products</Link>
          </li>
          <li>
            <Link href={""}>Blog</Link>
          </li>
          <li>
            <Link href={""}>Shop</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center w-[317px] h-[40px]">
        <input type="text" className="border-[1px] border-gray-300" />
        <div className="bg-[#FB2E86]  flex items-center h-[25px] text-white">
          <IoSearch className="w-[51px] size-5   " />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
