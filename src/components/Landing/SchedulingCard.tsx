import Image from "next/image";
import React from "react";

const SchedulingCard = () => {
  return (
    <div className=" flex justify-between bg-[#F682A5] rounded-[32px] pb-6 w-full gap-[50px]">
      <div className="flex flex-col gap-5 justify-end pl-6 w-full max-w-[261px]">
        <h2 className="w-[130.43px] h-[27px] text-[#52225e] text-2xl font-bold font-['Inter'] leading-7">
          Scheduling
        </h2>
        <p className="text-[#52225e] text-sm font-medium font-['Inter'] leading-tight">
          Scheduling Applications for work
        </p>
      </div>
      <div className="w-full relative h-full translate-y-[-5%]">
        <span className="absolute h-full inline-flex w-full max-w-[212px] top-0 left-[-40%]">
          <Image
            src={"/images/birthday.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt="calendar"
            style={{ width: "100%", height: "100%" }}
            className=" object-cover "
          />
        </span>
        <span className="inline-flex relative z-10 w-full  max-w-[217px]">
          <Image
            src={"/images/calendar.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt="calendar"
            style={{ width: "100%", height: "100%" }}
          />
        </span>
      </div>
    </div>
  );
};

export default SchedulingCard;
