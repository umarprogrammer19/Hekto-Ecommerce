import React from "react";
import demoProductData from "./DemoData";
import Image from "next/image";

const DemoProduct = () => {
  return (
    <div className="md:mt-44 mt-12  ">
      <div className="lg:w-[400px] ">
        {demoProductData.map((item, i) => {
          return (
            <div key={i} className="  ">
              <div className="w-full flex md:gap-4 gap-2 mb-4 items-center  ">
                <div className="w-[300px]">
                  <Image className="w-[400px]"  src={item.pic} height={1000} width={1000} alt="" />
                </div>
                <div className="flex items-center md:justify-between ">
                  <div>
                    <h4 className="text-[14px] font-semibold">{item.title}</h4>
                    <h5 className="text-tertiary">color:{item.color}</h5>
                    <h5 className="text-tertiary">Size:{item.size}</h5>
                  </div>
                  <div className="w-[160px] text-right">
                    <h4>{item.price}</h4>
                  </div>
                </div>
              </div>

              <div className=" border-[1px] mb-4"></div>
            </div>
          );
        })}
      </div>

      <div className=" py-9 px-6 mt-6 mb-12 bg-[#E8E6F1]">
        <div className="">
          <div className=" flex items-center justify-between">
            <h3 className="text-[18px] text-[#1D3178] font-bold">Subtotals:</h3>
            <h4 className="text-[18px] text-[#1D3178] font-bold">£219.00</h4>
          </div>
          <div className="md:w-[350px] border-[1px] mt-2"></div>
        </div>

        <div className="mt-9">
          <div className=" flex items-center justify-between">
            <h3 className="text-[18px] text-[#1D3178] font-bold">Totals:</h3>
            <h4 className="text-[18px] text-[#1D3178] font-bold">£325.00</h4>
          </div>
          <div className="md:w-[350px] border-[1px] mt-2"></div>
        </div>

        <div className="flex items-center mt-7 gap-1 ">
          <input className=" w-[8px] h-[8px]" type="checkbox" name="" id="" />
          <h6 className="text-[12px] text-[#8A91AB] set_lato">
            Shipping & taxes calculated at checkout
          </h6>
        </div>

        <button className="w-full mt-11 set_lato h-[40px] rounded-[3px] bg-[#19D16F] text-white">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default DemoProduct;
