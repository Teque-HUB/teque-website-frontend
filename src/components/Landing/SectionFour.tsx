import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const SectionFour = () => {
  return (
    <section className="mt-24 pb-24 w-full max-w-max mx-auto flex flex-col items-center">
      <h1 className="text-center text-[#333333] text-5xl font-bold font-['Sora'] leading-[64px]">
        Products we have built
      </h1>
      <p className="text-center text-[#333333] text-lg font-normal font-['Poppins'] leading-tight">
        We are responsible to creating some amazing products for our clients
        <br />
        in various parts of the world.
      </p>

      <div className="mt-11 flex gap-3">
        <div className="w-full max-w-[630px] bg-[#0077F9] rounded-[30px] p-[50px]">
          <span className="inline-flex h-full max-h-[60px] w-full max-w-[186px]">
            <Image
              src={"/images/urunner.svg"}
              height={0}
              width={0}
              alt="urunner"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </span>

          <p className="w-[530px] mt-5 mb-11 text-white text-base font-normal font-['Inter'] leading-7">
            Website and Mobile aplication for gaining coins through exercise for
            purchasing goods and services. US based Company
          </p>

          <span className="inline-flex w-full max-w-[530px]">
            <Image
              src={"/images/urunner.png"}
              height={0}
              width={0}
              alt="urunner"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </span>
        </div>
        <div className="w-full max-w-[630px] bg-[#057953] rounded-[30px] p-[50px]">
          <span className="inline-flex h-full max-h-[60px] w-full max-w-[186px]">
            <Image
              src={"/images/vapzer.svg"}
              height={0}
              width={0}
              alt="vapzer"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </span>

          <p className="w-[530px] mt-5 mb-11 text-white text-base font-normal font-['Inter'] leading-7">
            Web and Mobile application for online financial trading and tracking
            in Forex, Stocks, Shares, Futures, Bonds and so on.
          </p>

          <span className="inline-flex w-full max-w-[664px]">
            <Image
              src={"/images/vapzer.png"}
              height={0}
              width={0}
              alt="urunner"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className="object-cover "
            />
          </span>
        </div>
      </div>

      <button className="h-[72px] w-fit mt-10 pl-12 pr-8 py-5 bg-[#161616] rounded-[36px] justify-start items-center gap-[20px] inline-flex">
        <span className=" text-white text-base font-normal font-['Inter'] uppercase leading-loose tracking-wider">
          Reach out to us
        </span>
        <span>
          <GoArrowUpRight color="white" size={22} />
        </span>
      </button>
    </section>
  );
};

export default SectionFour;
