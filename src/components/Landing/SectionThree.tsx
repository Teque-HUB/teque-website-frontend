import React from "react";
import WebThreeCard from "./WebThreeCard";
import SchedulingCard from "./SchedulingCard";
import FintechCard from "./FintechCard";
import MessagingCard from "./MessagingCard";
import EcommerceCard from "./EcommerceCard";
import WebappCard from "./WebappCard";

const SectionThree = () => {
  return (
    <section className="flex justify-center items-center flex-col w-full max-w-max mx-auto">
      <h1 className="text-center text-[#333333] text-5xl font-bold font-['Sora'] leading-[64px]">
        Spectrum of
        <br />
        Products we Build
      </h1>

      <div className="mt-[60px] w-full flex flex-col justify-center gap-6">
        <div className="w-full flex gap-6 justify-center">
          <WebThreeCard />
          <div className="w-full flex flex-col gap-6  max-w-[540px]">
            <SchedulingCard />
            <div className="w-full flex gap-6 h-full">
              <FintechCard />
              <MessagingCard />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center gap-6">
          <EcommerceCard />
          <WebappCard />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
