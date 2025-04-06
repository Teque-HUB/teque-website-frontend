import Image from "next/image";
import React from "react";

const FintechCard = () => {
  return (
    <div className="w-full lg:h-full bg-[#C9DA8F] rounded-[32px] px-6 pb-6">
      <span className="relative inline-flex w-full max-w-[206px]  translate-y-[-20%]">
        {" "}
        <Image
          src={"/images/fintechcards.svg"}
          width={0}
          height={0}
          sizes="100vw"
          alt="fintechcards"
          style={{ width: "100%", height: "100%" }}
          className=" object-contain "
        />
        <Image
          src={"/images/cash.svg"}
          width={0}
          height={0}
          sizes="100vw"
          alt="cash"
          style={{ width: "100%", height: "100%" }}
          className=" object-cover w-full absolute  bottom-[-50%] left-[2%]"
        />
      </span>
      <h2 className="w-[91px] h-[27px] text-[#1c471f] text-2xl font-bold font-['Inter'] leading-7 mt-6 mb-[14px]">
        Fintech
      </h2>
      <p className="w-[173.78px] h-[36.94px] text-[#1c471f] text-sm font-medium font-['Inter'] leading-[18.95px]">
        We build fintech mobile and web applications
      </p>
    </div>
  );
};

export default FintechCard;
