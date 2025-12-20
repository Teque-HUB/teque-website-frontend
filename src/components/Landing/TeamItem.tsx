import React from "react";

interface TeamItemProps {
  name: string;
  surname: string;
  role: string;
  image: string;
}

const TeamItem: React.FC<TeamItemProps> = ({ name, surname, role, image }) => {
  return (
    <div
      className="bg-[#212121] p-[35px] pb-0 rounded-[32px] w-[350px] md:w-[370px] h-[480px] pop-hover flex flex-col justify-end flex-shrink-0"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl mb-4">
        <h2>
          <span className="text-[#96fc04] text-[32px] font-normal font-['Sora'] leading-[38.40px]">
            {name}
            <br />
          </span>
          <span className="text-white text-[32px] font-normal font-['Sora'] leading-[38.40px]">
            {surname}
          </span>
          <span className="text-[#96fc04] text-[32px] font-normal font-['Sora'] leading-[38.40px]">
            .
          </span>
        </h2>
        <p className="text-white text-base font-normal font-['Sora'] leading-tight mt-1">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamItem;
