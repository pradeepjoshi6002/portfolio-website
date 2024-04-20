import React from "react";
import TerminalCard from "./TerminalCard";
const Banner = () => {
  return (
    <div className="relative bg-banner-img h-screen bg-center bg-cover md:bg-top">
      <div className="text-white text-7xl font-bold absolute left-[5vw] top-[20%]">
        <TerminalCard>
          <div className="w-[80vw] md:w-fit">Pradeep Joshi</div>
          <div className="text-3xl font-semibold">
            a <span className="text-yellow-400">software</span> developer
          </div>
        </TerminalCard>
      </div>

      <div className="text-white text-2xl font-bold absolute right-[5vw] top-[60%]">
        <TerminalCard>
          <div className="text-4xl">
            MSIT,<span className="uppercase text-yellow-400">ggsipu</span>
          </div>
          <div className="text-yellow-400">New Delhi</div>
          <div>2021-25</div>
          <div>Information Technology</div>
        </TerminalCard>
      </div>
    </div>
  );
};

export default Banner;
