import React from "react";

const TerminalCard = ({ children }) => {
  return (
    <div className="">
      <div className="bg-slate-50 flex gap-2 pl-2 rounded-t-2xl p-1">
        <div className="bg-red-600 rounded-full aspect-square w-[1rem]"></div>
        <div className="bg-yellow-400 rounded-full aspect-square w-[1rem]"></div>
        <div className="bg-green-500 rounded-full aspect-square w-[1rem]"></div>
      </div>
      <div className="bg-black opacity-80 p-4 rounded-b-2xl">{children}</div>
    </div>
  );
};

export default TerminalCard;
