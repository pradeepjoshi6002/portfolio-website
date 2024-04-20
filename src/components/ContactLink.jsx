import React from "react";
import { Link } from "react-router-dom";
import { socialMedia } from "../utils/socialMedia";
const ContactLink = ({ toLink, children }) => {
  return (
    <Link to={toLink} target="_blank">
      <div className="rounded-full bg-white w-[90vw] md:w-[30vw] h-[3rem] flex justify-center items-center relative font-semibold text-lg shadow-xl">
        <img
          src={socialMedia[children]}
          className="rounded-full aspect-square h-[2.5rem] absolute left-2"
          alt="platform icon"
        />
        {children}
      </div>
    </Link>
  );
};

export default ContactLink;
