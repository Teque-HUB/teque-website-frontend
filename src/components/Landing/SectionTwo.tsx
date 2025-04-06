import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import ItemCard from "./ItemCard";

const SectionTwo = () => {
  return (
    <section className="w-full max-w-max mx-auto px-6 xl:px-0 pb-24">
      <div className="flex flex-wrap gap-10">
        <div className="bg-[#000000] min-h-[307px] flex flex-col justify-between w-full max-w-[760px] py-[48px] px-8 sm:px-10 md:px-12 lg:px-14 rounded-[22px] shadow-[0px_13px_100px_0px_rgba(199,199,199,0.25)]">
          <h1 className="lg:w-[634px] text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Sora'] leading-[64px]">
            IT Company that handles
            <br />
            everything.
          </h1>
          <button className="h-[72px] mt-10 pl-12 pr-8 py-5 w-fit bg-[#caef45] rounded-[36px] justify-start items-center gap-[0px] inline-flex">
            <span className="w-[159px] text-black text-base font-normal font-['Inter'] uppercase leading-loose tracking-wider">
              Work with Us
            </span>
            <span>
              <GoArrowUpRight size={22} />
            </span>
          </button>
        </div>
        <ItemCard
          text="We provide the best designs both in its outlook and user experience for your projects."
          heading="UI/UX Design"
          icon="uiuxbig"
        />
      </div>
      <div className="flex flex-wrap gap-10 mt-10">
        <ItemCard
          text="We help to build your websites and applications the best possible way & we engineer all your bugs"
          heading="Web Development"
          icon="webbig"
        />
        <ItemCard
          text="We give advice from our pool of experienced and brilliant IT personnel on IT issues"
          heading="IT Consultancy"
          icon="itbig"
        />
        <ItemCard
          text="We help design fliers, E-fliers, posters, billboards and brand identities for your products."
          heading="Graphics Design"
          icon="graphicsbig"
        />
      </div>
    </section>
  );
};

export default SectionTwo;
