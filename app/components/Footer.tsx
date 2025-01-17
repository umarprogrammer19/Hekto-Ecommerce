// import React from "react";
// import { FaFacebook, FaGithub } from "react-icons/fa";
// import { RxInstagramLogo } from "react-icons/rx";
// import { FaLinkedin } from "react-icons/fa";
// import Link from "next/link";

// function Footer() {
//   return (
//     <div>
//       <footer className="text-gray-600 body-font bg-[#E7E4F8]">
//         <div className="container px-5 py-24 mx-auto mt-[40px]">
//           <div className="flex flex-col flex-wrap md:flex-row items-center justify-start md:text-left text-start order-first">
//             <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//               <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
//                 Hekto
//               </h2>
//               <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap  items-end md:justify-start">
//                 <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
//                   <label
//                     htmlFor="footer-field"
//                     className="leading-7 text-sm text-gray-600"
//                   ></label>
//                   <input
//                     type="text"
//                     id="footer-field"
//                     placeholder="Enter Email Address"
//                     name="footer-field"
//                     className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                   />
//                 </div>
//                 <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
//                   Sign-Up
//                 </button>
//               </div>
//               <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
//                 Contact Info
//                 <br className="lg:block hidden" />
//                 17 Princess Road, London, Greater London NW1 8JR, UK
//               </p>
//             </div>

//             <div className="lg:w-1/4 2 w-full px-4">
//               <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3 lg:ml-6">
//                 CATEGORIES
//               </h2>
//               <nav className="list-none mb-10">
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800  ml-6">
//                     Laptops & Computers
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800 ml-6">
//                     Cameras & Photography
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800 ml-6">
//                     Smart Phones & Tablets
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800 ml-6">
//                     Video Games & Consoles
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800 ml-6">
//                     Waterproof Headphones
//                   </a>
//                 </li>
//               </nav>
//             </div>
//             <div className="lg:w-1/4 w-full px-4">
//               <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
//                 Customer Care
//               </h2>
//               <nav className="list-none mb-10">
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     My Account
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">Discount</a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">Returns</a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Orders History
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Order Tracking
//                   </a>
//                 </li>
//               </nav>
//             </div>
//             <div className="lg:w-1/4 w-full px-4">
//               <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
//                 Pages
//               </h2>
//               <nav className="list-none mb-10">
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">Blog</a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Browse the Shop
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">Category</a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Pre-Built Pages
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Visual Composer Elements
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     WooCommerce Pages
//                   </a>
//                 </li>
//               </nav>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#E7E4F8]">
//           <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
//             <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
//               © 2024 Hekto —
//               <a
//                 href="https://twitter.com/knyttnev"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 ml-1"
//                 target="_blank"
//               >
//                 @Right Reserved
//               </a>
//             </p>
//             <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//               <div className='text-3xl text-gray-900" '>
//                 <FaFacebook />
//               </div>
//               <div className="text-3xl ml-3 text-gray-900">
//                 <RxInstagramLogo />
//               </div>
//               <div className="text-3xl ml-3 text-gray-900">
//                 <FaLinkedin />
//               </div>
//             </span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;

// import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#EEEFFB]  h-auto sm:h-[500px] md:h-[500px] py-8 text-[#8A8FB9] items-center">
        <div className="container mx-auto px-12 items-center">
          {/* Responsive Grid */}
          <div className="mt-[94px] text-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8  md:text-left ">
            <div className="mt-2 sm:mt-0">
              {/* Logo */}
              <h1 className="text-[38px] font-[800] text-black">Hekto</h1>
              <div className="mt-4 flex items-center gap-x-2 justify-center sm:justify-start">
                {/* Search */}
                <div className="w-full bg-white rounded-md items-center flex">
                  <input
                    className="w-[70%] h-11 p-1 bg-white text-black outline-none opacity-75"
                    type="search"
                    placeholder="Search"
                  />
                  <button className=" text-base font-medium w-[30%] h-[39px] bg-[#FB2E86] text-[#F3F9FF]">
                    Sign Up
                  </button>
                </div>
              </div>

              <p className="mt-4 text-xs leading-4 text-center sm:text-left">
                Contact Info: <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Categories Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Categories</h3>
              <ul className="set_lato mt-2 space-x-0 md:space-y-5 md:mb-6  text-sm">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>

            {/* Customer Care Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Customer Care</h3>
              <ul className="set_lato mt mt-2 space-y-2 text-sm">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>

            {/* Pages Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Pages</h3>
              <ul className="set_lato mt-2 space-y-2 text-sm">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* bottom */}

      <div className="bg-[#E7E4F8]  ">
        <div className="container px-5  h-[80px] sm:h-[53px] mx-auto flex items-center sm:flex-row flex-col">
          <p className=" set_lato text-sm text-[#9DA0AE] sm:ml-6 sm:mt-0 mt-4">
            © 2024 Hekto —
            <a
              href="https://twitter.com/knyttnev"
              rel="noopener noreferrer"
              className="text-[#9DA0AE] ml-1"
              target="_blank"
            >
              @Right Reserved
            </a>
          </p>
          <span className="flex flex-row sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <div className="w-5 h-5 ">
              <a href="#">
                <FaFacebook />
              </a>
            </div>
            <div className="w-5 h-5  ml-3 text-gray-900">
              <a href="#">
                <RxInstagramLogo />
              </a>
            </div>
            <div className="w-5 h-5  ml-3 text-gray-900">
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
