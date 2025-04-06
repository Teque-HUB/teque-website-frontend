import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="pb-40 px-6 xl:px-0">
      <div className="w-full max-w-max mx-auto mt-10 flex flex-col-reverse gap-10 lg:flex-row ">
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
          <h1 className="zr:hidden lg:flex text-[#161616] text-[64px] font-semibold font-['Poppins'] absolute right-[-470px] top-0">
            we offer the best creative
          </h1>
          <h1 className="zr:hidden lg:flex text-[#161616] text-[64px] font-semibold font-['Poppins'] absolute right-[-350px] top-[15%]">
            solution for you
          </h1>
        </div>
        <div className="lg:pt-[200px]">
          <h1 className="lg:hidden zr:flex text-[32px] sm:text-[40px]  md:text-[50px] lg:text-[64px] font-semibold font-['Poppins']">
            We offer the best creative solution for you through Tech.
          </h1>
          <h1 className="zr:hidden lg:flex text-[#161616] pl-4 text-[64px] font-semibold font-['Poppins']">
            through Tech.
          </h1>
          <p className="text-[#333333] lg:pl-4 mt-7 md:mt-10 text-base md:text-lg font-normal font-['Poppins']">
            We help bring your mind to live by providing you
            <br />
            with our best technology services. we help create
            <br />
            the solution to your innovative idea with Tech.
          </p>
          <div className="mt-[56px] flex gap-10">
            <button className="w-[150px] md:w-[200px] lg:w-[223px] h-[60px] bg-[#e6e5e5] rounded-[10px] md:rounded-[12px] lg:rounded-[15px]">
              <span className="text-center text-[#161616] text-base md:text-lg lg:text-xl font-semibold font-['Poppins']">
                Learn more
              </span>
            </button>
            <button className="w-[150px] md:w-[200px] lg:w-[223px] h-[60px] bg-[#161616] rounded-[10px] md:rounded-[12px] lg:rounded-[15px]">
              <span className="text-center text-white text-base md:text-lg lg:text-xl font-semibold font-['Poppins']">
                Meet with Us
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-scroll flex gap-6 lg:justify-end mt-[90px] w-full max-w-max mx-auto">
        <button className="min-w-[174px] lg:w-[246px] h-[60px] bg-[#e6e5e5] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] flex gap-2 md:gap-5 items-center justify-center">
          <span className="w-full max-w-[25px] md:max-w-[30px] lg:max-w-[45px]">
            <Image
              src={"/logos/data.svg"}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              sizes="100vw"
              alt="data"
            />
          </span>
          <span className="text-[#333333] text-base md:text-lg font-normal font-['Poppins']">
            Data Analysis
          </span>
        </button>
        <button className="min-w-[174px] lg:w-[246px] h-[60px] bg-[#e6e5e5] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] flex gap-2 md:gap-5 items-center justify-center">
          <span className="w-full max-w-[25px] md:max-w-[30px] lg:max-w-[45px]">
            <Image
              src={"/logos/graphics.svg"}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              sizes="100vw"
              alt="data"
            />
          </span>
          <span className="text-[#333333] text-base md:text-lg font-normal font-['Poppins']">
            Graphics Design
          </span>
        </button>
        <button className="min-w-[174px] lg:w-[246px] h-[60px] bg-[#161616] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] flex gap-2 md:gap-5 items-center justify-center">
          <span className="w-full max-w-[25px] md:max-w-[30px] lg:max-w-[40px]">
            <Image
              src={"/logos/uiux.svg"}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              sizes="100vw"
              alt="data"
            />
          </span>
          <span className="text-[#ffffff] text-base md:text-lg font-normal font-['Poppins']">
            UI/UX Design
          </span>
        </button>
        <button className="min-w-[194px] lg:w-[246px] h-[60px] bg-[#e6e5e5] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] flex gap-2 md:gap-2 items-center justify-center">
          <span className="w-full max-w-[25px] md:max-w-[30px] lg:max-w-[45px]">
            <Image
              src={"/logos/web.svg"}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              sizes="100vw"
              alt="data"
            />
          </span>
          <span className="text-[#333333] text-base md:text-lg font-normal font-['Poppins']">
            Web Development
          </span>
        </button>
      </div>
    </section>
  );
};

export default Banner;
