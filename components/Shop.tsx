"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const products = [
  { id: 1, title: "Vel elit euismod", price: "$150.00", image: "/shop/g1.png" },
  {
    id: 2,
    title: "Ultricies condimentum imperdiet",
    price: "$80.00",
    image: "/shop/g2.png",
  },
  {
    id: 3,
    title: "Vitae suspendisse sed",
    price: "$120.00",
    image: "/shop/g3.png",
  },
  { id: 4, title: "Sed at fermentum", price: "$60.00", image: "/shop/g4.png" },
  {
    id: 5,
    title: "Fusce pellentesque at",
    price: "$300.00",
    image: "/shop/g5.png",
  },
  {
    id: 6,
    title: "Vestibulum magna laoreet",
    price: "$90.00",
    image: "/shop/g6.png",
  },
  {
    id: 7,
    title: "Sollicitudin amet orci",
    price: "$250.00",
    image: "/shop/g7.png",
  },
  {
    id: 8,
    title: "Pellentesque condimentum ac",
    price: "$120.00",
    image: "/shop/g8.png",
  },
  {
    id: 9,
    title: "Cras scelerisque velit",
    price: "$200.00",
    image: "/shop/g9.png",
  },
  {
    id: 10,
    title: "Cras scelerisque velit",
    price: "$180.00",
    image: "/shop/g10.png",
  },
  {
    id: 11,
    title: "Lectus vulputate faucibus",
    price: "$70.00",
    image: "/shop/g11.png",
  },
  { id: 12, title: "Purus risus, ut", price: "$50.00", image: "/shop/g12.png" },
];

const Shop = () => {
  return (
    <section className="my-20">
      <div className="max-w-[84%] mx-auto">
        <div className="flex justify-between items-center gap-10 md:flex-row flex-col">
          <div className="flex flex-col gap-1">
            <h3 className="md:text-[22px] text-[#151875] font-bold">
              Ecommerce Accessories & Fashion Items
            </h3>
            <span className="text-sm text-[#8A8FB9] ">
              About 9,620 results (0.62 seconds)
            </span>
          </div>
          <div className="flex gap-4 items-center md:flex-row flex-col">
            <span className="text-sm text-[#3F509E]">per page:</span>
            <input
              type="number"
              className="bg-transparent border border-gray-200 w-16 p-1"
            />
            <span className="text-sm  text-[#3F509E]">Sort by:</span>
            <select name="sort" id="sort" className="text-sm">
              <option value="newest  text-[#3F509E]">Best Match</option>
              <option value="oldest  text-[#3F509E]">Oldest</option>
            </select>
            <span className="text-[20px]  text-[#3F509E]">View:</span>
            <input
              type="number"
              className="bg-transparent border border-gray-200 p-2"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-4   md:grid-cols-2 grid-cols-1 gap-8 mt-12">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div
                className="col-span-1 hover:opacity-65 hover:blur-0  flex items-center flex-col gap-2"
                key={product.id}
              >
                <div className="bg-[#F6F7FB] w-full lg:w-[220px] h-[250px]  py-4 flex items-center justify-center">
                  <Image
                    className="hover:scale-110 transition-all duration-300 overflow-hidden  object-cover "
                    src={product.image}
                    width={150}
                    height={150}
                    alt={product.title}
                  />
                </div>
                <h3 className=" text-center text-[#151875] font-[700] text-[18px]">{product.title}</h3>
                <div className="flex gap-x-3">
                  <span className="text-sm text-[#151875]">$26.00</span>
                  <span
                    style={{ textDecoration: "line-through" }}
                    className="text-sm text-[#FB2E86] "
                  >
                    {product.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
