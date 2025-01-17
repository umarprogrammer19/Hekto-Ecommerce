import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function Header() {
  return (
    <div className="max-w-[1920px] bg-[#7E33E0] md:h-[44px] h-[65px] text-white  md:flex-row flex-col flex justify-evenly items-center">
      <div className="flex justify-center items-center md:gap-x-9 gap-x-2">
        <div className="flex items-center md:gap-x-[5px]">
          <MdOutlineEmail />
          <p>mhhasanul@gmail.com</p>
        </div>
        <div className="flex items-center gap-x-3">
          <LuPhoneCall className="" />
          <p>(12345)67890</p>
        </div>
      </div>

      <div className="md:flex hidden  md:gap-x-6 gap-x-2">
        <div className="flex items-center gap-x-[2px]">
          English{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex items-center gap-x-[2px]">
          USD{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <div className="flex items-center gap-x-3">
          Login{" "}
          <Link href={"/myaccount"}>
            <FiUser className="size-[20px] md:gap-x-2  hover:text-pink-500 hover:scale-125" />
          </Link>
        </div>
        <div className="flex items-center md:gap-x-2">
          Wishlist <FaRegHeart className="size-[20px] hover:text-pink-700 hover:scale-125" />
        </div>
        <div className="flex gap-x-1 items-center">
          <Link  href={"/shoppingCart"}>
            {" "}
            <BsCart2 className="size-[20px]  hover:text-pink-700" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
