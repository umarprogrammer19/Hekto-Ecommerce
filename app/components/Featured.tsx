import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";

function Featured() {
  return (
    <div className="max-w-[1920px] my-20 mx-5 sm:mx-10 lg:mx-32 xl:mx-72">
      {/* Header */}
      <h1 className="text-center text-[32px] sm:text-[36px] lg:text-[42px] font-[600] py-3 leading-[40px] sm:leading-[45px] lg:leading-[49.22px] text-[#1A0B5B]">
        Featured Products
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1   px-10 md:px-0  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mx-auto">
        {/* Product Card */}
        <div className="w-full sm:w-[270px]  flex justify-center items-center flex-col shadow-lg shadow-[#e1dfdf]">
          <div className="bg-[#F6F7FB]  w-full sm:w-[270px] h-[236px] flex justify-center items-center mx-auto">
            <Image
              src={"/features/chair.png"}
              width={2000}
              height={2000}
              alt={"chair"}
              className="w-[178px] object-cover"
            />
          </div>
          <div className="py-4 px-3 text-center">
            <p className="set_lato text-[#FB2E86] py-2 font-[700] text-base sm:text-lg">
              Cantilever chair
            </p>
            <Image
              src={"/features/line.png"}
              width={2000}
              height={2000}
              alt={"line"}
              className="w-[40px] sm:w-[53px] mx-auto py-2"
            />
            <p className="text-[#151875] text-sm sm:text-[14px]">Code - Y523201</p>
            <p className="text-[#151875] set_lato py-2 text-base">$42.00</p>
          </div>
        </div>

        {/* Product Card with Icons */}
        <div className="relative w-full sm:w-[270px] flex justify-center items-center flex-col shadow-lg shadow-[#e1dfdf]">
          <div className="bg-[#F6F7FB] w-full sm:w-[270px] h-[236px] flex justify-center items-center mx-auto">
            <div className="absolute top-4 left-3 gap-x-4 flex items-center">
              <BsCart2 size={20} className="text-[#2F1AC4]" />
              <FaRegHeart size={20} className="text-[#5ca3bb]" />
              <FaSearchPlus size={20} className="text-[#4a8ba0]" />
            </div>
            <Image
              src={"/features/chair2.png"}
              width={2000}
              height={2000}
              alt={"chair"}
              className="w-[178px] object-cover"
            />
          </div>
          <div className="bg-[#2F1AC4] w-full text-white">
            <div className="py-4 px-3 text-center">
              <p className="set_lato py-2 font-[700] text-base sm:text-lg">
                Cantilever chair
              </p>
              <Image
                src={"/features/line.png"}
                width={2000}
                height={2000}
                alt={"line"}
                className="w-[40px] sm:w-[53px] mx-auto py-2"
              />
              <p className="text-sm sm:text-[14px]">Code - Y523201</p>
              <p className="set_lato py-2 text-base">$42.00</p>
            </div>
          </div>
        </div>

        {/* Product Card */}
        <div className="w-full sm:w-[270px] flex justify-center items-center flex-col shadow-lg shadow-[#e1dfdf]">
          <div className="bg-[#F6F7FB] w-full sm:w-[270px] h-[236px] flex justify-center items-center mx-auto">
            <Image
              src={"/features/chair3.png"}
              width={2000}
              height={2000}
              alt={"chair"}
              className="w-[178px] object-cover"
            />
          </div>
          <div className="py-4 px-3 text-center">
            <p className="set_lato text-[#FB2E86] py-2 font-[700] text-base sm:text-lg">
              Cantilever chair
            </p>
            <Image
              src={"/features/line.png"}
              width={2000}
              height={2000}
              alt={"line"}
              className="w-[40px] sm:w-[53px] mx-auto py-2"
            />
            <p className="text-[#151875] text-sm sm:text-[14px]">Code - Y523201</p>
            <p className="text-[#151875] set_lato py-2 text-base">$42.00</p>
          </div>
        </div>

        {/* Product Card */}
        <div className="w-full sm:w-[270px] flex justify-center items-center flex-col shadow-lg shadow-[#e1dfdf]">
          <div className="bg-[#F6F7FB] w-full sm:w-[270px] h-[236px] flex justify-center items-center mx-auto">
            <Image
              src={"/features/chair4.png"}
              width={2000}
              height={2000}
              alt={"chair"}
              className="w-[178px] object-cover"
            />
          </div>
          <div className="py-4 px-3 text-center">
            <p className="set_lato text-[#FB2E86] py-2 font-[700] text-base sm:text-lg">
              Cantilever chair
            </p>
            <Image
              src={"/features/line.png"}
              width={2000}
              height={2000}
              alt={"line"}
              className="w-[40px] sm:w-[53px] mx-auto py-2"
            />
            <p className="text-[#151875] text-sm sm:text-[14px]">Code - Y523201</p>
            <p className="text-[#151875] set_lato py-2 text-base">$42.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
