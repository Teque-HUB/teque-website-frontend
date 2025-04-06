import Image from "next/image";
import React from "react";

const ItemCard: React.FC<{ text: string; heading: string; icon: string }> = ({
  text,
  heading,
  icon,
}) => {
  return (
    <div className="w-full lg:w-[360px] min-h-[348px] flex flex-col py-8 md:py-10 lg:py-12 px-6 md:px-8 lg:px-10 relative bg-white rounded-[22px] shadow-[0px_13px_100px_0px_rgba(199,199,199,0.25)]">
      <div className="w-20 h-20 ">
        <Image
          src={`/logos/${icon}.svg`}
          height={0}
          width={0}
          style={{ width: "100%", height: "100%" }}
          sizes="100vw"
          alt={icon}
        />
      </div>
      <div className="h-10  mt-[32px] mb-4 flex-col justify-start items-start inline-flex">
        <div className="text-black text-2xl font-semibold font-['Sora'] leading-10">
          {heading}
        </div>
      </div>
      <div className="h-[84.25px]  pb-[0.25px]  flex-col justify-start items-start inline-flex">
        <div className="text-black text-base font-normal font-['Inter'] leading-7">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
