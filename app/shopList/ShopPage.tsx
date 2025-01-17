import React from "react";
import ShopCard from "./ShopCard";

function ShopPage() {
  return (
    <div className="max-w-[1171px] flex mx-auto justify-center flex-col items-center lg:px-8 px-5">
      <div className=" flex justify-center md:flex-row flex-col gap-y-5 lg:gap-x-60   items-center  py-14">
        <div >
          <h1 className="text-[22px] text-[#151875] font-bold">
            Ecommerce Acceories & Fashion item{" "}
          </h1>
          <p className="text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
        </div>
        <div className="set_lato flex justify-between gap-x-3 items-center">
          <div className="">
            Per Page:{" "}
            <input
              type="number"
              className="border-[1px] w-16 border-gray-500"
            />
          </div>

          <div className="">
            Sort by:{" "}
            <input
              type="number"
              placeholder="Best MAtch"
              className="border-[1px] w-16 border-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="">
      <ShopCard heading='Accumsan tincidunt' img='/shop/S1.png'/>
        <ShopCard heading='In nulla' img='/shop/S2.png'/>
        <ShopCard heading='Vel sem' img='/shop/S3.png'/>
        <ShopCard heading='Porttitor cum' img='/shop/S4.png'/>
        <ShopCard heading='Nunc in' img='/shop/S5.png'/>
      </div>
    </div>
  );
}

export default ShopPage;
