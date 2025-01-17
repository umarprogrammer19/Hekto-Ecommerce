import Image from "next/image";
import shopLeftData from "./ShopLeftData";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { FaListUl, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { HiCheck } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Heading from "@/components/Heading";

const ShopLeft = () => {
  const leftIcon = [
    {
      icon: <CgShoppingCart />,
    },
    {
      icon: <FaRegHeart />,
    },
    {
      icon: <FaSearchPlus />,
    },
  ];

  const filterData = [
    {
      icon: <HiCheck />,
      title: "Coaster Furniture",
    },
    {
      icon: <HiCheck />,
      title: "Fusion Dot High Fashion",
    },
    {
      icon: <HiCheck />,
      title: "Unique Furnitture Restor",
    },
    {
      icon: <HiCheck />,
      title: "Dream Furnitture Flipping",
    },
    {
      icon: <HiCheck />,
      title: "Young Repurposed",
    },
    {
      icon: <HiCheck />,
      title: "Green DIY furniture",
    },
  ];

  const discountData = [
    {
      icon: <HiCheck />,
      title: "20% Cashback",
    },
    {
      icon: <HiCheck />,
      title: "5% Cashback Offer",
    },
    {
      icon: <HiCheck />,
      title: "25% Discount Offer",
    },
  ];

  const reviewData = [
    {
      pic: "/reviews.png",
      count: "(2341)",
    },
    {
      pic: "/reviews1.png",
      count: "(1726)",
    },
    {
      pic: "/reviews2.png",
      count: "(258)",
    },
    {
      pic: "/reviews3.png",
      count: "(25)",
    },
  ];

  const categoriesData = [
    {
      title: "Prestashop",
    },
    {
      title: "Magento",
    },
    {
      title: "Bigcommerce",
    },
    {
      title: "osCommerce",
    },
    {
      title: "3dcart",
    },
    {
      title: "Bags",
    },
    {
      title: "Jewellery",
    },
    {
      title: "Watches",
    },
  ];

  const priceData = [
    {
      title: "$0.00 - $150.00",
    },
    {
      title: "$150.00 - $350.00",
    },
    {
      title: "$150.00 - $504.00",
    },
    {
      title: "$450.00 +",
    },
  ];

  const colorName = [
    {
      title: "Blue",
      color: "/color1.png",
    },
    {
      title: "Orange",
      color: "/color2.png",
    },
    {
      title: "Brown",
      color: "/color3.png",
    },
    {
      title: "Green",
      color: "/color4.png",
    },
    {
      title: "Purple",
      color: "/color5.png",
    },
    {
      title: "Sky",
      color: "/color6.png",
    },
  ];

  return (
    <div className="max-w-[1920px] mx-auto">
      <div>
        <Heading
          heading="Shop Left Sidebar"
          path1="Home"
          path2="Pages"
          path3="Shop Left Sidebar"
        />
      </div>

      <div className="md:container md:px-[1.3rem] px-[.8rem] md:pt-[98px] pt-12 flex items-center justify-between">
        <div className="">
          <h2 className="text-[#151875] font-bold text-[28px] lg:text-[30px] 2xl:text-[34px]">
            Ecommerce Acceories & Fashion item
          </h2>
          <h4 className="text-[#8A8FB9] set_lato">
            About 9,620 results (0.62 seconds)
          </h4>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-9 ">
            <div className="flex gap-2">
              <h3 className="text-[#151875] font-normal">Per Page: </h3>
              <h3 className="border rounded-sm border-primary py-4 px-8"></h3>
            </div>
            <div className="flex gap-2">
              <h3 className="text-[#151875]  font-normal">Sort By: </h3>
              <h4 className="text-extralight   border rounded-sm border-primary py-1 px-3 font-lato flex items-center gap-1">
                Best Match{" "}
                <span>
                  <BsChevronDown />
                </span>
              </h4>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <h3 className="text-[#151875] font-normal">View:</h3>
                <FaListUl className="text-[#151875] font-bold" />
                <BsFillGridFill className="text-[#151875] font-bold" />
              </div>
              <div>
                <h3 className="border rounded-sm border-primary py-4 px-20"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:px-[1.3rem] px-[.8rem] md:flex md:mt-24 mt-6 mb-32">
        <div className="  md:w-[350px]">
          <div>
            <h3 className="text-[#151875] font-bold underline pb-4 text-[20px]">
              Product Brand
            </h3>

            <div>
              {filterData.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex items-center gap-3 py-1">
                      <input
                        className="bg-[#7E81A2] text-[#7E81A2] border-none"
                        type="checkbox"
                      />
                      <h4 className="text-[#7E81A2] set_lato font-medium">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-[#151875] font-bold underline pb-4 text-[20px]">
              Discount Offer
            </h3>

            <div>
              {discountData.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex items-center gap-3 py-1">
                      <input
                        className="bg-[#ffff] text-pink-600 border-none"
                        type="checkbox"
                      />
                      <h4 className="text-[#7E81A2] font-lato font-medium">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-[#151875] font-bold underline pb-4 text-[20px]">
              Rating Item
            </h3>

            <div>
              {reviewData.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex items-center gap-3 py-1 ">
                      <input
                        className="bg-light_yellow text-yellow border-none"
                        type="checkbox"
                      />
                      <Image width={50} height={50} src={item.pic} alt="" />
                      <h5>{item.count}</h5>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <h3 className="text-[#151875] font-bold underline pb-4 text-[20px]">
                Categories
              </h3>
              <div>
                {categoriesData.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex items-center gap-3 py-1">
                        <input
                          className="bg-light_pink text-pink border-none"
                          type="checkbox"
                        />
                        <h4 className="text-[#7E81A2] font-lato font-medium">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-[#151875] font-bold underline pb-4 text-[20px]">
                Price Filter
              </h3>
              <div>
                {priceData.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex items-center gap-3 py-1">
                        <input
                          className="bg-light_pink text-pink border-none"
                          type="checkbox"
                        />
                        <h4 className="text-[#7E81A2] font-lato font-medium">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className=" relative flex items-center mt-6">
                <div className="">
                  <input
                    className="border-2 border-gray-300  bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="$10.00 - 20000$"
                  />
                </div>
                <div className="absolute right-1/3">
                  <BiSearch className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="mt-12 mb-12">
              <h3 className="text-[#151875] font-bold underline pb-4 text-[20px]">
                Filter By Color
              </h3>
              <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                {colorName.map((item, i) => {
                  return (
                    <div key={i} className="flex items-center gap-1">
                      <div>
                        <h4>
                          <Image
                            width={20}
                            height={20}
                            src={item.color}
                            alt=""
                          />
                        </h4>
                      </div>

                      <div>
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className=" md:w-max">
          {shopLeftData.map((item, i) => {
            return (
              <div key={i} className=" mb-8">
                <div className=" md:flex gap-6 boxShadow p-6 items-center ">
                  <div>
                    <Image width={200} height={200} src={item.pic} alt="" />
                  </div>

                  <div>
                    <div className="flex items-center gap-4">
                      <h3 className="text-[#151875] font-bold">{item.title}</h3>
                      <div className="my-3 flex justify-center ">
                        <div className="flex h-3 w-[80px]  gap-2">
                          <div className="h-3 w-3 rounded-full bg-yellow"></div>
                          <div className="h-3 w-3 rounded-full bg-pink"></div>
                          <div className="h-3 w-3 rounded-full bg-blue"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <h4 className="text-[#151875] font-bold">
                        {item.offerPrice}
                      </h4>
                      <h4 className="text-pink-600 line-through">
                        {item.regularPrice}
                      </h4>
                      <Image
                        width={50}
                        height={50}
                        src={item.review}
                        alt=""
                      />
                    </div>
                    <p className="mt-3 md:w-[70%] text-[#7E81A2]">{item.des}</p>
                    <div className="flex items-center gap-4 ">
                      {leftIcon.map((item, i) => {
                        return (
                          <div
                            key={i}
                            className="flext justify-center mt-6 bg-white rounded-full p-4 shadow-2xl "
                          >
                            <Link
                              className="text-xl text-[#151875] font-bold"
                              href=""
                            >
                              {item.icon}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:px-7 flex justify-center  my-20">
        <Image width={2000} height={2000} src="/banner2.png" alt="" />
      </div>
    </div>
  );
};

export default ShopLeft;
