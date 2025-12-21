"use client";
import React from "react";
import TeamItem from "./TeamItem";
import { GoArrowUpRight } from "react-icons/go";

const teamMembers = [
  {
    name: "Favour",
    surname: "Etunwoke",
    role: "Senior Software Engineer/Founder",
    image: "/images/favour.jpg",
  },
  {
    name: "Uche",
    surname: "Jacob",
    role: "CTO/ Co-founder",
    image: "/images/uche.jpg",
  },
  {
    name: "Timothy",
    surname: "Ilegbusi",
    role: "UI/UX Designer",
    image: "/images/Timothy.jpg",
  },
  {
    name: "Igbagbo",
    surname: "Olaleye",
    role: "Lead Frontend Developer",
    image: "/images/igee.jpg",
  },
  {
    name: "Jesutoni",
    surname: "Aderibigbe",
    role: "Lead Mobile Engineer",
    image: "/images/toni.jpg",
  },
  {
    name: "Blessed",
    surname: "Oscar",
    role: "Lead Backend Engineer",
    image: "/images/oscar.jpg",
  },
  {
    name: "Uzoma",
    surname: "Ike",
    role: "AI/ML Engineer",
    image: "/images/uzor.jpg",
  },
];

const SectionSix = () => {
  const allTeamMembers = [...teamMembers, ...teamMembers];

  return (
    <section className="w-full flex flex-col items-center pb-40 overflow-hidden">
      <div className="w-full max-w-max mx-auto flex flex-wrap justify-between px-6 lg:px-0">
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

      <div className="w-full max-w-[1200px] mx-auto mt-14 overflow-hidden px-4 md:px-0">
        <div className="marquee-container py-10">
          <div className="marquee-content marquee-slow gap-8">
            {allTeamMembers.map((member, index) => (
              <TeamItem
                key={index}
                name={member.name}
                surname={member.surname}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
      <button className="h-[72px] w-fit mt-10 pl-12 pr-8 py-5 bg-[#161616] rounded-[36px] justify-start items-center gap-[20px] inline-flex pop-hover-btn">
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
