import { FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#EEEFFB]  h-auto sm:h-[500px] md:h-[500px] py-8 text-[#8A8FB9] items-center">
        <div className="container mx-auto md:px-12 px-4 items-center">
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
