"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GiArtificialIntelligence } from "react-icons/gi";

const categories = [
  {
    name: "AI & ML dev",
    icon: <GiArtificialIntelligence />,
  },
  {
    name: "Data Analysis",
    img: "/logos/data.svg",
  },
  {
    name: "Graphics Design",
    img: "/logos/graphics.svg",
  },
  {
    name: "UI/UX Design",
    img: "/logos/uiux.svg",
  },
  {
    name: "Web Development",
    img: "/logos/web.svg",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    let animationFrameId: number;

    const checkCenter = () => {
      if (itemRefs.current.length === 0) return;

      const viewportCenter = window.innerWidth / 2;
      let closestIndex = -1;
      let minDistance = Infinity;

      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(viewportCenter - itemCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      // Only highlight if it's reasonably close to the center
      if (minDistance < 200) {
        setActiveIndex(closestIndex);
      } else {
        setActiveIndex(null);
      }

      animationFrameId = requestAnimationFrame(checkCenter);
    };

    animationFrameId = requestAnimationFrame(checkCenter);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const allCategories = [...categories, ...categories];

  return (
    <section className="pb-40 px-6 xl:px-0">
      <div className="w-full max-w-max mx-auto mt-10 flex flex-col-reverse gap-10 lg:flex-row ">
        <div className="relative w-full max-w-[783px] pop-hover">
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
            <button className="w-[150px] md:w-[200px] lg:w-[223px] h-[60px] bg-[#e6e5e5] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] pop-hover-btn">
              <span className="text-center text-[#161616] text-base md:text-lg lg:text-xl font-semibold font-['Poppins']">
                Learn more
              </span>
            </button>
            <button className="w-[150px] md:w-[200px] lg:w-[223px] h-[60px] bg-[#161616] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] pop-hover-btn">
              <span className="text-center text-white text-base md:text-lg lg:text-xl font-semibold font-['Poppins']">
                Meet with Us
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="marquee-container mt-[90px]">
        <div className="marquee-content pt-4 pb-4">
          {allCategories.map((category, index) => {
            const isHighlighted = activeIndex === index;
            return (
              <button
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`min-w-[174px] lg:w-[246px] h-[60px] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] flex gap-2 md:gap-5 items-center justify-center flex-shrink-0 transition-all duration-300 group ${isHighlighted ? "bg-[#161616] scale-105 z-10 shadow-lg" : "bg-[#e6e5e5] hover:bg-[#161616] hover:scale-110 hover:shadow-2xl hover:z-20"
                  }`}
              >
                <span className={`transition-colors duration-300 ${isHighlighted ? "text-white" : "group-hover:text-white"}`}>
                  {category.icon ? (
                    <span className="text-[40px]">{category.icon}</span>
                  ) : (
                    <span className="w-full max-w-[25px] md:max-w-[30px] lg:max-w-[45px]">
                      <Image
                        src={category.img!}
                        width={0}
                        height={0}
                        style={{
                          width: "100%",
                          height: "100%",
                          filter: isHighlighted ? 'brightness(0) invert(1)' : 'inherit'
                        }}
                        className={`transition-all duration-300 ${isHighlighted ? '' : 'group-hover:filter group-hover:brightness-0 group-hover:invert'}`}
                        sizes="100vw"
                        alt={category.name}
                      />
                    </span>
                  )}
                </span>
                <span
                  className={`text-base md:text-lg font-normal font-['Poppins'] transition-colors duration-300 ${isHighlighted ? "text-[#ffffff]" : "text-[#333333] group-hover:text-white"
                    }`}
                >
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banner;
