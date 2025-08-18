"use client";
import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useDisclosure } from "../hooks/useDisclosure";
import MeetWithUsModal from "./components/MeetWithUsModal";

const page = () => {
  const meetWithUsModal = useDisclosure();

  return (
    <section className="flex flex-col items-center px-6 xl:px-0 ">
      <h1 className="md:w-[760px] mt-20 mx-auto text-center justify-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-['Sora'] md:leading-[66px]">
        Want to hire an IT team for all your Projects? come to us!
      </h1>
      <p className="md:w-[634px] mx-auto mt-5 text-center justify-center text-black text-base md:text-lg font-normal font-['Cabin'] leading-relaxed">
        Teque provides you with the best & experienced IT brains and personnel
        to help build your desired project or help solve your specific problem.
      </p>

      <button
        onClick={meetWithUsModal.open}
        className="w-44 h-12 mt-14 mx-auto relative bg-neutral-800 border border-neutral-800 text-white  hover:text-neutral-800  hover:bg-white rounded-[48px]"
      >
        <span className="left-[28px] top-[12px] absolute justify-center text-base font-medium font-['Cabin'] leading-normal">
          Get Your IT Team
        </span>
      </button>

      <div className="relative mt-20">
        <Image
          width={640}
          height={384}
          alt="meet with us"
          src={"/images/meetwithus.png"}
        />

        <div className="hidden md:flex w-60 h-20  rounded-xl flex-col gap-2 absolute -right-40 top-10">
          <p className="justify-center text-black text-base font-medium font-['DM_Sans'] leading-none">
            Projects this week
          </p>
          <p className="justify-center text-blue-500 text-3xl font-semibold font-['Sora'] leading-loose">
            1,200
          </p>
        </div>

        <div className="hidden md:flex absolute -left-40 bottom-10 items-center w-80 h-12 bg-white rounded-xl">
          <div className="inline-flex justify-start items-center gap-3">
            <span className="">
              <FaCircleCheck />
            </span>
            <div className="justify-center text-black text-base font-medium font-['DM_Sans'] leading-none">
              Project successfully completed
            </div>
          </div>
        </div>
      </div>

      {meetWithUsModal.isOpen && <MeetWithUsModal modal={meetWithUsModal} />}
    </section>
  );
};

export default page;
