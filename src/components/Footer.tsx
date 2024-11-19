import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1B1D20] pt-[70px] px-[34px] pb-[64px]">
      <div className="flex justify-between w-full max-w-max mx-auto gap-[58px]">
        <div>
          <h1 className="text-white text-right text-[110px] font-bold font-['Clash Display'] leading-[110px] tracking-[2.2px]">
            Let’s Work <br /> Together
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          <p className="w-[558px] text-white text-2xl font-normal font-['Sora'] leading-[33.60px]">
            Contact us to build the best posible user friendly applications and
            websites for you. lets us help you create good identities for your
            brands.
          </p>
          <button className="h-[71px] px-[57px] py-[21px] w-fit bg-[#caef45] rounded-[100px] border justify-center items-center gap-2.5 inline-flex">
            <span className="text-right text-[#1b1d20] text-2xl font-bold font-['Aeonik']">
              Contact Now
            </span>
          </button>
        </div>
      </div>

      <div className="mt-[140px] flex justify-between w-full max-w-max mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="text-[#caef45] text-4xl font-normal font-['Sora'] leading-9">
            TEQUE
          </h2>
          <div className="flex gap-5">
            <span className="inline-flex p-1 bg-white rounded-full text-black">
              <FaInstagram />
            </span>
            <span className="inline-flex p-1 bg-white rounded-full text-black">
              <FaTwitter />
            </span>
            <span className="inline-flex p-1 bg-white rounded-full text-black">
              <FaFacebook />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-white text-3xl font-medium font-['Clash Display'] leading-9">
            Address
          </h2>
          <p className="w-[233px] text-white text-[22px] font-['Aeonik'] leading-[30px]">
            356, road - 3, NewYork, United State
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-white text-3xl font-medium font-['Clash Display'] leading-9">
            Call Us
          </h2>
          <p className="text-white text-[22px] font-['Aeonik'] leading-[60px]">
            +0123 57896857
            <br />
            +0123 57896857
            <br />
            xyzfreebook@gmail.com
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-white text-3xl font-medium font-['Clash Display'] leading-9">
            Our Policies
          </h2>
          <p className="text-white text-[22px] font-['Aeonik'] leading-[60px]">
            Privacy Policies
            <br />
            Terms of use
            <br />
            Refund Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
