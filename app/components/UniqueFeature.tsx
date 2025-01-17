import Image from "next/image";
import Button from "./Button";

function UniqueFeature() {
  return (
    <div className="max-w-[1920px] bg-[#F1F0FF] mx-auto">
      <div className="my-20 mx-auto flex flex-wrap justify-center items-center gap-y-10 px-5 sm:px-10 md:px-16 lg:px-20">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            className="w-[80%] md:w-[70%] lg:w-[509px]"
            src={"/sofaF.png"}
            width={1000}
            height={1000}
            alt={""}
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[25px] sm:text-[30px] lg:text-[35px] py-4 leading-[1.4] tracking-[1.5%] text-[#151875] font-[700]">
            Unique Features Of Latest & Trending Products
          </h1>

          <div className="text-[#ACABC3] space-y-4">
            {/* Features List */}
            <div className="flex items-center gap-x-3 justify-center lg:justify-start">
              <p className="rounded-full bg-red-500 w-[10px] h-[10px]" />
              <p>All frames constructed with hardwood solids and laminates</p>
            </div>

            <div className="flex items-center gap-x-3 justify-center lg:justify-start">
              <p className="rounded-full bg-blue-700 w-[10px] h-[10px]" />
              <p>
                Reinforced with double wood dowels, glue, screw-nails corner
                blocks and machine nails
              </p>
            </div>

            <div className="flex items-center gap-x-3 justify-center lg:justify-start">
              <p className="rounded-full bg-green-300 w-[10px] h-[10px]" />
              <p>Arms, backs, and seats are structurally reinforced</p>
            </div>
          </div>

          {/* Button and Price Section */}
          <div className="my-6 flex flex-wrap gap-y-5 gap-x-9 justify-center lg:justify-start items-center">
            <Button text="Add To Cart" />
            <div className="text-center lg:text-left">
              <p className="text-[#000000] font-[600]">B&B Italian Sofa</p>
              <p className="text-black">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniqueFeature;
