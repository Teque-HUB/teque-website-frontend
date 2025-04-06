"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const navLinks = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Blog",
    path: "/blog",
  },
  {
    text: "Employees",
    path: "/employees",
  },
];

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <nav className="relative px-6 xl:px-0">
      <div className="flex items-center justify-between gap-4 w-full max-w-[1300px] mx-auto">
        <div className="w-full max-w-[80px] md:max-w-[120px] lg:max-w-[184px] ">
          <Image
            src={"/logo.jpg"}
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="logo"
            className="object-cover"
          />
        </div>
        <div
          className={`absolute z-[2] w-full lg:w-auto bg-white px-6 lg:px-0 pb-12 lg:pb-0 flex-col lg:flex-row top-full left-0 lg:relative  gap-14 lg:gap-[68px] items-center  ${
            isMenu ? "flex" : "zr:hidden lg:flex"
          } `}
        >
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-[#212121] hover:border-b-2 border-[#212121] text-[20px] font-poppins font-medium"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 md:gap-8 lg:gap-10">
          <button className="zr:hidden mb:flex items-center justify-center w-[120px] sm:w-[150px] md:w-[200px] lg:w-[223px] h-[40px] md:h-[50px] lg:h-[60px] bg-[#E7E6E6] rounded-[8px] md:rounded-[12px] lg:rounded-[15px]">
            <span className="text-center text-[#161616] text-sm sm:text-base md:text-[18px] lg:text-[20px] font-poppins font-[600]">
              Join Us
            </span>
          </button>
          <button className="zr:hidden mb:flex items-center justify-center w-[120px] sm:w-[150px] md:w-[200px] lg:w-[223px]  h-[40px] md:h-[50px] lg:h-[60px] bg-[#161616] rounded-[8px] md:rounded-[12px] lg:rounded-[15px]">
            <span className="text-center text-[#ffffff] text-sm sm:text-base md:text-[18px] lg:text-[20px] font-poppins font-[600]">
              Meet with Us
            </span>
          </button>
          <button
            onClick={() => setIsMenu((prev) => !prev)}
            className="text-[40px] flex lg:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
