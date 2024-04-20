import React from "react";
import bannerImg from "../../public/images/banner.jpg";
const Banner = () => {
  return (
    <div className="relative bg-banner-img h-screen bg-center bg-cover md:bg-top">
      {/* <img src={bannerImg} className="bg-cover" /> */}
      <div className="text-white text-7xl font-bold absolute left-[5vw] top-[20%]">
        <div>Pradeep Joshi</div>
        <div className="text-3xl font-semibold">
          a <span className="text-yellow-400">software</span> developer
        </div>
      </div>
      <div className="text-white text-4xl font-bold absolute right-[5vw] top-[60%]">
        <div>
          <span className="">MSIT</span>
          <span className="uppercase text-yellow-400">,ggsipu</span>
        </div>
        <div className="text-yellow-400 text-2xl">New Delhi</div>
        <div className="text-2xl">2021-25</div>
        <div className="text-2xl">Information Technology</div>
      </div>
    </div>
  );
};

export default Banner;
