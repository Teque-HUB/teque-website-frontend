import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <nav className="">
      <div className="flex items-center justify-between w-full max-w-[1300px] mx-auto">
        <div className=" ">
          <Image
            src={"/logo.jpg"}
            height={166}
            width={184}
            alt="logo"
            className="object-cover"
          />
        </div>
        <div className="flex gap-[68px] items-center">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-[#212121] text-[20px] font-poppins font-medium"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-10">
          <button className="w-[223px] h-[60px] bg-[#E7E6E6] rounded-[15px]">
            <span className="text-center text-[#161616] text-[20px] font-poppins font-[600]">
              Join Us
            </span>
          </button>
          <button className="w-[223px] h-[60px] bg-[#161616] rounded-[15px]">
            <span className="text-center text-[#ffffff] text-[20px] font-poppins font-[600]">
              Meet with Us
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
