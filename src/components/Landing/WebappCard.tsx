import Image from "next/image";
import React from "react";

const WebappCard = () => {
  return (
    <div className="w-full lg:max-w-[258px] bg-[#B8CEDC] rounded-[32px] p-[26px] pb-0 pr-0 flex flex-col justify-between">
      <div className="flex flex-col">
        <h2 className=" h-[27px] text-[#1c471f] text-2xl font-bold font-['Inter'] leading-7  mb-[14px]">
          WEb 2 Apps
        </h2>
        <p className="w-[173.78px] h-[36.94px] text-[#1c471f] text-sm font-medium font-['Inter'] leading-[18.95px]">
          We build all forms of web 2 Apps.
        </p>
      </div>
      <span className="relative inline-flex justify-end  w-full   ">
        {" "}
        <Image
          src={"/images/notification.png"}
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

export default WebappCard;
