import Image from "next/image";

const TopCategory = () => {
  return (
    <div className="max-w-[1920px] mx-auto my-20  xl:mx-12 ">
      {/* Title */}
      <h1 className="text-center text-[28px] sm:text-[32px] lg:text-[42px] font-[700] py-5 leading-[1.2] text-[#1A0B5B]">
        Top Categories
      </h1>

      <div className=" flex justify-center items-center">
        {/* Product Grid */}
        <div className=" grid grid-cols-1 items-center mx-auto gap-12 sm:grid-cols-2 xl:grid-cols-4 sm:gap-16">
          {["c1", "c2", "c3", "c4"].map((img, index) => (
            <div
              key={index}
              className="w-full group lg:w-[270px] flex flex-col justify-center  items-center"
            >
              <div className="border_class w-[230px] group-hover:border-l-4 border-blue-900  lg:w-[247px] p-10 lg:p-3   md:h-[269.96px] mx-auto rounded-[50%] bg-[#31208A0D]">
                <Image
                  src={`/TopCategory/${img}.png`}
                  width={2000}
                  height={2000}
                  alt={"chair"}
                  className="w-full lg:w-[178px] h-full object-contain mx-auto"
                />
              </div>
              <p className="text-xdl py-3 text-[#151875] text-center">
                Mini LCW Chair
              </p>
              <div className="flex items-center gap-5">
                <p className="text-base text-[#151875]">$56.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
