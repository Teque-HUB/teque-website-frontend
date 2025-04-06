import Image from "next/image";
import React from "react";

const EcommerceCard = () => {
  return (
    <div className="flex bg-[#F9A474] rounded-[32px] w-full flex-col-reverse lg:flex-row max-w-[629px] h-[260px]">
      <div className="pl-[26px] pb-6 h-full flex flex-col justify-end">
        <h2 className=" h-[27px] text-[#1c471f] text-2xl font-bold font-['Inter'] leading-7 mt-6 mb-[14px]">
          E-Commerce
        </h2>
        <p className="w-[173.78px] h-[36.94px] text-[#1c471f] text-sm font-medium font-['Inter'] leading-[18.95px]">
          we build e-commerce platforms for sales
        </p>
      </div>
      <span className="relative inline-flex w-full max-w-[200px] lg:max-w-max">
        <Image
          src={"/images/businesses.png"}
          width={0}
          height={0}
          sizes="100vw"
          alt="businesses"
          style={{ width: "100%", height: "100%" }}
          className=" object-contain "
        />
      </span>
    </div>
  );
};

export default EcommerceCard;
