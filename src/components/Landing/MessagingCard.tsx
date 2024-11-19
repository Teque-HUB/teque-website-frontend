import Image from "next/image";
import React from "react";

const MessagingCard = () => {
  return (
    <div className="w-full bg-[#FEDF6F] rounded-[32px] p-[26px] pb-0 flex flex-col justify-between">
      <div className="flex flex-col">
        <h2 className="w-[91px] h-[27px] text-[#1c471f] text-2xl font-bold font-['Inter'] leading-7  mb-[14px]">
          Fintech
        </h2>
        <p className="w-[173.78px] h-[36.94px] text-[#1c471f] text-sm font-medium font-['Inter'] leading-[18.95px]">
          We build fintech mobile and web applications
        </p>
      </div>
      <span className="relative inline-flex w-full max-w-[206px]  ">
        {" "}
        <Image
          src={"/images/messaging.png"}
          width={0}
          height={0}
          sizes="100vw"
          alt="fintechcards"
          style={{ width: "100%", height: "100%" }}
          className=" object-contain "
        />
      </span>
    </div>
  );
};

export default MessagingCard;
