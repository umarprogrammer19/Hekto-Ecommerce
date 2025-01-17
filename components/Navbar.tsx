// import { ArrowDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <div className="max-w-[1000px] lg:flex  my-5 mx-auto h-[40px]  justify-between gap-x-[130px] items-center">
      <div>
        <h1 className="font-[700] text-[34px] leading-[34px]">Hekto</h1>
      </div>
      <div className="set_lato hidden lg:flex md:justify-center  items-center">
        <ul className="flex items-center gap-x-7">
          <li className="flex items-center ">
            <Link className="hover:text-pink-600" href={"/"}>
              Home
            </Link>
          </li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <li className="flex items-center  ">
                <Link className="hover:text-pink-600" href={""}>
                  Pages
                </Link>
                <IoIosArrowDown className="hover:text-pink-600" />
              </li>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-[#ffffff]">
              <DropdownMenuSeparator />
              <DropdownMenuItem className="active:bg-gray-400">
                <Link href={"/about"}>About</Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="active:bg-gray-400">
                <Link href={"/demo"}>Demo</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="active:bg-gray-400">
                <Link href={"/shopleft"}>Shop Left Sidebar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="active:bg-gray-400">
                <Link href={"/faq"}>FAQ</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <li className="hover:text-pink-600">
            <Link href={"/products"}>Products</Link>
          </li>
          <li className="hover:text-pink-600">
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li className="hover:text-pink-600">
            <Link href={"/shopList"}>Shop</Link>
          </li>
          <li className="hover:text-pink-600">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex justify-center items-center w-[317px] h-[40px]">
        <input type="text" className="border-[1px] border-gray-300" />
        <div className="bg-[#FB2E86]  flex items-center h-[25px] text-white">
          <IoSearch className="w-[51px] size-5 hover:text-pink-600 " />
        </div>
      </div>

      <div className="">
        <Sheet>
          <SheetTrigger>
            <div>
              <MdMenu
                size={40}
                className="absolute right-5 top-20 w-8 ml-1 lg:hidden block "
              />
            </div>
          </SheetTrigger>
          <SheetContent className="bg-white">
            <div className="mt-28">
              <div className="flex justify-center gap-5 mb-10">
                <Link href={"/shoppingCart"}>
                  <BsCart2 size={20} className=" w-10 hover:text-pink-600" />
                </Link>

                <Link href={"/myaccount"}>
                  <FiUser size={20} className=" w-10 hover:text-pink-600" />
                </Link>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search.."
                    className=" w-full outline-none rounded-3xl md:px-6 px-2 py-2 border-[1px] border-black"
                  />
                  <IoSearch className="absolute top-2 right-4 text-2xl" />
                </div>
              </div>
              <ul className="flex flex-col text-xl gap-10 bg-white">
                <li>
                  <Link className="hover:text-pink-600" href={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <DropdownMenu >
                    <DropdownMenuTrigger>
                      <Link href={""} className="hover:text-pink-600">
                        Pages
                      </Link>
                      <IoIosArrowDown className="inline" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white" >
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link className="hover:text-pink-600" href={"/about"}>
                          About
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Link className="hover:text-pink-600" href={"/demo"}>
                          Demo
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link className="hover:text-pink-600" href={"/shopleft"}>Shop Left Sidebar</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link className="hover:text-pink-600" href={"/faq"}>FAQ</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>

                  </DropdownMenu>
                </li>
                <li>
                  <Link className="hover:text-pink-600" href={"/products"}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-pink-600" href={"/blog"}>
                    Blog
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link className="hover:text-pink-600" href={"/shopList"}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-pink-600" href={"/contact"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;
