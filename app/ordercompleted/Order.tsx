import Button from "@/components/Button";
import Image from "next/image";

function Order() {
  return (
    <div className="max-w-[1920px]  mx-auto py-16">
       
      <div className="relative md:w-[625px]  w-full mx-auto flex flex-col gap-8 justify-center text-center  items-center ">
          <Image
          className="w-[65px] hidden md:block absolute -left-12 top-4"
          src={"/order2.png"}
          alt={"order"}
          height={300}
          width={300}
        />
        <Image
          className="w-[65px] rounded-[50%] p-2 border-8 border-gray-100"
          src={"/order.png"}
          alt={"order"}
          height={300}
          width={300}
        />
        <h1 className="text-[#101750] font-bold text-4xl">Your Order Is Completed! </h1>
        <p className="set_lato leading-[30px] text-[#8D92A7] md:w-[600px] ">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <Button text="Continue Shopping" />
      </div>
    </div>
  );
}

export default Order;
