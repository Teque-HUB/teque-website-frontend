import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="pb-40">
      <div className="w-full max-w-max mx-auto mt-10 flex ">
        <div className="relative w-full max-w-[783px]">
          <Image
            src={"/images/banner.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ height: "100%", width: "100%" }}
            className="w-full max-w-[783px]"
            alt="banner"
          />
          <h1 className="text-[#161616] text-[64px] font-semibold font-['Poppins'] absolute right-[-60%] top-0">
            we offer the best creative
          </h1>
          <h1 className="text-[#161616] text-[64px] font-semibold font-['Poppins'] absolute right-[-43%] top-[15%]">
            solution for you
          </h1>
        </div>
        <div className="pt-[200px]">
          <h1 className="text-[#161616] pl-4 text-[64px] font-semibold font-['Poppins']">
            through Tech.
          </h1>
          <p className="text-[#333333] pl-4 mt-10 text-lg font-normal font-['Poppins']">
            We help bring your mind to live by providing you
            <br />
            with our best technology services. we help create
            <br />
            the solution to your innovative idea with Tech.
          </p>
          <div className="mt-[56px] flex gap-10">
            <button className="w-[223px] h-[60px] bg-[#e6e5e5] rounded-[15px]">
              <span className="text-center text-[#161616] text-xl font-semibold font-['Poppins']">
                Learn more
              </span>
            </button>
            <button className="w-[223px] h-[60px] bg-[#161616] rounded-[15px]">
              <span className="text-center text-white text-xl font-semibold font-['Poppins']">
                Meet with Us
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-end mt-[90px] w-full max-w-max mx-auto">
        <button className="w-[246px] h-[60px] bg-[#e6e5e5] rounded-[15px] flex gap-5 items-center justify-center">
          <span className="w-full max-w-[45px]">
            <Image
              src={"/logos/data.svg"}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              sizes="100vw"
              alt="data"
            />
          </span>
          <span className="text-[#333333] text-lg font-normal font-['Poppins']">
            Data Analysis
          </span>
        </button>
        <button className="w-[246px] h-[60px] bg-[#e6e5e5] rounded-[15px] flex gap-5 items-center justify-center">
          <span className="w-full max-w-[45px]">
            <Image
              src={"/logos/graphics.svg"}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              sizes="100vw"
              alt="data"
            />
          </span>
          <span className="text-[#333333] text-lg font-normal font-['Poppins']">
            Graphics Design
          </span>
        </button>
        <button className="w-[246px] h-[60px] bg-[#161616] rounded-[15px] flex gap-5 items-center justify-center">
          <span className="w-full max-w-[40px]">
            <Image
              src={"/logos/uiux.svg"}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              sizes="100vw"
              alt="data"
            />
          </span>
          <span className="text-[#ffffff] text-lg font-normal font-['Poppins']">
            UI/UX Design
          </span>
        </button>
        <button className="w-[246px] h-[60px] bg-[#e6e5e5] rounded-[15px] flex gap-2 items-center justify-center">
          <span className="w-full max-w-[45px]">
            <Image
              src={"/logos/web.svg"}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              sizes="100vw"
              alt="data"
            />
          </span>
          <span className="text-[#333333] text-lg font-normal font-['Poppins']">
            Web Development
          </span>
        </button>
      </div>
    </section>
  );
};

export default Banner;
