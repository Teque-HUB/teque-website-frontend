import React from "react";
import TeamItem from "./TeamItem";
import { GoArrowUpRight } from "react-icons/go";

const SectionSix = () => {
  return (
    <section className="w-full max-w-max mx-auto flex flex-col px-6 lg:px-0 items-center pb-40">
      <div className="w-full flex flex-wrap justify-between">
        <h1 className="flex justify-center w-full lg:w-fit">
          <span className="text-[#212121]  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Satoshi Variable'] leading-[57.60px]">
            Meet the team
          </span>
          <span className="text-[#96fc04] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Satoshi Variable'] leading-[57.60px]">
            .
          </span>
        </h1>
        <p className="lg:w-[630px] text-center lg:text-justify text-[#212121] text-base md:text-xl lg:text-2xl font-normal font-['Sora'] lg:leading-[33.60px]">
          Our team brings Years of Experience in web development and design in
          building your projects.
        </p>
      </div>
      <div className="w-full overflow-x-scroll flex gap-8 mt-14 lg:justify-center">
        <TeamItem />
        <TeamItem />
        <TeamItem />
      </div>
      <button className="h-[72px] w-fit mt-10 pl-12 pr-8 py-5 bg-[#161616] rounded-[36px] justify-start items-center gap-[20px] inline-flex">
        <span className=" text-white text-base font-normal font-['Inter'] uppercase leading-loose tracking-wider">
          Join our team
        </span>
        <span>
          <GoArrowUpRight color="white" size={22} />
        </span>
      </button>
    </section>
  );
};

export default SectionSix;
