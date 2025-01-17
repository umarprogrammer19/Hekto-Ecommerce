import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";

function Featured() {
  return (
    <div className="max-w-[1920px]   px-[2px] sm:mx-10 lg:mx-32 xl:mx-auto my-20 ">
      {/* Header */}
      <h1 className="text-center text-[32px] sm:text-[36px] lg:text-[42px] font-[600] py-6 leading-[40px] sm:leading-[45px] lg:leading-[49.22px] text-[#1A0B5B]">
        Featured Products
      </h1>

      {/* Grid Container */}
      <div className="w-full  ">
        <div className="grid items-center  sm:w-fit w-full  px-10 grid-cols-1 gap-16 sm:grid-cols-2  xl:grid-cols-4  mx-auto">
          {/* Product Card */}
          <div className="relative group w-full sm:w-[270px] flex justify-center items-center flex-col shadow-lg shadow-[#e1dfdf]">
            <div className=" bg-[#F6F7FB] w-full sm:w-[270px] h-[236px] flex justify-center items-center mx-auto">
              <div className="absolute top-4 left-3 gap-x-4 flex items-center">
                <BsCart2
                  size={20}
                  className="text-[#2F1AC4] opacity-0 group-hover:opacity-100 "
                />
                <FaRegHeart
                  size={20}
                  className="text-[#5ca3bb] opacity-0 group-hover:opacity-100"
                />
                <FaSearchPlus
                  size={20}
                  className="text-[#4a8ba0] opacity-0 group-hover:opacity-100"
                />
              </div>
              <Image
                src={"/features/chair1.png"}
                width={2000}
                height={2000}
                alt={"chair"}
                className="w-[178px] object-cover"
              />
            </div>

            <div className="bg-opacity-0 group-hover:bg-[#2F1AC4] w-full text-white">
              <div className="py-4 px-3 text-center">
                <p className="set_lato py-2 text-[#FB2E86]  group-hover:text-white font-[700] text-base sm:text-lg">
                  Cantilever chair
                </p>
                <Image
                  src={"/features/line.png"}
                  width={2000}
                  height={2000}
                  alt={"line"}
                  className="w-[40px] sm:w-[53px] mx-auto py-2"
                />
                <p className="text-sm text-[#2F1AC4] group-hover:text-white sm:text-[14px]">
                  Code - Y523201
                </p>
                <p className="set_lato text-[#2F1AC4] group-hover:text-white  py-2 text-base">
                  $42.00
                </p>
              </div>
            </div>
          </div>

          {/* Product Card with Icons */}
          <div className="relative group w-full sm:w-[270px] flex justify-center items-center flex-col shadow-lg shadow-[#e1dfdf]">
            <div className=" bg-[#F6F7FB] w-full sm:w-[270px] h-[236px] flex justify-center items-center mx-auto">
              <div className="absolute top-4 left-3 gap-x-4 flex items-center">
                <BsCart2
                  size={20}
                  className="text-[#2F1AC4] opacity-0 group-hover:opacity-100 "
                />
                <FaRegHeart
                  size={20}
                  className="text-[#5ca3bb] opacity-0 group-hover:opacity-100"
                />
                <FaSearchPlus
                  size={20}
                  className="text-[#4a8ba0] opacity-0 group-hover:opacity-100"
                />
              </div>
              <Image
                src={"/features/chair2.png"}
                width={2000}
                height={2000}
                alt={"chair"}
                className="w-[178px] object-cover"
              />
            </div>

            <div className="bg-opacity-0 group-hover:bg-[#2F1AC4] w-full text-white">
              <div className="py-4 px-3 text-center">
                <p className="set_lato py-2 text-[#FB2E86]  group-hover:text-white font-[700] text-base sm:text-lg">
                  Cantilever chair
                </p>
                <Image
                  src={"/features/line.png"}
                  width={2000}
                  height={2000}
                  alt={"line"}
                  className="w-[40px] sm:w-[53px] mx-auto py-2"
                />
                <p className="text-sm text-[#2F1AC4] group-hover:text-white sm:text-[14px]">
                  Code - Y523201
                </p>
                <p className="set_lato text-[#2F1AC4] group-hover:text-white  py-2 text-base">
                  $42.00
                </p>
              </div>
            </div>
          </div>

          {/* Product Card */}
          <div className="relative group w-full sm:w-[270px] flex justify-center items-center flex-col shadow-lg shadow-[#e1dfdf]">
            <div className=" bg-[#F6F7FB] w-full sm:w-[270px] h-[236px] flex justify-center items-center mx-auto">
              <div className="absolute top-4 left-3 gap-x-4 flex items-center">
                <BsCart2
                  size={20}
                  className="text-[#2F1AC4] opacity-0 group-hover:opacity-100 "
                />
                <FaRegHeart
                  size={20}
                  className="text-[#5ca3bb] opacity-0 group-hover:opacity-100"
                />
                <FaSearchPlus
                  size={20}
                  className="text-[#4a8ba0] opacity-0 group-hover:opacity-100"
                />
              </div>
              <Image
                src={"/features/chair3.png"}
                width={2000}
                height={2000}
                alt={"chair"}
                className="w-[178px] object-cover"
              />
            </div>

            <div className="bg-opacity-0 group-hover:bg-[#2F1AC4] w-full text-white">
              <div className="py-4 px-3 text-center">
                <p className="set_lato py-2 text-[#FB2E86]  group-hover:text-white font-[700] text-base sm:text-lg">
                  Cantilever chair
                </p>
                <Image
                  src={"/features/line.png"}
                  width={2000}
                  height={2000}
                  alt={"line"}
                  className="w-[40px] sm:w-[53px] mx-auto py-2"
                />
                <p className="text-sm text-[#2F1AC4] group-hover:text-white sm:text-[14px]">
                  Code - Y523201
                </p>
                <p className="set_lato text-[#2F1AC4] group-hover:text-white  py-2 text-base">
                  $42.00
                </p>
              </div>
            </div>
          </div>

          {/* Product Card */}
          <div className="relative group w-full sm:w-[270px] flex justify-center items-center flex-col shadow-lg shadow-[#e1dfdf]">
            <div className=" bg-[#F6F7FB] w-full sm:w-[270px] h-[236px] flex justify-center items-center mx-auto">
              <div className="absolute top-4 left-3 gap-x-4 flex items-center">
                <BsCart2
                  size={20}
                  className="text-[#2F1AC4] opacity-0 group-hover:opacity-100 "
                />
                <FaRegHeart
                  size={20}
                  className="text-[#5ca3bb] opacity-0 group-hover:opacity-100"
                />
                <FaSearchPlus
                  size={20}
                  className="text-[#4a8ba0] opacity-0 group-hover:opacity-100"
                />
              </div>
              <Image
                src={"/features/chair4.png"}
                width={2000}
                height={2000}
                alt={"chair"}
                className="w-[178px] object-cover"
              />
            </div>

            <div className="bg-opacity-0 group-hover:bg-[#2F1AC4] w-full text-white">
              <div className="py-4 px-3 text-center">
                <p className="set_lato py-2 text-[#FB2E86]  group-hover:text-white font-[700] text-base sm:text-lg">
                  Cantilever chair
                </p>
                <Image
                  src={"/features/line.png"}
                  width={2000}
                  height={2000}
                  alt={"line"}
                  className="w-[40px] sm:w-[53px] mx-auto py-2"
                />
                <p className="text-sm text-[#2F1AC4] group-hover:text-white sm:text-[14px]">
                  Code - Y523201
                </p>
                <p className="set_lato text-[#2F1AC4] group-hover:text-white  py-2 text-base">
                  $42.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
