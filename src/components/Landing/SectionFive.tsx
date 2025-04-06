import Image from "next/image";
import React from "react";

const SectionFive = () => {
  return (
    <section className="w-full max-w-max mx-auto px-6 xl:px-0 flex flex-col items-center">
      <h1 className="text-center text-[#202020] text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-black font-['Urbanist'] lg:leading-[86.25px]">
        Where we are
      </h1>
      <p className="lg:w-[710px] text-center text-[#202020]/80 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-['Urbanist'] lg:leading-loose">
        We can deliver your project from wherever you are
      </p>

      <span className="relative inline-flex justify-end  w-full  mt-[50px] ">
        {" "}
        <Image
          src={"/images/map.svg"}
          width={0}
          height={0}
          sizes="100vw"
          alt="map"
          style={{ width: "100%", height: "100%" }}
          className=" object-contain "
        />
      </span>
    </section>
  );
};

export default SectionFive;
