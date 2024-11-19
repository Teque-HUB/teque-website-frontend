import Image from "next/image";
import React from "react";

const ItemCard: React.FC<{ text: string; heading: string; icon: string }> = ({
  text,
  heading,
  icon,
}) => {
  return (
    <div className="w-[360px] h-[348px] relative bg-white rounded-[22px] shadow-[0px_13px_100px_0px_rgba(199,199,199,0.25)]">
      <div className="h-10 pr-[72.65px] left-[40px] top-[160px] absolute flex-col justify-start items-start inline-flex">
        <div className="text-black text-2xl font-semibold font-['Sora'] leading-10">
          {heading}
        </div>
      </div>
      <div className="h-[84.25px] pr-[24.47px] pb-[0.25px] left-[40px] top-[216px] absolute flex-col justify-start items-start inline-flex">
        <div className="text-black text-base font-normal font-['Inter'] leading-7">
          {text}
        </div>
      </div>
      <div className="w-20 h-20 left-[40px] top-[47px] absolute">
        <Image
          src={`/logos/${icon}.svg`}
          height={0}
          width={0}
          style={{ width: "100%", height: "100%" }}
          sizes="100vw"
          alt={icon}
        />
      </div>
    </div>
  );
};

export default ItemCard;
