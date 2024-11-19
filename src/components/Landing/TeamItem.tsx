import React from "react";

const TeamItem = () => {
  return (
    <div
      className="bg-[#212121] p-[35px] pb-0 rounded-[32px] h-[400px] w-full max-w-[302px]"
      style={{
        backgroundImage: "url(/images/person.png)",
        backgroundSize: "cover",
      }}
    >
      <h2>
        <span className="text-[#96fc04] text-[32px] font-normal font-['Sora'] leading-[38.40px]">
          Timothy
          <br />
        </span>
        <span className="text-white text-[32px] font-normal font-['Sora'] leading-[38.40px]">
          Ilegbusi
        </span>
        <span className="text-[#96fc04] text-[32px] font-normal font-['Sora'] leading-[38.40px]">
          .
        </span>
      </h2>
      <p className="text-white text-base font-normal font-['Sora'] leading-tight mt-2.5">
        UI/UX Designer
      </p>
    </div>
  );
};

export default TeamItem;
