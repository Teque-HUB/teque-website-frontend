import Image from "next/image";
import React from "react";

const WebThreeCard = () => {
  return (
    <div className="w-full lg:w-fit min-w-[344px] h-[543.93px] py-10 px-5 relative bg-[#c3b2e7] rounded-[32px] flex-col justify-start items-start inline-flex">
      <h2 className="text-[#52225e] text-2xl font-bold font-['Inter'] leading-7">
        Web 3, Forex &<br />
        Cryptocurrency
        <br />
        plaforms
      </h2>

      <div className="flex gap-2 w-full items-end mt-5 h-full  max-h-[262px] ">
        <span className="inline-flex w-full  h-full max-h-[180px]  max-w-[176px]">
          <Image
            src={"/images/wtblue.svg"}
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            className="object-contain"
            alt="blue"
          />
        </span>
        <span className="inline-flex w-full h-full max-h-[220px]  max-w-[240px]">
          <Image
            src={"/images/webthreeblack.svg"}
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="black"
          />
        </span>
      </div>
      <p className="w-[216.98px] h-[55.88px] mt-[67px] text-[#52225e] text-sm font-medium font-['Inter'] leading-[18.95px]">
        We build forex, cryptocurrency and fintech mobile & web application
        using web 3 tech.
      </p>
    </div>
  );
};

export default WebThreeCard;
