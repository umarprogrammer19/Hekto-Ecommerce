import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function Header() {
  return (
    <div className="max-w-[1920px] bg-[#7E33E0] h-[44px] text-white flex justify-evenly items-center">
      <div className="flex justify-center items-center gap-x-9">
       <div className="flex items-center gap-x-[5px]">
       <MdOutlineEmail />
       <p>mhhasanul@gmail.com</p>
       </div>
       <div className="flex items-center gap-x-3">
        <LuPhoneCall className="size-["/>
        <p>(12345)67890</p>
       </div>
      </div>

      <div className="flex gap-x-6">
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

        <div className="flex items-center gap-x-2">
          Login <FiUser className="size-[17px] gap-x-2" />
        </div>
        <div className="flex items-center gap-x-2">
          Wishlist <FaRegHeart   className="size-[17px]" />
        </div>
        <div className="flex gap-x-1 items-center">
          <BsCart2 className="size-[20px] " />
        </div>
      </div>
    </div>
  );
}

export default Header;
